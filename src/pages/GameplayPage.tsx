import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Compass, Hand, Cpu, HelpCircle, DoorClosed, AlertTriangle, ShieldCheck, ArrowDown, ArrowRight } from 'lucide-react';

interface GameplayPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const GameplayPage: React.FC<GameplayPageProps> = ({ onRouteChange }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'EXPLORE',
      subtitle: 'First-Person Navigation',
      icon: Compass,
      desc: 'Pemain menavigasi koridor laboratorium yang gelap dan menelusuri rak server bawah tanah dari sudut pandang orang pertama (first-person POV).',
      mockupRef: 'Mockup Page 5 & 6',
      target: 'Mendeteksi letak anomali sistem dan komponen yang mengalami kerusakan'
    },
    {
      step: '02',
      title: 'INTERACT',
      subtitle: 'Point & Click Hardware Manipulation',
      icon: Hand,
      desc: 'Pemain berinteraksi dengan objek fisik pada lingkungan: kabel PC yang tergeletak di lantai, casing CPU komputer, dan port stopkontak listrik.',
      mockupRef: 'Mockup Page 4, 8, 9',
      target: 'Mengambil kabel yang terputus dan memposisikan ulang perangkat keras'
    },
    {
      step: '03',
      title: 'SOLVE',
      subtitle: 'System & Hardware Assembly',
      icon: Cpu,
      desc: 'Pemain menyambungkan kabel ke stopkontak daya dan merapikan casing CPU PC server untuk mengaktifkan kembali NOC System Protocol v2.1.',
      mockupRef: 'Mockup Page 8 & 9',
      target: 'Menyalakan workstation server dan memulihkan suplai daya fasilitas'
    },
    {
      step: '04',
      title: 'ANSWER',
      subtitle: 'Pop-Up Security Questions',
      icon: HelpCircle,
      desc: 'Ketika berinteraksi dengan terminal atau switch kabel, pop-up pertanyaan keamanan robotik muncul di layar menguji pemahaman pemain.',
      mockupRef: 'Mockup Page 7, 10, 11',
      target: 'Memasukkan jawaban benar (LAN, RPL, AI Deepfake, Logika) untuk unlock'
    },
    {
      step: '05',
      title: 'ESCAPE',
      subtitle: 'Smart Lock Door Breach',
      icon: DoorClosed,
      desc: 'Setelah seluruh tahapan server dan terminal terselesaikan, pemain membuka smart lock pintu utama darurat untuk kabur dan menyelamatkan diri.',
      mockupRef: 'Mockup Page 12, 13, 16',
      target: 'Mematikan status lockdown dan keluar dari fasilitas laboratorium'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>VISUAL GAMEPLAY LOOP EXPLANATION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider font-sci-fi text-glow-cyan">
          GAMEPLAY OVERVIEW
        </h1>
        <p className="text-slate-400 font-mono text-sm tracking-wider">
          Alur visual interaksi pemain The Lab Lockdown dari awal hingga jalan keluar.
        </p>
      </div>

      {/* Required Gameplay Flow: EXPLORE -> INTERACT -> SOLVE -> ANSWER -> ESCAPE */}
      <div className="p-8 md:p-12 rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.1)]">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
            VISUALISASI RANGKAIAN MEKANIK
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-sci-fi mt-1">
            CORE GAMEPLAY PROGRESSION
          </h2>
        </div>

        {/* Responsive Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-200 border flex flex-col items-center text-center relative ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.3)] scale-102'
                    : 'bg-slate-950/70 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900'
                }`}
              >
                <span className="text-xs font-mono text-cyan-400/80 mb-2">STEP {item.step}</span>
                
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition ${
                  isSelected ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_#00f0ff]' : 'bg-slate-900 text-cyan-400 border border-cyan-500/30'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-black text-white uppercase font-sci-fi tracking-wider mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 block mb-3">
                  {item.subtitle}
                </span>

                {/* Arrow indicator between items */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 border border-cyan-500/40 items-center justify-center text-cyan-400 text-xs font-bold">
                    &rarr;
                  </div>
                )}
                {idx < steps.length - 1 && (
                  <div className="md:hidden my-2 text-cyan-400 font-bold text-lg">
                    &darr;
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Step Detailed Inspector */}
        <div className="mt-10 p-6 md:p-8 rounded-xl bg-slate-950/90 border border-cyan-500/40 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-cyan-950 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold">
                LANGKAH 0{activeStep + 1}: {steps[activeStep].title}
              </span>
              <span className="text-xs font-mono text-slate-500">
                REFERENSI: {steps[activeStep].mockupRef}
              </span>
            </div>
            <p className="text-slate-200 text-base leading-relaxed">
              {steps[activeStep].desc}
            </p>
            <div className="pt-2 text-xs font-mono text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>SASARAN PEMAIN: {steps[activeStep].target}</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-center space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase block">STATUS MEKANIK</span>
            <span className="px-3 py-1 rounded bg-amber-950/60 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold block">
              CONCEPTUAL SPECIFICATION
            </span>
            <span className="text-[11px] text-slate-500 block">Bukan mini-game playable</span>
          </div>
        </div>
      </div>

      {/* Non-Playable Showcase Notice (Mandatory Directive) */}
      <div className="p-6 rounded-xl bg-amber-950/25 border border-amber-500/40 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-amber-300 uppercase font-mono tracking-wider">
            PEMBERITAHUAN SHOWCASE &bull; NON-PLAYABLE PRESENTATION
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Halaman ini khusus memvisualisasikan cara kerja dan alur permainan yang ada di mockup PDF. Sesuai panduan, game utama The Lab Lockdown masih dalam proses development dan tidak menyajikan gameplay yang dapat dimainkan pada website.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onRouteChange('/about')}
          className="px-6 py-3 rounded bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono uppercase tracking-wider transition"
        >
          &larr; KEMBALI KE ABOUT
        </button>

        <button
          onClick={() => onRouteChange('/levels')}
          className="px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs font-mono transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
        >
          <span>LIHAT DETAIL 3 LEVEL</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
