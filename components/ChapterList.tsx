import React from 'react';
import type { Chapter, VolumeGroup } from '../types';

interface ChapterListProps {
  volumeGroups: VolumeGroup[];
  selectedChapter: Chapter;
  onSelectChapter: (chapter: Chapter) => void;
}

export function ChapterList({ volumeGroups, selectedChapter, onSelectChapter }: ChapterListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-stone-200 h-full flex flex-col">
      <h2 className="text-xl font-bold p-4 border-b border-stone-200 bg-stone-50 rounded-t-lg text-red-900">
        章节目录
      </h2>
      <nav className="flex-grow overflow-y-auto">
        {volumeGroups.map((group) => (
          <details 
            key={group.dynasty} 
            className="border-b border-stone-200"
            open={group.chapters.some(c => c.id === selectedChapter.id)}
          >
            <summary className="p-4 font-bold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 list-none flex justify-between items-center">
              {group.dynasty}
              <span className="text-stone-500 text-sm transform transition-transform duration-200 details-arrow">&#9662;</span>
            </summary>
            <style>{`
              details[open] > summary .details-arrow {
                transform: rotate(180deg);
              }
            `}</style>
            <ul>
              {group.chapters.map((chapter) => (
                <li key={chapter.id}>
                  <button
                    onClick={() => onSelectChapter(chapter)}
                    className={`w-full text-left p-3 pl-8 transition-colors duration-200 text-stone-700 ${
                      selectedChapter.id === chapter.id
                        ? 'bg-red-100 border-r-4 border-red-800 font-semibold'
                        : 'hover:bg-stone-100'
                    }`}
                    aria-current={selectedChapter.id === chapter.id ? 'page' : undefined}
                  >
                    <span className="block text-md">{chapter.title}</span>
                    <span className="block text-xs text-stone-500 mt-1 truncate">{chapter.summary}</span>
                  </button>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </nav>
    </div>
  );
}
