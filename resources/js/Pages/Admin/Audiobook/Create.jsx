import React, { useState } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { Ban, Save } from 'lucide-react'
import { Link, router } from '@inertiajs/react'
import Axios from 'axios'
import Toast from '../../../Components/Toast'


const Create = ({ categories }) => {

    // loading
    const [loading, setLoading] = useState(false);
    
    // toast
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // image preview
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null); // To store the actual file for upload

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();

            // Set the file for upload (without base64 conversion)
            setFile(selectedFile);

            // Set image preview using FileReader
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedFile); // Convert the file to base64 for preview
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
        // Append the actual file for upload
        if (file) {
            data.append('cover_karya', file);
        }

        try {
            // Make the POST request with form data
            const response = await Axios.post('/admin/audiobook/store', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Optionally redirect or show a success message here
            router.visit('/admin/audiobook');


        } catch (error) {
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
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
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
                            className="mt-3 me-2 btn btn-sm bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400"
                        >
                            <Save size={20} /> Submit
                        </button>
                        <Link href='/admin/audiobook' className='mt-3 me-2 btn btn-sm bg-transparent hover:bg-transparent text-gray-600 border-0'><Ban size={20} /> Cancel</Link>
                    </div>

                    {/* iamges */}
                    <div className="">
                        <label className="form-control w-full file-input-xl">
                            <div className="label">
                                <span className="label-text">Cover Karya</span>
                            </div>
                            <input
                                type="file"
                                name='cover_karya'
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