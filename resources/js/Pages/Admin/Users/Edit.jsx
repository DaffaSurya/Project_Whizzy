import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Link } from '@inertiajs/react'

const Edit = (user) => {
    return (
        <AdminLayout title={`User - ${user.user.fullname}`}>
            <div className="w-full pb-8 sm:max-w-xl sm:rounded-lg shadow-md">
                <div className="grid max-w-2xl mx-auto mt-8">
                    {/* Avatar and Buttons */}
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                        <img
                            className="object-cover w-40 h-40 p-1 rounded-full ring-4 ring-blue-300"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Profile Avatar"
                        />
                        <div className="flex flex-col space-y-4 sm:ml-8">
                            <button
                                type="button"
                                className="py-2.5 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                            >
                                Change Picture
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-6 text-sm font-medium text-gray-600 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                            >
                                Delete Picture
                            </button>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="mt-8 sm:mt-14 text-gray-800">
                        {/* username Inputs */}
                        <div className="mb-6">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-500">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full p-2.5 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={user.user.username}
                                required
                            />
                        </div>

                        {/* Fullname Inputs */}
                        <div className="mb-6">
                            <label htmlFor="Fullname" className="block mb-2 text-sm font-medium text-gray-500">
                                Fullname
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                className="w-full p-2.5 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={user.user.fullname}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2.5 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="your.email@mail.com"
                                value={user.user.email}
                                required
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end space-x-4">
                            <button
                                type="submit"
                                className="px-5 py-2.5 text-sm font-medium text-black bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:ring-blue-200"
                            >
                                Save
                            </button>
                            <a
                                href="/admin/users"
                                className="px-5 py-2.5 text-sm text-gray-400 font-medium text-gray-60 rounded-lg hover:text-white transition-all"
                            >
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </AdminLayout>
    )
}

export default Edit