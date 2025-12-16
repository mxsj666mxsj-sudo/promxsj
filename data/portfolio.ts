import { PortfolioContent } from "@/types";

export const content: Record<'en' | 'zh', PortfolioContent> = {
  en: {
    nav: { works: "Projects", about: "About", experience: "Experience", contact: "Contact" },
    hero: {
      role: "Product Manager | 2026 Master's Grad",
      headline: "Building Systems out of Chaos.",
      subhead: "Driving 0-1 product lifecycles with data-driven insights and AI innovation. Bridging technical complexity and user value.",
      cta_primary: "Download Resume",
      cta_secondary: "Get in Touch"
    },
    stats: [
      { label: "DAU Growth", value: "80", suffix: "k+", prefix: "0 to " },
      { label: "Revenue Impact", value: "2.6", suffix: "M+", prefix: "¥" },
      { label: "IELTS Score", value: "7.0" },
      { label: "Retention Rate", value: "28", suffix: "%" },
    ],
    about: {
      title: "The Architect",
      summary: "I am a Product Manager with a Master's in Management from the University of Bristol (Top 5%). My background spans Fintech (Hithink RoyalFlush) and Automotive (Continental), where I specialized in building products from 0 to 1 and integrating AIGC solutions.",
      education: [
        {
          school: "University of Bristol (QS 51)",
          degree: "MSc Management",
          period: "2024.07 - 2025.12",
          details: ["Academic Performance: Top 5%", "Distinction in core courses", "Organizer of 'The Pioneer Session' (150+ attendees)"]
        },
        {
          school: "Soochow University (211)",
          degree: "BSc Management Science",
          period: "2019.08 - 2023.06",
          details: ["GPA: 3.6/4.0", "Debate Team Captain"]
        }
      ]
    },
    experience: {
      title: "Experience",
      list: [
        {
          company: "Hithink RoyalFlush",
          role: "Product Manager",
          period: "2023.06 - 2024.07",
          location: "Hangzhou",
          achievements: [
            "Led core product line 0-1, achieving 80k+ DAU and 28% retention.",
            "Generated ¥2.6M+ revenue in 6 months via commercialization strategies.",
            "Integrated AIGC (Text-to-Video) reducing response time to <5 mins.",
            "Spearheaded international product launches in Malaysia and HK/US markets."
          ]
        },
        {
          company: "Continental",
          role: "Product Intern",
          period: "2023.01 - 2023.03",
          location: "Changshu",
          achievements: [
            "Managed lifecycle for BMW EDT project components.",
            "Authored detailed PRDs for automotive connectivity products."
          ]
        },
        {
          company: "Global Dreamer Foundation",
          role: "Assistant PM",
          period: "2022.01 - 2024.09",
          location: "Remote",
          achievements: [
            "Conducted competitive analysis for ed-tech apps.",
            "Drove 300% traffic growth for UC Summer School project via data-driven marketing."
          ]
        }
      ]
    },
    projects: {
      title: "Selected Projects",
      list: [
        {
          name: "FESCO Adecco CEO for One Month",
          role: "Project Lead",
          period: "2023.03 - 2023.05",
          description: "Designed an all-in-one student service platform. Validated user needs and created a commercial business plan recognized by global VP.",
          tags: ["Product Strategy", "User Research", "Commercialization"]
        },
        {
          name: "Second-hand Trading Platform",
          role: "Founder",
          period: "2022.09 - 2023.03",
          description: "Launched an MVP for factory workers in Changshu. Grew to 300+ seed users in 2 months solving trust and efficiency issues.",
          tags: ["0-1 Startup", "MVP", "Growth Hacking"]
        }
      ]
    },
    skills: {
      title: "Tech Stack",
      list: [
        { category: "Product", items: ["Figma", "Axure RP", "PRD Writing", "Data Analysis (SQL)"] },
        { category: "Tech & AI", items: ["Python", "AIGC Application", "Prompt Engineering", "System Design"] },
        { category: "Languages", items: ["English (IELTS 7.0)", "Mandarin (Native)"] }
      ]
    },
    contact: {
      title: "Let's Build Together",
      subtitle: "Open to opportunities in Product Management.",
      cta: "Start a Conversation"
    }
  },
  zh: {
    nav: { works: "项目", about: "关于", experience: "经历", contact: "联系" },
    hero: {
      role: "产品经理 | 26届管理学硕士",
      headline: "在混沌中构建秩序，用系统思维寻找最优解。",
      subhead: "拥有从0到1的产品落地经验，擅长数据驱动与AI场景化创新。致力于连接技术复用性与商业价值。",
      cta_primary: "下载简历",
      cta_secondary: "与我联系"
    },
    stats: [
      { label: "日活增长", value: "80", suffix: "k+", prefix: "0 to " },
      { label: "直接创收", value: "260", suffix: "万+", prefix: "¥" },
      { label: "雅思", value: "7.0" },
      { label: "留存率", value: "28", suffix: "%" },
    ],
    about: {
      title: "关于我",
      summary: "布里斯托大学管理学硕士（Top 5% 优异成绩）。曾在同花顺与德国大陆集团担任产品经理/实习生。我不仅关注功能实现，更在乎商业闭环与用户价值。",
      education: [
        {
          school: "University of Bristol (QS 51)",
          degree: "管理学 硕士",
          period: "2024.07 - 2025.12",
          details: ["学业成绩：专业前 5%", "核心课程 Distinction", "主导策划 'The Pioneer Session' 创业交流会"]
        },
        {
          school: "苏州大学 (211)",
          degree: "管理科学 本科",
          period: "2019.08 - 2023.06",
          details: ["GPA: 3.6/4.0", "校辩论队队长", "擅长运筹学与系统思维"]
        }
      ]
    },
    experience: {
      title: "工作经历",
      list: [
        {
          company: "同花顺 (Hithink RoyalFlush)",
          role: "产品经理",
          period: "2023.06 - 2024.07",
          location: "杭州",
          achievements: [
            "独立负责核心产品线0-1搭建，日活突破8W+，7日留存率28%。",
            "驱动产品半年创收260W+，成功探索B端服务商业模式。",
            "主导AIGC（文生视频）落地，响应时间<5分钟，峰值浏览23W+。",
            "负责马来西亚及港美股市场产品0-1落地，建立海外数据分析范式。"
          ]
        },
        {
          company: "大陆集团 (Continental)",
          role: "产品实习生",
          period: "2023.01 - 2023.03",
          location: "常熟",
          achievements: [
            "负责宝马EDT项目硬件产品全生命周期管理。",
            "主导撰写车载互联产品PRD，精准定义功能与验收标准。"
          ]
        },
        {
          company: "Global Dreamer Foundation",
          role: "产品经理助理",
          period: "2022.01 - 2024.09",
          location: "远程",
          achievements: [
            "输出竞品分析报告，多项建议被纳入产品需求池。",
            "主导暑校项目0-1冷启动，官网浏览量提升300%。"
          ]
        }
      ]
    },
    projects: {
      title: "精选项目",
      list: [
        {
          name: "FESCO Adecco CEO for One Month",
          role: "项目负责人",
          period: "2023.03 - 2023.05",
          description: "中国区五强项目。设计“学生向”一体化APP平台，完成从用户调研到商业计划书的全案策划，获全球高管高度认可。",
          tags: ["产品策略", "用户调研", "商业策划"]
        },
        {
          name: "常熟开发区二手闲置平台",
          role: "项目发起人",
          period: "2022.09 - 2023.03",
          description: "基于蓝领群体痛点的微创业项目。通过社群MVP验证需求，2个月获取300+种子用户，设计了清晰的商业化路径。",
          tags: ["0-1 创业", "MVP", "增长黑客"]
        }
      ]
    },
    skills: {
      title: "技能栈",
      list: [
        { category: "产品能力", items: ["Figma", "Axure RP", "PRD撰写", "SQL数据分析", "竞品分析"] },
        { category: "技术 & AI", items: ["Python", "AIGC应用", "Prompt Engineering", "系统设计"] },
        { category: "语言能力", items: ["英语 (雅思 7.0)", "普通话 (母语)"] }
      ]
    },
    contact: {
      title: "开始合作",
      subtitle: "随时到岗，期待与您共事。",
      cta: "发送邮件"
    }
  }
};
