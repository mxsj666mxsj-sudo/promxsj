import { create } from 'zustand';
import { Language } from '@/types';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'zh', // Default to Chinese as requested
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ 
    language: state.language === 'zh' ? 'en' : 'zh' 
  })),
}));



