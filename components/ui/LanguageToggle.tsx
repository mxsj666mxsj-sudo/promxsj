"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-8 w-16 items-center rounded-full bg-white/10 px-1"
      aria-label="Toggle Language"
    >
      <motion.div
        layout
        className="h-6 w-6 rounded-full bg-white"
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          marginLeft: language === 'zh' ? '0' : 'auto',
          marginRight: language === 'en' ? '0' : 'auto',
        }}
      />
      <span className="absolute left-2 text-xs font-medium text-white mix-blend-difference">ZH</span>
      <span className="absolute right-2 text-xs font-medium text-white mix-blend-difference">EN</span>
    </button>
  );
};

