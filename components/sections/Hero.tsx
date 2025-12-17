"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

export const Hero = () => {
  const { language } = useLanguageStore();
  const t = content[language].hero;
  
  const titles = language === 'en' 
    ? ["Future Architect", "Product Innovator", "Creative Developer"] 
    : ["架构未来", "产品创新", "创意开发"];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
        
        {/* Dynamic Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer group shadow-[0_0_20px_rgba(217,70,239,0.3)]"
        >
          <Sparkles className="w-4 h-4 text-neon-yellow animate-spin-slow group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
            Minxu Shunjie Portfolio 2025
          </span>
        </motion.div>

        {/* Main Title with Gradient & Typewriter */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[1.1]">
          <span className="block text-white mb-2">{t.role.split('|')[0]}</span>
          <div className="h-[1.2em]">
             <TypewriterEffect words={titles} />
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-white/80 mb-12 leading-relaxed font-medium"
        >
          {t.subhead}
        </motion.p>

        {/* Buttons with Pop Effect - Unified Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a 
            href="/resume.pdf" 
            download="闵徐舜杰_简历.pdf"
            className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm flex items-center gap-2 justify-center"
          >
            {t.cta_primary} <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm flex items-center gap-2 justify-center"
          >
            {t.cta_secondary} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

    </section>
  );
};
