<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\AudiobookModel;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        $results = KaryaModel::query()
            ->where('judul_karya', 'like', "%{$query}%") // Adjust based on your database column
            ->get();

        // Return JSON response for Axios
        return response()->json([
            'results' => $results
        ]);
    }
}
