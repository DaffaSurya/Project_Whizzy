import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import GaritanIMG from "../assets/Garitan Filantropi.jpg";
import "react-multi-carousel/lib/styles.css";
import "../Style/style.css";

import "swiper/css";

const Text = () => {
    return (
        <div className="div-device">
            <div className="div-container">
                {/* navbar / Header  for Mobile*/}
                <div className="div-navbar">
                    <div className="div-session1">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="img-header-profile"
                        />
                        <p className="Name-profile">Hai , Kareva</p>
                    </div>
                </div>
                {/* navbar / Header  for Mobile*/}

                {/* Carousel for Mobile */}
                <div className="div-carousel-banner">
                    <Swiper className="mySwiper">
                        <SwiperSlide>
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMjc0ZGU0M2QtNzZkMS00NzI2LTg0OGEtNTE3OTU5MzUyZmFjXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg"
                                className="img-slide-carousel"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.cultura.id/wp-content/uploads/2019/08/bumi_manusia.jpg"
                                className="img-slide-carousel"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6492/1006492-h-fce8b35dde85"
                                className="img-slide-carousel"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.viu.com/ott/id/articles/wp-content/uploads/2019/10/perahu-kertas-1.jpg"
                                className="img-slide-carousel"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://wekepo.com/wp-content/uploads/2019/10/Film-Tenggelamnya-Kapal-Van-der-Wijck.jpg"
                                className="img-slide-carousel"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* carousel for Mobile end */}

                {/* carousel for Desktop */}
                <div className="div-carousel-desktop">
                    <p className="p-carousel-desktop">Kreasi Terbaru</p>

                    <div className="div-carousel">
                        <Swiper className="mySwiper">
                            <SwiperSlide>
                                <img
                                    src="https://about.vidio.com/wp-content/uploads/2021/02/HDPM-Laskar-Pelangi-Mobile.jpg"
                                    className="img-slide-carousel"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.cultura.id/wp-content/uploads/2019/08/bumi_manusia.jpg"
                                    className="img-slide-carousel"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6492/1006492-h-fce8b35dde85"
                                    className="img-slide-carousel"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.viu.com/ott/id/articles/wp-content/uploads/2019/10/perahu-kertas-1.jpg"
                                    className="img-slide-carousel"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://wekepo.com/wp-content/uploads/2019/10/Film-Tenggelamnya-Kapal-Van-der-Wijck.jpg"
                                    className="img-slide-carousel"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                {/* carousel for Desktop end */}

                {/* Temukan buku favorit lainnya layout for mobile*/}

                <div className="div-favorit-dashboard">
                    <p className="subjudul">Temukan Buku Favorit lainnya</p>

                    <div className="card card-side bg-black shadow-xl mt-6">
                        <figure>
                            <img
                                src={GaritanIMG}
                                className="img-favorit-dashboard"
                                alt="Movie"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Garitan Filantropi</h2>
                            <p className="subjudul-card">
                                Bahasa dan Sastra Indonesia 2023
                            </p>
                            <div className="div-review-star">
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/023/980/239/small/yellow-star-watercolor-illustration-png.png"
                                    className="star-review"
                                />
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/023/980/239/small/yellow-star-watercolor-illustration-png.png"
                                    className="star-review"
                                />
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/023/980/239/small/yellow-star-watercolor-illustration-png.png"
                                    className="star-review"
                                />
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/023/980/239/small/yellow-star-watercolor-illustration-png.png"
                                    className="star-review"
                                />
                            </div>
                            <div className="card-actions justify-center">
                                <button className="button-favorit-dashboard">
                                    Explore The Story
                                </button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

                {/* Temukan buku favorit lainnya layout end for mobile*/}

                {/* Temukan buku favorit lainnya layout for desktop */}

                <div className="div-favorit-desktop-dashboard">
                    <p className="p-TambahBukuFavorit">
                        Temukan Buku Favoritmu berikutnya
                    </p>

                    <div className="div-favoritbook-desktop">
                        <div className="div-card-favoritbook">
                            <div className="card card-side bg-base-100 shadow-xl border border-white">
                                <figure>
                                    <img
                                        src={GaritanIMG}
                                        alt="Movie"
                                        className="img-favorit-desktop"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {" "}
                                        Garitan Filantropi{" "}
                                    </h2>
                                    <p>Bahasa dan Sastra indonesia 2023 </p>
                                    <div className="card-actions justify-end">
                                        <button className="button-explore-story">
                                            Explore the Story
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="div-card-favoritbook-2">
                            <div className="card card-side bg-base-100 shadow-xl border border-white">
                                <figure>
                                    <img
                                        src="https://th.bing.com/th/id/OIP.0XksT2Jm_x8jEfaxsMaoLAHaLH?rs=1&pid=ImgDetMain"
                                        alt="Movie"
                                        className="img-favorit-desktop"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {" "}
                                        Bumi Manusia
                                    </h2>
                                    <p>Pramodya ananta Toer</p>
                                    <div className="card-actions justify-end">
                                        <button className="button-explore-story">
                                            Explore the Story
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Temukan buku favorit lainnya layout for desktop end */}

                {/* novel pilihan anda for mobile */}
                <div className="div-karya-pilihan">
                    <p className="p-karyapilihan">Novel Pilihan</p>

                    <div className="grid grid-cols-2 justify-items-center mt-3 gap-5 py-1">
                        <a href="#" className="group block overflow-hidden">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565658920i/1398034.jpg"
                                alt=""
                                className="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[420px] rounded-lg"
                            />
                        </a>

                        <a href="#" className="group block overflow-hidden">
                            <img
                                src={GaritanIMG}
                                alt=""
                                className="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                            />
                        </a>

                        <a href="#" className="group block overflow-hidden">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg"
                                alt=""
                                className="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                            />
                        </a>

                        <a href="#" className="group block overflow-hidden">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484031052i/1677677.jpg"
                                alt=""
                                className="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                            />
                        </a>

                        <a href="#" className="group block overflow-hidden">
                            <img
                                src="https://ebooks.gramedia.com/ebook-covers/53333/image_highres/BLK_RDP2020706247.jpg"
                                className="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                            />
                        </a>

                        <a href="#" className="group block overflow-hidden">
                            <img
                                src="https://ebooks.gramedia.com/ebook-covers/1682/image_highres/ID_GPU2013MTH02NLM.jpg"
                                className="h-[240px] w-40 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                            />
                        </a>
                    </div>
                </div>
                {/* novel pilhan anda end  for mobile*/}

                {/* novel pilihan anda for desktop */}

                <div className="div-desktop-karyapilihan">
                    <section>
                        <div class="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
                            <header>
                                <h2 class="text-xl font-bold text-white sm:text-2xl">
                                    Novel Pilihan
                                </h2>
                            </header>
                            <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://arsip.festivalfilm.id/wp-content/uploads/2020/08/Bumi-Manusia-Poster.jpg"
                                            alt=""
                                            // class="h-[150px] w-80 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://th.bing.com/th/id/R.1f0e9f9313da45a89a551e167fed47f9?rik=RijiF9Y24H8HPw&riu=http%3a%2f%2ffarm4.staticflickr.com%2f3714%2f10661051763_3fb9e479a4_o.jpg&ehk=YHeOh%2fo5kyuUurA4C6H1pJQKqoUoJmvmq5H5hycwSkE%3d&risl=&pid=ImgRaw&r=0"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484031052i/1677677.jpg"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://mojokstore.com/wp-content/uploads/2018/04/ronggeng-dukuh-paruk-1.jpg"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://www.bahasaenglish.com/wp-content/uploads/2020/06/5-Menara.jpg"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://online.pubhtml5.com/ryfz/ypax/files/large/1.jpg"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://th.bing.com/th/id/OIP.Sx2CV2g1L1jfUw5Q3MGcPQAAAA?rs=1&pid=ImgDetMain"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484031052i/1677677.jpg"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://mojokstore.com/wp-content/uploads/2018/04/ronggeng-dukuh-paruk-1.jpg"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group block overflow-hidden"
                                    >
                                        <img
                                            src="https://www.bahasaenglish.com/wp-content/uploads/2020/06/5-Menara.jpg"
                                            alt=""
                                            className="img-collection-desktop"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                {/* novel pilihan anda for desktop */}

                {/* navigation bar for Mobile */}

                <div className="div-navigationbar">
                    <div className="div-navigation-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#FFE786"
                                d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"
                            />
                        </svg>
                        <p>beranda</p>
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
                        <Link to="/profile" className="div-navigation-logo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="30"
                                viewBox="0 0 2048 2048"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M1636 693q65 33 117 81t90 108t57 128t20 142h-128q0-79-30-149t-83-122t-122-82t-149-31q-79 0-149 30t-122 83t-82 122t-31 149q0 91-41 173t-115 136q65 33 117 81t90 108t57 128t20 142h-128q0-79-30-149t-83-122t-122-82t-149-31q-79 0-149 30t-122 83t-82 122t-31 149H128q0-73 20-141t57-128t89-108t118-82q-73-54-114-136t-42-173q0-79 30-149t83-122t122-82t149-31q91 0 173 41t136 115q38-75 97-134t134-97q-73-54-114-136t-42-173q0-79 30-149t83-122t122-82t149-31q79 0 149 30t122 83t82 122t31 149q0 91-41 173t-115 136m-996 715q52 0 99-20t81-55t55-81t21-100q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99q0 53 20 99t55 81t81 55t100 21m512-1024q0 53 20 99t55 81t81 55t100 21q52 0 99-20t81-55t55-81t21-100q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99"
                                />
                            </svg>
                            <p>Profile</p>
                        </Link>
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

                {/* navigation bar for Mobile */}
            </div>

            {/* Navigation fot desktop */}
            <div className="div-sidebar">
                <div className="div-content-sidebar">
                    <div className="button-navigator">
                        <a href="" className="a-navigation-desktop">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#ffe786"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                />
                            </svg>
                            <p className="p-sidebar-navigator">Beranda</p>
                        </a>
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
                        <Link to="/profile" className="a-navigation-desktop-2">
                            {/* <a href="/profile" className="a-navigation-desktop-2"> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="#ffffff"
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
                        </Link>
                        {/* </a> */}
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
                        {/* <a href="" className="a-navigation-desktop-4"> */}
                        <NavLink to="/Favorit" className="a-navigation-desktop-4">
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
                        {/* </a> */}
                        </NavLink>
                    </div>
                </div>
            </div>

            {/*  */}
        </div>
    );
};

export default Text;
