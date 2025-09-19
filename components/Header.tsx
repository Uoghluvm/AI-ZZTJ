import React from 'react';

export function Header() {
  return (
    <header className="bg-red-900 text-white shadow-md flex-shrink-0">
      <div className="container mx-auto p-4 flex justify-center items-center">
        <h1 className="text-3xl font-bold tracking-wider" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          资治通鉴 AI 导读
        </h1>
      </div>
    </header>
  );
}
