import React, { useEffect, useRef, useState } from "react";
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Pause } from "lucide-react";
import { Link } from "@inertiajs/react";

const AudioPlayer = ({ cover, judul_karya, penyunting, audioFile, videoRef, nextChapter, prevChapter }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause both audio and video
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (videoRef && videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      // Play both audio and video
      if (audioRef.current) {
        audioRef.current.play();
      }
      if (videoRef && videoRef.current) {
        videoRef.current.play();
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", updateProgress);
      }

      // if (audioRef.current) {
      //   if (isPlaying) {
      //     audioRef.current.play();
      //     setIsPlaying(true); // Notify the parent that audio is playing
      //   } else {
      //     audioRef.current.pause();
      //     setIsPlaying(false); // Notify the parent that audio is paused
      //   }
      // }
    };

  }, [isPlaying, setIsPlaying]);

  const handleSeek = (e) => {
    const newTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
    audioRef.current.currentTime = newTime;
    if (videoRef?.current) videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 text-white p-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 items-center">
        {/* Now Playing */}
        <div className="flex items-center space-x-4 col-span-2 lg:col-span-1 md:col-span-1">
          <img src={cover} alt="Album cover" className="lg:w-14 lg:h-14 md:w-14 md:h-14 w-0 rounded" />
          <div>
            <h4 className="text-sm font-semibold">{judul_karya}</h4>
            <p className="text-xs text-gray-400">{penyunting}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-6">
            <Link href={prevChapter} className="text-gray-400 hover:text-white">
              <SkipBack className="w-5 h-5" />
            </Link>
            <button
              className="text-white rounded-full p-2 hover:scale-105 transition"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-yellow-400" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5 " fill="currentColor" />
              )}
            </button>
            <Link href={nextChapter} className="text-gray-400 hover:text-white">
              <SkipForward className="w-5 h-5" />
            </Link>
          </div>

          {/* progress bar desktop & tablet */}
          <div className="w-full max-w-md mt-2 invisible lg:visible md:visible">
            <div className="flex items-center ">
              <span className="text-xs text-gray-400 w-10">
                {formatTime(currentTime)}
              </span>
              <div
                className="flex-grow mx-2 relative group"
                onClick={handleSeek}
              >
                <div className="bg-gray-500 h-1 rounded-full">
                  <div
                    className="bg-white h-1 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-xs text-gray-400 w-10">
                {duration ? formatTime(duration - currentTime) : "0:00"}
              </span>
            </div>
          </div>
        </div>

        {/* Volume Control */}
        <div className="hidden md:flex items-center space-x-2 justify-end">
          <Volume2 className="w-5 h-5" />
          <div className="w-24">
            <div className="bg-gray-500 h-1 rounded-full">
              <div className="bg-white w-2/3 h-1 rounded-full"></div>
            </div>
          </div>
        </div>



      </div>

      {/* progress bar mobile */}
      <div className="w-full mt-2 lg:hidden md:hidden sm:visible">
        <div className="flex items-center">
          <span className="text-xs text-gray-400 w-10">
            {formatTime(currentTime)}
          </span>
          <div
            className="flex-grow mx-2 relative group"
            onClick={handleSeek}
          >
            <div className="bg-gray-500 h-1 rounded-full">
              <div
                className="bg-white h-1 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <span className="text-xs text-gray-400 w-10">
            {duration ? formatTime(duration - currentTime) : "0:00"}
          </span>
        </div>
      </div>

      {/* Hidden Audio and Video Elements */}
      <audio ref={audioRef} src={audioFile} />
    </div>

  );
};

export default AudioPlayer;
