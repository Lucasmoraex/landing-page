'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const recursos = [
  {
    titulo: "Rigorosamente testado",
    descricao:
      "Desenvolvida com materiais de altíssima qualidade, a Cadeira Ergonômica Una foi submetida a rigorosos testes antes de chegar até você. Certificada pela BIFMA e SGS, oferece tranquilidade e durabilidade garantida.",
    imagem: "/section-1.jpg",
  },
  {
    titulo: "Suporte lombar ajustável",
    descricao:
      "Ajuste a lombar exatamente como seu corpo precisa. O mecanismo permite regulagem precisa de altura e pressão, garantindo conforto mesmo em longos períodos de uso.",
    imagem: "/section-2.png",
  },
  {
    titulo: "Mesh Velvet",
    descricao:
      "Tecido inovador que alia elegância, respirabilidade e suavidade ao toque, proporcionando uma experiência ergonômica premium e sofisticada para sua cadeira.",
    imagem: "/section-3.png",
  },
];

export default function AlternateSessions() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="space-y-32">
        {recursos.map((item, index) => {
          const isReverse = index % 2 !== 0;
          const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${bgColor} px-6 py-12 md:py-16 rounded-2xl flex flex-col-reverse md:flex-row ${
                isReverse ? 'md:flex-row-reverse' : ''
              } items-center gap-10 md:gap-16 shadow-sm`}
            >
              {/* Imagem */}
              <div className="flex-1 max-w-[500px]">
                <Image
                  src={item.imagem}
                  alt={item.titulo}
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl w-full object-contain"
                />
              </div>

              {/* Texto */}
              <div className={`flex-1 text-left ${isReverse ? 'md:text-right' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {item.titulo}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
