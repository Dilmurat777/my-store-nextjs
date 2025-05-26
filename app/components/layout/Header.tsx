'use client';
import { useProductStore } from '@/app/store/productStore';
import Link from 'next/link';

export default function Header() {
  const { searchQuery, setSearchQuery } = useProductStore();
  
  return (
    <header className="w-full bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>
        </Link>
        <div className='flex items-center gap-5'>
            <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            className="border border-gray-300 rounded-md px-2 py-1"
            onChange={(e) => setSearchQuery(e.target.value)}
          />

        <nav className="flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link href="/favorites" className="text-gray-700 hover:text-blue-600">
            Favorites
          </Link>
          <Link href="/admin" className="text-gray-700 hover:text-blue-600">
            Admin
          </Link>
        </nav>
        </div>
      </div>
    </header>
  );
}
