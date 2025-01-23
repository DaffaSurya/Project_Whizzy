import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Eye, Plus } from 'lucide-react'
import TableView from '../../../Components/TableView'
import { Link } from '@inertiajs/react'
import Pagination from '../../../Components/Pagination'

const Index = ({ karya }) => {
  return (
    <AdminLayout title="Chapter">

      {/* toolbar */}
      <div className="flex">
        {/* <Link href="/admin/chapter/create" className='btn btn-outline btn-sm text-white hover:bg-yellow-400'><Plus size={18} /> New Chapter</Link> */}
      </div>

      {/* table */}
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
            {karya.data.length > 0 ? (
              karya.data.map((item, index) => (
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
                    <Link href={`/admin/chapter/create/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-yellow-400"><Plus size={20} /> Add Chapter</Link>
                    <Link href={`/admin/chapter/detail/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-green-400"><Eye size={20} /> Detail</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-5 text-center text-gray-500"
                >
                  No Karya found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <Pagination links={karya.links} total={karya.total} />


    </AdminLayout>
  )
}

export default Index