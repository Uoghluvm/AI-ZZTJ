import { GoogleGenAI, Chat } from '@google/genai';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Chapter, Character, Message } from '../types';

interface ChatViewProps {
  chapter: Chapter;
}

export function ChatView({ chapter }: ChatViewProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const initializeChat = useCallback((character: Character) => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: character.systemInstruction,
        },
      });
      setChat(newChat);
      setMessages([
        {
          sender: character.name,
          text: `你好，我是${character.name}。你想了解些什么？`,
        },
      ]);
    } catch (error) {
      console.error('Failed to initialize AI chat:', error);
      setMessages([{ sender: 'system', text: '无法连接到AI服务，请稍后再试。' }]);
    }
  }, []);

  useEffect(() => {
    if (chapter.characters.length > 0) {
      const firstCharacter = chapter.characters[0];
      setSelectedCharacter(firstCharacter);
      initializeChat(firstCharacter);
    }
  }, [chapter, initializeChat]);

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    initializeChat(character);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chat || !selectedCharacter) return;

    const userMessage: Message = { sender: 'user', text: userInput };
    setMessages((prev) => [...prev, userMessage, { sender: selectedCharacter.name, text: '', isThinking: true }]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessageStream({ message: userInput });
      let fullResponseText = '';
      for await (const chunk of response) {
        fullResponseText += chunk.text;
        setMessages((prev) => {
          const newMessages = [...prev];
          const aiMessageIndex = newMessages.findIndex((m) => m.isThinking);
          if (aiMessageIndex !== -1) {
            newMessages[aiMessageIndex] = { ...newMessages[aiMessageIndex], text: fullResponseText };
          }
          return newMessages;
        });
      }
      setMessages((prev) => prev.map((msg) => (msg.isThinking ? { ...msg, isThinking: false } : msg)));
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        sender: selectedCharacter.name,
        text: '抱歉，我暂时无法回复。',
        isThinking: false,
      };
      setMessages((prev) => prev.map((msg) => (msg.isThinking ? errorMessage : msg)));
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedCharacter) {
    return <div className="p-4">正在加载人物...</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-stone-200">
        <h3 className="text-lg font-bold">对话人物: {selectedCharacter.name}</h3>
        <p className="text-sm text-stone-600">{selectedCharacter.description}</p>
        <div className="mt-2">
          {chapter.characters.map((char) => (
            <button
              key={char.name}
              onClick={() => handleCharacterSelect(char)}
              className={`mr-2 mb-2 px-3 py-1 text-sm rounded-full transition-colors ${
                selectedCharacter.name === char.name
                  ? 'bg-red-800 text-white font-bold'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {char.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-grow p-4 overflow-y-auto bg-stone-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-prose p-3 rounded-lg shadow ${
                message.sender === 'user'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-stone-800'
              }`}
            >
              {message.isThinking && <div className="animate-pulse">思考中...</div>}
              <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t border-stone-200 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={`向 ${selectedCharacter.name} 提问...`}
            className="flex-grow p-2 border border-stone-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-800"
            disabled={isLoading}
            aria-label="Chat input"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-red-800 text-white font-bold rounded-r-md hover:bg-red-900 disabled:bg-stone-400 transition-colors"
            aria-disabled={isLoading}
          >
            {isLoading ? '发送中...' : '发送'}
          </button>
        </div>
      </form>
    </div>
  );
}
