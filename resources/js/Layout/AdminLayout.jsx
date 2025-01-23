import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'

const AdminLayout = ({ title, children }) => {
    return (
        <div className="flex min-h-screen bg-black text-gray-100">
            <AdminSidebar />
            <div className="flex-1 p-6">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold">{title}</h1>
                </header>
                <div className="grid gap-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout