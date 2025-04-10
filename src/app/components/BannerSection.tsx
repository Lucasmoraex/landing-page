"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scaleAmount, setScaleAmount] = useState(2); // default for desktop

  useEffect(() => {
    const updateDevice = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);

      if (isMobileNow) {
        const imageStartWidth = window.innerWidth * 0.9; // 90vw
        const targetWidth = window.innerWidth;
        const idealScale = targetWidth / imageStartWidth;
        setScaleAmount(idealScale); // escala sob medida pra mobile
      } else {
        setScaleAmount(2.0); // desktop
      }
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  useEffect(() => {
    if (!bannerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: scaleAmount,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, [scaleAmount]);

  const imageSrc = isMobile ? "/unamobile-banner.png" : "/UnaHeroDesktop.jpg.jpg"; // 🔁 aqui

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center"
    >
      <div
        ref={imageRef}
        className="w-[90vw] md:w-[50vw] h-auto transition-transform duration-300"
      >
        <Image
          src={imageSrc}
          alt="Banner"
          width={1400}
          height={1400}
          className="w-full h-auto object-contain rounded-2xl shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
