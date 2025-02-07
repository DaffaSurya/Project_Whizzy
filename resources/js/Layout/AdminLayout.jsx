import React, { useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'

const AdminLayout = ({ title, children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-black text-gray-100">
            <AdminSidebar />
            <div className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "pl-60" : "pl-0 lg:pl-64"}`}>
                <header className="mb-6 px-5">
                    <h1 className="text-2xl font-bold">{title}</h1>
                </header>
                <div className="grid gap-6 px-5">{children}</div>
            </div>
        </div>

    );
}

export default AdminLayout