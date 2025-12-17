"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Experience = () => {
  const { language } = useLanguageStore();
  const { experience, projects } = content[language];

  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="mx-auto max-w-5xl">
        
        {/* Work Experience */}
        <div className="mb-32">
          <SectionHeading title={experience.title} subtitle="Career Path" />

          <div className="space-y-16 relative before:absolute before:left-[19px] md:before:left-[23px] before:top-4 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-neon-purple before:via-neon-cyan before:to-transparent pl-12 md:pl-24">
            {experience.list.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot: Glowing */}
                <div className="absolute -left-[43px] md:-left-[75px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-neon-purple ring-4 ring-black shadow-[0_0_15px_#d946ef] z-10 group-hover:scale-125 transition-transform duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-pink transition-all">{job.company}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-bold font-mono text-white/50">
                    <span className="text-neon-cyan px-2 py-1 bg-neon-cyan/10 rounded">{job.role}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{job.period}</span>
                    {job.location && (
                      <>
                        <span className="hidden md:inline">•</span>
                        <span>{job.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-4">
                  {job.achievements.map((achievement, idx) => (
                    <li 
                      key={idx} 
                      className="text-lg text-white/70 leading-relaxed pl-6 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-white/20 hover:text-white transition-colors"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects: 3D Hover Cards */}
        <div>
          <SectionHeading title={projects.title} subtitle="Selected Works" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.list.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)] overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl text-white group-hover:bg-neon-cyan group-hover:text-black transition-colors duration-300">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-sm font-mono text-neon-cyan mb-4">{project.role}</p>
                  
                  <p className="text-white/60 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-white/40 border border-white/5 group-hover:text-white group-hover:border-white/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
