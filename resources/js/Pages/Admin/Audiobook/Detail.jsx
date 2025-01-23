import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import GaritanIMG from "../../../../js/assets/Garitan Filantropi.jpg";
import { ArrowLeft, Bookmark } from 'lucide-react';


const Detail = ({ karya }) => {

    return (
        <AdminLayout title={`Detail`}>

            <div className="">
                {/* detail karya */}
                <div className="detail-karya flex lg:flex-row flex-col justify-start gap-10 lg:mt-0 mt-10">

                    <img
                        src={karya.cover_karya}
                        alt="Movie"
                        className="rounded-lg object-cover h-72 md:h-96 lg:h-64"
                    />


                    {/* properties */}
                    <div className="properties flex flex-col text-left justify-between">

                        {/* title */}
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-white text-4xl">{karya.judul_karya}</h1>
                            <h1 className="">{karya.penyunting}</h1>
                        </div>

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
                                    <div className="stat-value">89,400</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* properties */}
                <div className="detail mt-12">
                    <div className="penyunting  mb-7 text-white">
                        <h1 className="font-bold text-xl">Kategori</h1>
                        <ul className="flex flex-wrap gap-2 mt-3">
                            {karya.categories.map((category) => (
                                <li key={category.id}>
                                    <span className="px-4 py-2 text-sm font-semibold text-white border border-gray-600 rounded-lg transition-all hover:bg-yellow-800">
                                        {category.nama_kategori}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>


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
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: karya.deskripsi_karya.replace(/\n/g, '<br />'),
                                }}
                            ></p>
                        </div>
                        <div className="chapter col-span-6 lg:col-span-4">
                            <div className="bg-black shadow-lg rounded-lg overflow-hidden ">

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </AdminLayout>
    )
}

export default Detail