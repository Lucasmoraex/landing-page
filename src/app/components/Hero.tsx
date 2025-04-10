'use client';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-white">
      {/* Texto centralizado sobre a imagem */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-b from-gray-300 to-gray-100 text-transparent bg-clip-text drop-shadow mb-6">
          Bem-vindo ao Futuro
        </h2>
      </div>

      {/* Imagem de fundo com animação */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="w-full h-full"
      >
        <Image
          src="/big-slide.png"
          alt="Detalhe da cadeira Siggy"
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </section>
    
  );
}
