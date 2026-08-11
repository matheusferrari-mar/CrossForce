import React, { useState } from 'react';
import { X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export default function PlanoModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nomePlano: '', valorMensal: '', frequencia: '', beneficios: '', popular: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const beneficiosArray = formData.beneficios.split('\n').map(b => b.trim()).filter(b => b !== '');
    onSave({
      id: Date.now(), 
      nomePlano: formData.nomePlano,
      valorMensal: parseFloat(formData.valorMensal),
      frequencia: parseInt(formData.frequencia),
      beneficios: beneficiosArray,
      popular: formData.popular,
    });
    setFormData({ nomePlano: '', valorMensal: '', frequencia: '', beneficios: '', popular: false });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200 p-8">
          
          <div className="flex justify-between items-start mb-8">
            <div>
              <Dialog.Title className="text-3xl font-extrabold text-white uppercase tracking-tight">
                Novo Plano
              </Dialog.Title>
              <p className="text-gray-500 text-sm mt-1">
                Preencha os dados para criar uma nova assinatura.
              </p>
            </div>
            <Dialog.Close asChild>
              <button className="text-gray-500 hover:text-white transition-colors">
                <X size={28} strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Nome do Plano</label>
              <input 
                type="text" name="nomePlano" required
                value={formData.nomePlano} onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                placeholder="Ex: Trimestral"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Valor (R$)</label>
                <input 
                  type="number" name="valorMensal" step="0.01" required
                  value={formData.valorMensal} onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  placeholder="89.90"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Dias na semana</label>
                <input 
                  type="number" name="frequencia" min="1" max="7" required
                  value={formData.frequencia} onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  placeholder="Ex: 5"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label className="text-sm font-medium text-gray-300">Benefícios</label>
                <span className="text-xs text-gray-600">Um por linha</span>
              </div>
              <textarea 
                name="beneficios" rows={4} required
                value={formData.beneficios} onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none"
                placeholder="Acesso livre&#10;Aulas Coletivas"
              />
            </div>

            <label className="flex items-start gap-3 p-4 border border-gray-800 rounded-md cursor-pointer hover:bg-[#111] transition-colors">
              <input 
                type="checkbox" name="popular"
                checked={formData.popular} onChange={handleChange}
                className="w-5 h-5 mt-0.5 accent-white cursor-pointer"
              />
              <div>
                <p className="text-sm font-semibold text-white">Destacar Plano</p>
                <p className="text-xs text-gray-500">Marque para exibir a tag "Mais Popular" na tela principal.</p>
              </div>
            </label>

            {/* Botões de Ação */}
            <div className="flex gap-4 pt-4">
              <Dialog.Close asChild>
                <button 
                  type="button" 
                  className="flex-1 py-3.5 rounded-md font-bold text-gray-400 border border-gray-800 hover:bg-gray-900 transition-colors"
                >
                  Cancelar
                </button>
              </Dialog.Close>
              <button 
                type="submit"
                className="flex-1 py-3.5 rounded-md font-bold bg-white text-black hover:bg-gray-200 transition-colors"
              >
                Salvar Plano
              </button>
            </div>

          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}