import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden text-foreground">
      {/* Neural node canvas animation background */}
      <NeuralBackground />

      {/* Navigation Header */}
      <Navbar />

      <main className="relative z-10 w-full">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5 bg-slate-950/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} Shahil Abbass. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 font-mono">
            sys.log = &quot;build success&quot; &bull; Engineered with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}