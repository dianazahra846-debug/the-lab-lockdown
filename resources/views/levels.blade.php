@extends('layouts.app')

@section('title', 'Levels - THE LAB LOCKDOWN')

@section('content')
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
    <x-section-title 
        title="LEVELS" 
        subtitle="3 TAHAPAN MISI LABORATORIUM"
        badge="STAGES SPECIFICATION"
    />

    <!-- 3 Levels Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Level 1 -->
        <x-game-card 
            number="LEVEL 01"
            title="RUANG SERVER"
            desc="Pemain harus mencari 4 Kode angka Untuk membuka Smart Door."
            image="images/mockup_server_room.jpg"
            badge="IN DEVELOPMENT"
        />

        <!-- Level 2 -->
        <x-game-card 
            number="LEVEL 02"
            title="PASANG KABEL PC"
            desc="Ruangan Kerja dimana Pemain harus mencari saklar untuk menyalakan pc."
            image="images/mockup_pc_cables.jpg"
            badge="IN DEVELOPMENT"
        />

        <!-- Level 3 -->
        <x-game-card 
            number="LEVEL 03"
            title="EKSTRAK DATA"
            desc="Pemain mengestrak data untuk membuka pintu untuk ke tahap selanjutnya"
            image="images/mockup_exit_door.jpg"
            badge="IN DEVELOPMENT"
        />

        <!-- Level 4 -->
        <x-game-card 
            number="LEVEL 04"
            title="PINTU KELUAR"
            desc="Meracik kimia untuk memusnahkan monster lalu keluar dari lab"
            image="images/mockup_exit_door.jpg"
            badge="IN DEVELOPMENT"
        />
    </div>

    <!-- Challenges Section -->
    <div class="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#0a1122] to-[#060a14] border border-cyan-500/30 space-y-8">
        <x-section-title 
            title="CHALLENGES" 
            subtitle="CONTOH PERTANYAAN DARI MOCKUP"
            badge="POP-UP SECURITY QUESTIONS"
        />

        <p class="text-slate-400 text-sm max-w-2xl mx-auto text-center">
            Pemain akan menemukan pertanyaan sebagai bagian dari tantangan untuk menyelesaikan misi. Tampilan di bawah ini adalah preview sesuai dokumen rancangan.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div class="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span class="text-xs font-mono text-cyan-400">LEVEL 01 &bull; JARINGAN KOMPUTER</span>
                <h4 class="text-xl font-bold text-white">"Apa kepanjangan dari LAN?"</h4>
                <p class="text-xs text-slate-400 font-mono">Pertanyaan pop-up saat menyambungkan kabel server rusak.</p>
            </div>

            <div class="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span class="text-xs font-mono text-cyan-400">LEVEL 02 &bull; REKAYASA PERANGKAT LUNAK</span>
                <h4 class="text-xl font-bold text-white">"Apa kepanjangan dari istilah RPL?"</h4>
                <p class="text-xs text-slate-400 font-mono">Pertanyaan verifikasi akses PC Server.</p>
            </div>

            <div class="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span class="text-xs font-mono text-cyan-400">LEVEL 02 &bull; ARTIFICIAL INTELLIGENCE</span>
                <h4 class="text-lg font-bold text-white">"Fenomena penyebaran berita palsu atau manipulasi video yang terlihat sangat nyata menggunakan AI disebut..."</h4>
                <p class="text-xs text-slate-400 font-mono">Pertanyaan tambahan protokol NOC v2.1.</p>
            </div>

            <div class="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span class="text-xs font-mono text-red-400">LEVEL 03 &bull; SMART LOCK OVERRIDE</span>
                <h4 class="text-xl font-bold text-white">"3 x 80 = 490"</h4>
                <p class="text-xs text-slate-400 font-mono">Verifikasi anomali logika smart lock pintu keluar.</p>
            </div>
        </div>
    </div>
</div>
@endsection
