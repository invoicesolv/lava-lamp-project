'use client';

import React, { useState } from 'react';
import { LavaLamp } from "@/components/ui/fluid-blob";

export default function DemoOne() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayTitle] = useState('Tryck eget');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <LavaLamp/>
      
      {/* Static Title - Always shows 'Tryck eget' */}
      <h1 className="z-10 text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white mb-4">
        {displayTitle}
      </h1>
      
      {/* Description */}
      <p className="z-10 text-lg md:text-xl text-center mix-blend-exclusion text-white mb-8 max-w-2xl px-8">
        Vi hjälper dig att trycka för alla plagg
      </p>
      
      {/* Search Field - Independent with white background */}
      <div className="z-10 bg-white rounded-full px-4 py-2 shadow-lg max-w-2xl w-full mx-8">
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="What are you looking for today?"
            className="flex-1 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none py-1"
          />
          <button className="ml-3 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
