"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export interface Professor {
  id: string | number;
  nome: string;
  especializacao: string;
  cref?: string;
  instagram: string;
  foto: string;
  bio: string;
  certificados?: string[];
}

interface ProfessorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (professor: Professor) => void;
  professorEmEdicao?: Professor | null;
}

interface FormDataState {
  nome: string;
  especializacao: string;
  cref: string;
  instagram: string;
  foto: string;
  bio: string;
  certificados: string;
}

export default function ProfessorModal({
  isOpen,
  onClose,
  onSave,
  professorEmEdicao,
}: ProfessorModalProps) {
  const [formData, setFormData] = useState<FormDataState>({
    nome: "",
    especializacao: "",
    cref: "",
    instagram: "",
    foto: "/img/professores/treinador1.jpg",
    bio: "",
    certificados: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isOpen) {
      if (professorEmEdicao) {
        setFormData({
          nome: professorEmEdicao.nome || "",
          especializacao: professorEmEdicao.especializacao || "",
          cref: professorEmEdicao.cref || "",
          instagram: professorEmEdicao.instagram || "",
          foto: professorEmEdicao.foto || "/img/professores/treinador1.jpg",
          bio: professorEmEdicao.bio || "",
          certificados: professorEmEdicao.certificados
            ? professorEmEdicao.certificados.join("\n")
            : "",
        });
      } else {
        setFormData({
          nome: "",
          especializacao: "",
          cref: "",
          instagram: "",
          foto: "/img/professores/treinador1.jpg",
          bio: "",
          certificados: "",
        });
      }
    }
  }, [isOpen, professorEmEdicao]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const certificadosArray = formData.certificados
      .split("\n")
      .map((c) => c.trim())
      .filter((c) => c !== "");

    onSave({
      id: professorEmEdicao ? professorEmEdicao.id : Date.now(),
      nome: formData.nome,
      especializacao: formData.especializacao,
      cref: formData.cref,
      instagram: formData.instagram.replace(/^@/, ""),
      foto: formData.foto || "/img/professores/treinador1.jpg",
      bio: formData.bio,
      certificados: certificadosArray,
    });

    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] bg-[#121212] border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Dialog.Title className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                {professorEmEdicao ? "Editar Treinador" : "Novo Treinador"}
              </Dialog.Title>
              <p className="text-gray-400 text-sm mt-1">
                Preencha as informações do perfil do treinador.
              </p>
            </div>
            <Dialog.Close asChild>
              <button className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer">
                <X size={24} />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-200">
                Nome do Treinador
              </label>
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full bg-[#1e1e1e] border border-gray-700 text-white rounded-xl p-3 focus:outline-none focus:border-[#00cbe6] focus:ring-1 focus:ring-[#00cbe6] transition-all text-sm"
                placeholder="Ex: Phyll"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-200">
                  Especialização
                </label>
                <input
                  type="text"
                  name="especializacao"
                  required
                  value={formData.especializacao}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 text-white rounded-xl p-3 focus:outline-none focus:border-[#00cbe6] focus:ring-1 focus:ring-[#00cbe6] transition-all text-sm"
                  placeholder="Ex: Especializado em Ginástica"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-200">
                  Registro CREF
                </label>
                <input
                  type="text"
                  name="cref"
                  value={formData.cref}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 text-white rounded-xl p-3 focus:outline-none focus:border-[#00cbe6] focus:ring-1 focus:ring-[#00cbe6] transition-all text-sm"
                  placeholder="Ex: CREF:102382138102"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-200">
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  required
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 text-white rounded-xl p-3 focus:outline-none focus:border-[#00cbe6] focus:ring-1 focus:ring-[#00cbe6] transition-all text-sm"
                  placeholder="Ex: phyll.fisio1337"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-200">
                  Caminho da Foto
                </label>
                <input
                  type="text"
                  name="foto"
                  required
                  value={formData.foto}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 text-white rounded-xl p-3 focus:outline-none focus:border-[#00cbe6] focus:ring-1 focus:ring-[#00cbe6] transition-all text-sm"
                  placeholder="/img/professores/treinador1.jpg"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-200">
                Biografia / Descrição
              </label>
              <textarea
                name="bio"
                rows={4}
                required
                value={formData.bio}
                onChange={handleChange}
                className="w-full bg-[#1e1e1e] border border-gray-700 text-white rounded-xl p-3 focus:outline-none focus:border-[#00cbe6] focus:ring-1 focus:ring-[#00cbe6] transition-all resize-none text-sm"
                placeholder="Descreva a experiência e abordagem do treinador..."
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <label className="text-sm font-semibold text-gray-200">
                  Certificados & Qualificações
                </label>
                <span className="text-xs text-gray-500">Um por linha</span>
              </div>
              <textarea
                name="certificados"
                rows={3}
                value={formData.certificados}
                onChange={handleChange}
                className="w-full bg-[#1e1e1e] border border-gray-700 text-white rounded-xl p-3 focus:outline-none focus:border-[#00cbe6] focus:ring-1 focus:ring-[#00cbe6] transition-all resize-none text-sm"
                placeholder="Bacharel em Educação Física&#10;Certificação CrossFit Level 2"
              />
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 rounded-xl font-bold text-gray-400 border border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl font-bold bg-[#00cbe6] hover:bg-[#00b3cc] text-black transition-colors shadow-lg cursor-pointer"
              >
                Salvar Treinador
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
