import React from "react";
import DetalhesProfessores from "@/src/components/detalhesProfessores";

export const metadata = {
  title: "Nossos Treinadores - Academia Cross Force",
  description: "Conheça os treinadores e especialistas da Academia Cross Force em detalhes.",
};

export default function DetalhesProfessoresPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f4f6f9]">
      <DetalhesProfessores />
    </main>
  );
}
