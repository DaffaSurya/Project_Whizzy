"use client"

import React from "react"
import AdminLayout from "../../Layout/AdminLayout"
import { Link, usePage } from "@inertiajs/react"
import { BookAudio, BookOpen, LogOut } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ total_karya, visits }) => {

  const currentUser = usePage().props.auth.user;
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
                <Link href={`/logout`} className="px-3 py-3 rounded-lg"><LogOut size={20} className="text-gray-500 hover:text-red-500" /></Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* card stats Table */}
      <h1 className="font-bold text-xl mt-5">Karya Statistics</h1>
      <div className="grid grid-cols-12 shadow-md rounded-lg overflow-hidden gap-5">

        {/* total karya views */}
        <div
          className="col-span-3 flex flex-row gap-5 items-center bg-[#222] p-4 rounded-xl shadow-md border border-gray-700"
        >
          <BookAudio size={48} />
          <div className="flex flex-row w-full items-center justify-between">
            <h4 className="text-white font-semibold">Total Karya <br /><span className="text-yellow-400">{total_karya}</span></h4>
          </div>
        </div>

        <div
          className="col-span-3 flex flex-row gap-5 items-center bg-[#222] p-4 rounded-xl shadow-md border border-gray-700"
        >
          <BookOpen size={48} />
          <div className="flex flex-row w-full items-center justify-between">
            <h4 className="text-white font-semibold">Total Chapter <br /><span className="text-yellow-400">{total_karya}</span></h4>
          </div>
        </div>


      </div>

      <h1 className="font-bold text-xl mt-5">Website Statistics</h1>
      <div className="grid grid-cols-12 shadow-md rounded-lg overflow-hidden gap-5">
        <div
          className="col-span-6 flex flex-row gap-5 items-center bg-[#222] p-4 rounded-xl shadow-md border border-gray-700"
        >
          <div className="flex flex-col w-full items-center justify-between">
            <h4 className="font-xl font-bold mb-5">Total Visits</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visits}>
                <XAxis
                  dataKey="date"
                  stroke={isDarkMode ? "#ffffff" : "#000000"} // Adjust axis color for dark mode
                />
                <YAxis
                  stroke={isDarkMode ? "#ffffff" : "#000000"}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#1F2937" : "#ffffff",
                    color: isDarkMode ? "#ffffff" : "#000000",
                    borderRadius: "8px",
                    border: "1px solid #4B5563",
                  }}
                />
                {/* <Legend
                  formatter={() => <span style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>Total Visit</span>}
                /> */}
                <Line type="monotone" dataKey="total_visits" stroke="#ede02d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Visitor Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visits}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total_visits" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div> */}


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

