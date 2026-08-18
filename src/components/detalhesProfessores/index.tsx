"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProfessorModal, { Professor } from "@/src/components/professorModal";
import professoresInitialData from "@/src/lib/professores.json";

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function DetalhesProfessores() {
  const [professores, setProfessores] = useState<Professor[]>(
    professoresInitialData as unknown as Professor[]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [professorEditando, setProfessorEditando] = useState<Professor | null>(
    null
  );

  const total = professores.length;
  const professorAtual = total > 0 ? professores[currentIndex] : null;

  const handleNext = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNovoProfessor = () => {
    setProfessorEditando(null);
    setIsModalOpen(true);
  };

  const handleEditProfessor = (prof: Professor) => {
    setProfessorEditando(prof);
    setIsModalOpen(true);
  };

  const handleDeleteProfessor = (id: string | number) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja remover este treinador? A ação não pode ser desfeita."
    );
    if (!confirmDelete) return;

    const novaLista = professores.filter((p) => p.id !== id);
    setProfessores(novaLista);

    if (currentIndex >= novaLista.length && novaLista.length > 0) {
      setCurrentIndex(novaLista.length - 1);
    }
  };

  const handleSalvarProfessor = (profSalvo: Professor) => {
    if (professorEditando) {
      const novaLista = professores.map((p) =>
        p.id === profSalvo.id ? profSalvo : p
      );
      setProfessores(novaLista);
    } else {
      setProfessores([...professores, profSalvo]);
      setCurrentIndex(professores.length); // vai para o novo adicionado
    }
    setIsModalOpen(false);
    setProfessorEditando(null);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] py-12 md:py-16 px-4 sm:px-8 md:px-12 font-sans flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Link de Retorno */}
        <div className="mb-6">
          <Link
            href="/professoresPage"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Professores</span>
          </Link>
        </div>

        {/* Cabeçalho da Seção */}
        <div className="w-full flex justify-between items-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            NOSSOS TREINADORES
          </h1>

          <button
            onClick={handleNovoProfessor}
            className="bg-[#1a232c] hover:bg-black text-white font-extrabold px-6 py-2.5 rounded-xl uppercase text-xs sm:text-sm tracking-wider shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            ADICIONAR
          </button>
        </div>

        {/* Área do Carrossel com Setas e Card */}
        {professorAtual ? (
          <div className="relative flex items-center justify-between gap-3 sm:gap-6 md:gap-8 w-full">
            {/* Seta Esquerda */}
            <button
              onClick={handlePrev}
              disabled={total <= 1}
              aria-label="Treinador Anterior"
              className="bg-[#e9ecef] hover:bg-gray-300 disabled:opacity-30 disabled:hover:bg-[#e9ecef] text-black p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all shadow-sm cursor-pointer shrink-0 hover:scale-110 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

            {/* Card Principal do Treinador (Fundo Escuro) */}
            <div className="flex-1 bg-[#1a1f26] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-800 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch">
                {/* Imagem do Treinador */}
                <div className="relative w-full max-w-[320px] md:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shrink-0 bg-gray-900">
                  <Image
                    src={professorAtual.foto}
                    alt={`Foto de ${professorAtual.nome}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>

                {/* Conteúdo e Informações do Treinador */}
                <div className="flex-1 flex flex-col justify-between text-left w-full">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                      {professorAtual.nome}
                    </h2>

                    <p className="text-[#00cbe6] font-bold text-lg sm:text-xl md:text-2xl mt-1">
                      {professorAtual.especializacao}
                    </p>

                    {professorAtual.cref && (
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1.5">
                        {professorAtual.cref}
                      </p>
                    )}

                    <hr className="border-t border-gray-700/80 my-4 md:my-5" />

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {professorAtual.bio}
                    </p>
                  </div>

                  {/* Barra Inferior: Instagram + Botões de Ação */}
                  <div className="mt-6 md:mt-8 pt-4 flex flex-wrap items-center justify-between gap-4">
                    {/* Botão Instagram */}
                    <button
                      onClick={() =>
                        window.open(
                          `https://instagram.com/${professorAtual.instagram}`,
                          "_blank"
                        )
                      }
                      className="bg-white hover:bg-gray-100 text-black font-semibold text-sm sm:text-base px-4 py-2.5 rounded-xl inline-flex items-center gap-2.5 shadow-md hover:scale-105 transition-all cursor-pointer"
                    >
                      <InstagramIcon className="w-5 h-5 text-black" />
                      <span>{professorAtual.instagram}</span>
                    </button>

                    {/* Botões de Ação (Editar e Excluir) */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleEditProfessor(professorAtual)}
                        className="p-2.5 rounded-xl border border-gray-700 bg-gray-900/60 hover:bg-gray-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 transition-all cursor-pointer"
                        title="Editar Informações"
                        aria-label="Editar"
                      >
                        <Edit className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteProfessor(professorAtual.id)
                        }
                        className="p-2.5 rounded-xl border border-gray-700 bg-gray-900/60 hover:bg-gray-800 text-gray-400 hover:text-red-400 hover:border-red-500 transition-all cursor-pointer"
                        title="Excluir Treinador"
                        aria-label="Excluir"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seta Direita */}
            <button
              onClick={handleNext}
              disabled={total <= 1}
              aria-label="Próximo Treinador"
              className="bg-[#e9ecef] hover:bg-gray-300 disabled:opacity-30 disabled:hover:bg-[#e9ecef] text-black p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all shadow-sm cursor-pointer shrink-0 hover:scale-110 active:scale-95"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>
          </div>
        ) : (
          <div className="bg-[#1a1f26] rounded-3xl p-12 text-center text-white">
            <p className="text-xl text-gray-400 mb-6">
              Nenhum treinador cadastrado no momento.
            </p>
            <button
              onClick={handleNovoProfessor}
              className="bg-[#00cbe6] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#00b3cc] transition-colors"
            >
              Adicionar Primeiro Treinador
            </button>
          </div>
        )}

        {/* Indicadores de Paginação / Dots */}
        {total > 1 && (
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {professores.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para treinador ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-[#1a232c]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal de Adicionar / Editar Treinador */}
      <ProfessorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setProfessorEditando(null);
        }}
        onSave={handleSalvarProfessor}
        professorEmEdicao={professorEditando}
      />
    </div>
  );
}
