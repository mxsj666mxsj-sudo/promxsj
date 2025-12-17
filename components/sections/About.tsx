"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { content } from "@/data/portfolio";
import { BentoCard } from "@/components/ui/BentoCard";
import { motion } from "framer-motion";
import { TrendingUp, Award, Globe, Users, GraduationCap, Code, Sparkles } from "lucide-react";
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

        <p className="text-2xl text-white/80 leading-relaxed max-w-3xl mb-16 font-medium">
          {about.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {/* Stats Cards */}
          {stats.map((stat, i) => {
            const Icon = icons[stat.label as keyof typeof icons] || TrendingUp;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}
              >
                <BentoCard className="h-full flex flex-col justify-center bg-black/60 backdrop-blur-xl">
                  <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    {stat.prefix && <span className="text-2xl text-white/50">{stat.prefix}</span>}
                    <span className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                      {stat.value}
                    </span>
                    {stat.suffix && <span className="text-2xl text-white/50">{stat.suffix}</span>}
                  </div>
                  <p className="text-sm font-bold text-white/60 mt-4 uppercase tracking-wider">{stat.label}</p>
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
            <BentoCard title={language === 'en' ? "Education" : "教育背景"} className="h-full bg-gradient-to-br from-neon-blue/10 to-transparent">
              <div className="space-y-8 mt-6">
                {about.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-white/10 group-hover:border-neon-blue transition-colors duration-500">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_10px_#3b82f6]" />
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                      <span className="text-xs font-bold font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">{edu.period}</span>
                    </div>
                    <p className="text-white/80 mb-3 text-sm flex items-center gap-2 font-medium">
                      <GraduationCap className="w-5 h-5 text-neon-blue" /> {edu.degree}
                    </p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-white/60 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
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
            <BentoCard title={skills.title} className="h-full bg-gradient-to-br from-neon-purple/10 to-transparent">
              <div className="grid gap-8 mt-6">
                {skills.list.map((skillGroup, i) => (
                  <div key={i}>
                    <h5 className="text-xs font-bold text-white/40 mb-4 uppercase tracking-wider flex items-center gap-2">
                      {i === 0 ? <Sparkles className="w-4 h-4 text-neon-purple" /> : i === 1 ? <Code className="w-4 h-4 text-neon-cyan" /> : <Globe className="w-4 h-4 text-neon-pink" />}
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((item, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/80 hover:bg-white hover:text-black hover:scale-110 hover:-rotate-2 transition-all cursor-default shadow-sm"
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
