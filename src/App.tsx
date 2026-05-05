/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Compass, 
  Users, 
  Zap, 
  Mail,
  ArrowDown
} from "lucide-react";
import { PROJECTS, EXPERIENCE, EDUCATION } from "./constants";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-brand-cream">
      <motion.div 
        className="floating-gradient bg-brand-pink w-[500px] h-[500px] -top-20 -left-20 animate-float"
      />
      <motion.div 
        className="floating-gradient bg-brand-purple w-[600px] h-[600px] top-1/2 -right-40 animate-float-delayed"
      />
      <motion.div 
        className="floating-gradient bg-brand-peach w-[400px] h-[400px] bottom-10 left-1/4 animate-float"
      />
    </div>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="font-serif italic text-4xl md:text-5xl text-slate-800 mb-12 tracking-tight"
  >
    {children}
  </motion.h2>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="relative min-h-screen font-sans">
      <Background />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif italic text-2xl"
        >
          AO.
        </motion.div>
        <div className="flex gap-8 items-center text-xs font-medium uppercase tracking-widest">
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity group flex items-center">
            Contact
            <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden pt-20">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-brand-pink" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
              Trinidad & Tobago
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl md:text-9xl font-serif italic text-slate-900 leading-[0.9] mb-8 tracking-tighter"
          >
            Astral Ochoa
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-slate-700 font-light leading-relaxed max-w-3xl text-balance"
          >
            Refining the digital landscape of the Caribbean through <span className="text-slate-950 font-medium italic underline decoration-brand-peach/50 underline-offset-4">Human-Centered Design</span> and systemic innovation.
          </motion.p>
        </motion.div>
      </section>

      {/* Ethos Section - The "Why" */}
      <section id="about" className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-pink mb-4 block">My Ethos</span>
            <h2 className="font-serif italic text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.1]">
              Human Needs, <br/>
              <span className="text-brand-purple">Digital Progress.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-slate-700 font-light leading-relaxed space-y-6"
            >
              <p>
                Digital services across the Caribbean are improving, with more opportunities for people to access information, education, and public services online. I’m interested in helping that progress move faster and <span className="text-slate-900 font-medium">work better for the people</span> using these systems every day.
              </p>
              <p className="border-l-2 border-brand-peach/30 pl-8 italic font-serif text-slate-600">
                "I work with teams to turn research and ideas into clear, practical actions. My role is to help shape services that are easy to understand, simple to use, and built around real user needs."
              </p>
              <p>
                I focus on human-centered design and strong coordination, supporting teams in delivering digital services that improve access, usability, and overall experience.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand-pink" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Co-Creation</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-purple" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Actionable Insights</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-brand-peach/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-brand-peach" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Strategic Empathy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - The "What" */}
      <section id="work" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-pink mb-4 block">Proven Impact</span>
            <SectionHeading>Digital Ecosystems</SectionHeading>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              How my ethos translates into tangible products that serve farmers, entrepreneurs, and learners across the region.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-32">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Project Card/Visual */}
              <div className="w-full lg:w-1/2 group relative">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-brand-purple/5 border border-white/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 via-transparent to-brand-purple/10" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-4 block">{project.displayLabel}</span>
                        <h3 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-none tracking-tighter">
                          {project.title}
                        </h3>
                     </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-white">
                      <span className="text-sm font-bold uppercase tracking-widest">View Impact</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-brand-pink font-bold">{project.year}</span>
                    <div className="h-px w-8 bg-slate-200" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{project.role}</span>
                  </div>
                  
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-pink transition-all group/btn shadow-lg shadow-slate-900/10 hover:shadow-brand-pink/20"
                    >
                      View Project Impact
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Personal Impact Synopsis - Refined UX */}
                <div className="relative p-8 rounded-3xl bg-white/50 border border-white/60 backdrop-blur-sm overflow-hidden group/synopsis hover:border-brand-pink/30 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/synopsis:opacity-10 transition-opacity">
                    <Zap className="w-12 h-12 text-brand-pink" />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink mb-4 flex items-center gap-2">
                    <span className="h-1 w-4 bg-brand-pink/30 rounded-full" />
                    My Personal Impact
                  </h4>
                  <p className="text-base md:text-lg text-slate-800 leading-relaxed font-serif italic text-balance">
                    &ldquo;{project.synopsis}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Trajectory - The "Pedigree" */}
      <section id="trajectory" className="py-32 px-6 md:px-20 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Compass className="w-96 h-96 animate-spin-slow" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest mb-8 block opacity-50">Professional Backbone</span>
              <h2 className="font-serif italic text-5xl md:text-6xl text-white mb-12 tracking-tight">
                My Career <br/>
                <span className="text-brand-peach">Trajectory.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                <p>
                  As a results-driven professional with deep roots in Trinidad and Tobago, I specialize in translating complex research findings into structured recommendations.
                </p>
                <p>
                  My focus is on supporting teams in delivering digital services that prioritize the end-user, ensuring that transformation is not just technological, but fundamentally accessible.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <span className="text-xs uppercase font-bold tracking-widest mb-8 block opacity-50">Experience</span>
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-l border-white/10 pl-8 relative group hover:border-white/40 transition-colors pb-8"
                >
                  <div className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full bg-brand-peach -translate-x-[4.5px] group-hover:scale-150 transition-transform" />
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                    <h4 className="text-brand-cream text-xl font-medium">{exp.company}</h4>
                    <span className="text-xs text-slate-500 font-mono tracking-tighter">{exp.period}</span>
                  </div>
                  <p className="text-brand-pink text-xs uppercase font-bold tracking-widest mb-4">{exp.position}</p>
                </motion.div>
              ))}
              
              <div className="pt-12 border-t border-white/5">
                <span className="text-xs uppercase font-bold tracking-widest mb-8 block opacity-50">Academic Roots</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {EDUCATION.map(edu => (
                    <div key={edu.degree} className="space-y-2">
                      <p className="text-lg font-serif italic text-brand-cream">{edu.degree}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{edu.school} • {edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-40 px-6 md:px-20 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 rounded-full bg-white glass flex items-center justify-center mb-12 shadow-inner"
        >
          <Mail className="w-8 h-8 text-brand-pink" />
        </motion.div>
        
        <SectionHeading>Let&apos;s build the future together.</SectionHeading>
        
        <motion.a 
          href="mailto:astral.ochoa@hotmail.com" 
          className="text-4xl md:text-6xl font-serif text-slate-900 border-b-2 border-slate-200 hover:border-brand-pink transition-colors pb-2 mb-16 inline-block"
        >
          astral.ochoa@hotmail.com
        </motion.a>

        <div className="flex gap-10 items-center">
          <a href="https://www.linkedin.com/company/unqueue-app/" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/unqueue_app/" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-widest leading-none">T&T</span>
          </div>
        </div>

        <div className="mt-32 text-[10px] uppercase font-bold tracking-[0.8em] text-slate-300">
          © 2026 Astral Ochoa • Digital Transformation
        </div>
      </footer>
    </div>
  );
}

// Add a slow spin animation to Tailwind theme
// This would be in index.css theoretically, let's just use it as a style for convenience if needed, 
// but I'll add the spin-slow to tailwind config? Wait, I can just use animate-spin and slow it down.
