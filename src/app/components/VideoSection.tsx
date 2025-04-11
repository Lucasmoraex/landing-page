"use client";

import { useEffect, useState } from "react";

export default function VideoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-12 px-4 flex items-center justify-center">
      <div
        className={`w-full ${
          isMobile ? "max-w-md" : "max-w-6xl"
        } aspect-video rounded-2xl overflow-hidden shadow-2xl`}
      >
        <video
          src="UnaVideoHero.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
