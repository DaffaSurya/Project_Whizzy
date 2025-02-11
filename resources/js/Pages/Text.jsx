import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-multi-carousel/lib/styles.css";
import { Link, usePage } from '@inertiajs/react'
import "swiper/css";
import DefaultLayout from "../Layout/DefautLayout";
import { useEffect, useState } from "react";
import Axios from "axios";
import whizzy_logo from "../../../public/logo.png"
import { LogOut } from "lucide-react";

const Text = () => {

    const [karya, setKarya] = useState(null);
    const [featured, setFeatured] = useState({ data: [] });
    const [carousel, setCarousel] = useState({ data: [] });
    const currentUser = usePage().props.auth.user;

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

    async function getCarousel() {
        try {
            const response = await Axios.get('/api/carousel-karya')
            setCarousel(response.data);
        } catch (error) {
            console.log('error while fetching carousel = ', error)
        }
    }

    function truncateText(text, limit = 90) {
        if (!text) return "";  // Handle null or undefined text
        return text.length > limit ? text.slice(0, limit) + "..." : text;
    }

    // Fetch data when the component mounts
    useEffect(() => {
        getKarya();
        getFeatured();
        getCarousel();
    }, []);

    return (
        <DefaultLayout>

            <div className=" flex flex-col pb-24 lg:px-8">

                {/* users name */}
                {currentUser ? (
                    <div className="flex flex-row py-8 md:hidden"> {/* Hide on desktop */}
                        <div className="flex flex-row items-center w-full justify-between gap-4">
                            <div className="flex flex-row gap-5">
                                <img
                                    src={currentUser.profile_pict || whizzy_logo}
                                    className="w-12 h-12 rounded-full fit object-cover"
                                />
                                <p className="">Selamat Datang, <br /><span className="text-yellow-200 font-bold">{currentUser.username}</span></p>
                            </div>
                            <Link href="/logout" className="text-red-500"><LogOut size={20} /></Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row pt-5 pb-5 md:hidden"> {/* Hide on desktop */}
                        <div className="flex flex-row w-full justify-between items-center gap-4">
                            <img
                                src={whizzy_logo}
                                className="w-12 h-12 rounded-full fit object-cover"
                            />
                            <p className=""><Link href="/login" className="text-yellow-200 font-bold">login</Link></p>
                        </div>
                    </div>
                )}



                {/* carousel */}
                <div className="carousel flex flex-col pb-5">
                    <h1 className="text-2xl text-white font-bold pb-3">Kreasi Terbaru</h1>
                    {carousel.length === 0 ? (
                        <p className="text-gray-500 text-center my-5">Belum ada karya</p>
                    ) : (
                        carousel.data.map((item) => (
                            <Swiper className="w-full rounded-3xl">
                                <SwiperSlide key={item.id}>
                                    <div className="relative group">
                                        <img
                                            src={item.karya.cover_karya ? item.karya.cover_karya : whizzy_logo}
                                            className="object-contain w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-80 transition-opacity duration-300"></div>
                                        <div className="absolute inset-0 flex flex-col items-end justify-end px-4 pb-6 lg:pb-12 sm:px-16 text-start text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h2 className="text-xl font-bold text-start w-full">{item.karya.judul_karya}</h2>
                                            <p className="text-sm sm:text-base">
                                                {item.karya.deskripsi_karya}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        ))
                    )}
                </div>



                {/* Temukan buku favorit lainnya layout for desktop */}
                <div className="py-8">
                    <h2 className="text-xl md:text-2xl mb-6 text-white font-bold">
                        Temukan Buku Favoritmu berikutnya
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start">
                        {featured && Array.isArray(featured.data) && featured.data.length > 0 ? (
                            featured.data.map((item) => (
                                <div className="w-full" key={item.karya.id}>
                                    <div className="flex bg-black rounded-xl shadow-xl border border-gray-700 h-64 overflow-hidden">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={item.karya.cover_karya ? item.karya.cover_karya : whizzy_logo}
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
                        ) : featured && Array.isArray(featured.data) && featured.data.length === 0 ? (
                            <div className="col-span-full text-center text-white py-24">
                                <p className="text-lg">Belum ada karya yang disorot</p>
                            </div>
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
                                karya.data.length > 0 ? (
                                    karya.data.map((item) => (
                                        <li key={item.id}>
                                            <div className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                                                <div className="relative w-full pt-[150%] bg-black border rounded-lg overflow-hidden">
                                                    <img
                                                        src={item.cover_karya ? item.cover_karya : whizzy_logo}
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
                                                                className="mt-2 inline-block px-6 py-2 text-sm font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-600 transition-colors"
                                                            >
                                                                View Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center text-white py-8">
                                        <p className="text-lg">Belum ada karya nih, nantikan terus ya...</p>
                                    </div>
                                )
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
