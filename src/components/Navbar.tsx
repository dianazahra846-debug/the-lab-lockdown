import React, { useState } from 'react';
import { PageRoute } from '../types';
import { GAME_TITLE, GROUP_NAME } from '../data/gameData';
import { Menu, X, Sliders, Code2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenSettings: () => void;
  onOpenBladeSource: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenSettings,
  onOpenBladeSource
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'HOME', route: '/' },
    { label: 'ABOUT', route: '/about' },
    { label: 'GAMEPLAY', route: '/gameplay' },
    { label: 'LEVELS', route: '/levels' },
    { label: 'FEATURES', route: '/features' },
    { label: 'PREVIEW', route: '/preview' },
    { label: 'TEAM', route: '/team' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070b14]/90 backdrop-blur-md border-b border-cyan-500/20 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Title */}
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="relative w-10 h-10 rounded border border-cyan-400/40 bg-cyan-950/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-300 transition">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse"></span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-500/70"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-black tracking-wider text-white group-hover:text-cyan-300 transition drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                {GAME_TITLE}
              </span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-cyan-400/80 flex items-center gap-1.5">
              <span>FACILITY LOCKDOWN</span>
              <span>&bull;</span>
              <span className="text-amber-400">{GROUP_NAME}</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-all duration-150 rounded relative ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 shadow-[0_0_6px_#00f0ff]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Settings & Blade Inspector */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Settings HUD Trigger (Mockup Page 3 Replica) */}
          <button
            onClick={onOpenSettings}
            title="Open Audio & Game Display Settings (Mockup Page 3)"
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono tracking-wider transition"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>SETTING</span>
          </button>

          {/* Blade Code Inspector Modal Trigger */}
          <button
            onClick={onOpenBladeSource}
            title="Inspect corresponding Laravel Blade view code"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 text-xs font-mono tracking-wider transition"
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">BLADE VIEW</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenSettings}
            className="p-2 rounded bg-slate-900 border border-cyan-500/30 text-cyan-400 sm:hidden"
            title="Settings"
          >
            <Sliders className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-slate-900 border border-cyan-500/30 text-slate-200 hover:text-cyan-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14]/98 border-b border-cyan-500/30 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-150">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-3 rounded text-sm font-semibold tracking-wider uppercase transition flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSettings();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>SETTING</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBladeSource();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>BLADE VIEW</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
