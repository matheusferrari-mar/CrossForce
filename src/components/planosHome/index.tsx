import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PlanoHomeItem {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

const planosData: PlanoHomeItem[] = [
  {
    id: 1,
    nome: "SEMANAL",
    preco: "29,90/sem",
    imagem: "/img/sobreImages/equipamentos.jpg",
  },
  {
    id: 2,
    nome: "MENSAL",
    preco: "89,90/mes",
    imagem: "/img/sobreImages/equipamentos.jpg",
  },
  {
    id: 3,
    nome: "ANUAL",
    preco: "1000,00/ano",
    imagem: "/img/sobreImages/equipamentos.jpg",
  },
];

export default function PlanosHome() {
  return (
    <section className="w-full bg-[#121212] py-16 md:py-20 px-6 sm:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            NOSSOS PLANOS
          </h2>
        </div>

        {/* Grade de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {planosData.map((plano) => (
            <div
              key={plano.id}
              className="bg-[#f4f6f9] rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Imagem do Plano */}
              <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                <Image
                  src={plano.imagem}
                  alt={`Foto do plano ${plano.nome}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
                />
              </div>

              {/* Nome do Plano */}
              <h3 className="text-base sm:text-lg font-black uppercase text-black mt-6 tracking-wide">
                {plano.nome}
              </h3>

              {/* Valor do Plano */}
              <p className="text-2xl sm:text-3xl md:text-3xl font-black text-black mt-1 mb-8 tracking-tight">
                {plano.preco}
              </p>

              {/* Botão de Ação do Card */}
              <Link
                href="/planosPage"
                className="w-full mt-auto bg-[#1a232c] hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl shadow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                ASSINAR {plano.nome}
              </Link>
            </div>
          ))}
        </div>

        {/* Botão Saiba Mais */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/planosPage"
            className="bg-white hover:bg-gray-100 text-black font-black uppercase text-base sm:text-lg tracking-wider px-10 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            SAIBA MAIS
          </Link>
        </div>
      </div>
    </section>
  );
}
