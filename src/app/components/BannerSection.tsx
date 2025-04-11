"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // ← null inicialmente

  const desktopImages = [
    "/UnaHeroDesktop.jpg.jpg",
    "/big-slide.png",
  ];

  const mobileImages = [
    "/bannerMob.jpg",
    "/bannerHeroMob.jpg",
  ];

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice(); // Detecta ao carregar
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!bannerRef.current || isMobile === null) return;

    const trigger = ScrollTrigger.create({
      trigger: bannerRef.current,
      start: "bottom 70%",
      end: "+=60%",
      pin: true,
      scrub: 0.5,
      pinSpacing: true,
      onEnter: () => setImageIndex(1),
      onLeaveBack: () => setImageIndex(0),
    });

    return () => {
      trigger.kill();
    };
  }, [isMobile]);

  if (isMobile === null) return null; // Evita carregar até saber se é mobile ou não

  const currentImage = isMobile
    ? mobileImages[imageIndex]
    : desktopImages[imageIndex];

  return (
    <section
      ref={bannerRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        className={`w-full ${
          isMobile ? "" : "max-w-[1400px] px-6 mx-auto"
        }`}
      >
        <Image
          src={currentImage}
          alt="Banner"
          width={1400}
          height={800}
          className={`w-full rounded-2xl shadow-xl ${
            isMobile
              ? "h-[360px] object-cover"
              : "h-full object-cover"
          }`}
          priority
        />
      </div>
    </section>
  );
}
