'use client'
import React, { useState } from 'react';
import { products } from '@/app/data/products';
import CategoryFilter from '../categoryFilter/CategoryFilter';

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Товары</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.category}</p>
            <p className="text-blue-600 font-bold">{product.price} тг</p>
          </div>
        ))}
      </div>
    </div>
  );
}
