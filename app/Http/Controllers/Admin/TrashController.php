<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryModel;
use App\Models\ChapterModel;
use App\Models\KaryaModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrashController extends Controller
{
    public function index()
    {
        $karya = KaryaModel::onlyTrashed()->get();
        $category = CategoryModel::onlyTrashed()->get();
        // $chapter = ChapterModel::onlyTrashed()->get();
        return Inertia::render('Admin/Trashbin', ['karya' => $karya, 'category' => $category]);
    }
}
