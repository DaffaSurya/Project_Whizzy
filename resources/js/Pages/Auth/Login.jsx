import React from 'react'
import { useForm } from '@inertiajs/react'
import axios from 'axios';


const Login = () => {

    async function login(e) {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            rememberMe: e.target.rememberMe.value,
        }

        try {
            const response = await axios.post('/authenticate', data);
            alert('success');
        } catch (error) {
            if (error.response) {
                console.log("Error data:", error.response.data);
                console.log("Error status:", error.response.status);
                console.log("Error headers:", error.response.headers);
            }
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="w-full max-w-[400px] bg-zinc-900 rounded-xl p-6">
                {/* Logo and Title */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://placehold.co/400"
                            alt="Halooo Logo"
                            className="w-6 h-6"
                        />
                        <h1 className="text-xl font-semibold text-white">Whizzy</h1>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={login} method="post">
                    <div className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <input
                                type="text"
                                name='email'
                                placeholder="Email atau nomor telepon"
                                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                name='password'
                                placeholder="Masukkan password"
                                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <a href="#" className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-500 hover:text-blue-400">
                                Forgot password?
                            </a>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name='rememberMe'
                                    className="w-4 h-4 bg-zinc-700 rounded border-zinc-600 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-zinc-900"
                                />
                                <span className="text-sm text-zinc-400">Remember me</span>
                            </label>
                        </div>

                        {/* Login Button */}
                        <button type='submit' className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-medium transition-colors">
                            Login
                        </button>
                        {/* Google Sign In */}
                        <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-lg font-medium border border-zinc-700 transition-colors flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Or sign in with Google
                        </button>
                    </div>
                </form>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-zinc-400 mt-5">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-500 hover:text-blue-400">
                        Sign up now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login