"use client";

import React, { useState } from 'react';
import PlanoCard from '@/src/components/planCard';
import AdminToggle from '@/src/components/adminToogle';
import PlanoModal from '@/src/components/planModal'; 
import planosJson from "@/src/lib/planos.json"
export interface Plano {
  id: number;
  nomePlano: string;
  valorMensal: number;
  frequencia: number;
  beneficios: string[];
  popular: boolean;
}

export default function PlanosPage() {
  const [isAdmin, setIsAdmin] = useState(false); 
  const [planosData, setPlanosData] = useState<Plano[]>(planosJson);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planoEditando,setPlanoEditando] = useState<Plano | null>(null);

const handleSalvarPlano = (planoSalvo:Plano) => {
    if (planoEditando) {
      const novaLista = planosData.map((p) => 
        p.id === planoSalvo.id ? planoSalvo : p
      );
      setPlanosData(novaLista);
    } else {
      setPlanosData([...planosData, planoSalvo]);
    }
    
   
    setIsModalOpen(false);
    setPlanoEditando(null);
  };


  const handleDelete = (idForDelete: number)=>{
    const confirm = window.confirm("Voce tem certeza? A remoção é irreversível!");
    if(confirm){
      const novaLista =planosData.filter((plano)=>plano.id !== idForDelete);
      setPlanosData(novaLista);
    }
  }


  const handleEditPlano = (plano:Plano) => {
    setPlanoEditando(plano);
    setIsModalOpen(true);
  };


  const handleFecharModal = () => {
    setIsModalOpen(false);
    setPlanoEditando(null);
  };

  return (
    <div className="min-h-screen bg-[#121212] py-20 px-6 font-sans flex flex-col items-center">
      
      
      
      <div className="max-w-6xl w-full">
        <div className="w-full flex justify-between items-center mb-16">
          <div className="text-left space-y-2">
            <h2 className="text-4xl font-extrabold text-white tracking-tight uppercase">
              Nossos Planos
            </h2>
            <p className="text-gray-400">
              Escolha o plano ideal para alcançar seus objetivos
            </p>
          </div>

          {isAdmin && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="ml-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors uppercase text-sm tracking-wide shadow-lg"
            >
            
              + Adicionar Plano
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {planosData.map((plano) => (
            <PlanoCard 
              key={plano.id}
              plano={plano}
              isAdmin={isAdmin}
              onDelete={handleDelete}
              onEdit={handleEditPlano}            />
          ))}
        </div>
      </div>
      
      <PlanoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSalvarPlano} 
        planoEmEdicao={planoEditando}
      />

      <div className='mt-20 mb-0'><AdminToggle isAdmin={isAdmin} setIsAdmin={setIsAdmin} /></div>

    </div>
  );
}