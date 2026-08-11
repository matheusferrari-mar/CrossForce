import React from 'react';
export default function SobrePage() {
  const imagensAmbiente = [
    '/img/sobreImages/equipamentos.jpg',
    '/img/sobreImages/esteiras.jpg',
    '/img/sobreImages/halteresAcademia.jpg',
    '/img/sobreImages/interiorAcademia.jpg'
  ];
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1 bg-[#f4f6f9] w-full py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-24">
          
         
          <section className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
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
            </div>
            
           
              <img 
                src="/img/sobreImages/mapa.png" 
                alt="Localização no mapa" 
                className="w-full max-w-md rounded-2xl shadow-xl transition-transform hover:scale-120  "
              />
            
          </section>

        
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-extrabold text-black uppercase tracking-wide">
              Nosso Ambiente
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {imagensAmbiente.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Ambiente ${index + 1}`}
                  className="w-full aspect-square hover:scale-110 transition-transform object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              ))}
            </div>
          </section>

        </div>
      </main>

     
    </div>
  );
}