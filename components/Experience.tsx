"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Data Scientist Intern",
    company: "SMEC Technologies",
    period: "Internship",
    highlights: [
      "Assisted in data preprocessing, cleaning, and EDA using Pandas, NumPy, and Matplotlib.",
      "Developed machine learning models for classification and prediction tasks using Scikit-learn.",
      "Built interactive data visualizations and dashboards to present analytical insights.",
      "Performed feature engineering, data transformation, and model optimization techniques.",
      "Collaborated on AI projects involving NLP, computer vision, and predictive analytics."
    ]
  },
  {
    role: "Diploma in Computer Engineering",
    company: "Govt Polytechnic College Kasaragod",
    period: "2022 - 2025",
    highlights: [
      "Graduated with a CGPA of 8.15.",
      "Focused on foundational computer science principles, programming, and software development.",
      "Participated in various technical projects and practical labs."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-cyber-indigo">
            Career
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Professional Experience
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-indigo to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[53px] md:-left-[69px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border border-cyber-indigo flex items-center justify-center">
                <Briefcase size={12} className="text-cyber-cyan" />
              </div>

              {/* Card content */}
              <div className="p-8 rounded-2xl glass-panel glow-border space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-wide">
                      {exp.role}
                    </h4>
                    <span className="text-sm font-semibold text-cyber-cyan">
                      {exp.company}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono w-fit">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 text-gray-300 text-sm leading-relaxed list-disc list-inside pl-1">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="marker:text-cyber-indigo">
                      <span className="pl-1.5">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
