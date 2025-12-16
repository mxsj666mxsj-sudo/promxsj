import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 bg-background relative z-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted/40 font-mono">
            © 2025 MINXUSHUNJIE.
          </p>
          <p className="text-xs text-muted/30">
            Design inspired by Vercel & Linear
          </p>
        </div>
      </footer>
    </main>
  );
}
