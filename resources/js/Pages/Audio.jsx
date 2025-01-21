import React, { useRef, useState } from 'react';
import AudioPlayer from '../Components/AudioPlayer';
import Garitan_Video from '../assets/Garitan_Filantropi.mp4';

function Audio() {

    const videoRef = useRef(null);
    const [comments, setComments] = useState([
        { id: 1, user: 'John Doe', text: 'This is a great post!' },
        { id: 2, user: 'Jane Smith', text: 'I totally agree with this!' },
        { id: 3, user: 'Mark Lee', text: 'Thanks for sharing, very insightful.' }
    ]);


    return (
        <div className="min-h-96 bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8 pb-32">
            <div className="max-w-4xl mx-auto space-y-8">
            <a href="/Garitan-Filantropi/detail">Back</a>
                {/* Video Section */}
                <div className="rounded-lg overflow-hidden shadow-2xl">
                    {/* Video Player */}
                    <div className="aspect-video">
                        <video
                            className="w-full h-full object-contain rounded-md"
                            ref={videoRef}
                            controls={false} // Disable native controls
                        >
                            <source
                                src={Garitan_Video}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Video Title and Description */}
                    <div className="mt-5">
                        <h1 className="text-3xl font-bold text-white">Garitan Filantropi</h1>
                        <p className="text-gray-300 font-light">
                            Mahasiswa dan Sastra Indonesia 2023
                        </p>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl text-yellow-300 mb-4">Comments</h2>

                    <div className="space-y-3">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-gray-700 p-3 rounded">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 bg-yellow-300 rounded-full" />
                                    <span className="text-white">{comment.user}</span>
                                </div>
                                <p className="text-gray-300">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Audio Section with custom controls */}
                <AudioPlayer videoRef={videoRef} />
            </div>
        </div>
    );
}


export default Audio;