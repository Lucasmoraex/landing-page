'use client';

import { useState } from "react";

const specs = {
  "Cores": (
    <p><strong>Cores Disponíveis:</strong> Cinza, Preto, Verde e Vermelho</p>
  ),
  "Peso e Altura": (
    <>
      <p><strong>Peso Máximo Suportado:</strong> 130 kg</p>
      <p><strong>Altura Máxima Recomendada:</strong> Até 1,85 m</p>
    </>
  ),
  "Dimensões": (
    <>
      <p><strong>Dimensões do Produto:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Altura total: 115 cm a 125 cm (ajustável)</li>
        <li>Largura do assento: 50 cm</li>
        <li>Profundidade do assento: 48 cm</li>
        <li>Altura do assento ao chão: 45 cm a 55 cm (ajustável)</li>
      </ul>
    </>
  ),
  "Recursos": (
    <>
      <p><strong>Recursos e Ajustes:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Encosto reclinável com trava multiponto</li>
        <li>Apoio de cabeça ajustável</li>
        <li>Apoio lombar ajustável</li>
        <li>Apoios de braço 3D (altura, profundidade e ângulo ajustáveis)</li>
        <li>Altura do assento ajustável com pistão a gás</li>
      </ul>
    </>
  ),
  "Materiais": (
    <>
      <p><strong>Materiais:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Estrutura: Alumínio e plástico de alta resistência</li>
        <li>Revestimento: Tecido mesh respirável</li>
        <li>Base: Alumínio com rodízios de nylon</li>
      </ul>
    </>
  ),
  "Garantia": (
    <p><strong>Garantia:</strong> 12 meses (3 meses de garantia legal + 9 meses de garantia contratual)</p>
  ),
  "Parcelamento": (
    <p><strong>Parcelamento:</strong> Em até 10x sem juros de R$ 244,34</p>
  )
} as const;

// tipa as chaves do objeto como um tipo
type SpecKey = keyof typeof specs;

export default function TechnicalSpecifications() {
  const [active, setActive] = useState<SpecKey>("Cores");

  return (
    <section className="px-6 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Especificações Técnicas</h2>

      {/* Abas horizontais */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {(Object.keys(specs) as SpecKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium border transition ${
              active === key
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Conteúdo ativo */}
      <div className="max-w-3xl mx-auto text-lg space-y-4 text-left">
        {specs[active]}
      </div>
    </section>
  );
}
