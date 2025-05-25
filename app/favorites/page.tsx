// app/favorites/page.tsx

"use client";

import { useFavoritesStore } from "@/app/store/favoritesStore";
import ProductCard from "../components/products/ProductCard";

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Избранные товары</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center">Пока нет избранных товаров.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
