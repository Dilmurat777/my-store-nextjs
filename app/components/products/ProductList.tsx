'use client'
import React from 'react'
import { products } from '@/app/data/products'
import ProductCard from './ProductCard'
import { useProductStore } from '@/app/store/productStore';
import CategoryFilter from '../categoryFilter/CategoryFilter';

export default function ProductList() {
  const {searchQuery, selectedCategory} = useProductStore();

  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    return titleMatch && categoryMatch;
  });

  return (
    <section className="py-10">
      <CategoryFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
