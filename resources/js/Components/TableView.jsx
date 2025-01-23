import { Link } from "@inertiajs/react";
import { Eye, Trash2, UserRoundPen } from "lucide-react";
import React, { useState } from "react";

const TableView = ({ data }) => {
    return (
        <div className="overflow-x-auto rounded-md border border-slate-800">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Nama Karya</th>
                        <th>Status</th>
                        <th>Created at</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={item.id}>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{item.judul_karya}</td>
                                <td className="px-4 py-2">{item.status}</td>
                                <td className="px-4 py-2">
                                    {new Date(item.created_at).toLocaleDateString("en-GB", {
                                        weekday: "short",
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </td>
                                <td className=" px-4 py-2 gap-4">
                                    <Link href={`/admin/audiobook/detail/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-green-400"><Eye size={20} /> Detail</Link>
                                    <Link href={`/admin/audiobook/edit/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-yellow-400"><UserRoundPen size={20} /> Edit</Link>
                                    <Link href={`/admin/audiobook/delete/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-red-500"><Trash2 size={20} /> Delete</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="6"
                                className="px-4 py-5 text-center text-gray-500"
                            >
                                No Audiobooks found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default TableView;
