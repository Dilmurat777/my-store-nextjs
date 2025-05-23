import React from 'react'
import {products} from '../../data/products'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
	<section className='py-10'>
	  <h2 className='text-2xl font-semibold mb-6 text-center'>Популярные товары</h2>
	  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
		{products.map((product) => (
		  <ProductCard key={product.id} product={product} />
		))}
	  </div>
	</section>
  )
}
