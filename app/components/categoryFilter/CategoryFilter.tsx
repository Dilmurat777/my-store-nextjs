'use client'
import React from 'react';

interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export default function CategoryFilter({ categories, onSelectCategory, selectedCategory }: Props) {
  return (
    <div className="flex gap-4 my-4">
      <button
        className={`px-4 py-2 rounded ${selectedCategory === '' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onSelectCategory('')}
      >
        Все
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
