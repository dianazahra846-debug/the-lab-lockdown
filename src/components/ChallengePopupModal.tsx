import React, { useState } from 'react';
import { Lock, AlertCircle, X, ShieldAlert } from 'lucide-react';

interface ChallengePopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  level: string;
  category: string;
}

export const ChallengePopupModal: React.FC<ChallengePopupModalProps> = ({
  isOpen,
  onClose,
  question,
  level,
  category
}) => {
  const [attemptInput, setAttemptInput] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulateClick = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("MODE PREVIEW SHOWCASE: Permainan masih dalam status 'IN DEVELOPMENT'. Quiz interaktif tidak playable pada website showcase.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#0e1628] to-[#080d19] border-2 border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,240,255,0.25)]">
        
        {/* Header HUD */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900/90 border-b border-cyan-500/30">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="uppercase tracking-widest">POP-UP PERTANYAAN MISI &bull; {level}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Authentic In-Game Pop-Up Layout matching Mockup Page 7 & 10 */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-2">
            <span>KATEGORI: {category}</span>
            <span className="text-amber-400">STATUS: IN DEVELOPMENT</span>
          </div>

          {/* Question Box with Red Robot Face Badge */}
          <div className="relative p-6 rounded-xl bg-slate-950/80 border border-slate-700/80 shadow-[0_0_20px_rgba(239,68,68,0.15)] flex flex-col sm:flex-row items-center gap-6">
            
            {/* Sinister Red Robot Assistant Badge (Mockup Page 7 / 10 / 11) */}
            <div className="relative flex-shrink-0 w-20 h-20 rounded-full border-2 border-red-500/60 p-1 bg-red-950/30 shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center justify-center overflow-hidden">
              <img 
                src="/images/red_robot.jpg" 
                alt="AI Assistant Security" 
                className="w-full h-full object-cover rounded-full filter contrast-125"
              />
              <span className="absolute bottom-0 inset-x-0 h-1 bg-red-500"></span>
            </div>

            {/* Question Text */}
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">SECURITY PROTOCOL VERIFICATION</span>
              <h4 className="text-xl md:text-2xl font-black text-white leading-snug mt-1 font-sci-fi">
                {question}
              </h4>
            </div>
          </div>

          {/* Answer Field with Lock Icon (Mockup: "Masukkan Jawaban") */}
          <form onSubmit={handleSimulateClick} className="space-y-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-5 h-5 text-amber-400" />
              </div>
              <input
                type="text"
                value={attemptInput}
                onChange={(e) => setAttemptInput(e.target.value)}
                placeholder="Masukkan Jawaban..."
                className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-gradient-to-r from-amber-600/90 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(245,158,11,0.3)] transition"
            >
              <Lock className="w-4 h-4" />
              <span>Masukkan Jawaban (Preview Mode)</span>
            </button>
          </form>

          {/* Feedback or Disclaimer */}
          {feedback ? (
            <div className="p-3.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
              <p className="leading-relaxed">{feedback}</p>
            </div>
          ) : (
            <div className="text-[11px] font-mono text-slate-400 text-center">
              *Tampilan simulasi preview pertanyaan in-game sesuai dokumen mockup The Lab Lockdown.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono uppercase transition"
          >
            TUTUP PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
};
