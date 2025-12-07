import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  role?: string;
  period?: string;
  description: string;
  tech: string[];
  metrics?: string | string[];
  link?: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  text: string;
}