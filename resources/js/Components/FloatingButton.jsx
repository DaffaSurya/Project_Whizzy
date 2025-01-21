import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                        <button className="w-fit h-fit p-4 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:bg-yellow-500 transition">
                          <p>unggah</p>
                        </button>
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
        </div>
    );
};

export default FloatingButton;
