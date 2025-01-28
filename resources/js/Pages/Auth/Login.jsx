import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'
import axios from 'axios';
import { router } from '@inertiajs/react'


const Login = () => {

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function login(e) {
        e.preventDefault();

        setIsLoading(true);

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            rememberMe: e.target.rememberMe.checked, // rememberMe is a checkbox, should use `.checked`
        };

        try {
            const response = await axios.post('/authenticate', data);
            
            router.visit('/'); 

            setIsLoading(true);

        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                console.log("Error data:", error.response.data);
                console.log("Error status:", error.response.status);
                console.log("Error headers:", error.response.headers);

                // Check if error is related to validation or a custom message
                if (error.response.status === 404) {
                    setLoginError(error.response.data.message); // Custom error message
                    setErrors({}); // Reset validation errors
                } else if (error.response.data.errors) {
                    setLoginError(null); // Clear custom error message
                    setErrors(error.response.data.errors); // Set validation errors
                }
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

                {/* Display Custom Error */}
                {loginError && (
                    <div className="text-red-500 text-xs mt-4 text-start mb-3">
                        {loginError} {/* Display the custom error message */}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={login} method="post">
                    <div className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email atau nomor telepon"


                                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
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
                                    name="rememberMe"


                                    className="w-4 h-4 bg-zinc-700 rounded border-zinc-600 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-zinc-900"
                                />
                                <span className="text-sm text-zinc-400">Remember me</span>
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className={`w-full py-2 rounded-lg font-medium transition-colors ${isLoading
                                    ? "bg-yellow-300 text-black cursor-not-allowed"
                                    : "bg-yellow-500 hover:bg-yellow-600 text-black"
                                }`}
                            disabled={isLoading} // Disable button while loading
                        >
                            {isLoading ? "Logging in..." : "Login"} {/* Change button text */}
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
    );
}

export default Login