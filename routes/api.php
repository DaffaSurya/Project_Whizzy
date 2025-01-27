<?php

use App\Http\Controllers\User\ApiController;
use App\Models\FeaturedModel;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/karya-list', function (Request $request) {
    return KaryaModel::paginate(10);
});

Route::get('/featured-karya', function (Request $request) {
    return response()->json(['data' => FeaturedModel::with('karya')->get()]);
});

