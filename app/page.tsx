import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-neon-pink selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 bg-black/80 backdrop-blur-md relative z-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-white/40 font-mono font-bold">
            © 2025 MINXUSHUNJIE.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Cyber-Pop Edition
          </div>
        </div>
      </footer>
    </main>
  );
}
