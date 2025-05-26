import React from 'react'
import ProductList from './ProductList'

export default function ProductPage() {
  return (
	<div className='container mx-auto'>
	  <h2 className="text-2xl font-bold mb-6 text-center">Популярные товары</h2>
	  <ProductList />
	</div>
  )
}

