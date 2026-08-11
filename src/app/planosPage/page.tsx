import React from 'react';
import planosData from '@/src/lib/planos.json'; // O JSON continua exatamente igual

export function PlanosSection() {
  return (
    <section className="bg-[#222222] p-8 md:p-12 font-sans min-h-screen">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
          Nossos Planos
        </h2>
        <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
          ADICIONAR PLANO
        </button>
      </div>

      {/* Grid de Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {planosData.map((plano) => (
          <div 
            key={plano.id} 
            className="bg-[#f5f6f8] rounded-2xl p-6 w-full max-w-[320px] flex flex-col items-center text-center shadow-lg"
          >
            
            {/* Nome do Plano */}
            <h3 className="font-extrabold text-xl uppercase text-gray-900 mb-2">
              {plano.nomePlano}
            </h3>
            
            {/* Valor Mensal */}
            <p className="text-4xl font-black text-black mb-1">
              R$ {plano.valorMensal.toFixed(2).replace('.', ',')}
            </p>
            
            {/* Frequência */}
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
              Acesso: {plano.frequencia}x por semana
            </p>

            {/* Lista de Benefícios Dinâmica */}
            {/* flex-grow garante que esta lista empurre o botão sempre para o final do card */}
            <ul className="text-left text-sm text-gray-700 w-full mb-8 flex-grow space-y-3">
              {plano.beneficios.map((beneficio, index) => (
                <li key={index} className="flex items-start">
                  {/* Ícone de check improvisado e texto do benefício */}
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
            
            {/* Botão de Detalhes */}
            {/* mt-auto garante que o botão fique colado no rodapé do card, independente do tamanho da lista */}
            <button className="bg-[#1a232c] text-white w-full py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors mt-auto uppercase tracking-wide">
              Detalhes
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}