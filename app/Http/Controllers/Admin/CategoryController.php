<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryModel::paginate(10);
        return Inertia::render('Admin/Categories/Index', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $validatedData =  $request->validate([
            'nama_kategori' => 'required'
        ]);

        CategoryModel::create($validatedData);

        return response()->json(['message' => 'Success'], 200);
    }
    public function edit($id)
    {
        $category = CategoryModel::findOrFail($id);
        return Inertia::render('Admin/Categories/Edit', ['category' => $category]);
    }
    public function update()
    {
    }
    public function delete($id)
    {
        $category = CategoryModel::findOrFail($id);
        $category->delete();

        return redirect()->back();
    }
}
