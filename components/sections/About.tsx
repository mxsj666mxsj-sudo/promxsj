"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { BentoCard } from "@/components/ui/BentoCard";
import { motion } from "framer-motion";
import { TrendingUp, Award, Globe, Users, GraduationCap, Code, Database, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  "DAU Growth": TrendingUp,
  "日活增长": TrendingUp,
  "Revenue Impact": Award,
  "直接创收": Award,
  "IELTS Score": Globe,
  "雅思": Globe,
  "Retention Rate": Users,
  "留存率": Users,
};

export const About = () => {
  const { language } = useLanguageStore();
  const { stats, about, skills } = content[language];

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={about.title} subtitle="Overview" />

        <p className="text-xl text-muted leading-relaxed max-w-3xl mb-16 font-light">
          {about.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {/* Stats Cards */}
          {stats.map((stat, i) => {
            const Icon = icons[stat.label as keyof typeof icons] || TrendingUp;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}
              >
                <BentoCard className="h-full flex flex-col justify-center">
                  <div className="mb-4 p-2 w-fit rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    {stat.prefix && <span className="text-2xl text-muted/60">{stat.prefix}</span>}
                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                      {stat.value}
                    </span>
                    {stat.suffix && <span className="text-2xl text-muted/60">{stat.suffix}</span>}
                  </div>
                  <p className="text-sm font-medium text-muted mt-3">{stat.label}</p>
                </BentoCard>
              </motion.div>
            );
          })}

          {/* Education Card */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 md:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <BentoCard title={language === 'en' ? "Education" : "教育背景"} className="h-full">
              <div className="space-y-8 mt-6">
                {about.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l border-white/10">
                    <div className="absolute -left-[3px] top-2 w-1.5 h-1.5 rounded-full bg-primary" />
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-foreground">{edu.school}</h4>
                      <span className="text-xs font-mono text-muted/60">{edu.period}</span>
                    </div>
                    <p className="text-muted/80 mb-3 text-sm flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" /> {edu.degree}
                    </p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted/60 flex items-start gap-2">
                          <span className="w-1 h-1 bg-white/20 rounded-full mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 md:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <BentoCard title={skills.title} className="h-full">
              <div className="grid gap-8 mt-6">
                {skills.list.map((skillGroup, i) => (
                  <div key={i}>
                    <h5 className="text-xs font-semibold text-muted/50 mb-4 uppercase tracking-wider flex items-center gap-2">
                      {i === 0 ? <Sparkles className="w-3 h-3" /> : i === 1 ? <Code className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-sm text-muted hover:text-foreground hover:bg-white/10 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
