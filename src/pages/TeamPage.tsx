import React from 'react';
import { PageRoute } from '../types';
import { TEAM_MEMBERS, GROUP_NAME, GAME_STATUS, DEV_NOTE, GAME_TITLE } from '../data/gameData';
import { ShieldAlert, Users, Terminal, Code2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

interface TeamPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onRouteChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <Users className="w-3.5 h-3.5" />
          <span>PROJECT CREDITS & ROSTER</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider font-sci-fi text-glow-cyan">
          THE TEAM
        </h1>
        <p className="text-slate-400 font-mono text-sm tracking-wider uppercase">
          {GROUP_NAME} &bull; TIM PENGEMBANG
        </p>
      </div>

      {/* 4 Team Member Cards (Strict placeholder without fabricated personal names) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={member.id}
            className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 text-center space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)] flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Sci-Fi Avatar Badge */}
              <div className="relative w-24 h-24 mx-auto rounded-full bg-slate-950 border-2 border-cyan-500/40 group-hover:border-cyan-400 flex items-center justify-center transition shadow-[0_0_20px_rgba(0,240,255,0.15)] overflow-hidden">
                <span className="text-2xl font-black text-cyan-300 font-mono">
                  0{index + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 group-hover:h-1.5 transition-all"></div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {member.division}
                </span>
                {/* Mandatory Member name placeholder: Member 01, Member 02, etc. */}
                <h3 className="text-2xl font-black text-white uppercase font-sci-fi group-hover:text-cyan-300 transition">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <span className="inline-block px-3 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-400/80 uppercase">
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* DEVELOPMENT STATUS SECTION (Mandatory from prompt) */}
      <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#0a1122] to-[#060a14] border border-cyan-500/30 text-center space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.15)] max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-400 text-xs font-mono uppercase tracking-widest">
          <ShieldAlert className="w-4 h-4" />
          <span>OFFICIAL STATUS ADVISORY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider font-sci-fi">
          GAME DEVELOPMENT
        </h2>

        {/* Status: IN DEVELOPMENT */}
        <div className="inline-block px-6 py-2.5 rounded-lg bg-amber-500/10 border-2 border-amber-400/60 text-amber-300 font-mono text-lg font-black uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          STATUS: {GAME_STATUS}
        </div>

        {/* Mandatory exact text from prompt: "The Lab Lockdown is currently in development." */}
        <p className="text-base md:text-lg text-slate-200 font-mono italic max-w-xl mx-auto leading-relaxed">
          "{DEV_NOTE}"
        </p>

        <p className="text-xs text-slate-400 max-w-lg mx-auto font-sans leading-relaxed">
          Website ini berfungsi sebagai showcase dan media perkenalan resmi game independen The Lab Lockdown, menyajikan informasi konsep, alur tahapan level, dan aset visual perancangan.
        </p>
      </section>

      {/* Navigation */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onRouteChange('/preview')}
          className="px-6 py-3 rounded bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono uppercase tracking-wider transition"
        >
          &larr; KEMBALI KE PREVIEW
        </button>

        <button
          onClick={() => onRouteChange('/')}
          className="px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs font-mono transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
        >
          <span>KEMBALI KE HOME</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
