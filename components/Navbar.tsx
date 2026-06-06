"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracker
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-indigo to-cyber-cyan flex items-center justify-center font-mono text-sm text-white group-hover:rotate-6 transition-transform duration-300">
              SA
            </span>
            <span>Shahil Abbass</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-white ${activeSection === link.href ? "text-white" : "text-gray-400"
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-px h-4 bg-white/10" />

            {/* Socials */}
            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="https://github.com/shahil-abbas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/shahil-abbas-730672357"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shahil.abbas.work@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </nav>

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-semibold tracking-wide hover:text-white transition-colors ${activeSection === link.href ? "text-white" : "text-gray-400"
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="w-12 h-px bg-white/10" />

              <div className="flex gap-6 text-gray-400">
                <a
                  href="https://github.com/shahilabbas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/shahil-abbas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:shahil.abbas.work@gmail.com"
                  className="hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
