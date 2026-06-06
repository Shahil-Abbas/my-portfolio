"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative gradient glowing blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyber-indigo/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-cyber-cyan/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Text Details */}
        <div className="md:col-span-7 text-left space-y-6 flex flex-col justify-center order-2 md:order-1">

          {/* Name & Headline */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-indigo via-cyber-purple to-cyber-cyan">
                Shahil Abbass
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-gray-300 font-sans tracking-wide"
            >
              Decoding Complexity, Engineering Intelligence
            </motion.h2>
          </div>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-lg text-base sm:text-lg leading-relaxed"
          >
            I am a Data Scientist &amp; AI Engineer passionate about designing scalable machine learning systems, advanced Retrieval-Augmented Generation (RAG) pipelines, and intelligent predictive algorithms that solve complex real-world challenges.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-indigo to-cyber-purple text-white font-medium text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-cyber-indigo/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-panel text-white font-medium text-sm flex items-center gap-2 hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-0.5"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Picture Container */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
          >
            {/* Spinning gradient ring background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-indigo via-cyber-purple to-cyber-cyan animate-[spin_8s_linear_infinite] opacity-60 blur-sm p-1.5" />

            {/* Image mask container */}
            <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-950 p-1 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Shahil Abbass"
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
