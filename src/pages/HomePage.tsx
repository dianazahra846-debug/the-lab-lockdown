import React from 'react';
import { PageRoute } from '../types';
import { GAME_TITLE, GAME_TAGLINE, GROUP_NAME, LEVELS, FEATURES, GAME_STATUS } from '../data/gameData';
import { ShieldAlert, ArrowRight, Play, Terminal, Eye, Lock, Sparkles, Layers, Cpu } from 'lucide-react';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenLevelChallenge: (levelId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange, onOpenLevelChallenge }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-cyan-500/20">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-transparent"></div>
        
        {/* Background Image Hero */}
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10 filter brightness-[0.4] scale-105 transition duration-1000"
          style={{ backgroundImage: "url('/images/mockup_hero.jpg')" }}
        ></div>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/15 blur-[120px] pointer-events-none rounded-full"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
          
          {/* Game The Lab Lockdown & Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{GROUP_NAME}</span>
            <span>&bull;</span>
            <span className="text-amber-400">STATUS: {GAME_STATUS}</span>
          </div>

          {/* Main Title from Mockup */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-wider mb-6 drop-shadow-[0_0_40px_rgba(0,240,255,0.4)] font-sci-fi leading-none">
            {GAME_TITLE}
          </h1>

          {/* Tagline from Prompt & Mockup */}
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 tracking-[0.2em] uppercase mb-8 font-mono text-glow-cyan">
            {GAME_TAGLINE}
          </p>

          {/* Short Game Description from Mockup Concept */}
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg md:text-xl mb-12 leading-relaxed font-sans font-light">
            The Lab Lockdown adalah game bertema laboratorium lockdown, di mana pemain harus menyelesaikan berbagai tantangan untuk mencapai jalan keluar.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onRouteChange('/about')}
              className="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase tracking-widest text-sm rounded-md border border-cyan-300 transition duration-200 shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-3 group"
            >
              <span>EXPLORE THE GAME</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>

            <button
              onClick={() => onRouteChange('/gameplay')}
              className="w-full sm:w-auto px-10 py-4 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 hover:text-white font-bold uppercase tracking-widest text-sm rounded-md border border-cyan-500/40 hover:border-cyan-400 transition duration-200 shadow-[0_0_15px_rgba(0,240,255,0.1)] flex items-center justify-center gap-3"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span>VIEW GAMEPLAY</span>
            </button>
          </div>

          {/* Quick HUD Diagnostics Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded bg-slate-950/70 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block">SEKTOR</span>
              <span className="text-xs font-mono text-cyan-400 font-bold">SECTOR 04 LOCKED</span>
            </div>
            <div className="p-3 rounded bg-slate-950/70 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block">PROTOKOL</span>
              <span className="text-xs font-mono text-cyan-400 font-bold">NOC SYSTEM v2.1</span>
            </div>
            <div className="p-3 rounded bg-slate-950/70 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block">MISI AKHIR</span>
              <span className="text-xs font-mono text-amber-400 font-bold">SMART LOCK OVERRIDE</span>
            </div>
            <div className="p-3 rounded bg-slate-950/70 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block">PLATFORM</span>
              <span className="text-xs font-mono text-emerald-400 font-bold">OFFICIAL SHOWCASE</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE OBJECTIVE TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-slate-950 border border-cyan-500/30 overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.1)]">
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-900/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5" />
                <span>PRIMARY MISSION OBJECTIVE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider font-sci-fi">
                OBJECTIVE: <span className="text-cyan-400">ESCAPE THE LABORATORY</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Terperangkap di dalam kompleks laboratorium yang terkunci total. Pemain harus menjelajahi 3 level bertahap: menyambungkan kabel rak server yang rusak, memasang kabel workstation PC, dan memecahkan smart lock pada pintu keluar darurat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onRouteChange('/about')}
                className="px-6 py-3 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 font-bold uppercase tracking-wider text-xs font-mono text-center transition"
              >
                BACA KONSEP LENGKAP &rarr;
              </button>
              <button
                onClick={() => onRouteChange('/levels')}
                className="px-6 py-3 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold uppercase tracking-wider text-xs font-mono text-center transition"
              >
                LIHAT TAHAPAN LEVEL &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 LEVELS QUICK PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
              MISSION STAGES &bull; DARI DOKUMEN MOCKUP
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider font-sci-fi">
              3 TAHAPAN LEVEL
            </h2>
          </div>
          <button
            onClick={() => onRouteChange('/levels')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider group"
          >
            <span>Buka Halaman Levels</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEVELS.map((lvl) => (
            <div
              key={lvl.id}
              className="group relative rounded-xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={lvl.image}
                  alt={lvl.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                {/* Level Number Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-sm border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold">
                  {lvl.number}
                </div>

                {/* Development Status Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-500/40 text-amber-400 text-[10px] font-mono uppercase">
                  IN DEVELOPMENT
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide font-sci-fi group-hover:text-cyan-300 transition">
                    {lvl.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400/80">{lvl.tag}</span>
                  <button
                    onClick={() => onRouteChange('/levels')}
                    className="text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Detail Level</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GAMEPLAY FLOWCHART PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-2xl bg-slate-900/60 border border-cyan-500/20 text-center space-y-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              VISUALISASI ALUR PERMAINAN
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider font-sci-fi mt-1">
              GAMEPLAY LOOP
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              Bagan alur permainan non-playable sesuai dokumen presentasi rancangan game.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-4xl mx-auto">
            {['EXPLORE', 'INTERACT', 'SOLVE', 'ANSWER', 'ESCAPE'].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <div className="px-5 py-3 rounded-lg bg-slate-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <span className="text-cyan-500 font-bold text-lg hidden sm:inline">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={() => onRouteChange('/gameplay')}
              className="px-8 py-3 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-xs font-mono uppercase font-bold tracking-wider transition"
            >
              PELAJARI MEKANIK LENGKAP &rarr;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
