import React from 'react'
import DefaultLayout from '../../Layout/DefautLayout'
import { ArrowLeft, Bookmark, BugPlay, Music, Music2, Play, Star, Users } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import whizzy_logo from "../../../../public/logo.png";
import RatingComponent from '../../Components/RatingComponent';

const Show = ({ karya, firstChapter, views, averageRating, userRating, ratingsCount }) => {

    const currentUser = usePage().props.auth.user;
    console.log(averageRating);

    return (
        <DefaultLayout>

            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 mt-5">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                    src={karya.cover_karya || whizzy_logo}
                    alt={karya.judul_karya}
                    className="rounded-lg object-cover w-full h-[400px]"
                />

                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white">{karya.judul_karya}</h1>
                        <p className="text-gray-400">{karya.penyunting}</p>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <Star className="text-yellow-400" />
                            <p className="text-2xl font-semibold text-white">
                                {averageRating} / 5
                                <span className="text-sm text-gray-500 flex items-center gap-1">
                                    <Users size={15} /> {ratingsCount}
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Music2 className="text-gray-400" />
                            <p className="text-2xl font-semibold text-white">{views}</p>
                        </div>
                    </div>



                    {/* jika sudah rating */}
                    {userRating ? (
                        <p>Anda telah memberi rating: {userRating} ⭐</p>
                    ) : (
                        <RatingComponent karyaId={karya.id} />
                    )}

                    <div className="flex gap-4">
                        <Link
                            href={firstChapter ? `/karya/${karya.slug}/${karya.id}/chapter/${firstChapter.id}` : "#"}
                            className={`flex-1 py-2 px-4 rounded-md text-center ${firstChapter
                                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                                : "bg-gray-600 text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            {firstChapter ? "Mulai Mendengarkan" : "Belum ada chapter, nantikan ya..."}
                        </Link>
                        <Link
                            href={`/markah/${currentUser.id}/${karya.id}/save`}
                            className="p-2 rounded-md bg-gray-700 hover:bg-gray-600"
                        >
                            <Bookmark className="h-5 w-5 text-white" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="h-px bg-gray-700 my-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-5">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold text-white mb-4">Synopsis</h2>
                    <p className="text-gray-300 whitespace-pre-line">{karya.deskripsi_karya}</p>
                </div>

                <div className="bg-black border h-fit border-gray-700 rounded-lg overflow-hidden">
                    <h3 className="text-lg font-semibold text-white p-4 border-b border-gray-700">Chapters</h3>
                    <ul className="divide-y divide-gray-700">
                        {karya.chapters.length == 0 ? (
                            <li className="hover:bg-gray-800 transition-colors">
                                <Link className="flex items-center gap-4 p-4">Belum ada chapter</Link>
                            </li>
                        ) : (
                            karya.chapters.map((chapter) => (
                                <li key={chapter.id} className="hover:bg-gray-800 transition-colors">
                                    <Link
                                        href={`/karya/${karya.slug}/${karya.id}/chapter/${chapter.id}`}
                                        className="flex items-center gap-4 p-4"
                                    >
                                        <div className="bg-yellow-400 rounded-full p-2">
                                            <Play className="h-4 w-4 text-black" />
                                        </div>
                                        <span className="flex-1 text-sm text-white">{chapter.judul_chapter}</span>
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Show