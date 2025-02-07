<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\AudiobookModel;
use App\Models\KaryaModel;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        // Search KaryaModel
        $karyaResults = KaryaModel::query()
            ->where('judul_karya', 'like', "%{$query}%")
            ->where('status', '=', "published")
            ->get();

        // Search UserModel
        $userResults = User::query()
            ->Where('username', 'like', "%{$query}%")
            ->get();

        // Return JSON response including both arrays
        return response()->json([
            'karya_results' => $karyaResults,
            'user_results' => $userResults
        ]);
    }

}
