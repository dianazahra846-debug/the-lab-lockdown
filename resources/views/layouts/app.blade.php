<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'THE LAB LOCKDOWN - Official Game Showcase')</title>
    <meta name="description" content="Official game introduction and showcase website for The Lab Lockdown. Can you escape the laboratory?">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;0,600;0,700;1,700&family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN / Vite Assets -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <!-- Alpine.js for lightweight interactive components -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

    <style>
        body {
            background-color: #050811;
            color: #e2e8f0;
            font-family: 'Rajdhani', sans-serif;
            overflow-x: hidden;
            letter-spacing: 0.025em;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Chakra Petch', sans-serif;
        }
        .font-mono {
            font-family: 'Share Tech Mono', monospace;
        }
        .bg-cyber-grid {
            background-size: 40px 40px;
            background-image: 
                linear-gradient(to right, rgba(0, 240, 255, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 240, 255, 0.04) 1px, transparent 1px);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col bg-[#050811] text-slate-100 relative">
    <!-- Cyber Grid Background -->
    <div class="fixed inset-0 bg-cyber-grid pointer-events-none opacity-20 -z-10"></div>

    <!-- Navigation Bar Component -->
    @include('components.navbar')

    <!-- Main Dynamic Content -->
    <main class="flex-1 relative z-10">
        @yield('content')
    </main>

    <!-- Footer Component -->
    @include('components.footer')

    @stack('scripts')
</body>
</html>
