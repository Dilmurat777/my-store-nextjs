import React from 'react';
// import { Button } from '@/components/ui/button'; // на будущее, если добавим shadcn
import Image from 'next/image';
import SonyDvd from '../../../public/sonyDvd.jpg';

export default function Hero() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Левая часть — текст */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Добро пожаловать в <span className="text-blue-600">MyStore</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">Покупай качественные товары по лучшим ценам.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Перейти в каталог
          </button>
        </div>

        {/* Правая часть — картинка */}
        <div className="flex-1 mt-10 md:mt-0">
          <Image
            src={SonyDvd}
            width={700}
            height={700}
            priority
            alt="Hero Image"
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
