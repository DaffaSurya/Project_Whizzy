import React, { useState } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Ban, Save } from 'lucide-react'
import { Link, router } from '@inertiajs/react'
import Axios from 'axios'
import LoadingModal from '../../../Components/LoadingModal'



const Create = ({ categories }) => {

    // loading
    const [loading, setLoading] = useState(false);

    // toast
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // image preview
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [fileData, setFileData] = useState({
        cover_karya: null,
        ilustrasi_karya: null,
    });

    const handleImageChange = (event) => {
        const { name, files } = event.target;

        if (files && files.length > 0) {
            const file = files[0];
            console.log(`Input Name: ${name}, File Name: ${file.name}`);

            // Update the corresponding file in the state
            setFileData((prevState) => ({
                ...prevState,
                [name]: file,
            }));
        }
    };


    // category multiple select
    const [selectedCategories, setSelectedCategories] = useState([]);
    const handleCategoryToggle = (categoryId) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(categoryId)
                ? prevSelected.filter((id) => id !== categoryId)
                : [...prevSelected, categoryId]
        );
    };

    async function newKarya(e) {
        e.preventDefault();

        setLoading(true);

        // Gather form data
        const data = new FormData();
        data.append('judul_karya', e.target.judul_karya.value);
        data.append('penyunting', e.target.penyunting.value);
        data.append('deskripsi_karya', e.target.deskripsi_karya.value);
        data.append('status', e.target.status.value);

        // Append categories
        selectedCategories.forEach(categoryId => {
            data.append('categories[]', categoryId);
        });

        // Append files
        if (fileData.cover_karya) {
            data.append('cover_karya', fileData.cover_karya);
        }
        if (fileData.ilustrasi_karya) {
            data.append('ilustrasi_karya', fileData.ilustrasi_karya);
        }

        try {
            for (const [key, value] of data.entries()) {
                console.log(key, value);
            }

            // Make the POST request with form data
            const response = await Axios.post('/admin/audiobook/store', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percentCompleted);
                },

            });

            // Optionally redirect or show a success message here
            router.visit('/admin/audiobook');


        } catch (error) {
            setLoading(false);
            // Handle error
            if (error.response) {
                console.log("Error data:", error.response.data);
                console.log("Error status:", error.response.status);
                console.log("Error headers:", error.response.headers);
            }
        }
    }


    return (
        <AdminLayout title="Audiobook | Create">

            {/* Progress bar */}
            {loading && <LoadingModal />}


            <form onSubmit={newKarya} className="w-full space-y-4">
                <div className="grid grid-cols-3 gap-5">

                    {/* forms */}
                    <div className="col-span-2">
                        <div className='mb-3'>
                            <label
                                htmlFor="judul_karya"
                                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                            >
                                Judul Karya
                            </label>
                            <input
                                type="text"
                                id="judul_karya"
                                name="judul_karya"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md  text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div className='mb-3'>
                            <label
                                htmlFor="penyunting"
                                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                            >
                                Penyunting
                            </label>
                            <input
                                type="text"
                                id="penyunting"
                                name="penyunting"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md  text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div className='mb-3'>
                            <label
                                htmlFor="deskripsi_karya"
                                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                            >
                                Deskripsi Karya
                            </label>
                            <textarea
                                id="deskripsi_karya"
                                name="deskripsi_karya"
                                required
                                rows="10"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md  text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            ></textarea>
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

                        <div className='mb-3'>
                            <label>Pilih Kategori:</label>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        type="button"
                                        className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 
                                                    ${selectedCategories.includes(category.id)
                                                ? 'bg-yellow-400 text-black border-green-500'
                                                : 'bg-black text-white border-gray-300 hover:bg-yellow-800'
                                            }`}
                                        onClick={() => handleCategoryToggle(category.id)}
                                    >
                                        {category.nama_kategori}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-3 me-2 btn btn-sm bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400"
                        >
                            <Save size={20} /> {loading ? 'Uploading...' : 'Submit'}
                        </button>
                        <Link href='/admin/audiobook' className='mt-3 me-2 btn btn-sm bg-transparent hover:bg-transparent text-gray-600 border-0'><Ban size={20} /> Cancel</Link>
                    </div>

                    {/* iamges */}
                    <div className="">
                        <label className="form-control w-full file-input-xl">
                            <div className="label">
                                <span className="label-text">Cover Karya <span className='text-sm text-gray-600'>OPTIONAL | .jpg .jpeg .png | max 10mb </span></span>
                            </div>
                            <input
                                type="file"
                                name='cover_karya'
                                accept="image/png, image/jpg, image/jpeg"
                                className="w-full"
                                onChange={handleImageChange}
                            />
                        </label>
                        {image && <img src={image} alt="Image Preview" className="mt-4" />}
                    </div>




                </div>
            </form>
        </AdminLayout >
    )
}

export default Create