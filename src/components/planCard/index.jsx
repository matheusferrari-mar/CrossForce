import React from 'react';
import { Trash2, Edit } from 'lucide-react';

export default function PlanoCard({ plano,isAdmin }) {


  return (
    <div className={`relative bg-[#f5f6f8] hover:-translate-y-2 transition-transform duration-300 rounded-2xl p-8 w-full max-w-[340px] flex flex-col items-center text-center shadow-lg ${
      plano.popular ? 'border-2 border-[#00cbe6] shadow-[0_0_20px_rgba(0,203,230,0.15)] md:scale-105' : ''
    }`}>
      
    
      {plano.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00cbe6] text=[#f5f9f9] font-extrabold text-[10px] tracking-widest uppercase py-1 px-4 rounded-full shadow-md">
          Mais Popular
        </span>
      )}

     
      {isAdmin && (
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-1.5 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-gray-200 transition-colors" title="Editar">
            <Edit size={18} />
          </button>
          <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-100 transition-colors" title="Excluir">
            <Trash2 size={18} />
          </button>
        </div>
      )}

      <h3 className="font-extrabold text-xl uppercase text-gray-900 mb-2 mt-2">
        {plano.nomePlano}
      </h3>
      
      <p className="text-4xl font-black text-black mb-2 flex items-baseline gap-1">
        <span className="text-xl font-bold">R$</span> 
        {plano.valorMensal.toFixed(2).replace('.', ',')}
      </p>
      
      <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-6 bg-gray-200 py-1.5 px-3 rounded-full">
        Acesso: {plano.frequencia}x / semana
      </p>

      <hr className="w-full border-gray-300 mb-6" />

     
      <ul className="text-left text-sm text-gray-700 w-full mb-8 grow space-y-3.5">
        {plano.beneficios.map((beneficio, index) => (
          <li key={index} className="flex items-start">
           
            <svg className="w-5 h-5 text-[#00cbe6] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-medium">{beneficio}</span>
          </li>
        ))}
      </ul>
      
    
      <button className={`w-full py-3.5 mt-auto rounded-xl font-bold uppercase tracking-wide text-sm transition-colors shadow-md ${
        plano.popular 
          ? 'bg-[#00cbe6] text-white hover:bg-[#00b3cc]' 
          : 'bg-[#1a232c] text-white hover:bg-gray-800'
      }`}>
        Matricular-se
      </button>

    </div>
    
  );
}