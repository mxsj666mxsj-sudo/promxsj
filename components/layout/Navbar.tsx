"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

export const Navbar = () => {
  const { language } = useLanguageStore();
  const t = content[language].nav;
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-[#030303]/80 backdrop-blur-md border-white/5 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-bold tracking-tight cursor-pointer flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          MINXU<span className="text-white/40">.SHUNJIE</span>
        </div>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            {['works', 'experience', 'about', 'contact'].map((key) => (
              <li key={key}>
                <button 
                  onClick={() => scrollTo(key)}
                  className="hover:text-white transition-colors uppercase tracking-wider text-xs"
                >
                  {t[key as keyof typeof t]}
                </button>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      </div>
    </motion.nav>
  );
};
