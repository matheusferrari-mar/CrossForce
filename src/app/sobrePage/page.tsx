'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, Users, Snowflake, Award } from 'lucide-react';
import ImageCarousel from '@/src/components/imageCarousel/ImageCarousel';

export default function SobrePage() {
  const imagensAmbiente = [
    '/img/sobreImages/equipamentos.jpg',
    '/img/sobreImages/esteiras.jpg',
    '/img/sobreImages/halteresAcademia.jpg',
    '/img/sobreImages/interiorAcademia.jpg',

  ];

  const diferenciais = [
    {
      icon: Dumbbell,
      titulo: 'Estrutura Completa',
      texto: 'Equipamentos de ponta para treinamento funcional e CrossFit.',
    },
    {
      icon: Users,
      titulo: 'Professores Qualificados',
      texto: 'Equipe experiente acompanhando sua evolução de perto.',
    },
    {
      icon: Snowflake,
      titulo: 'Ambiente Climatizado',
      texto: 'Espaço amplo e confortável em qualquer estação do ano.',
    },
    {
      icon: Award,
      titulo: 'Foco em Resultados',
      texto: 'Metodologia pensada para te levar aonde você quer chegar.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 bg-[#f4f6f9] w-full">

        <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex-1 space-y-6"
          >
            <span className="inline-block text-[#00b3cc] font-extrabold text-sm tracking-[0.2em] uppercase">
              Sobre Nós
            </span>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-full max-w-md"
          >
            <img
              src="/img/sobreImages/mapa.png"
              alt="Localização no mapa"
              className="w-full rounded-2xl shadow-xl border-2 border-transparent hover:border-[#00cbe6]/40 transition-all duration-300 hover:scale-105"
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1a232c] text-white text-xs font-bold uppercase tracking-wide py-2 px-4 rounded-full shadow-lg whitespace-nowrap">
              📍 Nossa localização
            </span>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-6xl mx-auto py-16 px-6 sm:px-12 text-center space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-black uppercase tracking-wide">
            Nosso Ambiente
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dê uma volta pelo nosso espaço e veja de perto a estrutura que preparamos para o seu treino.
          </p>

          <div className="max-w-3xl mx-auto pt-4">
            <ImageCarousel images={imagensAmbiente} altPrefix="Ambiente da academia" />
          </div>
        </motion.section>

        {/* DIFERENCIAIS */}
        <section className="bg-white py-20 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-3xl font-extrabold text-black uppercase tracking-wide text-center"
            >
              Por que treinar aqui
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {diferenciais.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.titulo}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                    className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl hover:bg-[#f4f6f9] transition-colors duration-300 group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#e6fbff] text-[#00b3cc] group-hover:bg-[#00cbe6] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-extrabold text-black uppercase text-sm tracking-wide">
                      {item.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.texto}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#121212] py-20 px-6 sm:px-12 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
              Pronto para começar?
            </h2>
            <p className="text-gray-400 text-lg">
              Confira nossos planos e escolha o ideal para o seu objetivo.
            </p>
            <Link
              href="/planosPage"
              className="inline-block bg-[#00cbe6] hover:bg-[#00b3cc] text-white font-bold py-4 px-10 rounded-xl uppercase text-sm tracking-wide shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-cyan-500/30 active:scale-[0.97]"
            >
              Conheça nossos planos
            </Link>
          </div>
        </motion.section>

      </main>

    </div>
  );
}
