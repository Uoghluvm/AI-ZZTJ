import { GoogleGenAI } from '@google/genai';
import React, { useState, useEffect } from 'react';
import type { Chapter } from '../types';

interface ComicViewProps {
  chapter: Chapter;
}

export function ComicView({ chapter }: ComicViewProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateComic = async () => {
      if (!chapter.comicPrompt) return;

      setIsLoading(true);
      setError(null);
      setImageUrl(null);

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const response = await ai.models.generateImages({
          model: 'imagen-4.0-generate-001',
          prompt: chapter.comicPrompt,
          config: {
            numberOfImages: 1,
            outputMimeType: 'image/jpeg',
            aspectRatio: '16:9',
          },
        });
        
        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        const dataUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
        setImageUrl(dataUrl);

      } catch (err) {
        console.error('Failed to generate comic:', err);
        setError('抱歉，无法生成连环画。请稍后再试。');
      } finally {
        setIsLoading(false);
      }
    };

    generateComic();
  }, [chapter]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-stone-50">
      <div className="w-full max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-2 text-red-900">{chapter.title}</h3>
        <p className="text-md text-stone-600 mb-6">{chapter.summary}</p>
        <div className="aspect-[16/9] w-full bg-stone-200 rounded-lg shadow-inner flex items-center justify-center border border-stone-300 overflow-hidden">
          {isLoading && (
            <div className="flex flex-col items-center">
              <svg className="animate-spin h-10 w-10 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-4 text-stone-600">正在为您绘制历史画卷，请稍候...</p>
            </div>
          )}
          {error && <p className="text-red-600">{error}</p>}
          {!isLoading && imageUrl && (
            <img 
              src={imageUrl} 
              alt={`AI-generated comic for ${chapter.title}`}
              className="object-contain w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
