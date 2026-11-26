@extends('layouts.app')

@section('title', 'The Team - THE LAB LOCKDOWN')

@section('content')
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
    <x-section-title 
        title="THE TEAM" 
        subtitle="GAME THE LAB LOCKDOWN"
        badge="PROJECT DEVELOPERS"
    />

    <!-- 4 Members (Strictly placeholder, no invented names) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        @for($i = 1; $i <= 4; $i++)
            <div class="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 text-center space-y-4 transition-all">
                <div class="w-20 h-20 mx-auto rounded-full bg-slate-950 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-mono font-bold text-xl">
                    0{{ $i }}
                </div>
                <div>
                    <span class="text-[10px] font-mono text-cyan-400 uppercase">GAME THE LAB LOCKDOWN</span>
                    <h3 class="text-2xl font-black text-white uppercase mt-0.5">Member 0{{ $i }}</h3>
                </div>
                <span class="inline-block px-3 py-1 rounded bg-slate-950 text-[10px] font-mono text-slate-400 uppercase">
                    Developer Placeholder
                </span>
            </div>
        @endfor
    </div>

    <!-- Development Status Section -->
    <div class="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#0a1122] to-[#060a14] border border-cyan-500/30 text-center space-y-6 max-w-3xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider font-sci-fi">
            GAME DEVELOPMENT
        </h2>

        <div class="inline-block px-6 py-2.5 rounded-lg bg-amber-500/10 border-2 border-amber-400/60 text-amber-300 font-mono text-lg font-black uppercase tracking-widest">
            STATUS: IN DEVELOPMENT
        </div>

        <p class="text-base md:text-lg text-slate-200 font-mono italic max-w-xl mx-auto leading-relaxed">
            "The Lab Lockdown is currently in development."
        </p>
    </div>
</div>
@endsection
