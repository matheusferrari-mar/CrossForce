"use client";

import React from 'react';

export default function AdminToggle({ isAdmin, setIsAdmin }) {
  return (
    <div className="mb-12 flex items-center gap-4 bg-[#1e1e1e] p-4 rounded-2xl border border-gray-700 w-fit mx-auto">
      <span className={`text-sm font-bold ${!isAdmin ? 'text-[#00cbe6]' : 'text-gray-500'}`}>
        Visão Usuário
      </span>
      
      <button 
        onClick={() => setIsAdmin(!isAdmin)}
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${isAdmin ? 'bg-green-500' : 'bg-gray-600'}`}
      >
        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isAdmin ? 'translate-x-6' : 'translate-x-0'}`} />
      </button>

      <span className={`text-sm font-bold ${isAdmin ? 'text-green-500' : 'text-gray-500'}`}>
        Visão Admin
      </span>
    </div>
  );
}