import DefaultLayout from "../Layout/DefautLayout";
import { Link, usePage, router } from "@inertiajs/react";
import Axios from "axios";
import { BookmarkCheck, BookmarkMinus, BookmarkX } from "lucide-react";
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {markah.length === 0 ? (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex flex-col items-center justify-center py-16 text-center">
            <BookmarkX className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">Belum ada karya favorit</p>
            <p className="text-gray-400 mt-2">Tambahkan karya ke markah untuk melihatnya di sini</p>
          </div>
        ) : (
          <>
            {markah.map((item) => (
              <div key={item.id} className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="relative aspect-video">
                  <img
                    src={item.karya.cover_karya}
                    alt={item.karya.judul_karya}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-white font-medium text-base sm:text-lg truncate">{item.karya.judul_karya}</h3>
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex justify-between items-center">
                  <Link
                    href={`/karya/${item.karya.slug}/${item.karya.id}`}
                    className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors duration-200 text-sm sm:text-base"
                  >
                    Lihat Karya
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                    aria-label="Hapus dari markah"
                  >
                    <BookmarkMinus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

    </DefaultLayout>
  )
}

export default Favorit;