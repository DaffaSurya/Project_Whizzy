import React from 'react'
import DefaultLayout from '../../Layout/DefautLayout'
import { ArrowLeft, Bookmark, Play } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import whizzy_logo from "../../../../public/logo.png";

const Show = ({ karya, firstChapter, views }) => {

    const currentUser = usePage().props.auth.user;

    return (
        <DefaultLayout>
            <a href="/" className="btn bg-transparent mb-5 lg:mx-32"><ArrowLeft /></a>

            {/* detail karya */}
            <div className="detail-karya flex lg:flex-row flex-col justify-start lg:px-32 gap-10 lg:mt-0 mt-10">

                <img
                    src={karya.cover_karya ? karya.cover_karya : whizzy_logo}
                    alt="Movie"
                    className="rounded-lg object-cover h-72 md:h-96 lg:h-64"
                />

                {/* properties */}
                <div className="properties flex flex-col text-left justify-start gap-3">

                    {/* title */}
                    <h1 className="font-bold text-white text-4xl">{karya.judul_karya}</h1>
                    <h1 className="">{karya.penyunting}</h1>

                    {/* likes and listen */}
                    <div className="flex flex-row justify-between text-center">
                        <div className="stats bg-black ">
                            <div className="stat px-0">
                                <div className="stat-title">Suka</div>
                                <div className="stat-value">1,293</div>
                            </div>
                        </div>
                        <div className="stats bg-black">
                            <div className="stat px-0">
                                <div className="stat-title">Didengar</div>
                                <div className="stat-value">{views}</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 w-full justify-between gap-5">
                        {!firstChapter ? (
                            <Link
                                className="col-span-10 btn text-black hover:bg-yellow-400 w-full"
                                disabled={true}
                                >
                                Belum ada chapter
                            </Link>
                        ) : (
                            <Link
                                href={`/karya/${karya.slug}/${karya.id}/chapter/${firstChapter.id}`}
                                className="col-span-10 btn bg-[#FFE786] text-black hover:bg-yellow-400 w-full"

                            >
                                Mulai Mendengarkan
                            </Link>
                        )}

                        <Link href={`/markah/${currentUser.id}/${karya.id}/save`} className="col-span-2 btn"><Bookmark /></Link>
                    </div>

                </div>
            </div>

            {/* properties */}
            <div className="detail lg:px-32 mt-12">
                <div className="penyunting text-white">
                    <h1 className="font-bold text-xl">Penyunting</h1>
                    <ul className="font-thin">
                        <li>{karya.penyunting}</li>
                    </ul>
                </div>


                {/* sinopsis & chapter */}
                <div className="section-2 grid grid-rows-2 lg:grid-cols-12 py-8 justify-start gap-8">
                    <div className="sinopsis text-white col-span-6 lg:col-span-8">
                        <h1 className="font-bold text-xl">Sinopsis</h1>
                        <p className='whitespace-pre-line'>
                            {karya.deskripsi_karya}
                        </p>
                    </div>
                    <div className="chapter col-span-6 lg:col-span-4">
                        <div className="bg-black shadow-lg rounded-lg overflow-hidden ">
                            <ul>
                                {karya.chapters.map((chapter) => (
                                    <li key={chapter.id} className="px-4 py-4 border-yellow-300 sm:px-6 hover:bg-gray-900 transition duration-150 ease-in-out">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Link
                                                    href={`/karya/${karya.slug}/${karya.id}/chapter/${chapter.id}`}
                                                    className="mr-4 bg-yellow-300 hover:bg-yellow-400 text-black rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                                                    <Play size={20} />
                                                </Link>
                                                <div>
                                                    <div className="text-sm font-medium text-white ">{chapter.judul_chapter}</div>
                                                    {/* <div className="text-sm text-white">{chapter.judul_chapter}</div> */}
                                                </div>
                                            </div>
                                            {/* <div className="text-sm text-white">{chapter.duration}</div> */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


            </div>


        </DefaultLayout>
    )
}

export default Show