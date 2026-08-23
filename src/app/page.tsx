
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import { ArrowUp, ChevronDown } from "lucide-react";
import Professores from "../components/professores";
import Sobre from "../components/sobreNos";
import PlanosHome from "../components/planosHome";

gsap.registerPlugin(ScrollTrigger);

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, x: 60, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolledPastTop, setScrolledPastTop] = useState(false);

  const logoX = useMotionValue(0);
  const logoY = useMotionValue(0);
  const springX = useSpring(logoX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(logoY, { stiffness: 150, damping: 15, mass: 0.5 });

  function handleHeroMouseMove(e: React.MouseEvent<HTMLElement>) {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const { innerWidth, innerHeight } = window;
    const relX = (e.clientX / innerWidth - 0.5) * 24;
    const relY = (e.clientY / innerHeight - 0.5) * 24;
    logoX.set(relX);
    logoY.set(relY);
  }

  function handleHeroMouseLeave() {
    logoX.set(0);
    logoY.set(0);
  }

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      function handleNativeScroll() {
        const scrollY = window.scrollY;
        setScrolledPastTop(scrollY > 60);
        setShowBackToTop(scrollY > window.innerHeight * 0.9);
      }
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleNativeScroll);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update();
      setScrolledPastTop(e.scroll > 60);
      setShowBackToTop(e.scroll > window.innerHeight * 0.9);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current || !bgWrapperRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.set(bgWrapperRef.current, {
        scale: 1.3,
        transformOrigin: "center center",
      });

      gsap.to(bgWrapperRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refreshTimeout);
      ctx.revert();
    };
  }, []);

  function scrollToTop() {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <main className="flex-grow">
        {/* Seção Hero */}
        <section
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          className="relative w-full h-screen overflow-hidden"
        >
          {/* Imagem de fundo com parallax */}
          <div ref={bgWrapperRef} className="absolute inset-0">
            <Image
              src="/img/background_hero.png"
              alt="Interior da academia CrossForce"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

          <div className="relative z-10 h-full flex items-center justify-between px-16">
            <motion.div
              className="relative w-[420px] h-[420px] shrink-0"
              style={{ x: springX, y: springY }}
              initial="hidden"
              animate="visible"
              variants={logoVariants}
            >
              <Image
                src="/img/logo.png"
                alt="Logo CrossForce"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              className="text-right text-white max-w-md"
              initial="hidden"
              animate="visible"
              variants={textContainerVariants}
            >
              <motion.h1
                className="text-5xl font-bold uppercase leading-tight"
                variants={textItemVariants}
              >
                Cross Force <br /> Funcional
              </motion.h1>

              <motion.p
                className="mt-4 text-gray-300"
                variants={textItemVariants}
              >
                A melhor e mais completa academia da região
              </motion.p>

              <motion.button
                className="mt-6 bg-white text-black px-8 py-3 font-semibold rounded-lg hover:bg-[#1A232C] hover:text-white hover:scale-105 transition-all hover:cursor-pointer"
                variants={textItemVariants}
              >
                <Link href="/sobrePage">Saiba mais</Link>
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolledPastTop ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs uppercase tracking-widest">
              Role para explorar
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        <section>
          <Sobre />
        </section>

        <section>
          <PlanosHome />
        </section>

        <section>
          <Professores></Professores>
        </section>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#1a232c] hover:bg-black text-white p-3.5 rounded-full shadow-lg cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}