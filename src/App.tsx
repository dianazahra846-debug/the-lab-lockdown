import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SettingsModal } from './components/SettingsModal';
import { BladeSourceModal } from './components/BladeSourceModal';
import { ChallengePopupModal } from './components/ChallengePopupModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GameplayPage } from './pages/GameplayPage';
import { LevelsPage } from './pages/LevelsPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PreviewPage } from './pages/PreviewPage';
import { TeamPage } from './pages/TeamPage';
import { CHALLENGES } from './data/gameData';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('/');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isBladeModalOpen, setIsBladeModalOpen] = useState<boolean>(false);
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);

  // Sync route with browser url path or hash
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      const validRoutes: PageRoute[] = ['/', '/about', '/gameplay', '/levels', '/features', '/preview', '/team'];
      if (validRoutes.includes(path)) {
        setCurrentRoute(path);
      } else {
        const hash = window.location.hash.replace('#', '') as PageRoute;
        if (validRoutes.includes(hash)) {
          setCurrentRoute(hash);
        }
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.pushState(null, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLevelChallenge = (levelId: string) => {
    const ch = CHALLENGES.find(c => c.level.toLowerCase().includes(levelId.toLowerCase())) || CHALLENGES[0];
    setActiveChallengeId(ch.id);
  };

  const currentChallenge = CHALLENGES.find(c => c.id === activeChallengeId);

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative font-sans">
      
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-20 z-0"></div>

      {/* Subtle Scanline Overlay */}
      <div className="fixed inset-0 scanline pointer-events-none opacity-10 z-10"></div>

      {/* Main Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenBladeSource={() => setIsBladeModalOpen(true)}
      />

      {/* Page Content View Router */}
      <main className="flex-1 relative z-20">
        {currentRoute === '/' && (
          <HomePage
            onRouteChange={handleRouteChange}
            onOpenLevelChallenge={handleOpenLevelChallenge}
          />
        )}
        {currentRoute === '/about' && (
          <AboutPage onRouteChange={handleRouteChange} />
        )}
        {currentRoute === '/gameplay' && (
          <GameplayPage onRouteChange={handleRouteChange} />
        )}
        {currentRoute === '/levels' && (
          <LevelsPage onRouteChange={handleRouteChange} />
        )}
        {currentRoute === '/features' && (
          <FeaturesPage onRouteChange={handleRouteChange} />
        )}
        {currentRoute === '/preview' && (
          <PreviewPage onRouteChange={handleRouteChange} />
        )}
        {currentRoute === '/team' && (
          <TeamPage onRouteChange={handleRouteChange} />
        )}
      </main>

      {/* Footer */}
      <Footer onRouteChange={handleRouteChange} />

      {/* Settings Modal (Mockup Page 3 Replica) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Blade Source Code Inspector Modal */}
      <BladeSourceModal
        isOpen={isBladeModalOpen}
        onClose={() => setIsBladeModalOpen(false)}
        currentRoute={currentRoute}
      />

      {/* Challenge Pop-up Modal */}
      {currentChallenge && (
        <ChallengePopupModal
          isOpen={true}
          onClose={() => setActiveChallengeId(null)}
          question={currentChallenge.question}
          level={currentChallenge.level}
          category={currentChallenge.category}
        />
      )}

    </div>
  );
}
