export enum ViewType {
  CHAT = 'CHAT',
  COMIC = 'COMIC',
}

export interface Character {
  name: string;
  description: string;
  systemInstruction: string;
}

export interface Chapter {
  id: number;
  title: string;
  summary: string;
  characters: Character[];
  comicPrompt: string;
}

export interface Message {
  sender: 'user' | string; // 'user' or character's name
  text: string;
  isThinking?: boolean;
}
