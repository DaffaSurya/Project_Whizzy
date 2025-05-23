import React from 'react'

const LoadingModal = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 ease-out scale-95 opacity-0 animate-fadeIn">
                <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <p className="text-lg text-white font-semibold">Uploading...</p>
            </div>
        </div>

    )
}

export default LoadingModal