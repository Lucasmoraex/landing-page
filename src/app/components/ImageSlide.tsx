"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "/unatecido.webp",
    alt: "Slide 1",
    text: "Tecido premium e respirável com toque macio.",
  },
  {
    src: "/slide-2.png",
    alt: "Slide 2",
    text: "Ajustes precisos para o encosto e assento.",
  },
  {
    src: "/slide-3.png",
    alt: "Slide 3",
    text: "Ajustes precisos para os braços.",
  },
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
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Veja a Una em detalhes
      </h2>

      <p className="text-gray-600 font-semibold max-w-xl mx-auto mb-12 transition-all duration-500">
        {images[current].text}
      </p>

      {/* === DESKTOP: centralização da imagem ativa === */}
      <div className="hidden md:flex relative items-center justify-center">
        {/* Botão Esquerda */}
        <button
          onClick={prev}
          className="absolute left-4 z-10 bg-white text-gray-800 shadow-md rounded-full px-3 py-2 hover:bg-gray-200 transition"
        >
          ◀
        </button>

        {/* Galeria com slide centralizado */}
        <div className="overflow-hidden w-[900px]">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(calc(-${current * 316}px + 300px))`,
            }}
          >
            {images.map((img, i) => {
              const isActive = i === current;
              return (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`cursor-pointer rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${
                    isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
                  }`}
                  style={{ minWidth: "300px" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="object-contain w-full h-[300px] rounded-xl"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Botão Direita */}
        <button
          onClick={next}
          className="absolute right-4 z-10 bg-white text-gray-800 shadow-md rounded-full px-3 py-2 hover:bg-gray-200 transition"
        >
          ▶
        </button>
      </div>

      {/* === MOBILE: uma imagem por vez === */}
      <div className="md:hidden">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={300}
            height={300}
            className="object-contain w-full max-w-[300px] h-[300px] mx-auto rounded-xl"
          />
        </div>

        {/* Botões mobile abaixo */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="bg-black text-white shadow-md rounded-full px-4 py-2 hover:bg-gray-800 transition border-none focus:outline-none focus:ring-0"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="bg-black text-white shadow-md rounded-full px-4 py-2 hover:bg-gray-800 transition border-none focus:outline-none focus:ring-0"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
