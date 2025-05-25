import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
};

type store = {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
};

export const useProductStore = create<store>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (product) => {
        const exists = get().favorites.find((p) => p.id === product.id);
        set({
          favorites: exists
            ? get().favorites.filter((p) => p.id !== product.id)
            : [...get().favorites, product],
        });
      },
    }),
    {
      name: 'product-store',
    },
  ),
);
