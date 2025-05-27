'use client';

import { Product } from '@/types/product';
import { useFavoritesStore } from '@/app/store/favoritesStore';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const navigate = useRouter();

  const isLiked = favorites.some((item) => item.id === product.id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between gap-10">
        <img className="w-full h-[550px]" src={product.image} alt={product.title} />
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2 w-full">{product.description}</p>
          <div className="flex items-center mt-4 justify-between items-center">
            <p className="text-lg font-semibold">{product.price} $</p>
            <button onClick={() => toggleFavorite(product)}>
              <Heart className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'} />
            </button>
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => navigate.back()}>
            Назад
          </button>
          </div>
          <div className='flex gap-4'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Добавить в избранное</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}
