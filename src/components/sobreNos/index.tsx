// --- ARQUIVO 2: COMPONENTE SOBRE NOS ---
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Sobre() {
  return (
    <section className="bg-[#F4F6FB] px-6 py-16 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Sobre Nós
        </motion.h2>

        {/* Barra de destaque animada */}
        <motion.div
          className="h-1 w-20 bg-black mt-3 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl font-normal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Na Crossforce Functional, preparamos você para os desafios da vida.
          Mais do que treinos eficientes, oferecemos uma estrutura pensada em
          cada detalhe para o seu melhor desempenho:
        </motion.p>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="flex flex-col items-center" variants={cardVariants}>
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-all duration-300">
              <Image
                src="/img/sobreImages/interiorAcademia.jpg"
                alt="Segurança"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">Segurança</p>
          </motion.div>

          <motion.div className="flex flex-col items-center" variants={cardVariants}>
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-all duration-300">
              <Image
                src="/img/sobreImages/halteresAcademia.jpg"
                alt="Moderna"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">Moderna</p>
          </motion.div>

          <motion.div className="flex flex-col items-center" variants={cardVariants}>
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-all duration-300">
              <Image
                src="/img/sobreImages/interiorAcademia.jpg"
                alt="Espaçosa"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">Espaçosa</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="relative w-full aspect-16/10 max-w-md rounded-2xl overflow-hidden shadow-sm mx-auto md:mx-0 hover:scale-105 transition-all duration-300"
            variants={cardVariants}
          >
            <Image
              src="/img/sobreImages/mapa.png"
              alt="Mapa de localização da academia"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div className="flex flex-col justify-center" variants={cardVariants}>
            <h3 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
              Nos Visite Em
            </h3>
            <div className="mt-4 space-y-1 text-gray-800 text-lg font-medium leading-normal">
              <p>Rua das laranjeiras - 123</p>
              <p>Itajubá - MG</p>
              <p>37501-588</p>
              <p>(67) 4002-8922</p>
              <p className="text-gray-900 font-semibold">contato@academia.br</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}