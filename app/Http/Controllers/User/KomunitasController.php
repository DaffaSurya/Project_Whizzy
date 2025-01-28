<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\KomentarKomunitasModel;
use App\Models\KomunitasModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class KomunitasController extends Controller
{
    public function index()
    {
        $komunitas = KomunitasModel::with('user:id,username')->paginate(10);
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

        // Create a slug from the 'judul_komunitas' field
        $validatedData['slug'] = Str::random(10);

        // Assign the currently authenticated user's ID
        $validatedData['user_id'] = $id;

        // Handle the file upload
        if ($request->hasFile('attachment')) {
            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('attachment')->getClientOriginalExtension();
            $path = $request->file('attachment')->storeAs('attachment', $filename, 'public');
            $validatedData['attachment'] = Storage::url($path); // Generate correct public URL
        }

        $community = KomunitasModel::create($validatedData);

        return Inertia::location('/Komunitas');
    }

    public function detail($id)
    {
        $detail = KomunitasModel::with([
            'user:id,username', // Load the user with only the id and username fields
            'comments.user:id,username'
        ])->findOrFail($id);

        return Inertia::render('Komunitas/Detail', ['detail' => $detail]);
    }

    public function storeComments(Request $request, $id, $userid)
    {
        $request->validate([
            'content' => 'required|string',
        ]);

        $komentar = new KomentarKomunitasModel();
        $komentar->user_id = $userid;
        $komentar->komunitas_id = $id;
        $komentar->content = $request->content;
        $komentar->parent_id = $request->parent_id;
        $komentar->save();

        return response()->json(['message' => 'success'], 200);
    }
}
