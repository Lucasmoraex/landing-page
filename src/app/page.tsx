// app/page.tsx
import Image from "next/image";
import Especificacoes from "./components/TechnicalSpecifications";
import ImageSlide from "./components/ImageSlide";
import AlternateSessions from "./components/AlternateSessions";
import CallToAction from "./components/CallToAction";
import FixedButton from "./components/FixedButton";
import BannerSection from "./components/BannerSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Introdução com título futurista */}
      <section className="flex items-center justify-center py-12 text-center bg-gray-100">
        <h1 className="text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-white/20 tracking-tight leading-tight">
          Bem-vindo ao{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-white/40">
            Futuro
          </span>
        </h1>
      </section>

      {/* Vídeo principal */}
      <VideoSection />

      {/* Imagem principal da cadeira */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Cadeira Ergonômica Elements Una
        </h1>

        {/* Imagem mobile */}
        <div className="block md:hidden">
          <Image
            src="/UnaSectionMobile.jpg"
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

      {/* Slide com detalhes visuais */}
      <ImageSlide />

      {/* Banner com destaque visual */}
      <BannerSection />

      {/* Seções alternadas com imagem e texto intercalado */}
      <AlternateSessions />

      {/* Tabela técnica de especificações */}
      <Especificacoes />

      {/* Chamada final para ação */}
      <CallToAction />

      {/* Botão fixo de compra */}
      <FixedButton />
      
    </main>
  );
}
