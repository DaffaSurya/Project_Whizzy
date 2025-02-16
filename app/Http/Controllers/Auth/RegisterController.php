<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Validasi input
        $request->validate([
            'username' => 'required|string|max:255',
            'fullname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|min:4',
        ], [
            'email.unique' => 'Email sudah terdaftar. Coba gunakan email yang lain.',
        ]);

        // Simpan user baru
        $user = User::create([
            'username' => $request->username,
            'fullname' => $request->fullname,
            'email' => $request->email,
            'role_id' => 1, // user
            'password' => Hash::make($request->password),
        ]);

        Auth::attempt(['email' => $user->email, 'password' => $request->password]);

        return response()->json(['message' => 'success'], 200);
    }

}
