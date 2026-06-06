"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, ServerCrash, Cpu, Code2, GitBranch, Layers, ShieldCheck, BarChart3 } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="text-cyber-cyan" size={20} />,
    description: "Building intelligent models and predictive systems.",
    skills: [
      { name: "Scikit-Learn", icon: <Layers size={16} /> },
      { name: "TensorFlow", icon: <Cpu size={16} /> },
      { name: "Keras", icon: <Layers size={16} /> },
      { name: "PyTorch", icon: <Cpu size={16} /> },
      { name: "OpenCV", icon: <BrainCircuit size={16} /> },
      { name: "Hugging Face", icon: <Code2 size={16} /> },
      { name: "LangChain & YOLO", icon: <Layers size={16} /> },
    ],
  },
  {
    title: "Data Analysis & Databases",
    icon: <Database className="text-cyber-purple" size={20} />,
    description: "Processing, visualizing, and storing data effectively.",
    skills: [
      { name: "Python", icon: <Code2 size={16} /> },
      { name: "Pandas & NumPy", icon: <Layers size={16} /> },
      { name: "Matplotlib & Seaborn", icon: <BarChart3 size={16} /> },
      { name: "Tableau & Power BI", icon: <BarChart3 size={16} /> },
      { name: "MySQL", icon: <Database size={16} /> },
      { name: "MongoDB", icon: <Database size={16} /> },
    ],
  },
  {
    title: "Tools & Engineering",
    icon: <ServerCrash className="text-cyber-indigo" size={20} />,
    description: "Developing and deploying AI-powered applications.",
    skills: [
      { name: "Jupyter Notebook", icon: <Code2 size={16} /> },
      { name: "Google Colab", icon: <Layers size={16} /> },
      { name: "VS Code & PyCharm", icon: <Code2 size={16} /> },
      { name: "FastAPI", icon: <ServerCrash size={16} /> },
      { name: "Tailwind CSS", icon: <Code2 size={16} /> },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-cyber-purple">
            Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">My Toolkit</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-purple to-cyber-cyan mx-auto rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-8 rounded-2xl glass-panel glow-border flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h4>
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-gray-300 hover:text-white hover:border-white/15 transition-all duration-200 cursor-default"
                  >
                    <span className="text-gray-500">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
