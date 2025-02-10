<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KaryaStatisticModel;
use App\Models\StatisticModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $statistic = StatisticModel::all();
        $karya_statistic = KaryaStatisticModel::all();
        return Inertia::render('Admin/Dashboard', ['statistic' => $statistic, 'karya_statistic' => $karya_statistic]);
    }
}
