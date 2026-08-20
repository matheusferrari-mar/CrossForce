import Image from "next/image";

export default function Sobre() {
  return (
    <section className="bg-[#F4F6FB] px-6 py-16 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
          Sobre Nós
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl font-normal">
          Na Crossforce Functional, preparamos você para os desafios da vida.
          Mais do que treinos eficientes, oferecemos uma estrutura pensada em
          cada detalhe para o seu melhor desempenho:
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-all duration-300">
              <Image
                src="/img/sobreImages/interiorAcademia.jpg"
                alt="Segurança"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">Segurança</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-all duration-300">
              <Image
                src="/img/sobreImages/halteresAcademia.jpg"
                alt="Moderna"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">Moderna</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-all duration-300">
              <Image
                src="/img/sobreImages/interiorAcademia.jpg"
                alt="Espaçosa"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">Espaçosa</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full aspect-16/10 max-w-md rounded-2xl overflow-hidden shadow-sm mx-auto md:mx-0 hover:scale-105 transition-all duration-300">
            <Image
              src="/img/sobreImages/mapa.png"
              alt="Mapa de localização da academia"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
              Nos Visite Em
            </h3>
            <div className="mt-4 space-y-1 text-gray-800 text-lg font-medium leading-normal">
              <p>Rua das laranjeiras - 123</p>
              <p>Itajubá - MG</p>
              <p>37501-588</p>
              <p>(67) 4002-8922</p>
              <p className="text-gray-900 font-semibold">contato@academia.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}