import React from 'react'
import AdminLayout from '../../Layout/AdminLayout'
import { Link } from '@inertiajs/react'
import { RotateCcw, Trash2 } from 'lucide-react'

const Trashbin = ({ karya }) => {
    return (
        <AdminLayout title='Trash'>

            {/* table */}
            <div className="overflow-x-auto rounded-md border border-slate-800">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Nama Karya</th>
                            <th>Created at</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {karya.length > 0 ? (
                            karya.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2"></td>
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{item.judul_karya}</td>
                                    <td className="px-4 py-2">
                                        {new Date(item.deleted_at).toLocaleDateString("en-GB", {
                                            weekday: "short",
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </td>
                                    <td className=" px-4 py-2 gap-4">
                                        <Link href={`/admin/trash/restore/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-yellow-400"><RotateCcw size={20} /> Restore</Link>
                                        <Link href={`/admin/trash/hardDelete/${item.id}`} className="btn btn-outline btn-sm text-gray-800 border-0 hover:bg-transparent hover:text-red-500"><Trash2 size={20} /> Permanent Delete</Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-4 py-5 text-center text-gray-500"
                                >
                                    empty ...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </AdminLayout>
    )
}

export default Trashbin