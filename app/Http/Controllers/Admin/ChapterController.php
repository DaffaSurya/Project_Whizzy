<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ChapterModel;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ChapterController extends Controller
{
    public function index()
    {
        $karya = KaryaModel::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Admin/Chapter/Index', ['karya' => $karya]);
    }

    public function create($id)
    {
        $karya = KaryaModel::findOrFail($id);
        $chapter = ChapterModel::where('karya_id', '=', $id)->get();
        return Inertia::render('Admin/Chapter/Create', ['karya' => $karya, 'chapter' => $chapter]);
    }

    public function store(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'judul_chapter' => 'required',
            'karya_id' => 'required',
            'status' => 'required',
            'audio_file' => 'required|mimes:mp3,wav,ogg|max:5120',
            'ilustrasi_karya' => 'nullable|file|mimes:mp4|max:5110000', // Validate audio file
        ]);

        // Handle ilustrasi_karya file upload
        if ($request->hasFile('ilustrasi_karya')) {
            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('ilustrasi_karya')->getClientOriginalExtension();
            $path = $request->file('ilustrasi_karya')->storeAs('ilustrasi', $filename, 'public');
            $validatedData['ilustrasi_karya'] = Storage::url($path); // Generate correct public URL
        }

        // Handle audio_file upload
        if ($request->hasFile('audio_file')) {
            $audioFile = $request->file('audio_file');

            // Generate a unique file name using uniqueid and today's date
            $uniqueId = uniqid(); // Generate a unique ID
            $todayDate = now()->format('Ymd'); // Get today's date in 'YYYYMMDD' format
            $fileName = "{$uniqueId}_{$todayDate}." . $audioFile->getClientOriginalExtension(); // Create the new file name

            // Store the audio file with the new name
            $audioFilePath = $audioFile->storeAs('audio_files', $fileName, 'public');

            // Add the audio file path to the validated data, like ilustrasi_karya
            $validatedData['audio_file'] = Storage::url($audioFilePath); // Generate correct public URL
        }


        // Create the chapter record with the validated data (including the audio file path)
        ChapterModel::create($validatedData);

        return response()->json(['message' => 'success'], 200);
    }

    public function edit()
    {
    }
    public function update()
    {
    }
    public function delete()
    {
    }
}
;