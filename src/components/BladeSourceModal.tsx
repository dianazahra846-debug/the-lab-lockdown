import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BLADE_SOURCE_FILES } from '../data/gameData';
import { Code, Copy, Check, X, FileCode } from 'lucide-react';

interface BladeSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRoute: PageRoute;
}

export const BladeSourceModal: React.FC<BladeSourceModalProps> = ({
  isOpen,
  onClose,
  currentRoute
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<PageRoute>(currentRoute);

  if (!isOpen) return null;

  const fileData = BLADE_SOURCE_FILES[selectedRoute] || BLADE_SOURCE_FILES['/'];

  const handleCopy = () => {
    navigator.clipboard.writeText(fileData.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const routes: PageRoute[] = ['/', '/about', '/gameplay', '/levels', '/features', '/preview', '/team'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#070b14] border-2 border-emerald-500/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.2)] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-emerald-500/30">
          <div className="flex items-center gap-3">
            <FileCode className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                LARAVEL BLADE SOURCE INSPECTOR
              </h3>
              <p className="text-xs text-emerald-400/80 font-mono">
                {fileData.path}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 text-xs font-mono transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED!' : 'COPY BLADE'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex items-center gap-1 px-4 py-2 bg-slate-950/80 border-b border-slate-800 overflow-x-auto text-xs font-mono">
          {routes.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRoute(r)}
              className={`px-3 py-1.5 rounded whitespace-nowrap transition ${
                selectedRoute === r
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              {BLADE_SOURCE_FILES[r]?.path.replace('resources/views/', '') || r}
            </button>
          ))}
        </div>

        {/* Code Content View */}
        <div className="flex-1 overflow-auto p-4 md:p-6 bg-[#04060c] font-mono text-xs text-slate-300 leading-relaxed">
          <pre className="whitespace-pre-wrap selection:bg-emerald-900 selection:text-white">
            <code>{fileData.code}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Target Stack: Laravel 11+ &bull; Blade &bull; Tailwind CSS</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white transition"
          >
            TUTUP
          </button>
        </div>
      </div>
    </div>
  );
};
