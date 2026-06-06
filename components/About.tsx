"use client";

import { motion } from "framer-motion";
import { Award, Cpu, Flame, CheckCircle } from "lucide-react";

const stats = [
  { id: 1, label: "Projects Built", value: "3+", icon: <Award className="text-cyber-cyan" size={20} /> },
  { id: 2, label: "CGPA", value: "8.15", icon: <CheckCircle className="text-cyber-purple" size={20} /> }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-cyber-cyan">
            Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">About Me</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-indigo to-cyber-cyan mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            <p>
              I am an aspiring Data Scientist with a strong foundation in Machine Learning, Deep Learning, Computer Vision, and NLP. I recently completed my Diploma in Computer Engineering and am passionate about transforming data into actionable insights.
            </p>
            <p>
              I am skilled in Python, TensorFlow, Scikit-learn, Pandas, and FastAPI for building AI-powered applications and predictive models. My experience includes developing real-time intelligent systems such as AI Voice Assistants, Generative BI platforms, and computer vision applications.
            </p>
            <p>
              As a fresher, I approach problems with a rigorous mindset and a strong eagerness to learn. I am committed to clean, maintainable software engineering and deploying scalable AI solutions that solve real-world challenges.
            </p>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between h-40 glow-border"
              >
                <div className="p-2 rounded-xl bg-slate-900 w-fit">{stat.icon}</div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
