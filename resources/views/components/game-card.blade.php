@props([
    'number' => '',
    'title' => '',
    'desc' => '',
    'image' => '',
    'badge' => 'IN DEVELOPMENT'
])

<div class="rounded-2xl bg-slate-900/85 border border-cyan-500/30 hover:border-cyan-400 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] group">
    <div class="relative aspect-video overflow-hidden bg-black">
        <img src="{{ asset($image) }}" alt="{{ $title }}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div class="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold">
            {{ $number }}
        </div>

        <div class="absolute top-3 right-3 px-3 py-1 rounded bg-amber-950/90 border border-amber-500/50 text-amber-400 text-[11px] font-mono font-bold uppercase">
            {{ $badge }}
        </div>
    </div>

    <div class="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
            <h3 class="text-2xl font-black text-white uppercase font-sci-fi group-hover:text-cyan-300 transition">
                {{ $title }}
            </h3>
            <p class="text-slate-300 text-sm leading-relaxed">
                {{ $desc }}
            </p>
        </div>
    </div>
</div>
