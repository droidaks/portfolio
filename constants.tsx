import { 
  Smartphone, 
  Layers, 
  Cpu, 
  Globe, 
  Linkedin, 
  Mail, 
  FileText,
  Code
} from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Aakash Deepak",
  role: "Senior Android Engineer",
  tagline: "Building high-scale, performance-critical Android apps for 50M+ users.",
  email: "aksh.dpk5@gmail.com",
  phone: "+91-8588030613",
  location: "India / Remote Ready",
  summary: "Senior Android Engineer with 11+ years of experience. Expert in modern Android development (Kotlin, Jetpack Compose) and system design. Proven track record of solving complex engineering challenges—from reducing cold start times by 32% to architecting real-time WebSocket layers for banking and media logistics."
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/akshdpk5",
    icon: Linkedin,
    text: "linkedin.com/in/akshdpk5"
  },
  {
    platform: "Email",
    url: "mailto:aksh.dpk5@gmail.com",
    icon: Mail,
    text: "aksh.dpk5@gmail.com"
  },
  {
    platform: "Portfolio",
    url: "#",
    icon: Globe,
    text: "akshdpk.netlify.app"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Modern Android",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines & Flow",
      "KMM (Kotlin Multiplatform Mobile)",
      "Android SDK"
    ],
    icon: Code
  },
  {
    title: "Architecture",
    skills: [
      "Clean Architecture",
      "MVVM / MVI",
      "Modularization (Multi-module)",
      "Offline-first Architecture",
      "Dependency Injection (Hilt / Dagger)",
      "Design Systems"
    ],
    icon: Layers
  },
  {
    title: "Performance & Platform",
    skills: [
      "Android Profiler",
      "LeakCanary",
      "ProGuard / DexGuard",
      "WebSockets",
      "Bluetooth / NFC"
    ],
    icon: Cpu
  },
  {
    title: "Networking & Data",
    skills: [
      "GraphQL",
      "Retrofit",
      "Ktor",
      "REST API Design",
      "Room Database",
      "DataStore"
    ],
    icon: Globe
  },
  {
    title: "Backend & DevOps",
    skills: [
      "Node.js / Express",
      "Firebase (Auth, Firestore, FCM, Storage)",
      "CI/CD (GitHub Actions)",
      "Gradle",
      "Git / GitLab"
    ],
    icon: Smartphone
  },
  {
    title: "Testing & Quality",
    skills: [
      "JUnit",
      "Espresso",
      "MockK / Mockito",
      "UI Automator"
    ],
    icon: FileText
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Techolution",
    role: "Senior Android Developer",
    location: "Remote / New York",
    period: "Dec 2023 – Present",
    highlights: [
      "Audited and optimized startup sequence for MCB banking app (1M+ users), reducing cold start time by 32% and API latency by 28%.",
      "Built real-time Lyrics feature for iHeartRadio (50M+ users), aligning text scrolling with audio playback with millisecond precision.",
      "Led migration of 'Discover' feed to Jetpack Compose, reducing dropped frames by ~15% and boosting engagement.",
      "Implemented DexGuard obfuscation and biometric login flows for FinTech compliance.",
      "Automated release pipeline using GitHub Actions, cutting manual release time by 20%."
    ]
  },
  {
    company: "Infosys Ltd",
    role: "Technology Lead",
    location: "Bangalore, India",
    period: "Dec 2021 – Oct 2023",
    highlights: [
      "Architected offline-first inventory tracking app for Honda using Room + WorkManager, reducing sync failures by 40%.",
      "Engineered resilient WebSocket client with exponential backoff to handle frequent network drops in warehouses.",
      "Mentored team of 6, introducing strict linting and PR reviews which reduced build times by 22%."
    ]
  },
  {
    company: "Evon Technologies",
    role: "Senior Android Developer",
    location: "Dehradun, India",
    period: "Feb 2020 – Dec 2021",
    highlights: [
      "Engineered 'BeMe' mental health app (100k+ installs) using Kotlin Multiplatform Mobile (KMM), sharing 30% of logic.",
      "Refactored food delivery platform (10k+ users) to Clean Architecture, improving maintainability.",
      "Reduced crash rates by 22% on low-end devices by resolving memory leaks in image loading pipelines."
    ]
  },
  {
    company: "LueInfoServices",
    role: "Senior Android Developer",
    location: "Patna, India",
    period: "Jun 2018 – Jan 2020",
    highlights: [
      "Delivered multiple enterprise apps using MVP architecture.",
      "Integrated encrypted local storage for sensitive user data ensuring GDPR compliance."
    ]
  },
  {
    company: "ProductRx",
    role: "Senior Android Developer",
    location: "Gurgaon, India",
    period: "Jan 2016 – Apr 2017",
    highlights: [
      "Designed and developed Android applications tailored to client needs, enhancing business processes.",
      "Improved app performance through code optimization and regular updates."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "iHeart: Radio, Podcasts, Music",
    role: "Lead Developer (Lyrics Module)",
    period: "2023 - 2024",
    description: "A leading radio and podcast streaming app with 50M+ downloads. Led the development of the Lyrics Module utilizing Compose and MVVM.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "ExoPlayer"],
    metrics: ["50M+ Downloads", "25% Engagement Boost", "Real-time Sync"],
    category: "Featured",
    link: "https://play.google.com/store/apps/details?id=com.clearchannel.iheartradio.controller"
  },
  {
    title: "Digital Banking App",
    role: "Senior Developer",
    period: "2024 - Present",
    description: "Backbase-powered digital banking app for a leading FinTech organization. Enhanced Payments Dashboard and Beneficiary Management.",
    tech: ["Backbase SDK", "Kotlin", "Hilt", "CI/CD"],
    metrics: ["Multi-country Support", "20% Release Efficiency", "Secure Payments"],
    category: "Featured",
    link: "https://play.google.com/store/apps/details?id=com.mcbmu.juice"
  },
  {
    title: "BeMe: Teen Wellness",
    role: "Lead Android Developer",
    period: "2021",
    description: "Mental health app for teens built with privacy-first architecture using Kotlin Multiplatform Mobile (KMM).",
    tech: ["Kotlin", "KMM", "Ktor", "Coroutines"],
    metrics: ["100k+ Downloads", "Cross-platform Logic", "Privacy First"],
    category: "Published",
    link: "https://play.google.com/store/apps/details?id=com.bememultiplatform.android"
  },
  {
    title: "Manufacturing Platform",
    role: "Tech Lead",
    period: "2021 - 2023",
    description: "Offline-first inventory tracking system for Honda with reliable sync and real-time scanning.",
    tech: ["Socket.IO", "Room DB", "WorkManager"],
    metrics: ["15% Workload Reduction", "Offline First", "Real-time Logistics"],
    category: "Featured"
  },
  {
    title: "Neighbourhood Watch AI",
    category: "AI/ML",
    description: "Vehicle verification system using on-device OCR for privacy-first processing.",
    tech: ["ML Kit", "Compose", "Node.js", "PostgreSQL"],
    metrics: ["Zero server latency", "Privacy-first OCR"],
    link: "https://github.com/akshdpk5/neighbourhood-watch-ai"
  },
  {
    title: "App Review Intelligence",
    category: "AI/ML",
    description: "Tool using NLP APIs to batch-process app reviews and identify crash clusters.",
    tech: ["Kotlin", "NLP APIs", "Data Visualization"],
    metrics: ["90% faster analysis", "Sentiment Analysis"],
    link: "https://github.com/akshdpk5/app-review-intel"
  }
];

export const CERTIFICATIONS = [
  "Meta Android Developer Professional Certificate",
  "Google Advanced Kotlin Programming",
  "B.Tech in Computer Science"
];