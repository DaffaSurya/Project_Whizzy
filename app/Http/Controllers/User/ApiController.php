<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApiController extends Controller
{
    public function getKarya()
    {
        $karya = KaryaModel::paginate(10);
        return response()->json($karya);
    }
}
