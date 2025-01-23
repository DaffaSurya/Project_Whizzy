<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AudiobookModel;
use App\Models\CategoryModel;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AudiobookController extends Controller
{
    public function index()
    {
        $karya = KaryaModel::with('categories')->paginate(10);
        return Inertia::render('Admin/Audiobook/Index', ['karya' => $karya]);
    }

    public function create()
    {
        $category = CategoryModel::all();
        return Inertia::render('Admin/Audiobook/Create', ['categories' => $category]);
    }

    public function store(Request $request)
    {
        // Validate the request
        $validatedData = $request->validate([
            'judul_karya' => 'required|string|max:255',
            'penyunting' => 'required|string|max:255',
            'deskripsi_karya' => 'required|string',
            'status' => 'required|in:active,inactive',
            'categories' => 'required|array',
            'categories.*' => 'exists:category,id', // Ensure all selected categories exist in 'category' table
            'cover_karya' => 'nullable', // Handle file validation
        ]);

        if ($request->hasFile('cover_karya')) {
            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('cover_karya')->getClientOriginalExtension();
            $path = $request->file('cover_karya')->storeAs('covers', $filename, 'public');
            $validatedData['cover_karya'] = Storage::url($path); // Generate correct public URL
        }

        // Create the audiobook record
        $audiobook = KaryaModel::create([
            'judul_karya' => $validatedData['judul_karya'],
            'penyunting' => $validatedData['penyunting'],
            'deskripsi_karya' => $validatedData['deskripsi_karya'],
            'status' => $validatedData['status'],
            'cover_karya' => $validatedData['cover_karya'] ?? null, // Handle optional image
        ]);

        // Attach categories to the audiobook
        if (!empty($validatedData['categories'])) {
            $audiobook->categories()->sync($validatedData['categories']);
        }

        return response()->json(['message' => 'Success', 'data' => $audiobook], 200);
    }

    public function detail($id)
    {
        $karya = KaryaModel::with('categories')->findOrFail($id);
        return Inertia::render('Admin/Audiobook/Detail', ['karya' => $karya]);
    }


}
