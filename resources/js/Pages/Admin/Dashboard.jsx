"use client"

import React from "react"
import AdminLayout from "../../Layout/AdminLayout"
import { Link, usePage } from "@inertiajs/react"
import { LogOut } from "lucide-react"

const Dashboard = () => {

  const currentUser = usePage().props.auth.user;

  return (
    <AdminLayout title="Dashboard">
      <div className="p-0">

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              className="flex flex-row items-center bg-[#222] p-4 rounded-xl shadow-md border border-gray-700"
            >
                <img
                  src={currentUser.profile_pict || "https://placehold.co/50"}
                  alt="User Avatar"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
              <div className="flex flex-row w-full items-center justify-between">
                <h4 className="text-white font-semibold">Selamat Datang, <br /><span className="text-yellow-400">{currentUser.username}</span></h4>
                <Link href={`/logout`} className="px-3 py-3 rounded-lg"><LogOut size={20} className="text-gray-500 hover:text-red-500"/></Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* User Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">

      </div>

    </AdminLayout>
  )
}

const StatCard = ({ title, value, color }) => (
  <div className={`${color} rounded-lg shadow-md p-6`}>
    <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
    <p className="text-3xl font-bold text-white">{value}</p>
  </div>
)

const UserRow = ({ name, email, role, status }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm font-medium text-gray-900">{name}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{email}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{role}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span
        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
      >
        {status}
      </span>
    </td>
  </tr>
)

export default Dashboard

