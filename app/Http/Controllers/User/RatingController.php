<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\RatingsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    public function rate(Request $request)
    {
        $request->validate([
            'rateable_id' => 'required|integer',
            'rateable_type' => 'required|string', // 'App\Models\Karya' atau 'App\Models\Chapter'
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $rating = RatingsModel::updateOrCreate(
            [
                'user_id' => Auth::id(),
                'rateable_id' => $request->rateable_id,
                'rateable_type' => $request->rateable_type,
            ],
            [
                'rating' => $request->rating,
            ]
        );

        return response()->json([
            'message' => 'Rating berhasil dikirim!',
            'rating' => $rating,
        ]);
    }

}
