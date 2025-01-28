<?php

namespace App\Http\Controllers;

use App\Models\FeaturedModel;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
    public function index()
    {
        $karya = KaryaModel::all();
        $featured = FeaturedModel::with('karya')->get();
        return Inertia::render('Admin/Homepage/Index', ['karya' => $karya, 'featured' => $featured]);
    }

    public function store_featured(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'featured_audiobook' => 'required|integer|exists:karya,id',
            'status' => 'required',
        ]);

        // Update or create the featured karya
        $featured = FeaturedModel::updateOrCreate(
            ['featured_audiobook' => $request->featured_audiobook],
            ['status' => $request->status]
        );

        // Return a success response
        return response()->json([
            'message' => 'Featured Karya updated successfully',
            'data' => $featured,
        ], 200);
    }

}
