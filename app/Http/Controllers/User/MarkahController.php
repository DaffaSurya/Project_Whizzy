<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\MarkahModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MarkahController extends Controller
{
    public function index($id)
    {
        $markah = MarkahModel::where('user_id', '=', value: $id)->with('karya:judul_karya,id,cover_karya,slug')->get();
        return Inertia::render('Favorit', ['markah' => $markah]);
    }
    public function store($userId, $postId, Request $request)
    {
        // Cek apakah sudah ada data dengan user_id dan karya_id yang sama
        $existing = MarkahModel::where('user_id', $userId)
            ->where('karya_id', $postId)
            ->exists();

        if ($existing) {
            return redirect()->back()->with('error', 'Sudah Termarkah');
        }

        // Jika belum ada, simpan data baru
        MarkahModel::create([
            'user_id' => $userId,
            'karya_id' => $postId,
        ]);

        return redirect()->back()->with('success', 'Audiobook berhasil ditambahkan');
    }
    public function delete($karyaId)
    {
        $markah = MarkahModel::findOrFail($karyaId);
        $markah->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }

    
}
