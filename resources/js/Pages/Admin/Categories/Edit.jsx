import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Save, Ban } from 'lucide-react'
import { Link } from '@inertiajs/react'

const Edit = ({ category }) => {
  return (
    <AdminLayout title={`Category - Detail - ${category.nama_kategori}`}>
      <form>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Nama Kategori</span>
          </div>
          <input type="text" value={category.nama_kategori} class="input input-bordered w-full max-w-xs" />
        </label>

        <button className='mt-3 me-2 btn btn-sm bg-yellow-400 text-black hover:bg-yellow-500'><Save size={20} /> Save</button>
        <Link href='/admin/category' className='mt-3 me-2 btn btn-sm bg-transparent hover:bg-transparent text-gray-600 border-0'><Ban size={20} /> Cancel</Link>
      </form>
    </AdminLayout>
  )
}

export default Edit