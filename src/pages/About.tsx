import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  const handleCategoryClick = (cat: string) => {
    setLocation(`/?cat=${cat}`);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 pt-24 px-6">
      <nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="w-full 2xl:max-w-[2000px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div
            onClick={() => setLocation("/")}
            className="text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 cursor-pointer"
          >
            Prompt Station
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm text-white/60">
            <button onClick={() => setLocation("/")} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => setLocation("/")} className="hover:text-white transition-colors">Trending</button>

            <div className="relative group py-2">
              <button className="hover:text-white transition-colors flex items-center gap-1">
                Categories <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-[#111] border border-white/10 rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl">
                {["All", "Realistic", "Cinematic", "Fashion", "Other"].map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="block w-full text-left px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button className="text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transition-all"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
        >
          About Prompt Station
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg"
        >
          <p className="text-white/60 leading-relaxed text-lg mb-6">
            Prompt Station is a growing library of carefully crafted prompts designed to help creators, designers, marketers, developers, and AI enthusiasts get better results from modern AI tools.
          </p>
          <p className="text-white/60 leading-relaxed text-lg mb-6">
            Whether you're editing images, generating artwork, writing content, designing user interfaces, creating videos, or exploring new creative ideas, Prompt Station provides ready-to-use prompts that save time and improve output quality.
          </p>
          <p className="text-white/60 leading-relaxed text-lg">
            Our goal is simple: make powerful AI prompting accessible to everyone. Instead of spending hours experimenting with prompt structures, users can discover, copy, and customize professionally written prompts tailored for different tools and use cases.
          </p>
          <p className="text-white/60 leading-relaxed text-lg">
            From image enhancement and design generation to content creation and productivity workflows, Prompt Station helps transform ideas into results—faster, smarter, and more effectively.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
