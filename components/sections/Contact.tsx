"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export const Contact = () => {
  const { language } = useLanguageStore();
  const t = content[language].contact;

  return (
    <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue blur-[120px] opacity-20 rounded-full pointer-events-none animate-pulse-glow" />

      <div className="mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12 font-medium">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col items-center gap-10">
            <a 
              href="mailto:m18896938279@163.com"
              className="group relative px-10 py-5 bg-white text-black rounded-full font-black text-xl overflow-hidden transition-transform hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center gap-3"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">{t.cta}</span>
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>

            <div className="flex gap-6">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/20 hover:scale-125 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
