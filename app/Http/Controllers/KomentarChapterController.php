<?php

namespace App\Http\Controllers;

use App\Models\KomentarChapterModel;
use App\Models\KomunitasModel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class KomentarChapterController extends Controller
{
    public function store(Request $request, $userId, $chapterId)
    {
        $validatedData = $request->validate([
            'komentar' => 'required', // Only validate the 'komentar' field from the request body
        ]);

        // Add the userId and chapterId from the route parameters
        $validatedData['user_id'] = $userId;
        $validatedData['chapter_id'] = $chapterId;

        // Simpan komen di setiap chapter
        KomentarChapterModel::create($validatedData);
        
        // munculkan juga di komunitas
        KomunitasModel::create([
            'user_id' => $userId,
            'slug' => $validatedData['slug'] = Str::random(10),
            'content' => $validatedData['komentar'],
            'attachment' => null,
            'parent_id' => null,
            'chapter_id' => $chapterId,
        ]);

        return response()->json(['message' => 'success'], 200);
    }

    public function deleteChapterComments($id)
    {
        $data = KomentarChapterModel::findOrFail($id);
        $data->delete();

        return response()->json(['message' => 'success'], 200);
    }

}
