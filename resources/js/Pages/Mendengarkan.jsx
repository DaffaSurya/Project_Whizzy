import DefaultLayout from "../Layout/DefautLayout";
import GaritanIMG from "../assets/Garitan Filantropi.jpg";
import { Bookmark } from 'lucide-react';
import { Play } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';



function Mendengarkan() {
    const chapters = [
        { id: 1, title: "The Beginning", duration: "12:34" },
        { id: 2, title: "A New Hope", duration: "15:21" },
        { id: 3, title: "The Plot Thickens", duration: "18:45" },
        { id: 4, title: "Unexpected Turns", duration: "14:56" },
        { id: 5, title: "The Climax", duration: "20:12" },
    ];

    return (
        <>
            <DefaultLayout>
                <a href="/" className="btn bg-transparent mb-5 lg:mx-32"><ArrowLeft /></a>

                {/* detail karya */}
                <div className="detail-karya flex lg:flex-row flex-col justify-start lg:px-32 gap-10 lg:mt-0 mt-10">


                    <img
                        src={GaritanIMG}
                        alt="Movie"
                        className="rounded-lg object-cover h-72 md:h-96 lg:h-64"
                    />


                    {/* properties */}
                    <div className="properties flex flex-col text-left justify-between">

                        {/* title */}
                        <h1 className="font-bold text-white text-4xl">Garitan Filantropi</h1>
                        <h1 className="">Mahasiswa dan Sastra indonesia 2023 </h1>

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

                        <div className="grid grid-cols-12 w-full justify-between gap-5">
                            <a href="/Garitan-Filantropi/play" className="col-span-10 btn bg-[#FFE786] text-black hover:bg-yellow-400 w-full">Mulai Mendengarkan</a>
                            <a href="" className="col-span-2 btn"><Bookmark /></a>
                        </div>

                    </div>
                </div>

                {/* properties */}
                <div className="detail lg:px-32 mt-12">
                    <div className="penyunting text-white">
                        <h1 className="font-bold text-xl">Penyunting</h1>
                        <ul className="font-thin">
                            <li>Bilqis Tirtakayana</li>
                            <li>Annisa Kusuma Rahmawati</li>
                            <li>Arina Nida Arrusyda</li>
                            <li>Cisya Azzahra</li>
                            <li>Dwiki Achmad Thoriq</li>
                            <li>Tazkia Kusmanandyah Putri</li>
                        </ul>
                    </div>


                    {/* sinopsis & chapter */}
                    <div className="section-2 grid grid-rows-2 lg:grid-cols-12 py-8 justify-start gap-8">
                        <div className="sinopsis text-white col-span-6 lg:col-span-8">
                            <h1 className="font-bold text-xl">Sinopsis</h1>
                            <p>
                                Antologi ini menggambarkan bagaimana cinta menjadi sebuah fenomena universal yang melintasi batas-batas geografis, budaya, dan bahasa. Puisi-puisi di dalamnya mendeskripsikan refleksi perasaan manusia yang terdalam sehingga dapat dirasakan oleh siapa saja, di mana saja, dan kapan saja. Para penulis muda meluapkan esensi cinta dalam berbagai bentuk: cinta antara dua insan, cinta terhadap alam semesta, cinta pada kehidupan, cinta pada budaya, dan cinta pada diri
                                sendiri. Dalam puisi ini, ungkapan perasaan, pemikiran, serta refleksi kami akan menghadirkan pandangan baru tentang bagaimana cinta di hidup kami secara
                                universal.
                                <br />
                                <br />
                                Ditulis oleh Mahasiswa Bahasa dan Sastra Indonesia Universitas Airlangga, audiobook ini merupakan inovasi lanjutan dari proyek yang sebelumnya sempat terhenti dalam bentuk yang hampir selesai. Pengembangan ini menjadi suatu langkah untuk menghidupkan kembali puisi-puisi di dalamnya, sekaligus sebagai bentuk penghargaan atas dedikasi dan kreativitas para mahasiswa yang terlibat.
                            </p>
                        </div>
                        <div className="chapter col-span-6 lg:col-span-4">
                            <div className="bg-black shadow-lg rounded-lg overflow-hidden ">
                                <ul>
                                    {chapters.map((chapter) => (
                                        <li key={chapter.id} className="px-4 py-4 border-yellow-300 sm:px-6 hover:bg-gray-900 transition duration-150 ease-in-out">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <button className="mr-4 bg-yellow-300 hover:bg-yellow-400 text-black rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                                                        <Play size={20} />
                                                    </button>
                                                    <div>
                                                        <div className="text-sm font-medium text-white ">Chapter {chapter.id}</div>
                                                        <div className="text-sm text-white">{chapter.title}</div>
                                                    </div>
                                                </div>
                                                <div className="text-sm text-white">{chapter.duration}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>


            </DefaultLayout>
        </>
    )
}

export default Mendengarkan;