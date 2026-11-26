import React from 'react';
import { GalleryMockupItem } from '../types';
import { X, ZoomIn, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryMockupItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0a101f] border-2 border-cyan-500/50 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,240,255,0.3)] max-h-[95vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-cyan-500/30">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider font-sci-fi">
              {item.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-mono text-cyan-400/80 bg-slate-950 px-3 py-1 rounded border border-slate-800">
              {item.pageRef}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Media & Details Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Visual Presentation */}
          <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-black flex items-center justify-center max-h-[55vh]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[55vh] w-auto object-contain transition duration-300 hover:scale-105"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/70 backdrop-blur-sm border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>MOCKUP VISUAL SPECIFICATION</span>
            </div>
          </div>

          {/* Description & Mockup Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <FileText className="w-4 h-4" />
                <span>DESKRIPSI DARI DOKUMEN MOCKUP</span>
              </div>
              <p className="text-slate-200 text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Highlights List */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                POIN UTAMA ELEMEN:
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {item.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-amber-400">
            <ShieldAlert className="w-4 h-4" />
            <span>STATUS: IN DEVELOPMENT &bull; OFFICIAL SHOWCASE</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs transition"
          >
            TUTUP MODAL
          </button>
        </div>
      </div>
    </div>
  );
};
