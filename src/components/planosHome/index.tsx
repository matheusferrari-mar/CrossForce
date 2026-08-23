
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PlanosHome() {
  return (
    <section className="w-full bg-[#121212] py-16 md:py-20 px-6 sm:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            NOSSOS PLANOS
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {planosData.map((plano) => (
            <motion.div
              key={plano.id}
              className="bg-[#f4f6f9] rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              variants={cardVariants}
              // "levantar" no hover agora é controlado pelo framer-motion,
              // não briga mais com o transform inline da entrada
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                <Image
                  src={plano.imagem}
                  alt={`Foto do plano ${plano.nome}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
                />
              </div>

              <h3 className="text-base sm:text-lg font-black uppercase text-black mt-6 tracking-wide">
                {plano.nome}
              </h3>

              <p className="text-2xl sm:text-3xl md:text-3xl font-black text-black mt-1 mb-8 tracking-tight">
                {plano.preco}
              </p>

              <Link
                href="/planosPage"
                className="w-full mt-auto bg-[#1a232c] hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl shadow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                ASSINAR {plano.nome}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/planosPage"
            className="bg-white hover:bg-gray-100 text-black font-black uppercase text-base sm:text-lg tracking-wider px-10 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            SAIBA MAIS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}