export type Language = 'en' | 'zh';

export interface NavData {
  works: string;
  about: string;
  experience: string;
  contact: string;
}

export interface HeroData {
  role: string;
  headline: string;
  subhead: string;
  cta_primary: string;
  cta_secondary: string;
}

export interface StatData {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface EducationData {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
}

export interface ProjectData {
  name: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SkillData {
  category: string;
  items: string[];
}

export interface PortfolioContent {
  nav: NavData;
  hero: HeroData;
  stats: StatData[];
  about: {
    title: string;
    summary: string;
    education: EducationData[];
  };
  experience: {
    title: string;
    list: ExperienceData[];
  };
  projects: {
    title: string;
    list: ProjectData[];
  };
  skills: {
    title: string;
    list: SkillData[];
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
}
