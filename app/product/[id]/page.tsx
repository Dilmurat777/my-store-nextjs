import { products } from '../../data/products'; // или API, если используешь
import { notFound } from 'next/navigation';
import ProductDetail from '../../components/productDetails/ProductDetails';

interface Props {
  params: {
    id: number;
  };
}

export default function ProductPageId({ params }: Props) {
  const product = products.find((product) => product.id === Number(params.id));
  console.log(product);

  // if (!product) return notFound();

  return (
    
    <div><ProductDetail product={product} /></div>
  ) 
}
