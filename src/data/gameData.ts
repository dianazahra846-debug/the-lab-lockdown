import { LevelItem, ChallengeItem, FeatureItem, GalleryMockupItem, TeamMember } from '../types';

export const GAME_TITLE = "THE LAB LOCKDOWN";
export const GAME_TAGLINE = "CAN YOU ESCAPE THE LABORATORY?";
export const GAME_STATUS = "IN DEVELOPMENT";
export const DEV_NOTE = "The Lab Lockdown is currently in development.";
export const GROUP_NAME = "GAME THE LAB LOCKDOWN";

export const LEVELS: LevelItem[] = [
  {
    id: 'level-01',
    number: 'LEVEL 01',
    title: 'RUANG SERVER',
    description: 'Pemain mendekati server yang rusak dan berinteraksi dengan kabel PC yang tergeletak untuk mencolokkannya.',
    objective: 'Telusuri koridor server yang gelap, temukan kabel yang terputus, dan sambungkan kembali sistem rak server.',
    location: 'Underground Server Hall - Sector A',
    interactables: ['Kabel Server Tergeletak', 'Rack Switch Module', 'Port Panel Daya'],
    status: 'IN DEVELOPMENT',
    image: '/images/mockup_server_room.jpg',
    tag: 'Network Breach',
    challengeSample: {
      question: 'Apa kepanjangan dari LAN?',
      type: 'Network Knowledge Lock',
      hint: 'Local Area Network'
    }
  },
  {
    id: 'level-02',
    number: 'LEVEL 02',
    title: 'PASANG KABEL PC',
    description: 'Pemain menuju PC Server dan menyambungkan kabel ke stopkontak serta membenarkan casing CPU.',
    objective: 'Konfigurasi workstation NOC, benahi casing CPU yang terbuka, colokkan daya utama, dan pulihkan protokol sistem v2.1.',
    location: 'NOC Terminal & Hardware Lab - Sector B',
    interactables: ['Kabel Power PC', 'Stopkontak Dinding', 'Casing CPU PC', 'Dual Terminal Monitor'],
    status: 'IN DEVELOPMENT',
    image: '/images/mockup_pc_cables.jpg',
    tag: 'Hardware Assembly',
    challengeSample: {
      question: 'Apa kepanjangan dari istilah RPL?',
      type: 'Software Engineering Lock',
      hint: 'Rekayasa Perangkat Lunak'
    }
  },
  {
    id: 'level-03',
    number: 'LEVEL 03',
    title: 'PINTU KELUAR',
    description: 'Pemain membuka smart lock pintu utama untuk kabur dari laboratorium!',
    objective: 'Pecahkan kode enkripsi pada smart lock pintu darurat bernoda cakar dan lari menuju pintu evakuasi sebelum terlambat.',
    location: 'Emergency Bulkhead Exit - Sector C',
    interactables: ['Smart Lock Security Keypad', 'Emergency Exit Handle', 'Pecahan Kaca Pengaman'],
    status: 'IN DEVELOPMENT',
    image: '/images/mockup_exit_door.jpg',
    tag: 'Final Lockdown Escape',
    challengeSample: {
      question: '3 x 80 = 490 (Verifikasi Logika Keamanan)',
      type: 'Arithmetic Smart Lock',
      hint: 'Pecahkan anomali keamanan sistem'
    }
  }
];

export const CHALLENGES: ChallengeItem[] = [
  {
    id: 'ch-1',
    level: 'LEVEL 01',
    question: 'Apa kepanjangan dari LAN?',
    category: 'Computer Network',
    difficulty: 'Easy',
    context: 'Pertanyaan keamanan pop-up saat pemain berinteraksi dengan kabel jaringan rak server di Level 1.'
  },
  {
    id: 'ch-2',
    level: 'LEVEL 02',
    question: 'Apa kepanjangan dari istilah RPL?',
    category: 'Software Engineering',
    difficulty: 'Medium',
    context: 'Verifikasi akses konsol terminal PC Server setelah perakitan casing CPU selesai.'
  },
  {
    id: 'ch-3',
    level: 'LEVEL 02',
    question: 'Fenomena penyebaran berita palsu atau manipulasi video yang terlihat sangat nyata menggunakan AI disebut...',
    category: 'Artificial Intelligence & Ethics',
    difficulty: 'Medium',
    context: 'Pertanyaan verifikasi tambahan untuk membuka akses sistem protokol keamanan NOC v2.1.'
  },
  {
    id: 'ch-4',
    level: 'LEVEL 03',
    question: '3 x 80 = 490',
    category: 'Logic & Smart Lock Override',
    difficulty: 'Critical',
    context: 'Tantangan kalkulasi smart lock pintu utama darurat untuk membatalkan status lockdown fasilitas.'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'EXPLORATION',
    tagline: 'First-Person Perspective',
    description: 'Jelajahi sudut gelap fasilitas laboratorium dan lorong-lorong rak server dengan atmosfer sci-fi yang mencekam.',
    iconName: 'Compass',
    badge: 'Core Mechanic'
  },
  {
    id: 'feat-2',
    title: 'INTERACTION',
    tagline: 'Hands-On Point & Click',
    description: 'Interaksi langsung dengan objek fisik seperti kabel berserakan, stopkontak, casing hardware CPU, dan keypad pintu.',
    iconName: 'Hand',
    badge: 'Physics & Hardware'
  },
  {
    id: 'feat-3',
    title: 'PUZZLE',
    tagline: 'System Restoration',
    description: 'Pecahkan rangkaian teka-teki logika perakitan perangkat keras dan diagnostik alur koneksi server yang rusak.',
    iconName: 'Cpu',
    badge: 'Problem Solving'
  },
  {
    id: 'feat-4',
    title: 'QUESTIONS',
    tagline: 'Pop-Up Knowledge Security',
    description: 'Hadapi pop-up pertanyaan robotik seputar jaringan LAN, rekayasa perangkat lunak, dan kecerdasan buatan untuk membuka kunci.',
    iconName: 'HelpCircle',
    badge: 'Interactive Trivia'
  },
  {
    id: 'feat-5',
    title: 'ESCAPE OBJECTIVE',
    tagline: 'Survive The Lockdown',
    description: 'Tujuan utama yang jelas dan terarah: selesaikan seluruh misi secara bertahap dan lolos dari pintu keluar darurat.',
    iconName: 'DoorClosed',
    badge: 'Primary Goal'
  },
  {
    id: 'feat-6',
    title: 'LABORATORY ENVIRONMENT',
    tagline: 'Dark Sci-Fi Atmosphere',
    description: 'Desain visual berkelas bertema laboratorium berteknologi tinggi dengan tata cahaya neon cyan, kabel fiber optik, dan lantai metalik.',
    iconName: 'FlaskConical',
    badge: 'Atmosphere'
  }
];

export const GAME_FLOW_STEPS = [
  {
    step: '00',
    title: 'START GAME',
    desc: 'Masuk melalui Main Menu dengan opsi Pengaturan Audio dan Layar Penuh.',
    badge: 'Launch'
  },
  {
    step: '01',
    title: 'LEVEL 01: RUANG SERVER',
    desc: 'Dekati server yang rusak dan sambungkan kabel PC yang tergeletak di lantai.',
    badge: 'Level 1'
  },
  {
    step: '02',
    title: 'LEVEL 02: PASANG KABEL PC',
    desc: 'Menuju PC Server, colok kabel ke stopkontak, dan perbaiki casing CPU.',
    badge: 'Level 2'
  },
  {
    step: '03',
    title: 'LEVEL 03: PINTU KELUAR',
    desc: 'Buka sistem smart lock pada pintu utama yang tergores cakar misterius.',
    badge: 'Level 3'
  },
  {
    step: '04',
    title: 'YOU ESCAPED!',
    desc: 'Berhasil meloloskan diri dari fasilitas laboratorium lockdown!',
    badge: 'Victory'
  }
];

export const GAMEPLAY_FLOW_DIAGRAM = [
  { id: '1', title: 'EXPLORE', icon: 'Compass', desc: 'Jelajahi lorong & koridor server' },
  { id: '2', title: 'INTERACT', icon: 'Hand', desc: 'Pilih & pasang kabel hardware' },
  { id: '3', title: 'SOLVE', icon: 'Cpu', desc: 'Benahi casing CPU & stopkontak' },
  { id: '4', title: 'ANSWER', icon: 'HelpCircle', desc: 'Jawab pop-up pertanyaan misi' },
  { id: '5', title: 'ESCAPE', icon: 'DoorClosed', desc: 'Buka smart lock pintu keluar' },
];

export const GALLERY_MOCKUPS: GalleryMockupItem[] = [
  {
    id: 'mockup-menu',
    title: 'Main Menu',
    category: 'Main Menu',
    description: 'Tampilan menu awal game The Lab Lockdown dengan tombol Start Game, Setting, dan Exit pada koridor laboratorium futuristik.',
    pageRef: 'Mockup PDF Page 2',
    image: '/images/mockup_hero.jpg',
    aspectRatio: '16/9',
    highlights: ['Start Game untuk langsung bermain', 'Setting untuk konfigurasi audio & layar', 'Exit untuk keluar dari game']
  },
  {
    id: 'mockup-setting',
    title: 'Audio & Display Setting',
    category: 'Setting',
    description: 'Menu pengaturan untuk menyesuaikan Master Volume, SFX Volume, Music Volume, dan saklar mode Fullscreen < ON >.',
    pageRef: 'Mockup PDF Page 3',
    image: '/images/mockup_hero.jpg',
    aspectRatio: '16/9',
    highlights: ['Master Volume Slider', 'SFX Volume Slider', 'Music Volume Slider', 'Fullscreen Toggle < ON >']
  },
  {
    id: 'mockup-lvl1',
    title: 'Level 1: Ruang Server',
    category: 'Level 1',
    description: 'Pemain berada di lorong rak server gelap dengan kabel tergeletak di lantai, berjalan mendekati unit yang mengalami kegagalan daya.',
    pageRef: 'Mockup PDF Page 4, 5, 6',
    image: '/images/mockup_server_room.jpg',
    aspectRatio: '16/9',
    highlights: ['Sudut pandang first-person', 'Interaksi kabel PC yang tergeletak', 'Rak server bercahaya cyan & hijau']
  },
  {
    id: 'mockup-question',
    title: 'Pop-Up Pertanyaan Misi',
    category: 'Question',
    description: 'Tampilan pop-up dengan avatar robotik merah berisi pertanyaan teknis seperti kepanjangan LAN, istilah RPL, dan materi kecerdasan buatan.',
    pageRef: 'Mockup PDF Page 7, 10, 11',
    image: '/images/red_robot.jpg',
    aspectRatio: '1/1',
    highlights: ['Avatar robotik merah penguji', 'Pertanyaan pop-up penyelesaian misi', 'Form input "Masukkan Jawaban" berkunci']
  },
  {
    id: 'mockup-lvl2',
    title: 'Level 2: Pasang Kabel PC',
    category: 'Level 2',
    description: 'Workstation PC Server dengan pencahayaan neon, dual monitor terminal NOC System Protocol v2.1, perakitan kabel stopkontak dan casing CPU.',
    pageRef: 'Mockup PDF Page 8, 9',
    image: '/images/mockup_pc_cables.jpg',
    aspectRatio: '16/9',
    highlights: ['PC Gaming/Server casing dengan RGB pendingin cair', 'Sambungan kabel ke stopkontak', 'NOC System Protocol v2.1 Active']
  },
  {
    id: 'mockup-lvl3',
    title: 'Level 3: Pintu Keluar Smart Lock',
    category: 'Level 3',
    description: 'Pintu besi keluar utama dengan panel kaca pecah di kedua sisi, tanda EXIT KELUAR hijau, dan smart lock dengan bekas cakaran yang harus di-override.',
    pageRef: 'Mockup PDF Page 12, 13, 14',
    image: '/images/mockup_exit_door.jpg',
    aspectRatio: '16/9',
    highlights: ['Lampu EXIT KELUAR darurat', 'Pintu baja dengan panel smart lock tergores', 'Pecahan kaca laboratorium pengaman']
  },
  {
    id: 'mockup-gameover',
    title: 'Game Over Screen',
    category: 'Game Over',
    description: 'Tampilan layar Game Over dengan opsi Exit dan Retry untuk mengulang tantangan laboratorium.',
    pageRef: 'Mockup PDF Page 17, 21',
    image: '/images/mockup_hero.jpg',
    aspectRatio: '16/9',
    highlights: ['Tipografi tebal bertema horor', 'Opsi Exit & Retry', 'Atmosfer kegagalan misi']
  },
  {
    id: 'mockup-escaped',
    title: 'You Escaped!',
    category: 'You Escaped',
    description: 'Layar akhir misi sukses setelah pemain berhasil membuka pintu keluar dan melarikan diri dari lorong laboratorium yang angker.',
    pageRef: 'Mockup PDF Page 16, 18',
    image: '/images/mockup_escaped.jpg',
    aspectRatio: '16/9',
    highlights: ['Status YOU ESCAPED!', 'Lorong server dengan genangan misterius', 'Layar penutup Terima Kasih']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'm1', name: 'Member 01', role: 'Game Project Lead & Concept', division: 'Game The Lab Lockdown', status: 'Core Developer' },
  { id: 'm2', name: 'Member 02', role: 'Level & Puzzle Designer', division: 'Game The Lab Lockdown', status: 'Core Developer' },
  { id: 'm3', name: 'Member 03', role: 'Asset & UI/UX Developer', division: 'Game The Lab Lockdown', status: 'Core Developer' },
  { id: 'm4', name: 'Member 04', role: 'Technical QA & Documentation', division: 'Game The Lab Lockdown', status: 'Core Developer' },
];

export const BLADE_SOURCE_FILES: Record<string, { path: string; code: string }> = {
  '/': {
    path: 'resources/views/home.blade.php',
    code: `@extends('layouts.app')

@section('title', 'THE LAB LOCKDOWN - Official Showcase')

@section('content')
<section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-cyan-500/20">
    {{-- Ambient Sci-Fi Glow & Backdrop --}}
    <div class="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/70 to-transparent"></div>
    <div class="absolute inset-0 bg-cover bg-center -z-10 filter brightness-[0.35]" style="background-image: url('{{ asset('images/mockup_hero.jpg') }}');"></div>

    <div class="container mx-auto px-4 py-20 relative z-10 text-center">
        {{-- Status Badge --}}
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-8">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            GAME THE LAB LOCKDOWN &bull; STATUS: IN DEVELOPMENT
        </div>

        {{-- Main Hero Titles --}}
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-wider mb-4 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            THE LAB LOCKDOWN
        </h1>

        <p class="text-xl md:text-3xl font-semibold text-cyan-400 tracking-widest uppercase mb-6 font-mono">
            CAN YOU ESCAPE THE LABORATORY?
        </p>

        <p class="max-w-2xl mx-auto text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
            The Lab Lockdown adalah game bertema laboratorium lockdown, di mana pemain harus menyelesaikan berbagai tantangan untuk mencapai jalan keluar.
        </p>

        {{-- Action Buttons --}}
        <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="{{ route('about') }}" class="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider rounded border border-cyan-300 transition duration-200 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                EXPLORE THE GAME
            </a>
            <a href="{{ route('gameplay') }}" class="px-8 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-cyan-400 hover:text-white font-bold uppercase tracking-wider rounded border border-cyan-500/40 hover:border-cyan-400 transition duration-200">
                VIEW GAMEPLAY
            </a>
        </div>
    </div>
</section>
@endsection`
  },
  '/about': {
    path: 'resources/views/about.blade.php',
    code: `@extends('layouts.app')

@section('title', 'About - THE LAB LOCKDOWN')

@section('content')
<div class="container mx-auto px-4 py-16">
    <x-section-title 
        title="ABOUT THE GAME" 
        subtitle="CONCEPT & PRIMARY OBJECTIVE"
        badge="GAME THE LAB LOCKDOWN SHOWCASE"
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
            <div class="p-6 rounded-lg bg-slate-900/80 border border-cyan-500/30">
                <h3 class="text-xl font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-3">
                    <span class="text-cyan-400 font-mono">01.</span> KONSEP GAME
                </h3>
                <p class="text-slate-300 leading-relaxed">
                    The Lab Lockdown adalah game bertema laboratorium lockdown, di mana pemain harus menyelesaikan berbagai tantangan untuk mencapai jalan keluar.
                </p>
            </div>

            {{-- Objective Card --}}
            <div class="p-8 rounded-lg bg-gradient-to-br from-cyan-950/40 to-slate-900/90 border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                <div class="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">MISSION DIRECTIVE</div>
                <div class="text-sm text-slate-400 uppercase tracking-wider mb-1">OBJECTIVE</div>
                <h2 class="text-3xl md:text-4xl font-black text-white uppercase tracking-wider text-cyan-300">
                    ESCAPE THE LABORATORY
                </h2>
                <p class="mt-4 text-slate-300 text-sm leading-relaxed">
                    Pemain harus menelusuri 3 tingkatan area kritis: Ruang Server, meja workstation perakitan PC, hingga Smart Lock pada pintu keluar utama.
                </p>
            </div>
        </div>

        <div class="relative rounded-lg overflow-hidden border border-cyan-500/30">
            <img src="{{ asset('images/mockup_hero.jpg') }}" alt="Laboratory Hallway" class="w-full h-auto object-cover">
        </div>
    </div>
</div>
@endsection`
  },
  '/gameplay': {
    path: 'resources/views/gameplay.blade.php',
    code: `@extends('layouts.app')

@section('title', 'Gameplay - THE LAB LOCKDOWN')

@section('content')
<div class="container mx-auto px-4 py-16">
    <x-section-title 
        title="GAMEPLAY FLOW" 
        subtitle="HOW TO SURVIVE AND ESCAPE"
        badge="MECHANICS OVERVIEW"
    />

    {{-- Visual Flow: EXPLORE -> INTERACT -> SOLVE -> ANSWER -> ESCAPE --}}
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 my-16">
        @php
            $steps = [
                ['name' => 'EXPLORE', 'desc' => 'Jelajahi koridor & rak server'],
                ['name' => 'INTERACT', 'desc' => 'Sentuh kabel & objek perangkat'],
                ['name' => 'SOLVE', 'desc' => 'Perbaiki stopkontak & casing PC'],
                ['name' => 'ANSWER', 'desc' => 'Jawab pop-up pertanyaan misi'],
                ['name' => 'ESCAPE', 'desc' => 'Buka smart lock pintu keluar']
            ];
        @endphp

        @foreach($steps as $index => $step)
            <div class="p-6 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-center">
                <div class="text-xs font-mono text-cyan-400 mb-2">STEP 0{{ $index + 1 }}</div>
                <div class="text-2xl font-black text-white mb-2">{{ $step['name'] }}</div>
                <p class="text-xs text-slate-400">{{ $step['desc'] }}</p>
            </div>
        @endforeach
    </div>

    {{-- In Development Notice --}}
    <div class="p-6 rounded border border-amber-500/30 bg-amber-950/20 text-center max-w-xl mx-auto">
        <span class="text-amber-400 font-bold uppercase tracking-wider text-sm">Status: In Development</span>
        <p class="text-xs text-slate-400 mt-1">Sistem gameplay non-playable untuk tujuan pengenalan dan showcase game resmi.</p>
    </div>
</div>
@endsection`
  },
  '/levels': {
    path: 'resources/views/levels.blade.php',
    code: `@extends('layouts.app')

@section('title', 'Levels & Challenges - THE LAB LOCKDOWN')

@section('content')
<div class="container mx-auto px-4 py-16">
    <x-section-title 
        title="LEVELS" 
        subtitle="3 MISSION STAGES IDENTIFIED"
        badge="STAGES OVERVIEW"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {{-- LEVEL 01 --}}
        <x-game-card 
            number="LEVEL 01"
            title="RUANG SERVER"
            desc="Pemain mendekati server yang rusak dan berinteraksi dengan kabel PC yang tergeletak untuk mencolokkannya."
            image="images/mockup_server_room.jpg"
            badge="IN DEVELOPMENT"
        />

        {{-- LEVEL 02 --}}
        <x-game-card 
            number="LEVEL 02"
            title="PASANG KABEL PC"
            desc="Pemain menuju PC Server dan menyambungkan kabel ke Stopkontak dan membenarkan casing CPU."
            image="images/mockup_pc_cables.jpg"
            badge="IN DEVELOPMENT"
        />

        {{-- LEVEL 03 --}}
        <x-game-card 
            number="LEVEL 03"
            title="PINTU KELUAR"
            desc="Pemain membuka smart lock pintu utama untuk kabur!"
            image="images/mockup_exit_door.jpg"
            badge="IN DEVELOPMENT"
        />
    </div>

    {{-- CHALLENGES SECTION --}}
    <div class="mt-20">
        <x-section-title 
            title="CHALLENGES" 
            subtitle="POP-UP SECURITY QUESTIONS"
            badge="PUZZLE ARCHIVE"
        />
        {{-- Questions List from mockup --}}
    </div>
</div>
@endsection`
  },
  '/features': {
    path: 'resources/views/features.blade.php',
    code: `@extends('layouts.app')

@section('title', 'Features - THE LAB LOCKDOWN')

@section('content')
<div class="container mx-auto px-4 py-16">
    <x-section-title 
        title="FEATURES" 
        subtitle="CORE PILLARS OF THE GAME"
        badge="GAME ATTRIBUTES"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        @php
            $features = [
                'EXPLORATION',
                'INTERACTION',
                'PUZZLE',
                'QUESTIONS',
                'ESCAPE OBJECTIVE',
                'LABORATORY ENVIRONMENT'
            ];
        @endphp

        @foreach($features as $f)
            <div class="p-6 rounded-lg bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition">
                <h3 class="text-xl font-bold text-white uppercase tracking-wider mb-2">{{ $f }}</h3>
            </div>
        @endforeach
    </div>

    {{-- GAME FLOW TIMELINE --}}
    <x-section-title 
        title="GAME FLOW" 
        subtitle="PROGRESSION TIMELINE"
        badge="TIMELINE"
    />
</div>
@endsection`
  },
  '/preview': {
    path: 'resources/views/preview.blade.php',
    code: `@extends('layouts.app')

@section('title', 'Mockup Preview - THE LAB LOCKDOWN')

@section('content')
<div class="container mx-auto px-4 py-16">
    <x-section-title 
        title="GAME PREVIEW" 
        subtitle="ORIGINAL MOCKUP GALLERY"
        badge="VISUAL ASSETS"
    />

    {{-- 8 Mockup Categories: Main Menu, Setting, Level 1, Question, Level 2, Level 3, Game Over, You Escaped --}}
</div>
@endsection`
  },
  '/team': {
    path: 'resources/views/team.blade.php',
    code: `@extends('layouts.app')

@section('title', 'The Team - THE LAB LOCKDOWN')

@section('content')
<div class="container mx-auto px-4 py-16">
    <x-section-title 
        title="THE TEAM" 
        subtitle="GAME THE LAB LOCKDOWN"
        badge="CREATORS"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        @for($i = 1; $i <= 4; $i++)
            <div class="p-6 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-mono font-bold">
                    0{{ $i }}
                </div>
                <h3 class="text-lg font-bold text-white uppercase">Member 0{{ $i }}</h3>
                <p class="text-xs text-cyan-400/80 mt-1">Game The Lab Lockdown</p>
            </div>
        @endfor
    </div>

    <div class="p-8 rounded-lg bg-slate-900/90 border border-cyan-500/40 text-center max-w-xl mx-auto">
        <h4 class="text-xl font-bold text-white uppercase mb-2">GAME DEVELOPMENT</h4>
        <div class="inline-block px-3 py-1 rounded bg-amber-950/60 text-amber-400 font-mono text-sm uppercase mb-3">
            STATUS: IN DEVELOPMENT
        </div>
        <p class="text-slate-300 text-sm">"The Lab Lockdown is currently in development."</p>
    </div>
</div>
@endsection`
  }
};
