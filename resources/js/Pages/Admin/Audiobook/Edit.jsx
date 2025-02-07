import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../Layout/AdminLayout';
import { Ban, Save } from 'lucide-react';
import { Link, router } from '@inertiajs/react';
import Axios from 'axios';

const Edit = ({ karya, categories }) => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    // State untuk menyimpan data form
    const [formData, setFormData] = useState({
        judul_karya: karya.judul_karya,
        penyunting: karya.penyunting,
        deskripsi_karya: karya.deskripsi_karya,
        status: karya.status,
        categories: karya.categories.map(cat => cat.id),
        cover_karya: null,
        ilustrasi_karya: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCategoryToggle = (categoryId) => {
        setFormData((prevState) => {
            const isSelected = prevState.categories.includes(categoryId);
            return {
                ...prevState,
                categories: isSelected
                    ? prevState.categories.filter((id) => id !== categoryId)
                    : [...prevState.categories, categoryId],
            };
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setFormData({ ...formData, [name]: files[0] });
        }
    };

    async function updateKarya(e) {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('judul_karya', formData.judul_karya);
        data.append('penyunting', formData.penyunting);
        data.append('deskripsi_karya', formData.deskripsi_karya);
        data.append('status', formData.status);

        formData.categories.forEach(categoryId => {
            data.append('categories[]', categoryId);
        });

        if (formData.cover_karya) {
            data.append('cover_karya', formData.cover_karya);
        }
        if (formData.ilustrasi_karya) {
            data.append('ilustrasi_karya', formData.ilustrasi_karya);
        }

        for (const [key, value] of data.entries()) {
            console.log(`${key}:`, value);
        }

        try {
            await Axios.post(`/admin/audiobook/update/${karya.id}`, data, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percentCompleted);
                },
            });

            router.visit('/admin/audiobook');
        } catch (error) {
            console.log("Error updating:", error);
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
        <AdminLayout title="Edit Audiobook">
            {loading && (
                <div className="w-full bg-gray-200 rounded h-4 mb-4">
                    <div className="bg-yellow-400 h-4 rounded" style={{ width: `${progress}%` }}></div>
                </div>
            )}

            <form onSubmit={updateKarya} className="w-full space-y-4">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <div className='mb-3 flex flex-col'>
                            <label>Judul Karya</label>
                            <input type="text" className='rounded-xl py-4 px-4' name="judul_karya" value={formData.judul_karya} onChange={handleChange} required />
                        </div>

                        <div className='mb-3 flex flex-col'>
                            <label>Penyunting</label>
                            <input type="text" className='rounded-xl py-4 px-4' name="penyunting" value={formData.penyunting} onChange={handleChange} required />
                        </div>

                        <div className='mb-3 flex flex-col'>
                            <label>Deskripsi Karya</label>
                            <textarea name="deskripsi_karya" rows={20} className='rounded-xl py-4 px-4' value={formData.deskripsi_karya} onChange={handleChange} required />
                        </div>

                        <div className='mb-3 flex flex-col'>
                            <label>Status</label>
                            <select name="status" className='rounded-xl py-4 px-4' value={formData.status} onChange={handleChange} required>
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
                                        className={formData.categories.includes(category.id) ? 'bg-yellow-400 text-black px-4 py-2 rounded-full border text-sm transition-all duration-300 ' : 'bg-black text-white px-4 py-2 rounded-full border text-sm transition-all duration-300 '}
                                        onClick={() => handleCategoryToggle(category.id)}
                                    >
                                        {category.nama_kategori}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="mt-3 me-2 btn btn-sm bg-yellow-400 text-black">
                            <Save size={20} /> {loading ? 'Updating...' : 'Update'}
                        </button>
                        <Link href='/admin/audiobook' className='mt-3 me-2 btn btn-sm bg-transparent text-gray-600'><Ban size={20} /> Cancel</Link>
                    </div>

                    <div className='flex flex-col'>
                        <label>Cover Karya </label>
                        <input type="file" name='cover_karya' accept="image/png, image/jpg, image/jpeg" onChange={handleFileChange} />
                        {karya.cover_karya && <img src={`${karya.cover_karya}`} alt="Cover" className="mt-4 w-64" />}
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
};

export default Edit;
