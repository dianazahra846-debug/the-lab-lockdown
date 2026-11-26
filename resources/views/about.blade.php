@extends('layouts.app')

@section('title', 'About - THE LAB LOCKDOWN')

@section('content')
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
    <x-section-title 
        title="ABOUT THE GAME" 
        subtitle="CONCEPT & PRIMARY OBJECTIVE"
        badge="GAME THE LAB LOCKDOWN &bull; SPECIFICATION"
    />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div class="lg:col-span-7 space-y-8">
            <!-- Concept Card -->
            <div class="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-4">
                <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest block">KONSEP GAME</span>
                <blockquote class="p-5 rounded-lg bg-cyan-950/30 border-l-4 border-cyan-400 text-slate-200 text-lg italic leading-relaxed">
                    "The Lab Lockdown adalah game bertema laboratorium lockdown, di mana pemain harus menyelesaikan berbagai tantangan untuk mencapai jalan keluar."
                </blockquote>
                <p class="text-slate-400 text-sm leading-relaxed">
                    Berdasarkan rancangan mockup Game The Lab Lockdown, game membawa atmosfer horor fiksi ilmiah bernuansa dingin dengan elemen investigasi perangkat keras, Teka-teki, dan pintu evakuasi yang terkunci.
                </p>
            </div>

            <!-- Objective Card -->
            <div class="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-950 border-2 border-cyan-400/60 space-y-4">
                <div class="text-xs font-mono text-red-400 uppercase tracking-widest">MISSION DIRECTIVE</div>
                <div class="text-sm font-mono text-slate-400 uppercase">OBJECTIVE</div>
                <h3 class="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase text-cyan-300">
                    ESCAPE THE LABORATORY
                </h3>
                <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Tujuan pemain tidak berubah sejak awal: mengatasi lockdown dan melarikan diri dari laboratorium.
                </p>
            </div>
        </div>

        <div class="lg:col-span-5 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 min-h-[350px]">
            <img src="{{ asset('images/mockup_hero.jpg') }}" alt="Laboratory Hallway" class="w-full h-full object-cover">
        </div>
    </div>
</div>
@endsection
