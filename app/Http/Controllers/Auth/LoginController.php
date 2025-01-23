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
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'login successful', 'redirectTo'], 200);
        }

        return response()->json(['message' => 'email or password doenst match in our database']. 404);

    }
    public function logout()
    {
    }
}
