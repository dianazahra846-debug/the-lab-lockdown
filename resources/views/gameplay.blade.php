@extends('layouts.app')

@section('title', 'Gameplay - THE LAB LOCKDOWN')

@section('content')
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
    <x-section-title 
        title="GAMEPLAY LOOP" 
        subtitle="HOW THE PLAYER ENGAGES AND PROGRESSES"
        badge="MECHANICS EXPLANATION"
    />

    <!-- Visual Flow: EXPLORE -> INTERACT -> SOLVE -> ANSWER -> ESCAPE -->
    <div class="p-8 md:p-12 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-10">
        <div class="text-center">
            <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest block">BAGAN ALUR PERMAINAN</span>
            <h3 class="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
                PROGRESSION FLOW
            </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            @php
                $steps = [
                    ['name' => 'EXPLORE', 'sub' => 'First-Person POV', 'desc' => 'Menelusuri lorong server dan mendeteksi anomali.'],
                    ['name' => 'INTERACT', 'sub' => 'Point & Click', 'desc' => 'Buka Pintu, Masukan Jawaban Teka Teki.'],
                    ['name' => 'SOLVE', 'sub' => 'Assembly', 'desc' => 'Memacahkan Berbagai Teka teki .'],
                    ['name' => 'ANSWER', 'sub' => 'Pop-Up Trivia', 'desc' => 'Jawab pertanyaan Dari Teka Teki.'],
                    ['name' => 'ESCAPE', 'sub' => 'Final Goal', 'desc' => 'Buka smart lock pintu keluar dan lolos!'],
                ];
            @endphp

            @foreach($steps as $index => $s)
                <div class="p-6 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400 transition">
                    <span class="text-xs font-mono text-cyan-400 block mb-2">LANGKAH 0{{ $index + 1 }}</span>
                    <h4 class="text-xl font-black text-white uppercase mb-1">{{ $s['name'] }}</h4>
                    <span class="text-[11px] font-mono text-cyan-300/80 block mb-2">{{ $s['sub'] }}</span>
                    <p class="text-xs text-slate-400">{{ $s['desc'] }}</p>
                </div>
            @endforeach
        </div>
    </div>

    <!-- Non Playable Notice -->
    <div class="p-6 rounded-xl bg-amber-950/30 border border-amber-500/40 text-center max-w-xl mx-auto">
        <span class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
            STATUS: IN DEVELOPMENT &bull; NON-PLAYABLE PRESENTATION
        </span>
        <p class="text-xs text-slate-300 mt-1">
            Website ini hanya digunakan untuk memperkenalkan konsep game, bukan gameplay yang dapat dimainkan.
        </p>
    </div>
</div>
@endsection
