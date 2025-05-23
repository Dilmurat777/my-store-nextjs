import { ReactNode } from 'react';
import Header from './Header';
import Hero from '../../components/hero/Hero';
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-6">{children}</main>
    </>
  );
}
