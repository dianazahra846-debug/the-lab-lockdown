import React, { useState } from 'react';
import { PageRoute, GalleryMockupItem } from '../types';
import { GALLERY_MOCKUPS } from '../data/gameData';
import { ZoomIn, Eye, Filter, ArrowRight, Image as ImageIcon, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { LightboxModal } from '../components/LightboxModal';

interface PreviewPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PreviewPage: React.FC<PreviewPageProps> = ({ onRouteChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryMockupItem | null>(null);

  const categories = [
    'All',
    'Main Menu',
    'Setting',
    'Level 1',
    'Question',
    'Level 2',
    'Level 3',
    'Game Over',
    'You Escaped'
  ];

  const filteredMockups = selectedCategory === 'All'
    ? GALLERY_MOCKUPS
    : GALLERY_MOCKUPS.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>OFFICIAL VISUAL SPECIFICATIONS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider font-sci-fi text-glow-cyan">
          GAME PREVIEW
        </h1>
        <p className="text-slate-400 font-mono text-sm tracking-wider">
          Galeri mockup game The Lab Lockdown sesuai dengan 8 kategori dokumen perancangan resmi.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-2 border-b border-slate-800">
        <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>KATEGORI:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMockups.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group cursor-pointer rounded-2xl bg-slate-900/80 border border-cyan-500/25 hover:border-cyan-400 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] flex flex-col justify-between"
          >
            {/* Visual Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-black flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

              {/* Category Pill */}
              <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-cyan-400/40 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                {item.category}
              </div>

              {/* Hover Zoom Prompt */}
              <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-cyan-300 font-mono text-xs font-bold">
                <ZoomIn className="w-4 h-4" />
                <span>KLIK FULLSCREEN</span>
              </div>
            </div>

            {/* Information */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                  {item.pageRef}
                </span>
                <h3 className="text-lg font-bold text-white uppercase font-sci-fi group-hover:text-cyan-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                <span>LIHAT DETAIL</span>
                <Eye className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />

      {/* Navigation */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onRouteChange('/features')}
          className="px-6 py-3 rounded bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono uppercase tracking-wider transition"
        >
          &larr; KEMBALI KE FEATURES
        </button>

        <button
          onClick={() => onRouteChange('/team')}
          className="px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs font-mono transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
        >
          <span>LIHAT THE TEAM</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
