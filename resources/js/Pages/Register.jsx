import React, { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Link, router } from "@inertiajs/react"
import Axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors before sending request

    try {
      setLoading(true);
      
      await Axios.post('/register/store', form);
      
      setLoading(false);
      
      window.location.href = '/';
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
      }
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors); // Set validation errors
      }
    }
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Image Section */}
      <div className="hidden lg:flex w-1/2 bg-white justify-center items-center">
        <img src="https://i.postimg.cc/15j6NgVS/2-1.png" alt="Register" className="max-w-lg rounded-lg" />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
              {errors.name && <p className="text-red-600 text-xs mt-2">{errors.name[0]}</p>}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
              {errors.name && <p className="text-red-600 text-xs mt-2">{errors.name[0]}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
              {errors.email && <p className="text-red-600 text-xs mt-2">{errors.email[0]}</p>}
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
                  value={form.password}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="text-red-600 text-xs mt-2">{errors.password[0]}</p>}
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black 
                      ${loading ? 'bg-gray-700' : 'bg-yellow-400 hover:bg-yellow-500'} 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400`}
              >
                {loading ? 'Loading...' : 'Daftar'}
              </button>

            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Sudah punya akun?{" "}
            <Link href="/login" className="font-medium text-yellow-400 hover:text-yellow-500">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register

