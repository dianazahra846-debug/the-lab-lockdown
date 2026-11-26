import React from 'react';
import { PageRoute } from '../types';
import { GAME_TITLE, GROUP_NAME, GAME_STATUS, DEV_NOTE } from '../data/gameData';
import { ShieldAlert, Target, Terminal, CheckCircle2, ArrowRight, Layers, FileSpreadsheet } from 'lucide-react';

interface AboutPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRouteChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>{GROUP_NAME} &bull; MOCKUP DOCUMENTATION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider font-sci-fi text-glow-cyan">
          ABOUT THE GAME
        </h1>
        <p className="text-slate-400 font-mono text-sm tracking-wider">
          Spesifikasi konsep game The Lab Lockdown berdasarkan dokumen mockup asli.
        </p>
      </div>

      {/* Main Concept Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Concept & Objective */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
          
          {/* Concept Box */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-4 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                01 &bull; KONSEP UTAMA
              </span>
              <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[11px] font-mono border border-cyan-500/30">
                VERIFIED MOCKUP
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sci-fi">
              THE LAB LOCKDOWN
            </h2>

            {/* Exact required concept from mockup */}
            <blockquote className="p-5 rounded-lg bg-cyan-950/30 border-l-4 border-cyan-400 text-slate-200 text-base sm:text-lg leading-relaxed italic">
              "The Lab Lockdown adalah game bertema laboratorium lockdown, di mana pemain harus menyelesaikan berbagai tantangan untuk mencapai jalan keluar."
            </blockquote>

            <p className="text-slate-400 text-sm leading-relaxed">
              Konsep permainan berfokus pada eksplorasi ruangan laboratorium yang terkunci, interaksi objek perangkat keras seperti kabel server dan casing PC, serta pemecahan pertanyaan seputar jaringan dan rekayasa perangkat lunak guna membuka akses pintu darurat.
            </p>
          </div>

          {/* OBJECTIVE Box (Mandatory from prompt) */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-950 border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(0,240,255,0.2)] space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Target className="w-32 h-32 text-cyan-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/50 border border-red-500/40 text-red-400 text-xs font-mono uppercase tracking-widest">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>PRIMARY MISSION OBJECTIVE</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">OBJECTIVE</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider text-cyan-300 font-sci-fi">
                ESCAPE THE LABORATORY
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Tujuan akhir pemain adalah berhasil melarikan diri dari laboratorium (Escape The Laboratory) dengan menyelesaikan urutan 3 level rintangan secara berkesinambungan.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Preview of Laboratory Corridor */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 flex-1 min-h-[320px] bg-slate-950">
            <img 
              src="/images/mockup_hero.jpg" 
              alt="Laboratory Corridor" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                VISUAL ENVIRONMENT
              </span>
              <span className="text-sm font-bold text-white uppercase font-sci-fi">
                KORIDOR LABORATORIUM LOCKDOWN
              </span>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Pencahayaan biru redup, pintu sekat baja, dan strip neon cyan.
              </p>
            </div>
          </div>

          {/* Development Status Note */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
              <ShieldAlert className="w-4 h-4" />
              <span>INFORMASI STATUS PROYEK</span>
            </div>
            <p className="text-xs text-slate-300 font-mono">
              "{DEV_NOTE}"
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onRouteChange('/')}
          className="px-6 py-3 rounded bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono uppercase tracking-wider transition"
        >
          &larr; KEMBALI KE HOME
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onRouteChange('/gameplay')}
            className="px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs font-mono transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
          >
            <span>LIHAT GAMEPLAY FLOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
