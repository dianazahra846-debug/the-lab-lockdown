import React from 'react';
import { PageRoute } from '../types';
import { GAME_TITLE, GROUP_NAME } from '../data/gameData';
import { ShieldAlert, Terminal, Radio } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#04060d] relative overflow-hidden text-slate-400 py-12">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest text-glow-cyan">
                {GAME_TITLE}
              </h2>
            </div>
            <p className="text-xs text-cyan-400/80 font-mono tracking-wider uppercase">
              CAN YOU ESCAPE THE LABORATORY?
            </p>
          </div>

          {/* Development Status Indicator */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-950/40 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>STATUS: IN DEVELOPMENT</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Game currently in development.
            </p>
          </div>

          {/* Quick Route Shortcuts */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs uppercase font-mono">
            <button onClick={() => onRouteChange('/about')} className="hover:text-cyan-300 transition">About</button>
            <span>&bull;</span>
            <button onClick={() => onRouteChange('/gameplay')} className="hover:text-cyan-300 transition">Gameplay</button>
            <span>&bull;</span>
            <button onClick={() => onRouteChange('/levels')} className="hover:text-cyan-300 transition">Levels</button>
            <span>&bull;</span>
            <button onClick={() => onRouteChange('/preview')} className="hover:text-cyan-300 transition">Mockups</button>
            <span>&bull;</span>
            <button onClick={() => onRouteChange('/team')} className="hover:text-cyan-300 transition">Team</button>
          </div>
        </div>

        {/* Bottom Bar with exact required copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>© 2026 {GAME_TITLE}</p>
          <div className="flex items-center gap-2 text-cyan-400/70">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>OFFICIAL SHOWCASE &bull; {GROUP_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
