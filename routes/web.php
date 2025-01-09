<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Text');
});



// Admin Route
Route::prefix('admin')->group([

]);








