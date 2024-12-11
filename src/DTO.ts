export type ChatMessage = {
  id: string;
  text: string;
  isSentByUser: boolean;
};

export interface RoomData {
  room_id: string;
  title: string;
  sub_title: string;
}
