<?php

use App\Http\Controllers\Admin\AudiobookController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ChapterController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ForumController;
use App\Http\Controllers\Admin\TrashController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\KomentarChapterController;
use App\Http\Controllers\User\KomunitasController;
use App\Http\Controllers\User\SearchController;
use App\Models\KomentarChapterModel;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Text');
Route::inertia('/Cari', 'Cari');
Route::inertia('/profile', 'Profile');
Route::inertia('/Komunitas', 'Komunitas/Beranda');
Route::inertia('/Favorit', 'Favorit');
Route::inertia('/Garitan-Filantropi/detail', 'Mendengarkan');
Route::inertia('/Garitan-Filantropi/play', 'Audio');
Route::inertia('/EditProfile', 'EditProfile');

// Auth
Route::inertia('/login', 'Auth/Login')->name('login');
Route::post('/authenticate', [LoginController::class, 'authenticate']);
Route::get('/logout', [LoginController::class, 'logout']);


// Admin Route
Route::prefix('admin')->group(function () {
    
    // Dashboard
    Route::get('/dashboard', action: [DashboardController::class, 'index']);
    
    // Users
    Route::get('/users', [UsersController::class, 'index']);
    Route::post('/users/store', [UsersController::class, 'store']);
    Route::get('/users/edit/{id}', [UsersController::class, 'edit']);
    Route::post('/users/update/{id}', [UsersController::class, 'update']);

    // Chapter
    Route::get('/chapter', [ChapterController::class, 'index']);
    Route::post('/chapter/store', [ChapterController::class, 'store']);
    Route::get('/chapter/edit/{id}', [ChapterController::class, 'edit']);
    Route::post('/chapter/update/{id}', [ChapterController::class, 'update']);
    
    // categories
    Route::get('/category', [CategoryController::class, 'index']);
    Route::post('/category/store', [CategoryController::class, 'store']);
    Route::get('/category/detail/{id}', [CategoryController::class, 'edit']);
    Route::get('/category/edit/{id}', [CategoryController::class, 'edit']);
    Route::post('/category/update/{id}', [CategoryController::class, 'update']);
    Route::get('/category/delete/{id}', [CategoryController::class, 'delete']);

    // categories
    Route::get('/audiobook', [AudiobookController::class, 'index']);
    Route::get('/audiobook/create', [AudiobookController::class, 'create']);
    Route::post('/audiobook/store', [AudiobookController::class, 'store']);
    Route::get('/audiobook/detail/{id}', [AudiobookController::class, 'detail']);
    Route::get('/audiobook/softDelete/{id}', [AudiobookController::class, 'softDelete']);

    // chapter
    Route::get('/chapter', [ChapterController::class, 'index']);
    Route::get('/chapter/create/{id}', [ChapterController::class, 'create']);
    Route::post('/chapter/store', [ChapterController::class, 'store']);
    Route::get('/chapter/detail/{id}', [ChapterController::class, 'detail']);

    // trash
    Route::get('/trash', [TrashController::class, 'index']);
    Route::get('/trash/restore/{id}', [AudiobookController::class, 'restore']);
    Route::get('/trash/hardDelete/{id}', [AudiobookController::class, 'hardDelete']);

    // forum
    Route::get('/forum', [ForumController::class, 'index']);
    Route::get('/forum/create/', [ForumController::class, 'create']);
    Route::post('/forum/store', [ForumController::class, 'store']);
    Route::get('/forum/detail/{id}', [ForumController::class, 'detail']);
    
    // homepage settings
    Route::get('/homepage-settings', [HomepageController::class, 'index']);
    Route::post('/homepage-settings/store-featured', [HomepageController::class, 'store_featured']);
});

// Users Route
Route::get('/forum/unggah', [ForumController::class, 'unggah']);

// karya 
Route::get('/karya/{id}/{slug}', [AudiobookController::class, 'showKarya']);
Route::get('/karya/{slug}/{id}/chapter/{chapterId}', [AudiobookController::class, 'playChapter']);

// Komentar di setiap chapter
Route::post('/komentar/store/{userId}/{chapterId}', [KomentarChapterController::class, 'store']);


// Cari
Route::get('/search', [SearchController::class, 'search']);

// Komunitas
Route::get('/komunitas/all', [KomunitasController::class, 'index']);
Route::get('/komunitas/show/{id}', [KomunitasController::class, 'detail']);
Route::post('/komunitas/store/{id}', [KomunitasController::class, 'store']);

// Komunitas Comments
Route::post('/komunitas/storeComments/{id}/{userid}', [KomunitasController::class, 'storeComments']);

















