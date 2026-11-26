# THE LAB LOCKDOWN - OFFICIAL GAME SHOWCASE WEBSITE

**Tagline:** CAN YOU ESCAPE THE LABORATORY?  
**Project:** Game The Lab Lockdown  
**Status:** IN DEVELOPMENT  

---

## 📌 Tentang Proyek

Website ini adalah **Website Resmi Showcase & Pengenalan Game (Game Introduction Website)** untuk game indie **"The Lab Lockdown"**.

> ⚠️ **Catatan Penting:**  
> Game utama *The Lab Lockdown* masih dalam proses development. Website ini dirancang murni sebagai sarana showcase dan perkenalan game (bukan game yang dapat dimainkan/non-playable).

---

## 🚀 Fitur & Halaman yang Tersedia

1. **HOME (`/`)**
   - Hero section megah bertema laboratory lockdown dengan tipografi Dark Sci-Fi.
   - Tagline resmi: *"CAN YOU ESCAPE THE LABORATORY?"*.
   - Deskripsi game terverifikasi dari dokumen mockup.
   - Tombol aksi: `EXPLORE THE GAME` & `VIEW GAMEPLAY`.
   - Ringkasan 3 tahapan level dan indikator status pengembangan.

2. **ABOUT (`/about`)**
   - Konsep game murni sesuai dokumen: *"The Lab Lockdown adalah game bertema laboratorium lockdown, di mana pemain harus menyelesaikan berbagai tantangan untuk mencapai jalan keluar."*
   - Kartu direktif misi utama: **OBJECTIVE: ESCAPE THE LABORATORY**.
   - Identitas pengembang: Game The Lab Lockdown.

3. **GAMEPLAY (`/gameplay`)**
   - Bagan alur gameplay loop visual:
     $$\text{EXPLORE} \rightarrow \text{INTERACT} \rightarrow \text{SOLVE} \rightarrow \text{ANSWER} \rightarrow \text{ESCAPE}$$
   - Penjelasan interaktif tiap tahapan first-person POV, perakitan kabel hardware, dan pembobolan smart lock.
   - Indikator pemberitahuan showcase non-playable.

4. **LEVELS & CHALLENGES (`/levels`)**
   - **LEVEL 01: RUANG SERVER**  
     *Pemain mendekati server yang rusak dan berinteraksi dengan kabel PC yang tergeletak untuk mencolokkannya.*
   - **LEVEL 02: PASANG KABEL PC**  
     *Pemain menuju PC Server dan menyambungkan kabel ke Stopkontak dan membenarkan casing CPU.*
   - **LEVEL 03: PINTU KELUAR**  
     *Pemain membuka smart lock pintu utama untuk kabur!*
   - **CHALLENGES SECTION:**  
     Preview pop-up pertanyaan keamanan robotik dari mockup:
     - *"Apa kepanjangan dari LAN?"*
     - *"Apa kepanjangan dari istilah RPL?"*
     - *"Fenomena penyebaran berita palsu atau manipulasi video yang terlihat sangat nyata menggunakan AI disebut..."*
     - *"3 x 80 = 490"*

5. **FEATURES (`/features`)**
   - Enam kartu pilar utama:
     1. EXPLORATION
     2. INTERACTION
     3. PUZZLE
     4. QUESTIONS
     5. ESCAPE OBJECTIVE
     6. LABORATORY ENVIRONMENT
   - **GAME FLOW TIMELINE:**
     START GAME $\rightarrow$ LEVEL 01 RUANG SERVER $\rightarrow$ LEVEL 02 PASANG KABEL PC $\rightarrow$ LEVEL 03 PINTU KELUAR $\rightarrow$ YOU ESCAPED!

6. **MOCKUP PREVIEW (`/preview`)**
   - Galeri aset mockup dengan 8 kategori terstruktur:
     - Main Menu
     - Setting
     - Level 1
     - Question
     - Level 2
     - Level 3
     - Game Over
     - You Escaped
   - Filter kategori interaktif.
   - Klik gambar $\rightarrow$ Fullscreen Lightbox Modal dengan ringkasan poin perancangan.

7. **TEAM & DEV STATUS (`/team`)**
   - **THE TEAM:** Member 01, Member 02, Member 03, Member 04 (Game The Lab Lockdown).
   - **GAME DEVELOPMENT SECTION:** Status **IN DEVELOPMENT**.
   - Teks resmi: *"The Lab Lockdown is currently in development."*

8. **SETTING HUD (Replikasi Mockup Page 3)**
   - Master Volume slider ("Sesuaikan keseluruhan sound game")
   - SFX Volume slider ("Sesuaikan volume efek suara")
   - Music Volume slider ("Sesuaikan volume latar musik")
   - Fullscreen switch `< ON >`

9. **LARAVEL BLADE CODE INSPECTOR**
   - Tombol **BLADE VIEW** pada navigasi atas memungkinkan pengguna / guru penilai memeriksa langsung file template Blade asli (`resources/views/...`) untuk setiap rute yang sedang dibuka.

---

## 📂 Struktur Arsitektur Laravel

```
resources/views/
├── layouts/
│   └── app.blade.php             # Master layout dengan Tailwind CSS & Alpine.js
├── components/
│   ├── navbar.blade.php          # Sticky navigation bar & mobile drawer
│   ├── footer.blade.php          # Official footer dengan copyright 2026
│   ├── section-title.blade.php   # Reusable Sci-Fi section title header
│   └── game-card.blade.php       # Level & mission stage card
├── home.blade.php                # View: /
├── about.blade.php               # View: /about
├── gameplay.blade.php            # View: /gameplay
├── levels.blade.php              # View: /levels
├── features.blade.php            # View: /features
├── preview.blade.php             # View: /preview
└── team.blade.php                # View: /team

routes/
└── web.php                       # Definisi seluruh rute Laravel

app/Http/Controllers/
└── GameShowcaseController.php    # Controller pengendali view
```

---

## 💻 Cara Menjalankan Project

### 1. Di AI Studio Live Preview (Otomatis)
Aplikasi showcase langsung aktif dan dapat diuji pada live preview panel di sebelah kanan dengan seluruh navigasi rute dan modal interaktif.

### 2. Di Lingkungan Laravel PHP Lokal
Jika ingin menjalankan project ini sebagai aplikasi Laravel mandiri di komputer Anda:

```bash
# 1. Pastikan PHP (>= 8.2) dan Composer terpasang
php -v
composer -v

# 2. Masuk ke direktori project
cd the-lab-lockdown

# 3. Jalankan development server Laravel
php artisan serve
```

Aplikasi akan dapat diakses pada browser di: `http://127.0.0.1:8000`
