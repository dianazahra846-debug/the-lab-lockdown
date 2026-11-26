<footer class="border-t border-cyan-500/20 bg-[#04060d] text-slate-400 py-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-800">
            <!-- Brand -->
            <div class="space-y-1 text-center md:text-left">
                <h3 class="text-2xl font-black text-white uppercase tracking-widest">
                    THE LAB LOCKDOWN
                </h3>
                <p class="text-xs text-cyan-400/80 font-mono uppercase">
                    CAN YOU ESCAPE THE LABORATORY?
                </p>
            </div>

            <!-- Development Notice -->
            <div class="text-center space-y-1">
                <span class="inline-block px-3 py-1 rounded bg-amber-950/50 border border-amber-500/40 text-amber-400 text-xs font-mono uppercase">
                    IN DEVELOPMENT
                </span>
                <p class="text-xs text-slate-400 font-mono">
                    Game currently in development.
                </p>
            </div>

            <!-- Navigation Links -->
            <div class="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs uppercase font-mono">
                <a href="{{ url('/') }}" class="hover:text-cyan-300">Home</a>
                <span>&bull;</span>
                <a href="{{ url('/about') }}" class="hover:text-cyan-300">About</a>
                <span>&bull;</span>
                <a href="{{ url('/gameplay') }}" class="hover:text-cyan-300">Gameplay</a>
                <span>&bull;</span>
                <a href="{{ url('/levels') }}" class="hover:text-cyan-300">Levels</a>
                <span>&bull;</span>
                <a href="{{ url('/team') }}" class="hover:text-cyan-300">Team</a>
            </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
            <p>&copy; 2026 The Lab Lockdown</p>
            <p class="text-cyan-400/70">GAME THE LAB LOCKDOWN &bull; OFFICIAL SHOWCASE</p>
        </div>
    </div>
</footer>
