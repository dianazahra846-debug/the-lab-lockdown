@extends('layouts.app')

@section('title', 'THE LAB LOCKDOWN - Can You Escape The Laboratory?')

@section('content')
<!-- Hero Section -->
<section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-cyan-500/20">
    <div class="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-transparent"></div>
    
    <!-- Hero Background Image -->
    <div class="absolute inset-0 bg-cover bg-center -z-10 filter brightness-[0.35]" style="background-image: url('{{ asset('images/mockup_hero.jpg') }}');"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-8">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>GAME THE LAB LOCKDOWN &bull; STATUS: IN DEVELOPMENT</span>
        </div>

        <!-- Big Hero Title -->
        <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-wider mb-6 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)] leading-none">
            THE LAB LOCKDOWN
        </h1>

        <!-- Tagline -->
        <p class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 tracking-[0.2em] uppercase mb-8 font-mono">
            CAN YOU ESCAPE THE LABORATORY?
        </p>

        <!-- Description -->
        <p class="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg mb-12 leading-relaxed font-light">
            The Lab Lockdown adalah game bertema laboratorium lockdown, di mana pemain harus menyelesaikan berbagai tantangan untuk mencapai jalan keluar.
        </p>

        <!-- Hero Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="{{ url('/about') }}" class="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase tracking-widest text-sm rounded-md border border-cyan-300 transition duration-200 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                EXPLORE THE GAME
            </a>
            <a href="{{ url('/gameplay') }}" class="w-full sm:w-auto px-10 py-4 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 hover:text-white font-bold uppercase tracking-widest text-sm rounded-md border border-cyan-500/40 hover:border-cyan-400 transition duration-200">
                VIEW GAMEPLAY
            </a>
        </div>
    </div>
</section>

<!-- Objective Preview Section -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-slate-950 border border-cyan-500/30">
        <div class="max-w-3xl space-y-4">
            <span class="text-xs font-mono text-red-400 uppercase tracking-widest block">MISSION DIRECTIVE</span>
            <div class="text-sm font-mono text-slate-400 uppercase">OBJECTIVE</div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase text-cyan-300">
                ESCAPE THE LABORATORY
            </h2>
            <p class="text-slate-300 text-base leading-relaxed">
                Pemain harus menyelesaikan tiga rintangan utama: memperbaiki kabel pada Ruang Server, memasang stopkontak dan casing PC Server, serta memecahkan smart lock pintu darurat.
            </p>
        </div>
    </div>
</section>
@endsection
