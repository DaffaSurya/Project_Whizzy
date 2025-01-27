<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ForumModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ForumController extends Controller
{
    public function index()
    {
        $forum = ForumModel::paginate(10);
        return Inertia::render('Admin/Forum/Index', ['forum' => $forum]);
    }

    public function create(){

        // admin
        if (Auth::check() || Auth::user()->role_id == 1) {
            return Inertia::render('Admin/Forum/Create');
        }
        
        return Inertia::render('Admin/Forum/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_forum' => 'required',
            'deskripsi_forum' => 'required',
        ]);

        // slug generate
        $validatedData['slug'] = Str::slug($validatedData['nama_forum'], '-');

        // insert data
        ForumModel::create($validatedData);

        return response()->json(['message' => 'success'], 200);
    }

    public function detail($id)
    {
        $forum = ForumModel::findOrFail($id);
        return Inertia::render('Admin/Forum/Detail', ['forum' => $forum]);
    }

    public function edit($id){}
    public function update(Request $request, $id){}
    public function delete(){}
}
