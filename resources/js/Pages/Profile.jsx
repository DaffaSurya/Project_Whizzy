import "../Style/Profile.css";
import { NavLink } from "react-router-dom";
const Profile = () => {
    return (
        <div className="div-device-profile">
            <div className="div-container-profile">
                {/* card profile for mobile */}

                <div className="div-profile">
                    {/* profile-background for mobile */}
                    <div className="card-profile-mobile">
                        <img
                            src="https://wallpapercat.com/w/full/7/0/2/1290-3840x2160-desktop-4k-among-us-background.jpg"
                            className="img-background-profile"
                        />
                        <div className="div-container-dataprofile">
                            <div className="div-profile-picture">
                                <img
                                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="img-profile"
                                />
                            </div>

                            <div className="data-profile">
                                <p className="p-data-profile">@Karevlaneis</p>
                                <p className="p-data-sinceJoin">
                                    Since 2020 Join
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* profile-background for mobile */}
                </div>
                {/* card profile for mobile */}
                   
                {/* card profile for desktop */}
                <div className="div-profile-desktop">
                    <p className="p-Profile-font-desktop">Profile</p>

                    <div className="card-profile-desktop">
                    <img
                            src="https://wallpapercat.com/w/full/7/0/2/1290-3840x2160-desktop-4k-among-us-background.jpg"
                            className="img-background-desktop-profile"
                    />

                   <div className="div-container-dataprofile-desktop">
                     <div className="div-pictureprofile-desktop">
                     <img
                            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="img-profile-desktop"
                    />
                     </div>

                     <div className="data-profile-desktop">
                        <div className="div-container-data-profile-desktop">
                        <p className="p-dataprofile-desktop">@Karevlaneis</p>
                        <p className="p-sincejoin">Since 2020 Join</p>
                        </div>

                        <button className="button-editprofile-desktop">
                            Edit Profile
                        </button>
                     </div>
                   </div>
                    </div>
                </div>

                {/* card profile for desktop end */}

                {/* unggahan user for mobile */}
                <div className="div-tweet-useraccount">
                    <div className="div-tweet">
                        <article className="border border-white-300 bg-gray-800 p-4 ">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="size-14 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-medium text-white">
                                        @Karevlaneis
                                    </h3>
                                </div>
                            </div>

                            <ul className="mt-2 space-y-2">
                                <p className="p-tweet-user">
                                    Punya mimpi tak akan pernah mudah. Habibie
                                    dan Ainun tahu itu. Cinta mereka terbangun
                                    dalam perjalanan mewujudkan mimpi. Dinginnya
                                    salju Jerman, pengorbanan, rasa sakit,
                                    kesendirian serta godaan harta dan kuasa
                                    saat mereka kembali ke Indonesia mengiringi
                                    perjalanan dua hidup menjadi satu.
                                </p>
                            </ul>
                        </article>
                    </div>

                    <div className="div-tweet">
                        <article className="border border-white-300 bg-gray-800 p-4 ">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="size-14 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-medium text-white">
                                        @Karevlaneis
                                    </h3>
                                    <div className="flow-root"></div>
                                </div>
                            </div>

                            <ul className="mt-2 space-y-2">
                                <p className="p-tweet-user">
                                    Punya mimpi tak akan pernah mudah. Habibie
                                    dan Ainun tahu itu. Cinta mereka terbangun
                                    dalam perjalanan mewujudkan mimpi. Dinginnya
                                    salju Jerman, pengorbanan, rasa sakit,
                                    kesendirian serta godaan harta dan kuasa
                                    saat mereka kembali ke Indonesia mengiringi
                                    perjalanan dua hidup menjadi satu.
                                </p>
                            </ul>

                            <img src="https://www.cultura.id/wp-content/uploads/2019/08/bumi_manusia.jpg" className="img-unggahan-mobile" />
                        </article>
                    </div>
                </div>
                {/* unggahan user for mobile*/}

                {/* unggahan user for desktop */}
            <div className="div-unggahan-desktop">
               <div className="div-tweet-desktop">
               <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="size-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">@Karevlaneis</h3>
    </div>
  </div>

  <div className="div-title-unggahan-desktop">
    <p>Bumi Manusia - Pramodya Ananta toer </p>
  </div>

  <ul class="mt-4 space-y-2 text-white">
  Punya mimpi tak akan pernah mudah. Habibie dan Ainun tahu itu. Cinta mereka terbangun dalam perjalanan mewujudkan mimpi. Dinginnya salju Jerman, pengorbanan, rasa sakit, kesendirian serta godaan harta dan kuasa saat mereka kembali ke Indonesia mengiringi perjalanan dua hidup menjadi satu.
  </ul>
</article>
</div>

<div className="div-tweet-desktop">
<article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="size-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">@Karevlaneis</h3>
    </div>
  </div>
  
  <div className="div-title-unggahan-desktop">
    <p>Bumi Manusia - Pramodya Ananta toer </p>
  </div>

  <ul class="mt-4 space-y-2 text-white">
  Kalau kemanusiaan tersinggung, semua orang yang berperasaan dan berpikiran waras ikut tersinggung, kecuali orang gila dan orang yang berjiwa kriminal, biarpun dia sarjana.
  </ul>

  <img src="https://th.bing.com/th/id/OIP.aQe_irQ8w79h04Y_xSyDWwHaEA?rs=1&pid=ImgDetMain" className="img-unggahan-desktop" />
</article>
               </div>
            </div>

            {/* unggahan user for desktop */}

            </div>

            {/* navigatiom for mobile */}
            <div className="div-navigation-bar">
                <div className="div-navigation-logo">
                    <NavLink to="/" className="div-navigation-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="#ffffff"
                                d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"
                            />
                        </svg>
                        <p>beranda</p>
                    </NavLink>
                </div>

                <div className="div-navigation-logo">
                    <NavLink to="/Favorit" className="div-navigation-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
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
                        <p>Favorit</p>
                    </NavLink>
                </div>

                <div className="div-navigation-logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="#ffffff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                        />
                    </svg>
                    <p>Cari</p>
                </div>

                <div className="div-navigation-logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 16 16"
                    >
                        <g
                            fill="none"
                            stroke="#FFE786"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                        >
                            <circle cx="5" cy="9" r="2.25" />
                            <circle cx="11" cy="4" r="2.25" />
                            <path d="M7.75 9.25c0-1 .75-3 3.25-3s3.25 2 3.25 3m-12.5 5c0-1 .75-3 3.25-3s3.25 2 3.25 3" />
                        </g>
                    </svg>
                    <p>Profile</p>
                </div>

                <div className="div-navigation-logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 20 20"
                    >
                        <g
                            fill="#ffffff"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                            <path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0" />
                            <path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5" />
                            <path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                        </g>
                    </svg>
                    <p>Komunitas</p>
                </div>
            </div>
            {/* navigatio for mobile  end */}

            {/* navigation for desktop */}
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
            {/* navigation for desktop end*/}
        </div>
    );
};

export default Profile;
