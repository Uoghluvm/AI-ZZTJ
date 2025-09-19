
import React, { useState, useMemo } from 'react';
import { ChapterList } from './components/ChapterList';
import { ChatView } from './components/ChatView';
import { ComicView } from './components/ComicView';
import { Header } from './components/Header';
import { CHAPTERS } from './constants';
import type { Chapter } from './types';
import { ViewType } from './types';


function App() {
  const [selectedChapter, setSelectedChapter] = useState<Chapter>(CHAPTERS[0]);
  const [activeView, setActiveView] = useState<ViewType>(ViewType.CHAT);

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setActiveView(ViewType.CHAT); // Default to chat view when a new chapter is selected
  };

  const MainContent = useMemo(() => {
    if (!selectedChapter) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>请从左侧选择一个章节开始探索。</p>
        </div>
      );
    }

    switch (activeView) {
      case ViewType.CHAT:
        return <ChatView chapter={selectedChapter} />;
      case ViewType.COMIC:
        return <ComicView chapter={selectedChapter} />;
      default:
        return null;
    }
  }, [activeView, selectedChapter]);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row container mx-auto p-4 gap-4 overflow-hidden">
        <aside className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
          <ChapterList
            chapters={CHAPTERS}
            selectedChapter={selectedChapter}
            onSelectChapter={handleSelectChapter}
          />
        </aside>
        <section className="flex-grow flex flex-col bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
          <div className="flex-shrink-0 flex border-b border-stone-200 bg-stone-50 p-2">
            <button
              onClick={() => setActiveView(ViewType.CHAT)}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                activeView === ViewType.CHAT
                  ? 'bg-red-800 text-white shadow'
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              与古人曰 (Chat)
            </button>
            <button
              onClick={() => setActiveView(ViewType.COMIC)}
              className={`ml-2 px-4 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                activeView === ViewType.COMIC
                  ? 'bg-red-800 text-white shadow'
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              观连环画 (Comic)
            </button>
          </div>
          <div className="flex-grow relative overflow-y-auto">
            {MainContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
