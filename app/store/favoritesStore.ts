// store/favoritesStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface FavoritesStore {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addToFavorites: (product) => {
        const current = get().favorites;
        if (!current.find((item) => item.id === product.id)) {
          set({ favorites: [...current, product] });
        }
      },
      removeFromFavorites: (id) => {
        set({ favorites: get().favorites.filter((item) => item.id !== id) });
      },
      isFavorite: (id) => {
        return get().favorites.some((item) => item.id === id);
      },
    }),
    {
      name: 'favorites-storage', // Название key в localStorage
    },
  ),
);
