'use client';
import React, { useState } from 'react';
import { products } from '@/app/data/products';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import ProductCard from './ProductCard';

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
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
