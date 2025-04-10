// app/page.tsx
import Image from "next/image";
import Especificacoes from "./components/TechnicalSpecifications";
import ImageSlide from "./components/ImageSlide";
import AlternateSessions from "./components/AlternateSessions";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import FixedButton from "./components/FixedButton";
import BannerSection from "./components/BannerSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />

      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-100">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    Cadeira Ergonômica Elements Una
  </h1>

  {/* Imagem mobile */}
  <div className="block md:hidden">
    <Image
      src="/UnaSectionMobile.jpg" // essa é a versão mobile que você precisa criar ou adaptar
      alt="Cadeira Elements Una - Mobile"
      width={500}
      height={500}
      className="rounded-xl shadow-lg"
    />
  </div>

  {/* Imagem desktop */}
  <div className="hidden md:block">
    <Image
      src="/una.png"
      alt="Cadeira Elements Una"
      width={1500}
      height={1500}
      className="rounded-xl shadow-lg"
    />
  </div>
</section>


      {/* Benefícios / Destaques */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Por que escolher a Una?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Ergonomia Avançada</h3>
            <p>
              Apoio lombar ajustável, encosto reclinável e apoio de cabeça para manter sua postura ideal.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Material Premium</h3>
            <p>
              Espuma de alta densidade, tecido mesh respirável e estrutura robusta com base em alumínio.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Design Sofisticado</h3>
            <p>
              Estilo moderno que combina com qualquer ambiente profissional ou home office.
            </p>
          </div>
        </div>
      </section>

      <ImageSlide />

      <BannerSection />

      <AlternateSessions />

      <Especificacoes />

      <CallToAction />

      <FixedButton />

    </main>
  );
}
