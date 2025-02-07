import DefaultLayout from "../Layout/DefautLayout";
import { Link, usePage, router } from "@inertiajs/react";
import Axios from "axios";
import { BookmarkCheck, BookmarkMinus } from "lucide-react";
const Favorit = ({ markah }) => {

  const currentUser = usePage().props.auth.user;

  const handleDelete = async (karyaId) => {
    try {
      await Axios.delete(`/markah/${karyaId}/delete`);
      router.visit(`/markah/${currentUser.id}/all`)
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };


  return (
    <DefaultLayout>

      {/* title */}
      <h1 className="text-white text-2xl font-bold mb-5">Favorit</h1>

      <div className="grid grid-cols-4 gap-5">

        {markah.length === 0 ? (
          <p className="text-gray-500 mt-10">Belum ada karya favorit</p>
        ) : (
          markah.map((item) => (
            <div key={item.id} className="card">
              <div className="flex flex-col items-center max-w-sm mx-auto">
                <div className="relative w-full aspect-video mb-4">
                  <img
                    src={item.karya.cover_karya}
                    alt={item.karya.judul_karya}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between space-x-4 w-full px-4">
                  <Link href={`/karya/${item.karya.slug}/${item.karya.id}`} className="hover:text-yellow-400">{item.karya.judul_karya}</Link>
                  <button onClick={() => handleDelete(item.id)} className="text-gray-600 hover:text-red-500">
                    <BookmarkMinus />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

      </div>

    </DefaultLayout>
  )
}

export default Favorit;