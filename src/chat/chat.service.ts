import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { ChatMessage } from './chat.gateway';

@Injectable()
export class ChatService {
  private redisClient;

  constructor() {
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
    });

    this.redisClient.on('error', (err) => console.error('Redis error:', err));
  }

  async saveMessage(room_id: string, chatMessage: ChatMessage): Promise<void> {
    const key = `room:${room_id}:chat_messages`;
    console.log('saveMessage - room_id : ' + room_id);
    await this.redisClient.rpush(key, JSON.stringify(chatMessage));
  }

  async getMessages(room_id: string): Promise<ChatMessage[]> {
    const key = `room:${room_id}:chat_messages`;
    const messages = await this.redisClient.lrange(key, 0, -1);
    console.log('getMessages - room_id : ' + room_id);
    return messages.map((message) => JSON.parse(message));
  }
}
