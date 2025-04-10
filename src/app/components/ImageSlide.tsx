'use client';

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/slide-1.png", alt: "Slide 1" },
  { src: "/slide-2.png", alt: "Slide 2" },
  { src: "/slide-3.png", alt: "Slide 3" },
];

export default function ImageSlide() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="px-6 py-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Veja a Siggy em detalhes
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Botão Esquerda */}
        <button
          onClick={prev}
          className="absolute left-4 z-10 bg-white text-gray-800 shadow-md rounded-full px-3 py-2 hover:bg-gray-200 transition"
        >
          ◀
        </button>

        {/* Galeria */}
        <div className="flex gap-4 transition-all duration-500">
          {images.map((img, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`cursor-pointer rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${
                  isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={300}
                  className="object-contain w-[300px] h-[300px]"
                />
              </div>
            );
          })}
        </div>

        {/* Botão Direita */}
        <button
          onClick={next}
          className="absolute right-4 z-10 bg-white text-gray-800 shadow-md rounded-full px-3 py-2 hover:bg-gray-200 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
