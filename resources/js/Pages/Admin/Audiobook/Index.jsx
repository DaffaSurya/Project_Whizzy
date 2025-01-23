import React, { useState } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Eye, LayoutGrid, List, Plus, Trash2, UserRoundPen } from 'lucide-react'
import { Link } from '@inertiajs/react'
import TableView from '../../../Components/TableView'
import GridView from '../../../Components/GridView'
import Toast from '../../../Components/Toast'
import Pagination from '../../../Components/Pagination'

const Index = ({ karya }) => {
  const [view, setView] = useState("table");

  return (
    <AdminLayout title="Audiobooks">

      {/* toolbar */}
      <div className="flex justify-between">
        <Link href='/admin/audiobook/create' className="btn btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New Audiobook</Link>
        {/* View toggle buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => setView("table")}
            className={`btn btn-sm hover:bg-yellow-400 ${view === "table" ? "bg-yellow-400 text-black" : "btn-outline"
              }`}
          >
            <List size={20} />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`btn btn-sm hover:bg-yellow-400 ${view === "grid" ? "bg-yellow-400 text-black" : "btn-outline"
              }`}
          >
            <LayoutGrid size={20} />
          </button>
        </div>
      </div>

      {/* TableView & GridView */}
      <div className="mt-4">
        {view === "table" ? (
          <TableView data={karya.data} />
        ) : (
          <GridView data={karya.data} />
        )}
      </div>

      {/* pagination */}
      <Pagination links={karya.links} total={karya.total} />

    </AdminLayout>
  )
}

export default Index