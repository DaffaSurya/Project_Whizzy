import React, { useState } from 'react';
import { Plus, PlusCircle } from 'lucide-react';
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
            <div className="relative">
                {isOpen && (
                    <div className="absolute bottom-16 right-0 bg-black shadow-lg rounded-lg w-40 p-2 flex flex-col space-y-2">
                        <button className="w-full py-2 px-4 text-center rounded-md bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition">
                            Forum
                        </button>
                        <label htmlFor="addCategory" className="w-full py-2 px-4 text-center rounded-md bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition cursor-pointer">
                            Unggah
                        </label>
                    </div>
                )}

                <button
                    onClick={toggleMenu}
                    className="bg-yellow-400 text-white rounded-full p-3 shadow-lg hover:bg-zinc-700 transition"
                >
                    <Plus className="w-6 h-6 text-black" />
                </button>
            </div>

            <input type="checkbox" id="addCategory" className="modal-toggle" />
            <div className="modal modal-middle" role="dialog">
                <div className="modal-box w-max-[40rem] bg-black border border-gray-600 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Unggah Cuitan</h3>

                    <form onSubmit={newCuitan}>
                        <div className="mb-4">
                            <span className="text-zinc-500 text-xs">*optional, max 1mb</span>
                            <input
                                type="file"
                                name="attachment"
                                className="mt-1 block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-zinc-800 file:text-white hover:file:bg-zinc-700"
                                onChange={handleFileChange}
                            />
                        </div>

                        {imagePreview && (
                            <div className="mb-4">
                                <img
                                    src={imagePreview || "/placeholder.svg"}
                                    alt="Preview"
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            </div>
                        )}

                        <div className="mb-6">
                            <textarea
                                name="content"
                                rows={6}
                                placeholder="Apa yang ada di pikiranmu sekarang?"
                                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 rounded-md text-sm font-medium ${loading
                                ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                                : 'bg-zinc-800 text-white hover:bg-zinc-700'
                                } transition duration-300 ease-in-out`}
                        >
                            {loading ? 'Processing...' : 'Bagikan'}
                        </button>
                    </form>
                </div>
                <label className="modal-backdrop bg-opacity-60" htmlFor="addCategory">Close</label>
            </div>

            {toastVisible && (
                <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded-md shadow-lg">
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
