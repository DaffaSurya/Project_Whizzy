<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\LikesModel;
use Illuminate\Http\Request;

class LikesController extends Controller
{
    public function like($user_id, $post_id)
    {
        $like = LikesModel::firstOrCreate([
            'user_id' => $user_id,
            'post_id' => $post_id
        ]);

        return back();
    }


    public function dislike($user_id, $post_id)
    {
        LikesModel::where([
            'user_id' => $user_id,
            'post_id' => $post_id
        ])->delete();

        return back();
    }

    public function checkLike($user_id, $post_id)
    {
        $liked = LikesModel::where('user_id', $user_id)->where('post_id', $post_id)->exists();

        return response()->json(['liked' => $liked]);
    }


}
