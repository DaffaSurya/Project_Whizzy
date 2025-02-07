import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { router, usePage } from '@inertiajs/react';
import Axios from 'axios';

const FloatingButton = ({ currentUserid }) => {
    if (!currentUserid) {
        return null; // Don't render the button if the user is not logged in
    }

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImagePreview(null);
        }
    };

    const newCuitan = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('content', e.target.content.value);
        formData.append('attachment', e.target.attachment.files[0]);
        formData.append('user_id', currentUserid);

        try {
            const response = await Axios.post(`/komunitas/store/${currentUserid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setToastMessage("Item moved successfully.");
            setToastVisible(true);

            router.visit('/komunitas/all')
           
        } catch (error) {
            if (error.response) {
                console.error("Error data:", error.response.data);
                console.error("Error status:", error.response.status);
                console.error("Error headers:", error.response.headers);
            } else {
                console.error("Error:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed lg:bottom-12 lg:right-20 bottom-24 right-6">
            {/* Container to prevent button movement */}
            <div className="relative">
                {/* Drop-Up Menu */}
                {isOpen && (
                    <div className="absolute bottom-16 right-12 shadow-lg rounded-lg w-16 p-2 flex flex-col space-y-2">
                        <button className="w-fit h-fit p-4 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:bg-yellow-500 transition">
                            <p>Forum</p>
                        </button>
                        <label htmlFor="addCategory" className="w-fit h-fit p-4 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:bg-yellow-500 transition">Unggah</label>
                    </div>
                )}


                {/* Floating Button */}
                <button
                    onClick={toggleMenu}
                    className="bg-yellow-500 text-white rounded-full p-4 shadow-lg hover:bg-yellow-600 transition"
                >
                    <Plus />
                </button>
            </div>

            {/* Add category modal */}
            <input type="checkbox" id="addCategory" className="modal-toggle" />
            <div className="modal modal-middle" role="dialog">
                <div className="modal-box w-max-[40rem] bg-black border border-gray-600 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">Unggah Cuitan</h3>

                    <form onSubmit={newCuitan}>
                        <div className="mb-4">
                            <span className='text-gray-600'>*optional, max 1mb</span>
                            <input
                                type="file"
                                name="attachment"
                                className="file-input file-input-bordered w-full bg-[#2a2a2a] text-white border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                onChange={handleFileChange}
                            />
                        </div>

                        {imagePreview && (
                            <div className="mb-4">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-56 object-cover rounded-md shadow-md"
                                />
                            </div>
                        )}

                        <div className="mb-6">
                            <textarea
                                name="content"
                                rows={10}
                                placeholder="Apa yang ada di pikiranmu sekarang?"
                                className="textarea textarea-ghost w-full bg-[#2a2a2a] text-white border-2 border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn btn-sm px-6 py-2 mt-3 w-full ${loading
                                ? 'bg-yellow-600 text-white cursor-not-allowed'
                                : 'bg-yellow-400 text-black hover:bg-yellow-500'
                                } rounded-md transition duration-300 ease-in-out`}
                        >
                            {loading ? 'Processing...' : 'Bagikan'}
                        </button>
                    </form>
                </div>
                <label className="modal-backdrop bg-opacity-60" htmlFor="addCategory">Close</label>
            </div>


            {toastVisible && (
                <div className="toast toast-success">
                    {toastMessage}
                </div>
            )}

        </div>
    );
};

export default FloatingButton;
