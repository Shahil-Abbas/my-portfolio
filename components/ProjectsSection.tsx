"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BarChart, Brain } from "lucide-react";
import { projects, Project } from "@/data/projects";

const Github = ({ size = 14 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-cyber-cyan">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-indigo to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project: Project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between glow-border h-full relative"
              >
                <div>
                  {/* Header: Role & Metrics */}
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {project.role}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-indigo/10 border border-cyber-indigo/30 text-xs text-cyber-cyan font-mono">
                      <BarChart size={12} />
                      {project.metrics}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Brain size={18} className="text-cyber-cyan flex-shrink-0" />
                    <span>{project.title}</span>
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="flex gap-4 border-t border-white/5 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-cyber-cyan hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Interactive Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
