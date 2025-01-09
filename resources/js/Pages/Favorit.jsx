import DefaultLayout from "../Layout/DefautLayout";
import "../Style/Favorit.css";
import { NavLink } from "react-router-dom";
const Favorit = () => {
  return (
    <DefaultLayout>

      {/* Font Markah in favorit for desktop  */}
      <div className="div-markah-desktop">
        <p>Markah</p>
      </div>

      {/* Font Markah in favorit for desktop end */}

      {/* Bookmarks user in for mobile */}
      <div className="div-Book-Favorit">
        <p className="p-bookmarks-mobile">BookMarks</p>
        <div className="div-book-disimpan">
          <ul className="mt-7 grid grid-cols-2 justify-items-center px-4 gap-5">
            <li className="border border-white rounded">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565658920i/1398034.jpg"
                  alt=""
                  class="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[420px] rounded-lg"
                />

                <div class="relative bg-black pt-3 flex p-2 gap-1">
                  <h3 class="text-lg text-white group-hover:underline group-hover:underline-offset-6 font-weight-600">
                    Bumi Manusia
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ffe786" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm14-4V4H7V2h11q.825 0 1.413.588T20 4v14z" /></svg>
                </div>
              </a>
            </li>

            <li className="border border-white rounded">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484031052i/1677677.jpg"
                  alt=""
                  class="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[420px] rounded-lg"
                />

                <div class="relative bg-black pt-3 flex p-2 gap-2">
                  <h3 class="text-lg text-white group-hover:underline group-hover:underline-offset-4 font-weight-600">
                    Anak Bangsa
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ffe786" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm14-4V4H7V2h11q.825 0 1.413.588T20 4v14z" /></svg>
                </div>
              </a>
            </li>


            <li className="border border-white rounded">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg"
                  alt=""
                  class="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[420px] rounded-lg"
                />

                <div class="relative bg-black pt-3 flex p-2 gap-1">
                  <h3 class="text-lg text-white group-hover:underline group-hover:underline-offset-4 font-weight-600">
                    Laskar Pelangi
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ffe786" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm14-4V4H7V2h11q.825 0 1.413.588T20 4v14z" /></svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bookmarks user for mobile end */}

      {/* Bookmarks user for desktop */}
      <div className="div-Favorit-desktop">
        <p className="p-Favorit-desktop">Tersimpan</p>

        <div className="div-content-bookmarks-desktop">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            <div class="h-100 rounded-lg">
              <img src="https://arsip.festivalfilm.id/wp-content/uploads/2020/08/Bumi-Manusia-Poster.jpg" className="img-bookmarks-desktop" />

              <div className="div-deskripsi-bookfavorite">
                <p>Bumi Manusia</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64" /><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64" /></svg>
              </div>
            </div>
            <div class="h-32 rounded-lg bg-gray-200">
              <img src="https://cdn.gramedia.com/uploads/items/9789793062792_New-Edition-Laskar-Pelangi.jpg" alt="" className="img-bookmarks-desktop" />
              <div className="div-deskripsi-bookfavorite">
                <p>Laskar Pelangi </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64" /><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64" /></svg>
              </div>
            </div>
            <div class="h-32 rounded-lg bg-gray-200">
              <img src="https://pts.com.my/assets/book_cover/_hires/tkvdw.jpg" alt="" className="img-bookmarks-desktop" />
              <div className="div-deskripsi-bookfavorite">
                <p>Tenggelamnya Kapal van der wijk </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64" /><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64" /></svg>
              </div>
            </div>
            <div class="h-32 rounded-lg bg-gray-200">
              <img src="https://4.bp.blogspot.com/-bIFxXYiVcKM/WiPaBAIQLtI/AAAAAAAAFXI/d9xDQNO8z5QMGYslYwSq8-z0nVkezYB_ACLcBGAs/s1600/negeri-5-menara.jpg" alt="" className="img-bookmarks-desktop" />
              <div className="div-deskripsi-bookfavorite">
                <p>Negeri 5 Menara</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64" /><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64" /></svg>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Bookmarks user for desktop */}
    </DefaultLayout>
  )
}

export default Favorit;