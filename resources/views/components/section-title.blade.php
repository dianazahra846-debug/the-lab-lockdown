@props([
    'title' => '',
    'subtitle' => '',
    'badge' => ''
])

<div class="text-center space-y-3 max-w-3xl mx-auto mb-12">
    @if($badge)
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <span>{{ $badge }}</span>
        </div>
    @endif
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider font-sci-fi drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
        {{ $title }}
    </h2>
    @if($subtitle)
        <p class="text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
            {{ $subtitle }}
        </p>
    @endif
</div>
