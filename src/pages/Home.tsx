import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronUp, Copy, Heart, Share2, Star, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { prompts, Prompt } from "@/data/prompts";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check if we came from another page with a category selected
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    if (cat) {
      setCategory(cat);
      setTimeout(() => {
        document.getElementById("gallery-section")?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clean up URL
      setLocation("/", { replace: true });
    }

    // Simulate loading screen
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLocation]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
      setShowScrollTop(totalScroll > 500);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPrompts = prompts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.prompt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Realistic", "Cinematic", "Fashion", "Other"];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4"
              >
                PromptsWorld
              </motion.div>
              <div className="w-48 h-[1px] bg-white/10 overflow-hidden relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 h-[2px] bg-white z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="w-full 2xl:max-w-[2000px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div onClick={() => { setCategory("All"); window.scrollTo({top:0, behavior:'smooth'}); }} className="cursor-pointer text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            PromptsWorld
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm text-white/60">
            <button onClick={() => { setCategory("All"); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors relative group text-white">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transition-all"></span>
            </button>
            <button onClick={() => document.getElementById("gallery-section")?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors relative group">
              Trending
            </button>
            
            <div className="relative group py-2">
              <button className="hover:text-white transition-colors flex items-center gap-1">
                Categories <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-[#111] border border-white/10 rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl">
                 {categories.map(cat => (
                   <button 
                     key={cat} 
                     onClick={() => {
                       setCategory(cat);
                       document.getElementById("gallery-section")?.scrollIntoView({ behavior: 'smooth' });
                     }} 
                     className="block w-full text-left px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                   >
                     {cat}
                   </button>
                 ))}
              </div>
            </div>

            <button onClick={() => setLocation("/about")} className="hover:text-white transition-colors relative group">
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-black drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            PromptsWorld
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover powerful AI image prompts, explore creative transformations, and elevate your visual creations with carefully curated prompt collections.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => document.getElementById("gallery-section")?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explore Prompts
            </button>
            <button 
              onClick={() => document.getElementById("gallery-section")?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors"
            >
              Trending
            </button>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section id="gallery-section" className="sticky top-16 z-30 bg-black/80 backdrop-blur-xl border-y border-white/5 py-4">
        <div className="w-full 2xl:max-w-[2000px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search prompts..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-2 pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  category === cat ? "bg-white text-black" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full 2xl:max-w-[2000px] mx-auto px-6 md:px-12 py-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredPrompts.map((prompt, i) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 10) * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
              onClick={() => setSelectedPrompt(prompt)}
            >
              <div className="overflow-hidden bg-white/5 rounded-2xl">
                <img 
                  src={prompt.image} 
                  alt={prompt.title}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if unsplash random fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=540&q=80";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
                <h3 className="text-white font-medium truncate">{prompt.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-md text-white/90">
                    {prompt.category}
                  </span>
                  <div className="flex items-center gap-3 text-white/80 text-xs font-medium">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {prompt.likes}</span>
                    <span className="flex items-center gap-1"><Copy className="w-3 h-3" /> {prompt.copies}</span>
                  </div>
                </div>
              </div>

              {/* Quick Copy overlay */}
              <button 
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(prompt.prompt);
                }}
              >
                <Copy className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
        {filteredPrompts.length === 0 && (
          <div className="text-center py-24 text-white/40">
            No prompts found for this criteria.
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-white/40">
        <p className="text-sm">© {new Date().getFullYear()} PromptsWorld. Crafted with intention.</p>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors z-40"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedPrompt(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(255,255,255,0.05)] relative"
            >
              <button 
                onClick={() => setSelectedPrompt(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white/60 hover:text-white rounded-full backdrop-blur-md border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] bg-black/50 relative overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={selectedPrompt.image} 
                  alt={selectedPrompt.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col h-full overflow-y-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2 py-1 border border-white/10 text-white/70 rounded bg-white/5 uppercase tracking-wider font-medium">
                    {selectedPrompt.category}
                  </span>
                  <div className="flex gap-2">
                    {selectedPrompt.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-white/40">#{tag}</span>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl font-bold tracking-tight mb-2 text-white/90">{selectedPrompt.title}</h2>
                
                <div className="flex gap-6 mb-8 text-white/40 text-sm">
                  <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> {selectedPrompt.likes} likes</span>
                  <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> {selectedPrompt.views} views</span>
                  <span className="flex items-center gap-1.5"><Copy className="w-4 h-4" /> {selectedPrompt.copies} copies</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 pt-14 rounded-xl relative group mb-8 flex-1">
                  <div className="text-white/80 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    {selectedPrompt.prompt}
                  </div>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(selectedPrompt.prompt);
                      const btn = document.getElementById('copy-btn-text');
                      if (btn) {
                        btn.innerText = "Copied!";
                        setTimeout(() => btn.innerText = "Copy Prompt", 2000);
                      }
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white hover:text-black border border-white/20 rounded-md transition-all flex items-center gap-2 text-xs font-medium text-white/70"
                  >
                    <Copy className="w-3 h-3" />
                    <span id="copy-btn-text" className="hidden sm:inline">Copy Prompt</span>
                  </button>
                </div>

                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 py-3 bg-white text-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                    <Copy className="w-4 h-4" /> Use Prompt
                  </button>
                  <button className="p-3 border border-white/10 rounded-xl hover:bg-white/5 text-white/70 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 border border-white/10 rounded-xl hover:bg-white/5 text-white/70 transition-colors">
                    <Star className="w-5 h-5" />
                  </button>
                  <button className="p-3 border border-white/10 rounded-xl hover:bg-white/5 text-white/70 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
