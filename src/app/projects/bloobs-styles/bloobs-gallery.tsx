"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { 
  Search, 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Play, 
  Pause,
  ArrowUpRight
} from "lucide-react";
import { BLOOBS_STYLES, BloobStyleEntry } from "@/lib/bloobs-styles-data";

export function BloobsGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalStyle, setActiveModalStyle] = useState<BloobStyleEntry | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPlayingHero, setIsPlayingHero] = useState<boolean>(true);

  // Extract all categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    BLOOBS_STYLES.forEach((s) => set.add(s.category));
    return ["all", ...Array.from(set)];
  }, []);

  // Filtered styles
  const filteredStyles = useMemo(() => {
    return BLOOBS_STYLES.filter((s) => {
      const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        s.name.toLowerCase().includes(query) ||
        s.prompt.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyPrompt = async (entry: BloobStyleEntry, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    try {
      await navigator.clipboard.writeText(entry.prompt);
      setCopiedId(entry.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleNextInModal = () => {
    if (!activeModalStyle) return;
    const currentIndex = filteredStyles.findIndex((s) => s.id === activeModalStyle.id);
    if (currentIndex !== -1 && currentIndex < filteredStyles.length - 1) {
      setActiveModalStyle(filteredStyles[currentIndex + 1]);
    } else {
      setActiveModalStyle(filteredStyles[0]);
    }
  };

  const handlePrevInModal = () => {
    if (!activeModalStyle) return;
    const currentIndex = filteredStyles.findIndex((s) => s.id === activeModalStyle.id);
    if (currentIndex > 0) {
      setActiveModalStyle(filteredStyles[currentIndex - 1]);
    } else {
      setActiveModalStyle(filteredStyles[filteredStyles.length - 1]);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalStyle) return;
      if (e.key === "Escape") setActiveModalStyle(null);
      if (e.key === "ArrowRight") handleNextInModal();
      if (e.key === "ArrowLeft") handlePrevInModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalStyle, filteredStyles]);

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* 1. Interactive Animated Reference Loop Showcase */}
      <section className="flex flex-col gap-3 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-sm relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground/80">
              Live Animated Reference Loop (16:9)
            </span>
          </div>
          <button
            onClick={() => setIsPlayingHero(!isPlayingHero)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-muted/40 hover:bg-muted/80 border border-border text-foreground transition-all cursor-pointer"
          >
            {isPlayingHero ? (
              <>
                <Pause className="w-3 h-3" />
                <span>Pause Loop</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span>Play Loop</span>
              </>
            )}
          </button>
        </div>

        <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border/60 bg-black">
          {isPlayingHero ? (
            <Image
              src="/bloobs/bloobs-styles.gif"
              alt="Bloobs 10 Styles Animated Reference Loop"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
          ) : (
            <Image
              src="/bloobs/risograph.jpg"
              alt="Bloobs Styles Paused Preview"
              fill
              className="object-cover object-center"
            />
          )}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
          The loop transitions across all avant-garde design aesthetics. Click any style card below to inspect its exact prompt syntax or copy it directly into your AI image generator.
        </p>
      </section>

      {/* 2. Search & Category Filter Controls */}
      <div className="flex flex-col gap-4">
        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by style (e.g. Risograph, Claymorphism, Gzhel, Brutalism)..."
            className="w-full pl-10 pr-10 py-2.5 bg-muted/10 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-all font-light"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-foreground text-background border-foreground font-bold shadow-xs"
                  : "bg-muted/10 text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat === "all" ? "All Styles (10)" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. 10 Styles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStyles.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <article
              key={item.id}
              onClick={() => setActiveModalStyle(item)}
              className="group flex flex-col rounded-2xl border border-border/80 bg-card hover:border-accent/40 transition-all duration-300 overflow-hidden cursor-pointer shadow-xs"
            >
              {/* Card Image Header (16:9) */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Corner Badge: Number & Category */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span 
                    className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full text-white bg-black/60 backdrop-blur-md border border-white/20"
                    style={{ borderColor: item.accent }}
                  >
                    {item.number}
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full text-white/90 bg-black/60 backdrop-blur-md border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Top Right Expand Icon */}
                <button
                  aria-label="Inspect style"
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Bottom Left Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <h3 
                      className="text-lg font-bold text-white tracking-tight"
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/70 font-light truncate">
                      {item.mood}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body: Prompt Formula & 1-Click Copy */}
              <div className="p-4 sm:p-5 flex flex-col gap-3.5 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>PROMPT RECIPE</span>
                    <span style={{ color: item.accent }}>● Ready to use</span>
                  </div>

                  <div className="bg-muted/10 p-3 rounded-xl border border-border/50 text-xs font-mono text-foreground/90 leading-relaxed break-words line-clamp-3 select-all">
                    {item.prompt}
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/40">
                  {/* Tag Chips */}
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    {item.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted/20 text-muted-foreground truncate"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={(e) => handleCopyPrompt(item, e)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                      isCopied
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-muted/30 hover:bg-muted/60 text-foreground border border-border"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filteredStyles.length === 0 && (
        <div className="p-12 text-center text-muted-foreground bg-muted/10 rounded-2xl border border-border/80 border-dashed">
          No styles match your search criteria. Try clearing the filter.
        </div>
      )}

      {/* 4. Full-screen Modal Lightbox Inspector */}
      {activeModalStyle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalStyle(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-3">
                <span 
                  className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: activeModalStyle.accent }}
                >
                  {activeModalStyle.number}
                </span>
                <h3 
                  className="text-lg sm:text-xl font-bold text-foreground"
                  style={{ fontFamily: "'Google Sans', sans-serif" }}
                >
                  {activeModalStyle.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevInModal}
                  aria-label="Previous style"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextInModal}
                  aria-label="Next style"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveModalStyle(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all cursor-pointer ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-7 flex flex-col gap-6">
              {/* High-Res 16:9 Image Preview */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black">
                <Image
                  src={activeModalStyle.image}
                  alt={activeModalStyle.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Attributes Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-muted/10 border border-border/60 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Category</span>
                  <span className="text-sm font-medium text-foreground">{activeModalStyle.category}</span>
                </div>
                <div className="p-3 rounded-xl bg-muted/10 border border-border/60 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Mood Vector</span>
                  <span className="text-sm font-medium text-foreground">{activeModalStyle.mood}</span>
                </div>
                <div className="p-3 rounded-xl bg-muted/10 border border-border/60 col-span-2 sm:col-span-1 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Keywords</span>
                  <div className="flex flex-wrap gap-1">
                    {activeModalStyle.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-muted-foreground">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Prompt Box */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-muted-foreground">Complete Prompt Formula</span>
                  <button
                    onClick={() => handleCopyPrompt(activeModalStyle)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                      copiedId === activeModalStyle.id
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-muted/40 hover:bg-muted/80 text-foreground border border-border"
                    }`}
                  >
                    {copiedId === activeModalStyle.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Copy Formula</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-muted/20 border border-border/80 font-mono text-sm text-foreground/90 leading-relaxed select-all">
                  {activeModalStyle.prompt}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
