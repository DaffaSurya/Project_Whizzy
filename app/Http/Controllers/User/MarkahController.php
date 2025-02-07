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

        MarkahModel::create([
            'user_id' => $userId,
            'karya_id' => $postId,
        ]);

        return response()->json(['success'], 200);

    }
    public function delete($karyaId)
    {
        $markah = MarkahModel::findOrFail($karyaId);
        $markah->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
