"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const { language } = useLanguageStore();
  const t = content[language].contact;

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg text-muted mb-10 leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href="mailto:m18896938279@163.com"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t.cta}
            </a>

            <div className="flex gap-6">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-muted hover:text-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
