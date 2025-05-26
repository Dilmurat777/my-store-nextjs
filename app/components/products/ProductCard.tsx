'use client';
import React from 'react';
import { useFavoritesStore } from '@/app/store/favoritesStore';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavoritesStore();
  const favorites = useFavoritesStore((state) => state.favorites);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="border p-4 rounded-xl shadow hover:shadow-lg transition-all">
      <img src={product.image} alt={product.title} className="h-48 w-full object-cover rounded" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <div className={`flex flex-col lg:flex-row justify-between `}>
        {isMounted && (
          <button
            onClick={toggleFavorite}
            className={`mt-2 px-2 py-2 rounded text-xs lg:text-sm ${
              isFavorite(product.id) ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
            }`}>
            {isFavorite(product.id) ? 'Удалить из избранного' : 'В избранное'}
          </button>
        )}
        <button className="mt-2 px-2 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 text-xs lg:text-sm">
          Подробнее
        </button>
      </div>
    </div>
  );
}
