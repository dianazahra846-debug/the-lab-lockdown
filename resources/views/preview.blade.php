@extends('layouts.app')

@section('title', 'Mockup Preview - THE LAB LOCKDOWN')

@section('content')
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16" x-data="{ modalOpen: false, modalImg: '', modalTitle: '', modalCat: '', modalDesc: '' }">
    <x-section-title 
        title="GAME PREVIEW" 
        subtitle="MOCKUP VISUAL SPECIFICATIONS"
        badge="GALERI DOKUMENTASI MOCKUP"
    />

    @php
        $mockups = [
            ['cat' => 'Main Menu', 'title' => 'Main Menu', 'img' => 'images/mockup_hero.jpg', 'desc' => 'Tampilan menu awal dengan Start Game, Setting, dan Exit pada koridor laboratorium.'],
            ['cat' => 'Setting', 'title' => 'Audio & Display Setting', 'img' => 'images/mockup_hero.jpg', 'desc' => 'Pengaturan Master Volume, SFX Volume, Music Volume, dan saklar Fullscreen < ON >.'],
            ['cat' => 'Level 1', 'title' => 'Level 1: Ruang Server', 'img' => 'images/mockup_server_room.jpg', 'desc' => 'Lorong rak server gelap dengan kabel tergeletak untuk dicolokkan ke server rusak.'],
            ['cat' => 'Question', 'title' => 'Pop-Up Pertanyaan Misi', 'img' => 'images/red_robot.jpg', 'desc' => 'Pop-up robotik merah berisi pertanyaan teknis seperti LAN, RPL, dan AI ethics.'],
            ['cat' => 'Level 2', 'title' => 'Level 2: Pasang Kabel PC', 'img' => 'images/mockup_pc_cables.jpg', 'desc' => 'Workstation PC server dengan pendingin cair RGB, dual monitor, dan stopkontak.'],
            ['cat' => 'Level 3', 'title' => 'Level 3: Pintu Keluar', 'img' => 'images/mockup_exit_door.jpg', 'desc' => 'Pintu besi keluar dengan panel kaca pecah, lampu EXIT KELUAR, dan smart lock.'],
            ['cat' => 'Game Over', 'title' => 'Game Over Screen', 'img' => 'images/mockup_hero.jpg', 'desc' => 'Layar Game Over dengan pilihan Exit dan Retry.'],
            ['cat' => 'You Escaped', 'title' => 'You Escaped!', 'img' => 'images/mockup_escaped.jpg', 'desc' => 'Layar akhir keberhasilan melarikan diri dari laboratorium lockdown.']
        ];
    @endphp

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        @foreach($mockups as $m)
            <div 
                @click="modalImg = '{{ asset($m['img']) }}'; modalTitle = '{{ $m['title'] }}'; modalCat = '{{ $m['cat'] }}'; modalDesc = '{{ $m['desc'] }}'; modalOpen = true"
                class="cursor-pointer rounded-2xl bg-slate-900/80 border border-cyan-500/25 hover:border-cyan-400 overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
            >
                <div class="relative aspect-video overflow-hidden bg-black">
                    <img src="{{ asset($m['img']) }}" alt="{{ $m['title'] }}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 text-cyan-300 text-[10px] font-mono uppercase">
                        {{ $m['cat'] }}
                    </div>
                </div>
                <div class="p-5 space-y-2">
                    <h3 class="text-base font-bold text-white uppercase group-hover:text-cyan-300 transition">{{ $m['title'] }}</h3>
                    <p class="text-xs text-slate-400 line-clamp-2">{{ $m['desc'] }}</p>
                </div>
            </div>
        @endforeach
    </div>

    <!-- Fullscreen Modal -->
    <div 
        x-show="modalOpen" 
        x-cloak 
        @click="modalOpen = false" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
    >
        <div @click.stop class="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/50 rounded-2xl overflow-hidden p-6 space-y-4">
            <div class="flex justify-between items-center border-b border-slate-800 pb-3">
                <span class="text-xs font-mono text-cyan-400 uppercase" x-text="modalCat"></span>
                <button @click="modalOpen = false" class="text-slate-400 hover:text-white">&times; TUTUP</button>
            </div>
            <img :src="modalImg" :alt="modalTitle" class="w-full max-h-[60vh] object-contain rounded-lg">
            <div>
                <h4 class="text-xl font-bold text-white uppercase" x-text="modalTitle"></h4>
                <p class="text-sm text-slate-300 mt-1" x-text="modalDesc"></p>
            </div>
        </div>
    </div>
</div>
@endsection
