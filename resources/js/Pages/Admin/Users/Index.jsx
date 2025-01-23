import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import Axios from 'axios';
import { UserRoundPen, Trash2, Plus, Eye } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import Pagination from '../../../Components/Pagination';

const Index = ({ users }) => {
  const { errors, flash } = usePage().props;

  async function newUser(e) {
    e.preventDefault();


    const data = {
      username: e.target.username.value,
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role_id: e.target.role_id.value,
    }

    try {
      const response = await Axios.post('/admin/users/store', data);
      document.getElementById('addUser').checked = false;
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
      }
    }
  }

  return (
    <AdminLayout title="Users">

      {/* toolbar */}
      <div className="flex flex-row">
        <label htmlFor="addUser" className="btn btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New User</label>
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-md border border-slate-800">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Fullname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.data.length > 0 ? (
              users.data.map((user) => (
                <tr key={user.id}>
                  <td className=" px-4 py-2"></td>
                  <td className=" px-4 py-2">{user.id}</td>
                  <td className=" px-4 py-2">{user.fullname}</td>
                  <td className=" px-4 py-2">{user.username}</td>
                  <td className=" px-4 py-2">{user.email}</td>
                  <td className=" px-4 py-2">{user.status}</td>
                  <td className=" px-4 py-2"></td>
                  <td className=" px-4 py-2 gap-4">
                    <Link href={`/admin/users/edit/${user.id}`} className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-yellow-400"><UserRoundPen size={20} /> Edit</Link>
                    <Link className="btn btn-outline btn-sm border-0 hover:bg-transparent hover:text-red-500"><Trash2 size={20} /> Delete</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className=" px-4 py-5 text-center text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <Pagination links={users.links} total={users.total} />

      {/* Add user modal */}
      <input type="checkbox" id="addUser" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-3">Create new user</h3>

          <form onSubmit={newUser}>
            <input type="text" name='fullname' placeholder="Full Name" className="input input-bordered my-2 input-md w-full" />
            <input type="text" name='username' placeholder="Username" className="input input-bordered my-2 input-md w-full" />
            <input type="email" name='email' placeholder="Email" className="input input-bordered my-2 input-md w-full" />
            <input type="password" name='password' placeholder="Password" className="input input-bordered my-2 input-md w-full" />
            {errors.password && <span className="error">{errors.password}</span>}
            <select name='role_id' className="select select-bordered w-full my-2">
              <option disabled selected>Who shot first?</option>
              <option value={1}>User</option>
              <option value={2}>Admin</option>
            </select>

            <button type='submit' className='btn px-4 py-1 bg-yellow-400 w-full text-black hover:bg-yellow-400 mt-3'>Create User</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="addUser">Close</label>
      </div>

    </AdminLayout>
  )
}

export default Index