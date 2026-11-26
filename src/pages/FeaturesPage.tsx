import React from 'react';
import { PageRoute } from '../types';
import { FEATURES, GAME_FLOW_STEPS } from '../data/gameData';
import { Compass, Hand, Cpu, HelpCircle, DoorClosed, FlaskConical, ArrowDown, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

interface FeaturesPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onRouteChange }) => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Hand,
    Cpu,
    HelpCircle,
    DoorClosed,
    FlaskConical
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>GAME ARCHITECTURE & ATTRIBUTES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider font-sci-fi text-glow-cyan">
          FEATURES
        </h1>
        <p className="text-slate-400 font-mono text-sm tracking-wider">
          Enam pilar utama fitur game The Lab Lockdown yang dirancang dalam mockup.
        </p>
      </div>

      {/* 6 FEATURES CARDS (Exact match to mockup requirements) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((item) => {
          const IconComponent = iconMap[item.iconName] || Cpu;
          return (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)] flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300/80">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase font-sci-fi tracking-wide mt-1 group-hover:text-cyan-300 transition">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SEKTOR: {item.title}</span>
                <span className="text-cyan-400">&bull; VERIFIED</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* GAME FLOW TIMELINE (Exact match to prompt requirement) */}
      <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#0a1122] to-[#060a14] border border-cyan-500/30 space-y-12 shadow-[0_0_40px_rgba(0,240,255,0.15)]">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PROGRESSION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider font-sci-fi">
            GAME FLOW
          </h2>
          <p className="text-slate-400 text-sm">
            Visualisasi urutan alur perjalanan pemain dari awal peluncuran game hingga keberhasilan melarikan diri.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="max-w-3xl mx-auto space-y-6 relative">
          {GAME_FLOW_STEPS.map((step, idx) => (
            <React.Fragment key={step.step}>
              <div className="flex items-center gap-6 p-6 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition">
                <div className="w-14 h-14 rounded-full bg-cyan-950/80 border-2 border-cyan-400/50 flex-shrink-0 flex items-center justify-center text-cyan-300 font-mono font-black text-base shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  {step.step}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg md:text-xl font-black text-white uppercase font-sci-fi">
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-400 uppercase">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>

              {idx < GAME_FLOW_STEPS.length - 1 && (
                <div className="flex justify-center text-cyan-500 my-1">
                  <ArrowDown className="w-6 h-6 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-center max-w-lg mx-auto text-xs font-mono text-slate-400">
          *Ini hanya visualisasi alur game sesuai dokumen rancangan.
        </div>
      </section>

      {/* Navigation */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onRouteChange('/levels')}
          className="px-6 py-3 rounded bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono uppercase tracking-wider transition"
        >
          &larr; KEMBALI KE LEVELS
        </button>

        <button
          onClick={() => onRouteChange('/preview')}
          className="px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs font-mono transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
        >
          <span>LIHAT MOCKUP GALLERY</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
