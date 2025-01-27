<?php

namespace App\Http\Controllers;

use App\Models\KomentarChapterModel;
use Illuminate\Http\Request;

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

        KomentarChapterModel::create($validatedData);

        return response()->json(['message' => 'success'], 200);
    }

}
