"use client";

import React, { useState } from "react";
import planosData from "@/src/lib/planos.json"; // Futuramente você trocará isso por um fetch() da sua API
import PlanoCard from "@/src/components/planCard"; // Ajuste o caminho conforme sua estrutura de pastas
import AdminToggle from "@/src/components/adminToogle";

export default function PlanosSection() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <section className="bg-[#222222] p-8 md:p-12 font-sans  min-h-screen">
      <div className=" w-full ">
        <div className="flex flex-col sm:flex-row justify-between w-full items-center mb-16 gap-6">
          <div className="text-left space-y-2">
            <h2 className="text-4xl font-extrabold text-white tracking-tight uppercase">
              Nossos Planos
            </h2>
            <p className="text-gray-400">
              Escolha o plano ideal para alcançar seus objetivos
            </p>
          </div>

          {isAdmin && (
            <button className="bg-[#f5f9f9] hover:bg-[#1e1e1e] text-[#1e1e1e] hover:text-[#f5f9f9] font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors uppercase text-sm tracking-wide shadow-lg shadow-cyan-900/20">
              Adicionar Plano
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {planosData.map((plano) => (
          <PlanoCard key={plano.id} plano={plano} isAdmin={isAdmin} />
        ))}
      </div>
      <div className="w-full mt-40 flex items-start justify-baseline">
        <AdminToggle isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      </div>
    </section>
  );
}
