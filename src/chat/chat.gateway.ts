import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

export interface ChatMessage {
  id: string;
  text: string;
  isSentByUser: boolean;
}

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    { room_id }: { room_id: string },
  ) {
    console.log(`Client ${client.id} joined room: ${room_id}`);
    client.join(room_id);

    // 해당 채팅방의 기존 메시지를 클라이언트에 전송
    const messages = await this.chatService.getMessages(room_id);
    client.emit('chatHistory', messages);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(
    client: Socket,
    @MessageBody() payload: { room_id: string; message: ChatMessage },
  ) {
    const { room_id, message } = payload;

    // 메시지를 Redis에 저장
    await this.chatService.saveMessage(room_id, message);

    // 해당 채팅방에 메시지 브로드캐스트
    this.server.to(room_id).emit('newMessage', message);
  }
}
