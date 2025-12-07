import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Button } from './components/Button';
import { 
  PERSONAL_INFO, 
  EXPERIENCE, 
  PROJECTS, 
  SKILLS, 
  SOCIAL_LINKS, 
  CERTIFICATIONS 
} from './constants';
import { 
  Download, 
  ExternalLink, 
  Briefcase, 
  Award, 
  Code2, 
  Terminal,
  Menu,
  X,
  Globe,
  Github,
  Calendar
} from 'lucide-react';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
    )}
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeExpIndex, setActiveExpIndex] = useState(0);

  useEffect(() => {
    // Initial theme set
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-500 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter">
                AK<span className="text-primary-500">.</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle />
              <Button 
                variant="primary" 
                className="!py-2 !px-4 !text-sm"
                onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 dark:text-slate-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="primary" 
                className="w-full justify-center"
                onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[30%] -right-[10%] w-[700px] h-[700px] rounded-full bg-primary-500/10 blur-3xl rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-medium mb-6 border border-primary-100 dark:border-primary-800">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Open to New Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              Crafting Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">Android</span> Experiences
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                View Projects
              </Button>
              <Button variant="outline" onClick={() => window.open(SOCIAL_LINKS[0].url, '_blank')}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            <div className="mt-16 flex justify-center gap-8">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-primary-500 transition-colors transform hover:-translate-y-1"
                  aria-label={link.platform}
                >
                  <link.icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Summary Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Engineering at Scale
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {PERSONAL_INFO.summary}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="text-3xl font-bold text-primary-500 mb-1">11+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="text-3xl font-bold text-primary-500 mb-1">50M+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Users Impacted</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="text-3xl font-bold text-primary-500 mb-1">32%</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Perf. Optimization</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="text-3xl font-bold text-primary-500 mb-1">100k+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">KMM App Installs</div>
                </div>
              </div>
            </div>
            
            {/* Certifications Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 transform skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl opacity-20"></div>
              <div className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-primary-500" size={32} />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Certifications & Education</h4>
                </div>
                <ul className="space-y-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Where I've Worked" subtitle="Experience" />
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-12">
            {/* Tabs List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-800 md:w-max min-w-[160px] shrink-0 h-max pb-px md:pb-0" 
                 aria-label="Experience tabs">
              {EXPERIENCE.map((exp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExpIndex(idx)}
                  className={`
                    px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-mono text-left transition-all duration-200 whitespace-nowrap
                    border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px]
                    hover:bg-slate-100 dark:hover:bg-slate-800/50
                    ${activeExpIndex === idx 
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-slate-100/50 dark:bg-slate-800/30' 
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}
                  `}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 md:pl-4 min-h-[300px]">
              {EXPERIENCE.map((exp, idx) => (
                <div 
                  key={idx}
                  className={`${activeExpIndex === idx ? 'block animate-fadeIn' : 'hidden'}`}
                  role="tabpanel"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role} <span className="text-primary-500">@ {exp.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-slate-500 dark:text-slate-400 mb-6">
                    {exp.period} | {exp.location}
                  </p>
                  
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                        <span className="text-primary-500 mr-3 mt-1.5 text-xs">▹</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Technical Arsenal" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((category) => (
              <div key={category.title} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-primary-500 shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                    <category.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 text-sm font-medium rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Featured Projects" subtitle="Work" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div key={index} className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                      {project.category}
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-slate-400 hover:text-primary-500 transition-colors"
                        aria-label="View Project"
                      >
                        <span className="text-xs font-medium uppercase tracking-wider">View</span>
                        {project.link.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  {(project.role || project.period) && (
                     <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                       {project.role && <span>{project.role}</span>}
                       {project.role && project.period && <span>•</span>}
                       {project.period && <span className="flex items-center"><Calendar size={12} className="mr-1"/> {project.period}</span>}
                     </div>
                  )}

                  <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {project.metrics && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {Array.isArray(project.metrics) ? (
                        project.metrics.map((m, i) => (
                          <div key={i} className="px-2.5 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-100 dark:border-green-900/30 flex items-center gap-2">
                             <Terminal size={12} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                             <span className="text-xs font-semibold text-green-700 dark:text-green-300 leading-none">{m}</span>
                          </div>
                        ))
                      ) : (
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30 flex items-center gap-2">
                          <Terminal size={16} className="text-green-600 dark:text-green-400" />
                          <span className="text-sm font-semibold text-green-700 dark:text-green-300">Impact: {project.metrics}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.tech.map((t) => (
                      <span key={t} className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Code2 size={12} className="mr-1" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Build the Future</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
            Currently available for Senior/Lead Android Engineering roles. Open to discussing high-scale challenges.
          </p>
          <Button 
            className="mb-12 shadow-xl shadow-primary-500/20"
            onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
          >
            Start a Conversation
          </Button>
          
          <div className="flex gap-6 mb-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
          
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;