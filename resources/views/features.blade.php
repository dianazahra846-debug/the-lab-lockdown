@extends('layouts.app')

@section('title', 'Features - THE LAB LOCKDOWN')

@section('content')
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
    <x-section-title 
        title="FEATURES" 
        subtitle="FITUR UTAMA YANG DIDUKUNG MOCKUP"
        badge="CORE ATTRIBUTES"
    />

    <!-- 6 Features Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @php
            $features = [
                ['title' => 'EXPLORATION', 'desc' => 'Eksplorasi sudut fasilitas laboratorium yang gelap dengan sudut pandang first-person POV.'],
                ['title' => 'INTERACTION', 'desc' => 'Interaksi fisik dengan Barang Barang yang ada di game, stopkontak dinding, dan Computer.'],
                ['title' => 'PUZZLE', 'desc' => 'Teka-teki pemulihan sistem koneksi .'],
                ['title' => 'QUESTIONS', 'desc' => 'Menajawab Berbagai teka teki.'],
                ['title' => 'ESCAPE OBJECTIVE', 'desc' => 'Tujuan terarah untuk menyelesaikan seluruh misi dan lolos dari laboratorium.'],
                ['title' => 'LABORATORY ENVIRONMENT', 'desc' => 'Atmosfer laboratorium sci-fi misterius dengan tata cahaya neon dan rak server tinggi.']
            ];
        @endphp

        @foreach($features as $f)
            <div class="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 transition space-y-4">
                <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest block">FEATURE PILLAR</span>
                <h3 class="text-2xl font-black text-white uppercase font-sci-fi tracking-wide">{{ $f['title'] }}</h3>
                <p class="text-slate-300 text-sm leading-relaxed">{{ $f['desc'] }}</p>
            </div>
        @endforeach
    </div>

    <!-- Game Flow Timeline -->
    <div class="p-8 md:p-12 rounded-2xl bg-slate-900/60 border border-cyan-500/30 space-y-8">
        <x-section-title 
            title="GAME FLOW" 
            subtitle="TIMELINE PROGRESSION"
            badge="ALUR PROSES"
        />

        <div class="max-w-3xl mx-auto space-y-4">
            @php
                $timeline = [
                    'START GAME',
                    'LEVEL 01: RUANG SERVER',
                    'LEVEL 02: PASANG KABEL PC',
                    'LEVEL 03: PINTU KELUAR',
                    'YOU ESCAPED!'
                ];
            @endphp

            @foreach($timeline as $index => $item)
                <div class="p-5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span class="font-mono text-cyan-400 text-xs">TAHAP 0{{ $index + 1 }}</span>
                    <span class="text-lg font-black text-white uppercase">{{ $item }}</span>
                    <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                </div>
            @endforeach
        </div>
        <p class="text-center text-xs font-mono text-slate-400">*Ini hanya visualisasi alur game.</p>
    </div>
</div>
@endsection
