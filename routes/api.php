<?php

use App\Http\Controllers\User\ApiController;
use App\Models\CarouselModel;
use App\Models\FeaturedModel;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/karya-list', function (Request $request) {
    return KaryaModel::where('status', '=', 'published')->latest()->paginate(10);
});

Route::get('/featured-karya', function (Request $request) {
    return response()->json(['data' => FeaturedModel::with('karya')->get()]);
});

Route::get('/carousel-karya', function (Request $request) {
    return response()->json(['data' => CarouselModel::with('karya')->get()]);
});


