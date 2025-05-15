<?php

use App\Http\Controllers\Admin\AudiobookController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ChapterController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ForumController;
use App\Http\Controllers\Admin\TrashController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\KomentarChapterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\KomunitasController;
use App\Http\Controllers\User\LikesController;
use App\Http\Controllers\User\LikesModel;
use App\Http\Controllers\User\MarkahController;
use App\Http\Controllers\User\RatingController;
use App\Http\Controllers\User\SearchController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

// Public URL's
Route::get('/', function (Request $request) {
    DB::statement('CALL InsertVisit(?, ?, ?, ?)', [
        $request->header('User-Agent'),
        1,
        'Unknown',
        'Unknown'
    ]);

    return Inertia::render('Text');
});




Route::inertia('/Cari', 'Cari');
Route::inertia('/register', 'Register');
Route::inertia('/Komunitas', 'Komunitas/Beranda');
Route::inertia('/Komunitas/forum', 'Forum/Index');
Route::inertia('/Garitan-Filantropi/detail', 'Mendengarkan');
Route::inertia('/Garitan-Filantropi/play', 'Audio');
Route::inertia('/EditProfile', 'EditProfile');
Route::inertia('/Review', 'Review');

Route::get('/search', [SearchController::class, 'search']);

// Auth
Route::inertia('/login', 'Auth/Login')->name('login');
Route::post('/register/store', [RegisterController::class, 'register']);
Route::post('/authenticate', [LoginController::class, 'authenticate']);
Route::get('/logout', [LoginController::class, 'logout']);


// Admin Route
Route::prefix('admin')->middleware(AdminMiddleware::class)->group(function () {

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
    Route::get('/audiobook/edit/{id}', [AudiobookController::class, 'edit']);
    Route::post('/audiobook/update/{id}', [AudiobookController::class, 'update']);
    Route::get('/audiobook/detail/{id}', [AudiobookController::class, 'detail']);
    Route::get('/audiobook/softDelete/{id}', [AudiobookController::class, 'softDelete']);

    Route::get('/karya/comments/delete/{id}', [KomentarChapterController::class, 'deleteChapterComments']);

    // chapter
    Route::get('/chapter', [ChapterController::class, 'index']);
    Route::get('/chapter/create/{id}', [ChapterController::class, 'create']);
    Route::post('/chapter/store', [ChapterController::class, 'store']);
    Route::get('/chapter/detail/{id}', [ChapterController::class, 'detail']);
    Route::get('/chapter/delete/{id}', [ChapterController::class, 'delete']);

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
    Route::post('/homepage-settings/store-carousel', [HomepageController::class, 'store_carousel']);
    Route::get('/homepage-settings/delete-featured/{id}', [HomepageController::class, 'delete_featured']);
    Route::get('/homepage-settings/delete-carousel/{id}', [HomepageController::class, 'delete_carousel']);

});


// Auth User
Route::middleware(AuthMiddleware::class)->group(function () {

    // karya 
    Route::get('/karya/{id}/{slug}', [AudiobookController::class, 'showKarya']);
    Route::get('/karya/{slug}/{id}/chapter/{chapterId}', [AudiobookController::class, 'playChapter']);
    Route::get('/audiobook/like/{id}', [AudiobookController::class, 'like']);
    Route::delete('/admin/karya/comments/delete/{id}', [AudiobookController::class, 'deleteComments']);



    // Users Route
    Route::get('/forum/unggah', [ForumController::class, 'unggah']);

    // Komentar di setiap chapter
    Route::post('/komentar/store/{userId}/{chapterId}', [KomentarChapterController::class, 'store']);

    // Komunitas
    Route::get('/komunitas/all', [KomunitasController::class, 'index']);
    Route::get('/komunitas/show/{id}', [KomunitasController::class, 'detail']);
    Route::post('/komunitas/store/{id}', [KomunitasController::class, 'store']);
    Route::get('/komunitas/delete/{id}', [KomunitasController::class, 'delete']);

    // Komunitas Comments
    Route::post('/komunitas/storeComments/{id}/{userid}', [KomunitasController::class, 'storeComments']);

    // Profile
    Route::get('/profile/{id}/{username}', [ProfileController::class, 'index']);
    Route::get('/yang-disukai/{id}/{username}', [ProfileController::class, 'likes']);

    Route::post('/profile/{id}/{username}/update', [ProfileController::class, 'update']);
    Route::get('/profile/{id}/{username}/delete-profile-picture', [ProfileController::class, 'deleteProfilePicture']);
    Route::get('/profile/{id}/{username}/delete-cover-picture', [ProfileController::class, 'deleteCoverPicture']);

    // Markah
    Route::get('/markah/{id}/all', [MarkahController::class, 'index']);
    Route::get('/markah/{id}/{karya_id}/save', [MarkahController::class, 'store']);
    Route::delete('/markah/{karya_id}/delete', [MarkahController::class, 'delete']);


    // Likes
    Route::get('/like/{id}/{post_id}', [LikesController::class, 'like']);
    Route::get('/dislike/{id}/{post_id}', [LikesController::class, 'dislike']);
    Route::get('/check-like/{user_id}/{post_id}', [LikesController::class, 'checkLike']);

    // Rating
    Route::post('/rate-karya', [RatingController::class, 'rate']);

});



























