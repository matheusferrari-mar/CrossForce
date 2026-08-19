'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from "@/src/components/imageCarousel/ImageCarousel";

export default function SobrePage() {
  const imagensAmbiente = [
    '/img/sobreImages/equipamentos.jpg',
    '/img/sobreImages/esteiras.jpg',
    '/img/sobreImages/halteresAcademia.jpg',
    '/img/sobreImages/interiorAcademia.jpg',
    // adicione quantas imagens quiser aqui, o carrossel se ajusta sozinho
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 bg-[#f4f6f9] w-full py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-24">

          <section className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex-1 space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tight">
                Conheça o nosso espaço
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Uma estrutura de excelência, pensada para o seu desempenho.
                Oferecemos o melhor em treinamento funcional e CrossFit, com
                equipamentos de ponta e espaço amplo.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Nosso ambiente é climatizado, inspirador e focado em resultados.
                Venha treinar em um local que te impulsiona!
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src="/img/sobreImages/mapa.png"
              alt="Localização no mapa"
              className="w-full max-w-md rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-extrabold text-black uppercase tracking-wide">
              Nosso Ambiente
            </h2>

            <div className="max-w-3xl mx-auto">
              <ImageCarousel images={imagensAmbiente} altPrefix="Ambiente da academia" />
            </div>
          </motion.section>

        </div>
      </main>

    </div>
  );
}
