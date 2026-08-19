import React from "react";
import Professores from "@/src/components/professores";
import DetalhesProfessores from "@/src/components/detalhesProfessores";

export const metadata = {
  title: "Professores e Treinadores - Academia Cross Force",
  description: "Conheça nossos treinadores e parceiros de treino altamente capacitados na Cross Force.",
};

export default function ProfessoresPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f4f6f9]">
      <DetalhesProfessores></DetalhesProfessores>
    </main>
  );
}
