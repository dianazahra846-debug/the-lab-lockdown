import React, { useState } from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2, ArrowLeft, X, Sparkles } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [masterVolume, setMasterVolume] = useState(80);
  const [sfxVolume, setSfxVolume] = useState(70);
  const [musicVolume, setMusicVolume] = useState(60);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;

  const playFeedbackBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.05 * (masterVolume / 100), audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // ignore
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
    playFeedbackBeep();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090f1d] border-2 border-cyan-500/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.25)]">
        
        {/* Top Laboratory Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-cyan-500/30">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-slate-800 text-cyan-400 hover:text-white transition"
              title="Kembali"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <h3 className="text-xl font-black tracking-widest text-white uppercase font-sci-fi">
                SETTING (MOCKUP PAGE 03)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-xs font-mono text-cyan-400/90 border-l-2 border-cyan-400 pl-3">
            Replikasi antarmuka pengaturan in-game sesuai spesifikasi dokumen PDF Mockup The Lab Lockdown.
          </p>

          {/* Master Volume */}
          <div className="space-y-2 p-4 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="flex justify-between items-center text-sm font-semibold tracking-wider text-slate-200">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="uppercase">Master Volume</span>
              </div>
              <span className="font-mono text-cyan-300">{masterVolume}%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">Sesuaikan keseluruhan sound game</p>
            <input
              type="range"
              min="0"
              max="100"
              value={masterVolume}
              onChange={(e) => {
                setMasterVolume(Number(e.target.value));
                playFeedbackBeep();
              }}
              className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* SFX Volume */}
          <div className="space-y-2 p-4 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="flex justify-between items-center text-sm font-semibold tracking-wider text-slate-200">
              <span className="uppercase">SFX Volume</span>
              <span className="font-mono text-cyan-300">{sfxVolume}%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">Sesuaikan volume efek suara interaksi hardware & smart lock</p>
            <input
              type="range"
              min="0"
              max="100"
              value={sfxVolume}
              onChange={(e) => {
                setSfxVolume(Number(e.target.value));
                playFeedbackBeep();
              }}
              className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Music Volume */}
          <div className="space-y-2 p-4 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="flex justify-between items-center text-sm font-semibold tracking-wider text-slate-200">
              <span className="uppercase">Music Volume</span>
              <span className="font-mono text-cyan-300">{musicVolume}%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">Sesuaikan volume latar musik ambient koridor laboratorium</p>
            <input
              type="range"
              min="0"
              max="100"
              value={musicVolume}
              onChange={(e) => {
                setMusicVolume(Number(e.target.value));
                playFeedbackBeep();
              }}
              className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Fullscreen Toggle as in Mockup: < ON > */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/60 border border-slate-800">
            <div>
              <div className="text-sm font-semibold uppercase text-slate-200">FULLSCREEN</div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">Aktifkan jika ingin main mode layar penuh</div>
            </div>

            <button
              onClick={toggleFullscreen}
              className="px-5 py-2 rounded bg-cyan-950/80 border border-cyan-400/60 hover:border-cyan-300 text-cyan-300 font-mono text-sm tracking-wider flex items-center gap-2 hover:bg-cyan-900/60 transition shadow-[0_0_12px_rgba(0,240,255,0.2)]"
            >
              <span>&lt; {isFullscreen ? 'ON' : 'OFF'} &gt;</span>
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs transition shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            SIMPAN & KEMBALI
          </button>
        </div>
      </div>
    </div>
  );
};
