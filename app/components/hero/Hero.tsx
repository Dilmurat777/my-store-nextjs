'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Добро пожаловать в MyStore</h1>
      <p className="text-lg md:text-xl mb-6">Открой для себя лучшие товары по отличным ценам</p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
        Смотреть товары
      </button>
    </section>
  );
}
