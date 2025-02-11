<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KaryaModel;
use App\Models\KaryaStatisticModel;
use App\Models\StatisticModel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $statistic = StatisticModel::all();
        $karya_statistic = KaryaStatisticModel::all();

        // total_karya
        $total_karya = KaryaModel::count();

        // visitors
        $visits = DB::table('statistic')
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('COUNT(*) as total_visits'))
            ->where('created_at', '>=', Carbon::now()->subDays(7)) // Get last 7 days
            ->groupBy('date')
            ->orderBy('date', 'asc')
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'statistic' => $statistic,
            'karya_statistic' => $karya_statistic,
            'total_karya' => $total_karya,
            'visits' => $visits,
        ]);
    }
}
