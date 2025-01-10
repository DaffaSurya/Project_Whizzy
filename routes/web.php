<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Text');
});
Route::get('/Cari', function () {
    return Inertia::render('Cari');
});
Route::get('/profile', function () {
    return Inertia::render('Profile');
});
Route::get('/Komunitas', function () {
    return Inertia::render('Komunitas/Beranda');
});
Route::get('/Favorit', function () {
    return Inertia::render('Favorit');
});
Route::get('/ada', function () {
    return Inertia::render('Komunitas/Detail');
});




// // Admin Route
// Route::prefix('admin')->group([

// ]);








