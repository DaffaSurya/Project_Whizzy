<?php

namespace App\Http\Controllers;

use App\Models\CarouselModel;
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
        $carousel = CarouselModel::with('karya:id,judul_karya,cover_karya,deskripsi_karya')->get();
        return Inertia::render('Admin/Homepage/Index', ['karya' => $karya, 'featured' => $featured, 'carousel' => $carousel]);
    }

    public function store_featured(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'featured_audiobook' => 'required|integer|exists:karya,id',
        ]);

        // Update or create the featured karya
        $featured = FeaturedModel::updateOrCreate(
            ['featured_audiobook' => $request->featured_audiobook],
        );

        // Return a success response
        return response()->json([
            'message' => 'Featured Karya updated successfully',
            'data' => $featured,
        ], 200);
    }

    public function store_carousel(Request $request)
    {
        $request->validate([
            'karya_id' => 'nullable|integer|exists:karya,id',
            'file' => 'nullable|file|mimes:jpg,jpeg,png,mp3,wav|max:2048', // adjust mime types as needed
        ]);

        $filePath = null;

        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('carousel_files', 'public'); // stores in storage/app/public/carousel_files
        }

        $carousel = CarouselModel::create([
            'karya_id' => $request->karya_id,
            'file' => $filePath,
        ]);

        return response()->json([
            'message' => 'Carousel saved successfully',
            'data' => $carousel,
        ], 200);
    }


    public function delete_featured($id)
    {
        $data = FeaturedModel::findOrFail($id);
        $data->delete();

        return Inertia::location('/admin/homepage-settings');
    }

    public function delete_carousel($id)
    {
        $data = CarouselModel::findOrFail($id);
        $data->delete();

        return Inertia::location('/admin/homepage-settings');
    }
}
