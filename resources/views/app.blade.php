<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    
    {{-- SEO Meta Tags --}}
    <title>Whizzy - Dengarkan Buku, Tanpa Perlu Membaca</title>
    <meta name="description" content="Whizzy adalah platform audiobook terbaik bagi mereka yang malas membaca. Dengarkan buku favorit kapan saja, di mana saja.">
    <meta name="keywords" content="audiobook, buku suara, dengarkan buku, Whizzy, platform audiobook, perpustakaan digital">
    <meta name="author" content="Whizzy">
    
    {{-- Open Graph Meta Tags (untuk berbagi di media sosial) --}}
    <meta property="og:title" content="Whizzy - Dengarkan Buku, Tanpa Perlu Membaca">
    <meta property="og:description" content="Whizzy adalah platform audiobook terbaik bagi mereka yang malas membaca. Dengarkan buku favorit kapan saja, di mana saja.">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">

    {{-- Twitter Card Meta Tags --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Whizzy - Dengarkan Buku, Tanpa Perlu Membaca">
    <meta name="twitter:description" content="Whizzy adalah platform audiobook terbaik bagi mereka yang malas membaca. Dengarkan buku favorit kapan saja, di mana saja.">

    {{-- Favicon (Menggunakan logo asli tanpa tambahan aset) --}}
    <link rel="shortcut icon" href="{{ asset('logo.png') }}" type="image/x-icon">

    {{-- Vite & Inertia.js --}}
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

<style>
    * {
        -ms-high-contrast: none !important;
    }
</style>

</html>
