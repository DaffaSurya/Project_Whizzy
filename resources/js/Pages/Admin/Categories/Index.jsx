import React, { useState } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Plus, UserRoundPen, Trash2, Eye, Save } from 'lucide-react'
import { Link } from '@inertiajs/react'
import Axios from 'axios'
import Toast from '../../../Components/Toast'
import Pagination from '../../../Components/Pagination'

const Index = ({ categories }) => {

  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  async function newCategory(e) {
    e.preventDefault();

    setLoading(true);

    const data = {
      nama_kategori: e.target.nama_kategori.value,
    }

    try {
      const response = await Axios.post('/admin/category/store', data);

      document.getElementById('addCategory').checked = false;

      setToastVisible(true);
      setToastMessage("Item moved successfully.");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error.response) {
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
      }
    } finally {
      setLoading(false);
    }
  }

  console.log(categories);

  return (
    <AdminLayout title="Categories">
      {/* Toolbar */}
      <div className="flex">
        <label htmlFor="addCategory" className="btn btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New Category</label>
      </div>

      <Toast show={toastVisible} message={toastMessage} />

      {/* table */}
      <div className="overflow-x-auto rounded-md border border-slate-800">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Nama Kategory</th>
              <th>Created at</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.data.length > 0 ? (
              categories.data.map((item) => (
                <tr key={item.id}>
                  <td className=" px-4 py-2"></td>
                  <td className=" px-4 py-2">{item.id}</td>
                  <td className=" px-4 py-2">{item.nama_kategori}</td>
                  <td className="px-4 py-2">{new Date(item.created_at).toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}</td>
                  <td className=" px-4 py-2 gap-4">
                    <Link href={`/admin/category/edit/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-yellow-400"><UserRoundPen size={20} /> Edit</Link>
                    <Link href={`/admin/category/delete/${item.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-red-500"><Trash2 size={20} /> Delete</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className=" px-4 py-5 text-center text-gray-500"
                >
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <Pagination links={categories.links} total={categories.total} />

      {/* Add category modal */}
      <input type="checkbox" id="addCategory" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-black border border-gray-600 rounded-lg">
          <h3 className="text-lg font-bold mb-3">Create New Category</h3>

          <form onSubmit={newCategory}>
            <input type="text" name='nama_kategori' placeholder="Fantasy..." className="input input-bordered my-2 input-md w-full" />

            <button type='submit' disabled={loading} className={`btn btn-sm px-4 py-1 mt-3 ${loading
              ? 'bg-yellow-600 text-white cursor-not-allowed'
              : 'bg-yellow-400 text-black hover:bg-yellow-500'
              }`}>{loading ? 'Processing...' : 'Create Category'}</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="addCategory">Close</label>
      </div>

    </AdminLayout>
  )
}

export default Index