"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";
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

          <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-[23px] before:top-3 before:h-full before:w-[1px] before:bg-white/10 pl-12 md:pl-20">
            {experience.list.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot: Simple & Elegant */}
                <div className="absolute -left-[42px] md:-left-[74px] top-1.5 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-background border border-white/20 ring-4 ring-background z-10" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-muted/60">
                    <span className="text-primary font-medium">{job.role}</span>
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

                <ul className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <li 
                      key={idx} 
                      className="text-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-[1px] before:bg-white/20"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects: Clean Grid */}
        <div>
          <SectionHeading title={projects.title} subtitle="Selected Works" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.list.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1" />
                    </h3>
                    <p className="text-sm font-mono text-muted/50 mt-1">{project.role}</p>
                  </div>
                </div>
                
                <p className="text-muted/80 mb-8 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded bg-white/5 text-muted/60 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
