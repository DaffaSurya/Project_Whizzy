import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2 } from 'lucide-react'; // Import icons as needed

const AudioPlayer = ({ videoRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Update current time and duration when the video metadata is loaded
    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    // Update current time during playback
    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    // Handle play/pause toggle
    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Handle seeking to a specific time in the video
    const handleSeek = (event) => {
        const newTime = (event.target.value / 100) * duration;
        videoRef.current.currentTime = newTime;
    };

    useEffect(() => {
        // Set event listeners for time updates and metadata load
        const video = videoRef.current;
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        // Cleanup event listeners on component unmount
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-700 p-2 sm:p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between space-x-2 sm:space-x-4 flex-wrap">
                {/* Song Info */}
                <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-1/4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-zinc-800 rounded-md flex-shrink-0">
                        <img
                            src="https://placehold.co/400"
                            alt="Album cover"
                            className="w-full h-full rounded-md object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-medium text-white truncate">Garitan Filantropi</span>
                        <span className="text-xs text-zinc-400 truncate">Mahasiswa Sastra dan Bahasa indonesia 2023</span>
                    </div>
                </div>

                {/* Player Controls */}
                <div className="flex flex-col items-center w-full sm:w-2/4">
                    <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-4">
                        <button className="text-zinc-400 hover:text-white transition">
                            <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button className="text-zinc-400 hover:text-white transition">
                            <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded-full hover:scale-105 transition"
                            onClick={togglePlay}
                        >
                            {isPlaying ? (
                                <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                            ) : (
                                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-black ml-1" />
                            )}
                        </button>
                        <button className="text-zinc-400 hover:text-white transition">
                            <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button className="text-zinc-400 hover:text-white transition">
                            <Repeat className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </div>

                    <div className="w-full flex items-center space-x-1 sm:space-x-2">
                        <span className="text-xs text-zinc-400">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={(currentTime / duration) * 100 || 0}
                            onChange={handleSeek}
                            className="flex-1"
                        />
                        <span className="text-xs text-zinc-400">{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center space-x-2 w-full sm:w-1/4 justify-end mt-2 sm:mt-0">
                    <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                    <div className="w-20 sm:w-24">
                        {/* Slider for volume */}
                    </div>
                </div>
            </div>
        </div>
    );


};

// Helper function to format time as MM:SS
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export default AudioPlayer;
