import React from 'react';
import type { Chapter } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
  selectedChapter: Chapter;
  onSelectChapter: (chapter: Chapter) => void;
}

export function ChapterList({ chapters, selectedChapter, onSelectChapter }: ChapterListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-stone-200 h-full flex flex-col">
      <h2 className="text-xl font-bold p-4 border-b border-stone-200 bg-stone-50 rounded-t-lg text-red-900">
        章节目录
      </h2>
      <nav className="flex-grow overflow-y-auto">
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => onSelectChapter(chapter)}
                className={`w-full text-left p-4 transition-colors duration-200 text-stone-700 ${
                  selectedChapter.id === chapter.id
                    ? 'bg-red-100 border-r-4 border-red-800 font-bold'
                    : 'hover:bg-stone-100'
                }`}
                aria-current={selectedChapter.id === chapter.id ? 'page' : undefined}
              >
                <span className="block text-lg">{chapter.title}</span>
                <span className="block text-sm text-stone-500 mt-1 truncate">{chapter.summary}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
