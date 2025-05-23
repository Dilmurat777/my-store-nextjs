import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Кроссовки Nike',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1695548024599-63bdc726dda0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUQwJTlBJUQxJTgwJUQwJUJFJUQxJTgxJUQxJTgxJUQwJUJFJUQwJUIyJUQwJUJBJUQwJUI4JTIwTmlrZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    title: 'Футболка Adidas',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVEMCVBNCVEMSU4MyVEMSU4MiVEMCVCMSVEMCVCRSVEMCVCQiVEMCVCQSVEMCVCMCUyMEFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    title: 'Часы Apple Watch',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1590688560938-57c514814ddb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCVEMCVBNyVEMCVCMCVEMSU4MSVEMSU4QiUyMEFwcGxlJTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D',
  },
];

export default function ProductList() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Популярные товары</h2>
	  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
		{
			products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))
		}
	  </div>
    </section>
  );
}
