"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { ScrambleText } from "@/components/ui/ScrambleText";

export const Hero = () => {
  const { language } = useLanguageStore();
  const t = content[language].hero;
  const roleTitle = language === 'en' ? "Future Architect" : "架构未来";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Status Badge: Clean & Professional */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/50 border border-white/10 backdrop-blur-md mb-8 hover:bg-surface/80 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-muted tracking-wide uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Title: Elegant Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
          >
            {t.role.split('|')[0]}
          </motion.span>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-muted mt-2 font-mono"
          >
             <ScrambleText text={roleTitle} className="text-primary/80" />
          </motion.div>
        </h1>

        {/* Subtitle: High Readability */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted/80 mb-12 leading-relaxed"
        >
          {t.subhead}
        </motion.p>

        {/* Buttons: Subtle & Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Primary: White Glow */}
          <button className="px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
            {t.cta_primary} <Download className="w-4 h-4" />
          </button>
          
          {/* Secondary: Glass */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2"
          >
            {t.cta_secondary} <ArrowRight className="w-4 h-4 opacity-70" />
          </button>
        </motion.div>
      </div>

    </section>
  );
};
