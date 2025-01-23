<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::paginate(10);
        return Inertia::render('Admin/Users/Index', ['users' => $users]);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'fullname' => 'required',
            'username' => 'required',
            'role_id' => 'required',
            'email' => 'required',
            'password' => 'required|min:8',
        ]);

        User::create($validatedData);

        return response()->json(['message' => 'success creating a users'], 200);
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Admin/Users/Edit', ['user' => $user]);
    }
    public function update()
    {
    }
    public function delete()
    {
    }
}
