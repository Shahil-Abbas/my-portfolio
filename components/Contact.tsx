"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Github = ({ size = 18 }: { size?: number }) => (
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

const Linkedin = ({ size = 18 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Section Title */}
        <div className="space-y-3 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-cyber-cyan">
            Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-indigo mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {/* Email Card */}
            <a
              href="mailto:shahilabbas801@gmail.com"
              className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl glass-panel glass-panel-hover border border-white/5 glow-border transition-all"
            >
              <div className="p-4 rounded-full bg-slate-900 text-cyber-cyan">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">Email Me</div>
                <div className="text-sm font-semibold text-white">
                  shahilabbas801@gmail.com
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+919526639276"
              className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl glass-panel glass-panel-hover border border-white/5 glow-border transition-all"
            >
              <div className="p-4 rounded-full bg-slate-900 text-cyber-purple">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">Call Me</div>
                <div className="text-sm font-semibold text-white">
                  +91 9526639276
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl glass-panel border border-white/5">
              <div className="p-4 rounded-full bg-slate-900 text-cyber-indigo">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">Location</div>
                <div className="text-sm font-semibold text-white">
                  Kasaragod, Kerala, India
                </div>
              </div>
            </div>
          </div>

          {/* Socials Section */}
          <div className="pt-12 border-t border-white/5">
            <h4 className="text-lg font-medium text-white mb-6">Connect me on socials</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Shahil-Abbas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel glass-panel-hover text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="text-sm font-mono">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/shahil-abbas-730672357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel glass-panel-hover text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm font-mono">LinkedIn</span>
              </a>

              <a
                href="mailto:shahilabbas801@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel glass-panel-hover text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm font-mono">Mail</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
