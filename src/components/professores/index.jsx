"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import professoresData from "@/src/lib/professores.json";

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Professores({ professores = professoresData }) {
  return (
    <section className="w-full bg-[#f4f6f9] py-16 md:py-20 px-6 sm:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            NOSSOS TREINADORES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl font-normal">
            Mais do que instrutores, parceiros de treino. Conheça os profissionais altamente capacitados 
            que vão acompanhar de perto a sua jornada e garantir que você alcance seus objetivos com técnica e segurança.
          </p>
        </div>

        {/* Grade de Treinadores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {professores.map((treinador) => (
            <div 
              key={treinador.id} 
              className="group flex flex-col items-center"
            >
              {/* Container da Imagem com cantos arredondados e sombra */}
              <div className="relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 bg-gray-200">
                <Image
                  src={treinador.foto}
                  alt={`Foto do ${treinador.nome}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
                />
              </div>

              {/* Informações do Treinador */}
              <div className="text-center mt-5 w-full flex flex-col items-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                  {treinador.nome}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 font-medium mt-1">
                  {treinador.especializacao}
                </p>
                <div 
                  className="flex items-center justify-center gap-1.5 text-sm sm:text-base text-gray-800 font-medium mt-1.5 hover:text-pink-600 transition-colors cursor-pointer"
                  onClick={() => {
                    window.open(`https://instagram.com/${treinador.instagram}`, "_blank");
                  }}
                >
                  <InstagramIcon className="w-5 h-5 text-gray-900 group-hover:text-pink-600 transition-colors" />
                  <span>{treinador.instagram}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Ação */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/detalhesProfessoresPage"
            className="bg-[#1a232c] hover:bg-black text-white font-bold text-base md:text-lg px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>Conheça mais sobre cada um</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
