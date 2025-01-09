import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import GaritanIMG from "../assets/Garitan Filantropi.jpg";
import "react-multi-carousel/lib/styles.css";
import "../Style/style.css";

import "swiper/css";
import DefaultLayout from "../Layout/DefautLayout";

const Text = () => {
    return (
        <DefaultLayout>
            
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
            
        </DefaultLayout>
    );
};

export default Text;
