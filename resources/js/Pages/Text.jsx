import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import GaritanIMG from "../assets/Garitan Filantropi.jpg";
import "react-multi-carousel/lib/styles.css";
import "../Style/style.css";

import { Link } from '@inertiajs/react'
import "swiper/css";
import DefaultLayout from "../Layout/DefautLayout";
import { useEffect, useState } from "react";
import Axios from "axios";

const Text = () => {

    const [karya, setKarya] = useState(null);
    const [featured, setFeatured] = useState({ data: [] });


    console.log(featured.data[0])

    // Fetch Karya data
    async function getKarya() {
        try {
            const response = await Axios.get("/api/karya-list");
            setKarya(response.data);  // Set the entire response data
        } catch (error) {
            console.error("Error fetching Karya:", error);
            alert("An error occurred while fetching data.");
        }
    }

    // Fetch Featured Karya data
    async function getFeatured() {
        try {
            const response = await Axios.get("/api/featured-karya");
            setFeatured(response.data);  // Set the entire response data
        } catch (error) {
            console.error("Error fetching Featured Karya:", error);
            alert("An error occurred while fetching data.");
        }
    }

    function truncateText(text, limit = 120) {
        if (!text) return "";  // Handle null or undefined text
        return text.length > limit ? text.slice(0, limit) + "..." : text;
    }

    // Fetch data when the component mounts
    useEffect(() => {
        getKarya();
        getFeatured();
    }, []);

    const books = [
        {
            id: 1,
            title: "Garitan Filantropi",
            description: "Bahasa dan Sastra Indonesia 2023",
            image: "/api/placeholder/400/320",
            link: "/Garitan-Filantropi/detail"
        },
        {
            id: 2,
            title: "Bumi Manusia",
            description: "Pramodya Ananta Toer",
            image: "https://th.bing.com/th/id/OIP.0XksT2Jm_x8jEfaxsMaoLAHaLH?rs=1&pid=ImgDetMain"
        }
    ];

    return (
        <DefaultLayout>

            <div className="flex flex-col pb-24 lg:px-8">

                {/* users name */}
                {/* <div className="flex flex-row pb-5">
                    <div className="flex flex-row items-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="w-12 h-12 rounded-full fit object-cover"
                        />
                        <p className="">Selamat Datang , <span className="text-yellow-200 font-bold">Kareva</span></p>
                    </div>
                </div> */}

                {/* carousel */}
                <div className="carousel flex flex-col pb-5">
                    <h1 className="text-2xl font-bold pb-3">Kreasi Terbaru</h1>

                    <Swiper className="w-full rounded-3xl">
                        <SwiperSlide>
                            <div className="relative group">
                                <img
                                    src="https://about.vidio.com/wp-content/uploads/2021/02/HDPM-Laskar-Pelangi-Mobile.jpg"
                                    className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-80 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex flex-col items-end justify-end px-4 pb-6 lg:pb-12 sm:px-16 text-start text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="text-xl font-bold text-start w-full">Laskar Pelangi</h2>
                                    <p className="text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolorem qui dicta sint ex quam perspiciatis voluptatum molestias, veniam, fugiat doloribus voluptatibus, doloremque ratione. Sapiente neque eos odio tenetur culpa?</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.cultura.id/wp-content/uploads/2019/08/bumi_manusia.jpg"
                                className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6492/1006492-h-fce8b35dde85"
                                className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.viu.com/ott/id/articles/wp-content/uploads/2019/10/perahu-kertas-1.jpg"
                                className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://wekepo.com/wp-content/uploads/2019/10/Film-Tenggelamnya-Kapal-Van-der-Wijck.jpg"
                                className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>



                {/* Temukan buku favorit lainnya layout for desktop */}
                <div className="py-8">
                    <h1 className="text-xl md:text-2xl mb-6 font-bold">
                        Temukan Buku Favoritmu berikutnya
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start">
                        {featured && Array.isArray(featured.data) && featured.data.length > 0 ? (
                            featured.data.map((item) => (
                                <div className="w-full">
                                    <div className="flex bg-black rounded-xl shadow-xl border border-gray-700 h-64 overflow-hidden">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={item.karya.cover_karya}
                                                alt={item.karya.judul_karya}
                                                className="w-36 lg:w-48 h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col p-4 flex-grow">
                                            <h2 className="text-lg font-semibold mb-2">
                                                {item.karya.judul_karya}
                                            </h2>
                                            <p className="text-sm text-gray-600 mb-4">
                                                {truncateText(item.karya.deskripsi_karya)}
                                            </p>
                                            <div className="mt-auto">
                                                <Link
                                                    href={`/karya/${item.karya.slug}/${item.karya.id}` || "#"}
                                                    className="inline-block bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                                                >
                                                    Explore the Story
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <span className="col-span-full text-center text-white loading loading-dots loading-md"></span>
                        )}

                    </div>
                </div>


                {/* Temukan buku favorit lainnya layout for desktop end */}

                <div>
                    <div className="novel">
                        <header>
                            <h2 className="text-xl font-bold text-white sm:text-2xl">
                                Novel Pilihan
                            </h2>
                        </header>
                        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {karya && karya.data ? (
                                karya.data.map((item) => (
                                    <li key={item.id}>
                                        <div

                                            className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                                            <div className="relative w-full pt-[150%] bg-gray-800 rounded-lg overflow-hidden">
                                                <img
                                                    src={item.cover_karya}
                                                    alt={item.judul_karya}
                                                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity group-hover:opacity-30"
                                                    loading="lazy"
                                                />
                                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="text-center text-white p-4">
                                                        <h3 className="text-xl font-semibold">{item.judul_karya}</h3>
                                                        <a
                                                            href={`/karya/${item.slug}/${item.id}`}
                                                            className="mt-2 inline-block px-6 py-2 text-sm font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-600 transition-colors">
                                                            View Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <span className="col-span-full text-center text-white loading loading-dots loading-md"></span>

                            )}
                        </ul>
                    </div>

                </div>
            </div>

        </DefaultLayout>
    );
};

export default Text;
