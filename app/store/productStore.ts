import { create } from "zustand";

type ProductStore = {
	searchQuery: string;
	selectedCategory: string;
	setSearchQuery: (query: string) => void;
	setCategory: (category: string) => void
}

export const useProductStore = create<ProductStore>((set) => ({
	searchQuery: '',
	selectedCategory: 'All',
	setSearchQuery: (query) => set({ searchQuery: query }),
	setCategory: (category) => set({ selectedCategory: category })
}))