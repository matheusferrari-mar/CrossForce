import Image from "next/image";
import Link from "next/link";
import Professores from "../components/professores";

export default function Home() {
  return (
    <main className="flex-grow">

      {/* Seção Hero */}
      <section className="relative w-full h-screen">
        {/* Imagem de fundo */}
        <Image
          src="/img/background_hero.png"
          alt="Interior da academia CrossForce"
          fill
          className="object-cover"
          priority
        />

        {/* Camada de degradê escurecendo a imagem */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

        {/* Conteúdo por cima */}
        <div className="relative z-10 h-full flex items-center justify-between px-16">
          {/* Logo grande */}
          <div className="relative w-[420px] h-[420px] shrink-0">
            <Image
              src="/img/logo.png"
              alt="Logo CrossForce"
              fill
              className="object-contain"
            />
          </div>

          {/* Texto + botão */}
          <div className="text-right text-white max-w-md">
            <h1 className="text-5xl font-bold uppercase leading-tight">
              Cross Force <br /> Funcional
            </h1>
            <p className="mt-4 text-gray-300">
              A melhor e mais completa academia da região
            </p>
            <button className="mt-6 bg-white text-black px-8 py-3 font-semibold rounded-lg hover:bg-[#1A232C] hover:text-white hover:scale-105 transition-all hover:cursor-pointer">
              <Link href="/sobrePage">Saiba mais</Link>
            </button>
          </div>
        </div>
      </section>
    <section>
      <Professores></Professores>
    </section>
    </main>
  );
}
