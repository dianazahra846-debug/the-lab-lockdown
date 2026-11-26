<header class="sticky top-0 z-40 w-full bg-[#070b14]/90 backdrop-blur-md border-b border-cyan-500/20" x-data="{ open: false }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand / Logo -->
        <a href="{{ url('/') }}" class="flex items-center gap-3 text-left group">
            <div class="relative w-10 h-10 rounded border border-cyan-400/40 bg-cyan-950/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-300 transition">
                <span class="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse"></span>
                <div class="absolute inset-x-0 bottom-0 h-1 bg-cyan-500/70"></div>
            </div>
            <div>
                <span class="text-xl md:text-2xl font-black tracking-wider text-white group-hover:text-cyan-300 transition">
                    THE LAB LOCKDOWN
                </span>
                <div class="text-[10px] font-mono tracking-widest text-cyan-400/80 flex items-center gap-1.5">
                    <span>FACILITY LOCKDOWN</span>
                    <span>&bull;</span>
                    <span class="text-amber-400">GAME THE LAB LOCKDOWN</span>
                </div>
            </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
            @php
                $navItems = [
                    ['name' => 'HOME', 'url' => url('/')],
                    ['name' => 'ABOUT', 'url' => url('/about')],
                    ['name' => 'GAMEPLAY', 'url' => url('/gameplay')],
                    ['name' => 'LEVELS', 'url' => url('/levels')],
                    ['name' => 'FEATURES', 'url' => url('/features')],
                    ['name' => 'PREVIEW', 'url' => url('/preview')],
                    ['name' => 'TEAM', 'url' => url('/team')],
                ];
            @endphp

            @foreach($navItems as $item)
                @php
                    $isActive = request()->is(trim($item['url'], '/') ?: '/');
                @endphp
                <a 
                    href="{{ $item['url'] }}" 
                    class="px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-all duration-150 rounded relative {{ $isActive ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50' }}"
                >
                    {{ $item['name'] }}
                    @if($isActive)
                        <span class="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400"></span>
                    @endif
                </a>
            @endforeach
        </nav>

        <!-- Right Quick Status -->
        <div class="hidden sm:flex items-center gap-3">
            <span class="px-3 py-1 rounded bg-amber-950/60 border border-amber-500/40 text-amber-400 text-xs font-mono uppercase">
                STATUS: IN DEVELOPMENT
            </span>
        </div>

        <!-- Mobile Menu Hamburger Button -->
        <div class="flex lg:hidden items-center">
            <button 
                @click="open = !open" 
                class="p-2 rounded bg-slate-900 border border-cyan-500/30 text-slate-200 hover:text-cyan-300 focus:outline-none"
            >
                <svg x-show="!open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg x-show="open" class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div x-show="open" class="lg:hidden bg-[#070b14]/98 border-b border-cyan-500/30 px-4 pt-2 pb-6 space-y-2">
        @foreach($navItems as $item)
            @php $isActive = request()->is(trim($item['url'], '/') ?: '/'); @endphp
            <a 
                href="{{ $item['url'] }}" 
                class="block w-full px-4 py-3 rounded text-sm font-semibold tracking-wider uppercase {{ $isActive ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'text-slate-300 hover:bg-slate-800' }}"
            >
                {{ $item['name'] }}
            </a>
        @endforeach
    </div>
</header>
