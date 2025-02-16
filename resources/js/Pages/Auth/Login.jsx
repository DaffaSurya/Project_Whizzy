import { useState } from "react"
import { Link } from "@inertiajs/react"
import axios from "axios"
import { router } from "@inertiajs/react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import whizzy_logo from "../../../../public/logo.png"

const Login = () => {
    const [errors, setErrors] = useState({})
    const [loginError, setLoginError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    async function login(e) {
        e.preventDefault()

        setIsLoading(true)

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            rememberMe: e.target.rememberMe.checked,
        }

        try {
            const response = await axios.post("/authenticate", data)

            router.visit("/")

            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            if (error.response) {
                console.log("Error data:", error.response.data)
                console.log("Error status:", error.response.status)
                console.log("Error headers:", error.response.headers)

                if (error.response.status === 404) {
                    setLoginError(error.response.data.message)
                    setErrors({})
                } else if (error.response.data.errors) {
                    setLoginError(null)
                    setErrors(error.response.data.errors)
                }
            }
        }
    }

    return (
        <div className="flex h-screen bg-black">
            {/* Image Section */}
            <div className="hidden lg:flex w-1/2 bg-white justify-center items-center">
                <img src={whizzy_logo} alt="Login" className="max-w-lg rounded-lg" />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                            <img src={whizzy_logo} alt="Whizzy Logo" className="w-6 h-6" />
                            <h1 className="text-xl font-semibold">Whizzy</h1>
                        </div>
                    </div>

                    {loginError && <div className="text-red-500 text-xs mt-4 text-start mb-3">{loginError}</div>}

                    <form onSubmit={login} method="post" className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email atau nomor telepon"
                                className="mt-1 block w-full px-3 py-2 border bg-black rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Masukkan password"
                                    className="block w-full px-3 py-2 border bg-black rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                                />
                                <span className="text-sm text-gray-500">Ingat Saya</span>
                            </label>
                            {/* <a href="#" className="text-sm font-medium text-gray-500 hover:text-yellow-500">
                                Lupa Password ?
                            </a> */}
                        </div>

                        <button
                            type="submit"
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black ${isLoading
                                ? "bg-yellow-300 cursor-not-allowed"
                                : "bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Belum Punya Akun ?{" "}
                        <Link href="/register" className="font-medium text-yellow-400">
                            Buat Sekarang
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login

