'use client';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const controlsDesktop = useAnimation();
  const controlsMobile = useAnimation();

  const [refDesktop, inViewDesktop] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refMobile, inViewMobile] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inViewDesktop) controlsDesktop.start("visible");
  }, [inViewDesktop, controlsDesktop]);

  useEffect(() => {
    if (inViewMobile) controlsMobile.start("visible");
  }, [inViewMobile, controlsMobile]);

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
    <section className="relative h-auto md:h-[90vh] w-full overflow-hidden bg-white">

      {/* Imagem desktop */}
      <motion.div
        ref={refDesktop}
        initial="hidden"
        animate={controlsDesktop}
        variants={variants}
        className="hidden md:block relative w-full h-full"
      >
        <Image
          src="/bannerHeroDesk.jpg"
          alt="Detalhe da cadeira Una"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Imagem mobile */}
      <motion.div
        ref={refMobile}
        initial="hidden"
        animate={controlsMobile}
        variants={variants}
        className="block md:hidden relative w-full h-[50vh]"
      >
        <Image
          src="/bannerHeroMob.jpg"
          alt="Cadeira Una - Mobile"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
    </section>
  );
}
