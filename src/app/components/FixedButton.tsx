'use client';

import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function FixedButton() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <>
      {/* Botão flutuante – esconde quando o rodapé entra na tela */}
      {!inView && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="https://loja.elements.com.br/products/cadeira-ergonomica-elements-una"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-full shadow-xl hover:bg-gray-800 transition-all duration-300 text-sm md:text-base font-semibold"
          >
            Compre agora
          </Link>
        </div>
      )}

      {/* Ref que deve ser colocado no rodapé */}
      <div ref={ref} className="h-1" />
    </>
  );
}
