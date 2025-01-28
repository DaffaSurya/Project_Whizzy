import React, { useState } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'
import Axios from 'axios'


const Index = ({ karya, featured }) => {

    const [loading, setLoading] = useState(false);

    function truncateText(text, maxLength) {
        if (!text) return text;
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
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
                window.location.reload();
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
                    <Link href='/admin/audiobook/create' className="btn btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New Carousel Item</Link>
                </div>
            </div>
            <div className="flex flex-row justify-start">
                <img src="https://placehold.co/1920x1080" className='w-64 h-32' />
                <img src="https://placehold.co/1920x1080" className='w-64 h-32' />
                <img src="https://placehold.co/1920x1080" className='w-64 h-32' />
                <img src="https://placehold.co/1920x1080" className='w-64 h-32' />
            </div>

            {/* Featured Audiobook */}
            <div className="flex flex-row justify-between">
                <h1 className='text-lg font-bold'>Featured Audiobooks Settings <span className='text-sm text-gray-600'>Maximum 2 Featured items</span></h1>
                <div className="controls flex flex-row items-center gap-5">
                    <label htmlFor="addCategory" className="btn btn-outline btn-sm text-white hover:bg-yellow-400"><Plus size={18} /> New Category</label>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start">
                {featured.length > 0 ? (
                    featured.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="flex bg-black rounded-xl shadow-xl border border-gray-700 h-64 overflow-hidden">
                                <div className="flex-shrink-0">
                                    <img
                                        src={featured[0].karya.cover_karya}
                                        alt={featured[0].karya.judul_karya}
                                        className="w-36 lg:w-48 h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col p-4 flex-grow">
                                    <h2 className="text-lg font-semibold mb-2">
                                        {featured[0].karya.judul_karya}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {featured.length > 0 && featured[0]?.karya?.deskripsi_karya
                                            ? truncateText(featured[0].karya.deskripsi_karya, 320)
                                            : "No description available."}
                                    </p>
                                    <div className="mt-auto">
                                        <button className="inline-block bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
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
                        <label class="form-control w-full mb-3">
                            <div class="label">
                                <span class="label-text">Audiobooks</span>
                            </div>
                            <select name='featured_audiobook' class="select select-bordered">
                                <option disabled selected>Pick one</option>
                                {karya.map((item => (
                                    <option key={item.id} value={item.id}>{item.judul_karya}</option>
                                )))}
                            </select>
                        </label>

                        {/* status */}
                        <label class="form-control w-full mb-3">
                            <div class="label">
                                <span class="label-text">Status</span>
                            </div>
                            <select name='status' class="select select-bordered">
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

            {/* modal */}

        </AdminLayout>
    )
}

export default Index