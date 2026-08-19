'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/sobrePage/", label: "Sobre" },
  { href: "/planosPage/", label: "Planos" },
  { href: "/professoresPage/", label: "Professores" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full z-20 sticky top-0 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-[#1C2E36] to-[#000000] shadow-lg">
      {/* Logo do site */}
      <div className="relative w-12 h-12 transition-transform duration-300 hover:scale-110">
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="Logo CrossForce no Header"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <nav>
        <ul className="flex gap-8 text-white font-medium">
          {navItems.map((item) => {
            const isActive = pathname?.startsWith(item.href.replace(/\/$/, ''));
            return (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`relative inline-block py-1 transition-colors duration-300 ${
                    isActive ? 'text-[#00cbe6]' : 'text-white group-hover:text-[#00cbe6]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#00cbe6] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
