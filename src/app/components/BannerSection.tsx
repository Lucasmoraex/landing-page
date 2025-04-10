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
  const [scaleAmount, setScaleAmount] = useState(0.85);

  useEffect(() => {
    const updateDevice = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);

      if (isMobileNow) {
        setScaleAmount(0.9);
      } else {
        setScaleAmount(0.85);
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
            end: () => `${window.innerHeight * 0.8}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, bannerRef);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, [scaleAmount]);

  const imageSrc = isMobile
    ? "/unamobile-banner.png"
    : "/UnaHeroDesktop.jpg.jpg";

  return (
    <section
      ref={bannerRef}
      className={`relative w-full overflow-hidden bg-white ${
        isMobile ? "h-auto py-4" : "h-screen"
      }`}
    >
      <div
        ref={imageRef}
        className="w-full transition-transform duration-300"
        style={{ height: isMobile ? "auto" : "100%" }}
      >
        <Image
          src={imageSrc}
          alt="Banner"
          width={1400}
          height={1400}
          className={`w-full rounded-2xl shadow-xl ${
            isMobile ? "h-auto object-contain" : "h-full object-cover"
          }`}
          priority
        />
      </div>
    </section>
  );
}
