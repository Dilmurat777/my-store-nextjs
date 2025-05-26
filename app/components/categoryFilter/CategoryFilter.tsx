'use client'
import { useProductStore } from '@/app/store/productStore';
import React from 'react';

const categories = ['All', 'Electronics', 'Shoes', 'Clothes', 'Books', 'Jewelry', 'Accessories'];

export default function CategoryFilter() {
	const {selectedCategory, setCategory} = useProductStore();
  return (
    <div className="flex gap-4 my-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
