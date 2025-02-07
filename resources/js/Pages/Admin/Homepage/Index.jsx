import React, { useState } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Link, router } from '@inertiajs/react'
import { Plus, Trash2 } from 'lucide-react'
import Axios from 'axios'


const Index = ({ karya, featured, carousel }) => {

    const [loading, setLoading] = useState(false);

    console.log(carousel)

    function truncateText(text, maxLength) {
        if (!text) return text;
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    async function newCarousel(e) {
        e.preventDefault();

        setLoading(true);

        const data = {
            karya_id: e.target.karya_id.value,
            status: e.target.status.value,
        }

        try {
            const response = await Axios.post('/admin/homepage-settings/store-carousel', data);

            document.getElementById('addCarousel').checked = false;

            setToastVisible(true);
            setToastMessage("Item Added successfully.");

            setTimeout(() => {
                router.visit('/admin/homepage-settings')
            }, 1000);
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

    async function newFeatured(e) {
        e.preventDefault();

        setLoading(true);

        const data = {
            featured_audiobook: e.target.featured_audiobook.value,
            status: e.target.status.value,
        }

        try {
            const response = await Axios.post('/admin/homepage-settings/store-featured', data);

            document.getElementById('addCategory').checked = false;

            setToastVisible(true);
            setToastMessage("Item moved successfully.");

            setTimeout(() => {
                router.visit('/admin/homepage-settings')
            }, 1000);
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

    return (
        <AdminLayout title={`Homepage Settings`}>

            {/* Carousel Settings */}
            <div className="flex flex-row justify-between">
                <h1 className='text-lg font-bold'>Carousel Settings <span className='text-sm text-gray-600'>Maximum 4 Carousel items</span></h1>
                <div className="controls flex flex-row items-center gap-5">
                    <label htmlFor="addCarousel" className="btn btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New Carousel Item</label>
                </div>
            </div>
            <div className="flex flex-row justify-start">
                {carousel.length === 0 ? (
                    <p className='text-gray-500 text-center'>Carousel Masih kosong</p>
                ) : (
                    carousel.map((item => 
                        <img src={item.karya.cover_karya} className='w-64 h-32 object-contain' />
                    ))
                )}
            </div>

            {/* Featured Audiobook */}
            <div className="flex flex-row justify-between">
                <h1 className='text-lg font-bold'>Featured Audiobooks Settings <span className='text-sm text-gray-600'>Maximum 2 Featured items</span></h1>

                <div className="controls flex flex-row items-center gap-5">
                    {featured.length >= 2 ? (
                        <label htmlFor="addCategory" className="btn btn-disabled btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New Category</label>
                    ) : (
                        <label htmlFor="addCategory" className="btn btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New Category</label>
                    )}
                </div>


            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start">
                {featured.length > 0 ? (
                    featured.map((item) => (
                        <div key={item.id} className="w-full">
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
                                        {featured.length > 0 && item?.karya?.deskripsi_karya
                                            ? truncateText(item.karya.deskripsi_karya, 320)
                                            : "No description available."}
                                    </p>
                                    <div className="mt-auto">
                                        <button className="inline-block text-white border py-2 px-4 rounded-xl hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-colors">
                                            Remove from Featured
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 border w-full border-gray-700">
                        <h2 className="text-lg font-bold text-gray-600">No Featured <span className='text-yellow-200'>Content</span></h2>
                        <p className='text-gray-600'>Check back later for new updates!</p>
                    </div>
                )}
            </div>


            {/* modal */}
            <input type="checkbox" id="addCategory" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-black border border-gray-600 rounded-lg">
                    <h3 className="text-lg font-bold mb-3">Create New Featured</h3>

                    <form onSubmit={newFeatured}>
                        {/* audiobooks */}
                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">Audiobooks</span>
                            </div>
                            <select name='featured_audiobook' className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                {karya.map((item => (
                                    <option key={item.id} value={item.id}>{item.judul_karya}</option>
                                )))}
                            </select>
                        </label>

                        {/* status */}
                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">Status</span>
                            </div>
                            <select name='status' className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option value='visible'>Visible</option>
                                <option value='not_visible'>Not Visible</option>
                            </select>
                        </label>

                        <button type='submit' disabled={loading} className={`btn btn-sm px-4 py-1 mt-3 ${loading
                            ? 'bg-yellow-600 text-white cursor-not-allowed'
                            : 'bg-yellow-400 text-black hover:bg-yellow-500'
                            }`}>{loading ? 'Processing...' : 'Save'}</button>

                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="addCategory">Close</label>
            </div>


            {/* carousel modal */}
            <input type="checkbox" id="addCarousel" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-black border border-gray-600 rounded-lg">
                    <h3 className="text-lg font-bold mb-3">Create New Featured</h3>

                    <form onSubmit={newFeatured}>
                        {/* audiobooks */}
                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">Audiobooks</span>
                            </div>
                            <select name='featured_audiobook' className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                {karya.map((item => (
                                    <option key={item.id} value={item.id}>{item.judul_karya}</option>
                                )))}
                            </select>
                        </label>

                        {/* carousel list */}
                        {carousel.length === 0 ? (
                            <p className='text-gray-500 text-center'>No Carousel yet</p>
                        ) : (
                            carousel.map((item =>
                                <div className="my-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.karya.cover_karya} alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.karya.judul_karya}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.karya.deskripsi_karya}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><Trash2 /></p>
                                    </div>
                                </div>
                            ))
                        )}

                        <button type='submit' disabled={loading} className={`btn btn-sm px-4 py-1 mt-3 ${loading
                            ? 'bg-yellow-600 text-white cursor-not-allowed'
                            : 'bg-yellow-400 text-black hover:bg-yellow-500'
                            }`}>{loading ? 'Processing...' : 'Save'}</button>

                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="addCarousel">Close</label>
            </div>

            {/* modal */}

        </AdminLayout>
    )
}

export default Index