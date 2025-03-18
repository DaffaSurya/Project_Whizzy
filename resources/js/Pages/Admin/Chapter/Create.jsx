import React, { useEffect, useRef, useState } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Ban, Eye, Save, Trash2, UserRoundPen, Play, Pause } from 'lucide-react'
import { Link } from '@inertiajs/react'
import Axios from 'axios'
import Toast from '../../../Components/Toast'
import whizzy_logo from "../../../../../public/logo.png"


const Create = ({ karya, chapter }) => {

    // loading
    const [loading, setLoading] = useState(false);

    // toast
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    async function newChapter(e) {
        e.preventDefault();

        setLoading(true);

        // Create a FormData object to handle the file and other data
        const formData = new FormData();
        formData.append("judul_chapter", e.target.judul_chapter.value);
        formData.append("status", e.target.status.value);
        formData.append("karya_id", karya.id);

        // Get the files
        const ilustrasiKaryaFile = e.target.ilustrasi_karya.files[0]; // For .mp4 file
        const audioFile = e.target.audio_file.files[0]; // For .mp3 file

        // Check and append the video file
        if (ilustrasiKaryaFile) {
            formData.append("ilustrasi_karya", ilustrasiKaryaFile);
        }

        // Check and append the audio file
        if (audioFile) {
            formData.append("audio_file", audioFile);
        }

        try {
            console.log(formData); // Optional, to check the data being sent
            const response = await Axios.post(`/admin/chapter/store`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Ensure the correct content type for file upload
                }
            });

            setToastVisible(true);
            setToastMessage("Chapter Added Successfully.");

            window.location.reload();
        } catch (error) {
            setLoading(false);

            if (error.response) {
                console.log("Error data:", error.response.data);
                console.log("Error status:", error.response.status);
                console.log("Error headers:", error.response.headers);
            }
        } finally {
            setLoading(false);
        }
    }


    // audio
    const [playing, setPlaying] = useState(null); // To track which audio is playing
    const handlePlayPause = (audio, index) => {
        if (playing === index) {
            audio.pause();
            setPlaying(null);
        } else {
            if (playing !== null) {
                const previousAudio = document.getElementById(`audio-${playing}`);
                previousAudio.pause();
            }
            audio.play();
            setPlaying(index);
        }
    };


    return (
        <AdminLayout>

            <Toast show={toastVisible} message={toastMessage} />


            {/* properties */}
            <div className="detail-karya flex lg:flex-row flex-col justify-start gap-10 lg:mt-0 mt-10">
                <img
                    src={karya.cover_karya ? karya.cover_karya : whizzy_logo}
                    alt="Movie"
                    className="rounded-lg object-cover h-72 md:h-96 lg:h-64"
                />

                <div className="properties flex flex-col text-left justify-between">
                    {/* title */}
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-white text-4xl">{karya.judul_karya}</h1>
                        <h1 className="">{karya.penyunting}</h1>
                    </div>
                </div>
            </div>

            {/* chapter */}
            <div className="grid grid-cols-12 gap-8">

                {/* existing chapter */}
                <div className="col-span-7">
                    <label
                        htmlFor="judul_karya"
                        className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                    >
                        Existing Chapter
                    </label>
                    <div className="overflow-x-auto rounded-md border border-slate-800">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Judul Chapter</th>
                                    <th>Status</th>
                                    <th>Created at</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {chapter.length > 0 ? (
                                    chapter.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="px-4 py-2">{index + 1}</td>
                                            <td className="px-4 py-2">{item.judul_chapter}</td>
                                            <td className="px-4 py-2">
                                                {item.status === 'published' ? (
                                                    <span className="text-green-500">Published</span>
                                                ) : item.status === 'draft' ? (
                                                    <span className="text-yellow-500">Draft</span>
                                                ) : item.status === 'archived' ? (
                                                    <span className="text-red-500">Archived</span>
                                                ) : (
                                                    <span className="text-gray-500">Unknown</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-2">
                                                {new Date(item.created_at).toLocaleDateString("en-GB", {
                                                    weekday: "short",
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </td>
                                            <td className="flex flex-row px-4 py-2 gap-4">
                                                <audio
                                                    id={`audio-${index}`}
                                                    src={`/${item.audio_file}`}
                                                    type="audio/mp3"
                                                />
                                                <button
                                                    disabled={true}
                                                    className="btn btn-outline btn-sm px-0 border-0 hover:bg-transparent hover:text-green-400"
                                                    onClick={() => handlePlayPause(document.getElementById(`audio-${index}`), index)}
                                                >
                                                    {playing === index ? <Pause size={20} /> : <Play size={20} />}
                                                </button>
                                                <Link disabled={true} href={`/admin/audiobook/edit/${item.id}`} className="btn btn-outline btn-sm px-0 border-0 hover:bg-transparent hover:text-yellow-400"><UserRoundPen size={20} /> Edit</Link>
                                                <Link href={`/admin/audiobook/delete/${item.id}`} className="btn btn-outline btn-sm px-0 border-0 hover:bg-transparent hover:text-red-500"><Trash2 size={20} /> Delete</Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="px-4 py-5 text-center text-gray-500"
                                        >
                                            No Chapter found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* form */}
                <div className="col-span-5">
                    <form onSubmit={newChapter} className="w-full space-y-4">
                        <div className='mb-3'>
                            <label
                                htmlFor="judul_karya"
                                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                            >
                                Judul Chapter
                            </label>
                            <input
                                type="text"
                                id="judul_chapter"
                                name="judul_chapter"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md  text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div className="mb-3 flex flex-col">
                            <label htmlFor="">Ilustrasi Karya <span className='text-sm text-gray-600'>Optional | .mp4 | Max 10mb</span></label>
                            <input type="file" name="ilustrasi_karya" accept="video/mp4" />
                        </div>

                        <div className="mb-3 flex flex-col">
                            <label htmlFor="">Audio <span className='text-sm text-gray-600'>.mp3 .wav| Max 20mb</span></label>
                            <input type="file" name="audio_file" accept="audio/*" required />
                        </div>

                        <div className='mb-3'>
                            <label
                                htmlFor="status"
                                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md  text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                <option value="" disabled selected>
                                    Select Status
                                </option>
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>



                        <button
                            type="submit"
                            className="mt-3 me-2 btn btn-sm bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400"
                        >
                            <Save size={20} /> Submit
                        </button>
                        <Link href='/admin/audiobook' className='mt-3 me-2 btn btn-sm bg-transparent hover:bg-transparent text-gray-600 border-0'><Ban size={20} /> Cancel</Link>
                    </form>
                </div>

            </div>


        </AdminLayout>
    )
}

export default Create