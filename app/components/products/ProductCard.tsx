'use client';

import { useProductStore } from '../../store/useProductStore';
import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
	const {favorites, toggleFavorite} = useProductStore();

	const isFav = favorites.some(p => p.id === product.id)
  return (
    <div className="border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-blue-600 font-bold mt-2">${product.price}</p>
		<div className='flex justify-between'>
			<button onClick={() => toggleFavorite(product)}>
			{
				isFav ? '💖 Удалить из избранного' : '🤍 В избранное'
			}
		</button>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Подробнее
        </button>
		</div>
      </div>
    </div>
  );
}
