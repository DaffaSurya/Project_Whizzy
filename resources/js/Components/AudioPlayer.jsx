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
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Now Playing */}
        <div className="flex items-center space-x-4">
          <img src={cover} alt="Album cover" className="w-14 h-14 rounded" />
          <div>
            <h4 className="text-sm font-semibold">{judul_karya}</h4>
            <p className="text-xs text-gray-400">{penyunting}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col w-96 items-center">
          <div className="flex items-center space-x-6">
            <Link href={prevChapter} className="text-gray-400 hover:text-white">
              <SkipBack className="w-5 h-5" />
            </Link>
            <button
              className="bg-white text-black rounded-full p-2 hover:scale-105 transition"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5" fill="currentColor" />
              )}
            </button>
            <Link href={nextChapter} className="text-gray-400 hover:text-white">
              <SkipForward className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-full max-w-md mt-2">
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
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2">
          <Volume2 className="w-5 h-5" />
          <div className="w-24">
            <div className="bg-gray-500 h-1 rounded-full">
              <div className="bg-white w-2/3 h-1 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Audio and Video Elements */}
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
};

export default AudioPlayer;
