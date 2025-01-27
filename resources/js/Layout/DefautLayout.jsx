import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import AudioPlayer from "../Components/AudioPlayer";

const DefaultLayout = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <main className="lg:pl-64 pb-16 lg:pb-0 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        {/* Conditionally render the AudioPlayer
        {setIsPlaying && (
          <AudioPlayer
            cover="/path/to/cover.jpg"
            judul_karya="Song Title"
            penyunting="Artist Name"
            audioFile="/path/to/audio/file.mp3"
            nextChapter="/next-chapter"
            prevChapter="/prev-chapter"
          />
        )} */}
      </main>

    </div>
  );
};

export default DefaultLayout;
