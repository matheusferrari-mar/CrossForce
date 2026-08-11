import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full z-20 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-[#1C2E36] to-[#000000]">
      
      {/* Logo do site */}
      <div className="relative w-12 h-12">
        <Image
          src="/img/logo.png"
          alt="Logo CrossForce no Header"
          fill
          className="object-contain"
        />
      </div>

      <nav>
        <ul className="flex gap-8 text-white font-medium">
          <li>
            <Link href="/">Sobre</Link>
          </li>
          <li>
            <Link href="/planosPage/">Planos</Link>
          </li>
          <li>
            <Link href="/">Professores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}