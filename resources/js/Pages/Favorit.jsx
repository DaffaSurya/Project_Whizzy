import "../Style/Favorit.css";
import { NavLink } from "react-router-dom";
const Favorit = () => {
    return(
        <div className="div-device-favorit">
           <div className="div-container-favorit">

            {/* Profile user in Favorit for Mobile */}
           <div className="div-navbar">
            <div className="div-session1">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="img-header-profile"
              />
             <p className="Name-profile">Hai , Kareva</p>
            </div>
            </div>
            {/* Profile user in Favorit for Mobile end */}

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
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ffe786" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm14-4V4H7V2h11q.825 0 1.413.588T20 4v14z"/></svg>
          </div>
        </a>
      </li>
      
      <li  className="border border-white rounded">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ffe786" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm14-4V4H7V2h11q.825 0 1.413.588T20 4v14z"/></svg>
          </div>
        </a>
      </li>

     
      <li  className="border border-white rounded">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ffe786" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm14-4V4H7V2h11q.825 0 1.413.588T20 4v14z"/></svg>
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
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64"/><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64"/></svg>
    </div>
  </div>
  <div class="h-32 rounded-lg bg-gray-200">
    <img src="https://cdn.gramedia.com/uploads/items/9789793062792_New-Edition-Laskar-Pelangi.jpg" alt="" className="img-bookmarks-desktop"/>
    <div className="div-deskripsi-bookfavorite">
        <p>Laskar Pelangi </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64"/><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64"/></svg>
    </div>
  </div>
  <div class="h-32 rounded-lg bg-gray-200">
  <img src="https://pts.com.my/assets/book_cover/_hires/tkvdw.jpg" alt="" className="img-bookmarks-desktop"/>
    <div className="div-deskripsi-bookfavorite">
        <p>Tenggelamnya Kapal van der wijk </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64"/><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64"/></svg>
    </div>
  </div>
  <div class="h-32 rounded-lg bg-gray-200">
  <img src="https://4.bp.blogspot.com/-bIFxXYiVcKM/WiPaBAIQLtI/AAAAAAAAFXI/d9xDQNO8z5QMGYslYwSq8-z0nVkezYB_ACLcBGAs/s1600/negeri-5-menara.jpg" alt="" className="img-bookmarks-desktop"/>
    <div className="div-deskripsi-bookfavorite">
        <p>Negeri 5 Menara</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#ffe786" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64"/><path fill="#ffe786" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64"/></svg>
    </div>

  </div>
</div>
            </div>
        </div>
   {/* Bookmarks user for desktop */}

           </div>
            {/* navigation Favorit for Mobile */}
           <div className="div-navigationbar">
           <div className="div-navigation-logo">
            <NavLink to="/" className="div-navigation-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" stroke="#ffffff" /></svg>
            <p>beranda</p>
            </NavLink>
            </div>

            <div className="div-navigation-logo">
            <NavLink to="/Favorit" className="div-navigation-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="#ffe786" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 10v11l-5-3l-5 3V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></g></svg>
            <p>Favorit</p>
            </NavLink>
            </div>

            <div className="div-navigation-logo">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
            <p>Cari</p>
             </div>

             <div className="div-navigation-logo">
            <NavLink to="/profile" className="div-navigation-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 16 16"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="5" cy="9" r="2.25"/><circle cx="11" cy="4" r="2.25"/><path d="M7.75 9.25c0-1 .75-3 3.25-3s3.25 2 3.25 3m-12.5 5c0-1 .75-3 3.25-3s3.25 2 3.25 3"/></g></svg>
            <p>Profile</p>
            </NavLink>
            </div>

            <div className="div-navigation-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><g fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"/><path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"/><path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
             <p>Komunitas</p>
             </div>

           </div>
           {/* navigation Favorit for mobile */}

           {/* navigation favorit for desktop */}
            <div className="div-sidebar">
              <div className="div-content-sidebar">

              <div className="button-navigator">
                        <NavLink className="a-navigation-desktop" to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                    stroke="#ffffff"
                                />
                            </svg>
                            <p className="p-sidebar-navigator">Beranda</p>
                         </NavLink>
                    </div>

                    <div className="button-navigator">
                        <a href="" className="a-navigation-desktop-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="#ffffff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                                />
                            </svg>
                            <p className="p-sidebar-navigator-cari">Cari</p>
                        </a>
                    </div>

                    <div className="button-navigator">
                        <div className="a-navigation-desktop-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="#ffe786"
                                    stroke="#ffe786"
                                    stroke-width="2.5"
                                >
                                    <path
                                        stroke-linejoin="round"
                                        d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                                    />
                                    <circle cx="12" cy="7" r="3" />
                                </g>
                            </svg>
                            <p className="p-sidebar-navigator-profile">
                                Profile
                            </p>
                        </div>
                    </div>

                    <div className="button-navigator">
                        <a href="" className="a-navigation-desktop-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 15 16"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M7.5 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m0-4C6.67 3 6 3.67 6 4.5S6.67 6 7.5 6S9 5.33 9 4.5S8.33 3 7.5 3"
                                />
                                <path
                                    fill="#ffffff"
                                    d="M13.5 11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5-.22.5-.5A2.5 2.5 0 0 0 11.5 7h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.83 0 1.5-.67 1.5-1.5S11.33 3 10.5 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5A2.5 2.5 0 0 1 13 4.5c0 .62-.22 1.18-.6 1.62c1.49.4 2.6 1.76 2.6 3.38c0 .83-.67 1.5-1.5 1.5m-12 0C.67 11 0 10.33 0 9.5c0-1.62 1.1-2.98 2.6-3.38c-.37-.44-.6-1-.6-1.62A2.5 2.5 0 0 1 4.5 2c.28 0 .5.22.5.5s-.22.5-.5.5C3.67 3 3 3.67 3 4.5S3.67 6 4.5 6c.28 0 .5.22.5.5s-.22.5-.5.5h-1A2.5 2.5 0 0 0 1 9.5c0 .28.22.5.5.5s.5.22.5.5s-.22.5-.5.5m9 3h-6c-.83 0-1.5-.67-1.5-1.5v-1C3 9.57 4.57 8 6.5 8h2c1.93 0 3.5 1.57 3.5 3.5v1c0 .83-.67 1.5-1.5 1.5m-4-5A2.5 2.5 0 0 0 4 11.5v1c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5v-1A2.5 2.5 0 0 0 8.5 9z"
                                />
                            </svg>
                            <p className="p-sidebar-navigator-komunitas">
                                Komunitas
                            </p>
                        </a>
                    </div>


                    <div className="button-navigator">
                        <a href="" className="a-navigation-desktop-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="#ffffff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                >
                                    <path d="M15 10v11l-5-3l-5 3V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3" />
                                    <path d="M11 3h5a3 3 0 0 1 3 3v11" />
                                </g>
                            </svg>
                            <p className="p-sidebar-navigator-markah">Markah</p>
                        </a>
                    </div>

              </div>

            </div>

           {/* navigation favorit for desktop end  */}
        </div>
    )
}

export default Favorit;