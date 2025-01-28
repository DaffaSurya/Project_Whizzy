import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { usePage } from '@inertiajs/react';
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

            setTimeout(() => {
                window.location.reload();
            }, 1000);
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
                <div className="modal-box w-[40rem] bg-black border border-gray-600 rounded-lg">
                    <h3 className="text-lg font-bold mb-3">Unggah Cuitan</h3>

                    <form onSubmit={newCuitan}>
                        <input type="file" name="attachment" className="" />
                        <textarea
                            name="content"
                            rows={10}
                            placeholder="Apa yang ada di pikiranmu sekarang?"
                            className="textarea textarea-ghost w-full bg-black"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn btn-sm px-4 py-1 mt-3 ${loading
                                ? 'bg-yellow-600 text-white cursor-not-allowed'
                                : 'bg-yellow-400 text-black hover:bg-yellow-500'
                                }`}
                        >
                            {loading ? 'Processing...' : 'Bagikan'}
                        </button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="addCategory">Close</label>
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
