<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
    }
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials, $request->rememberMe)) {
            return response()->json(['message' => 'login successful', 'redirectTo' => '/admin/dashboard'], 200);
        }

        return response()->json(['message' => 'email or password doesn\'t match in our database'], 404);
    }

    public function logout(Request $request)
    {
        // Log the user out
        Auth::logout();

        // Optionally, invalidate the session
        $request->session()->invalidate();

        // Regenerate the session token
        $request->session()->regenerateToken();

        return Inertia::location('/');
    }
}
