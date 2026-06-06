export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  metrics: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "aether-bi",
    title: "AETHER BI Assistant",
    description: "A full-stack Generative BI (Business Intelligence) Assistant with an AI-powered Natural Language to SQL Engine. Features dynamic data visualization, interactive analytics dashboard, CSV/Excel uploads, and secure SQL execution pipeline.",
    role: "Full-Stack AI Developer",
    metrics: "Local LLM Integration (Llama 3.2)",
    tags: ["Python", "Flask", "SQLite", "JavaScript", "Tailwind CSS", "Plotly", "Ollama"],
    githubUrl: "https://github.com/Shahil-Abbas/AETHER-BI-assistant-",
    demoUrl: "#"
  },
  {
    id: "ai-voice-assistant",
    title: "AI Voice Assistant",
    description: "A voice-controlled AI assistant capable of real-time voice command processing, automated task execution, and contextual response handling. Includes text-to-speech, speech-to-text, and intelligent mathematical expression handling.",
    role: "AI Developer",
    metrics: "Real-time command execution",
    tags: ["Python", "NLP", "SpeechRecognition", "pyttsx3", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/Shahil-Abbas/Ai_assistant",
    demoUrl: "#"
  },
  {
    id: "gesture-control-pc",
    title: "Gesture Control PC",
    description: "A real-time hand gesture recognition system for controlling PC operations. Implements finger tracking for virtual mouse functionalities like cursor movement, clicking, and scrolling using computer vision.",
    role: "Computer Vision Engineer",
    metrics: "Real-time gesture detection",
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI"],
    githubUrl: "https://github.com/Shahil-Abbas/gesture_control_pc",
    demoUrl: "#"
  }
];
