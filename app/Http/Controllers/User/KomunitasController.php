<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\KomentarKomunitasModel;
use App\Models\KomunitasModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class KomunitasController extends Controller
{
    public function index()
    {
        $komunitas = KomunitasModel::with([
            'user:id,username,profile_pict,fullname',
        ])
            ->withCount(['likes', 'comments as comment_count'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Komunitas/Beranda', ['komunitas' => $komunitas]);
    }


    public function store(Request $request, $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'content' => 'required|string',
            'attachment' => 'nullable',
            'parent_id' => 'nullable'
        ]);

        // Sanitize the content field
        $validatedData['content'] = strip_tags($validatedData['content']);

        // Create a slug from the 'judul_komunitas' field
        $validatedData['slug'] = Str::random(10);

        // Assign the currently authenticated user's ID
        $validatedData['user_id'] = $id;

        // Handle the file upload
        if ($request->hasFile('attachment')) {
            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('attachment')->getClientOriginalExtension();
            $path = $request->file('attachment')->storeAs('attachment', $filename, 'public');
            $validatedData['attachment'] = Storage::url($path); // Generate correct public URL
        } else {
            $validatedData['attachment'] = null; // Explicitly set null
        }

        $community = KomunitasModel::create($validatedData);

        return Inertia::location('/Komunitas');
    }


    public function detail($id)
    {
        $detail = KomunitasModel::with([
            'user:id,username,profile_pict,fullname', // Load the user with only the id and username fields
            'comments.user:id,username,fullname'
        ])->withCount('likes')
            ->findOrFail($id);

        return Inertia::render('Komunitas/Detail', ['detail' => $detail]);
    }

    public function storeComments(Request $request, $id, $userid)
    {

        $validatedData = $request->validate([
            'content' => 'required|string|max:500',
            'parent_id' => 'nullable|exists:komentar_komunitas,id'
        ]);

        // Sanitize input
        $validatedData['content'] = strip_tags($validatedData['content']);
        $validatedData['user_id'] = $userid;
        $validatedData['komunitas_id'] = $id;

        KomentarKomunitasModel::create($validatedData);

        return response()->json(['message' => 'Comment added successfully'], 200);
    }

    public function delete($id)
    {
        $data = KomunitasModel::findOrFail($id);

        // Hapus file jika ada
        if ($data->attachment) {
            Storage::delete('public/' . $data->attachment);
        }

        // Hapus data dari database
        $data->delete();

        return back();
    }
}
