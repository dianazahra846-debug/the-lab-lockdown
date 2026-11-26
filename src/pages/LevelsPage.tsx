import React, { useState } from 'react';
import { PageRoute } from '../types';
import { LEVELS, CHALLENGES } from '../data/gameData';
import { ShieldAlert, Lock, HelpCircle, ArrowRight, Eye, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { ChallengePopupModal } from '../components/ChallengePopupModal';

interface LevelsPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const LevelsPage: React.FC<LevelsPageProps> = ({ onRouteChange }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<typeof CHALLENGES[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>MISSION STAGES SPECIFICATION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider font-sci-fi text-glow-cyan">
          GAME LEVELS
        </h1>
        <p className="text-slate-400 font-mono text-sm tracking-wider">
          Tiga tingkatan misi laboratorium sesuai dengan alur dokumen mockup resmi.
        </p>
      </div>

      {/* 3 LEVELS CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {LEVELS.map((lvl) => (
          <div
            key={lvl.id}
            className="rounded-2xl bg-slate-900/85 border border-cyan-500/30 hover:border-cyan-400 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] group"
          >
            {/* Level Card Image */}
            <div className="relative aspect-video overflow-hidden bg-black">
              <img
                src={lvl.image}
                alt={lvl.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              
              {/* Level Number Pill */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold">
                {lvl.number}
              </div>

              {/* Mandatory "IN DEVELOPMENT" Badge */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded bg-amber-950/90 border border-amber-500/50 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                IN DEVELOPMENT
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  {lvl.tag}
                </div>
                <h3 className="text-2xl font-black text-white uppercase font-sci-fi tracking-wide group-hover:text-cyan-300 transition">
                  {lvl.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {lvl.description}
                </p>
              </div>

              {/* Interactables list */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">OBJEK INTERAKSI:</span>
                <div className="flex flex-wrap gap-1.5">
                  {lvl.interactables.map((obj, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300/80 border border-slate-800">
                      {obj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample challenge link */}
              {lvl.challengeSample && (
                <div className="pt-3">
                  <button
                    onClick={() => {
                      const ch = CHALLENGES.find(c => c.level === lvl.number) || CHALLENGES[0];
                      setSelectedChallenge(ch);
                    }}
                    className="w-full py-2.5 px-4 rounded bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono flex items-center justify-center gap-2 transition"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>PREVIEW POP-UP PERTANYAAN</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CHALLENGES SECTION (Mandatory from prompt) */}
      <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#0a1122] to-[#060a14] border border-cyan-500/30 space-y-8 shadow-[0_0_40px_rgba(0,240,255,0.15)]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/50 border border-red-500/40 text-red-400 text-xs font-mono uppercase tracking-widest">
              <Lock className="w-3.5 h-3.5" />
              <span>SECURITY OVERRIDE PROTOCOL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider font-sci-fi">
              CHALLENGES
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Sebagai bagian dari tantangan laboratorium, pemain akan menemukan pop-up pertanyaan robotik yang harus diselesaikan untuk membuka akses terminal, saklar daya, dan pintu keluar.
            </p>
          </div>

          <div className="px-3 py-1.5 rounded bg-amber-950/50 border border-amber-500/40 text-amber-400 text-xs font-mono text-center md:text-right">
            <span>PREVIEW MODE &bull; BUKAN QUIZ PLAYABLE</span>
          </div>
        </div>

        {/* List of Challenge Cards from Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHALLENGES.map((ch) => (
            <div
              key={ch.id}
              className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold">{ch.level}</span>
                  <span className="text-slate-400">{ch.category}</span>
                </div>

                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-red-500/60 bg-red-950/40 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="/images/red_robot.jpg" alt="AI Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider block">POP-UP PERTANYAAN:</span>
                    <p className="text-lg font-bold text-white font-sci-fi mt-0.5">
                      "{ch.question}"
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {ch.context}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">Tingkat: {ch.difficulty}</span>
                <button
                  onClick={() => setSelectedChallenge(ch)}
                  className="px-4 py-1.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Tampilan Pop-Up</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pop-Up Modal */}
      {selectedChallenge && (
        <ChallengePopupModal
          isOpen={true}
          onClose={() => setSelectedChallenge(null)}
          question={selectedChallenge.question}
          level={selectedChallenge.level}
          category={selectedChallenge.category}
        />
      )}

      {/* Navigation */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onRouteChange('/gameplay')}
          className="px-6 py-3 rounded bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono uppercase tracking-wider transition"
        >
          &larr; KEMBALI KE GAMEPLAY
        </button>

        <button
          onClick={() => onRouteChange('/features')}
          className="px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs font-mono transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
        >
          <span>LIHAT KEY FEATURES</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
