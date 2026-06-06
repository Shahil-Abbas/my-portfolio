import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahil Abbass | Data Scientist & AI Engineer",
  description: "Professional portfolio of Shahil Abbass, specializing in machine learning, deep learning, NLP, large language models (LLMs), RAG pipelines, and stream processing systems.",
  keywords: ["Data Scientist", "AI Engineer", "Machine Learning", "Deep Learning", "LLMs", "RAG", "Python", "PyTorch", "Next.js"],
  authors: [{ name: "Shahil Abbass" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-cyber-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
