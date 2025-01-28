import React, { useRef, useState } from "react";
import AudioPlayer from "../../Components/AudioPlayer";
import { Save } from "lucide-react";
import { usePage } from "@inertiajs/react";
import Axios from "axios";
import Pagination from "../../Components/Pagination";

const Play = ({ chapter, nextChapter, prevChapter }) => {
  
  const [comments, setComments] = useState(chapter.komentar); 

  // get current logged users
  const currentUser = usePage().props.auth.user;

  // loading
  const [loading, setLoading] = useState(false);

  // toast
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // video ref
  const videoRef = useRef(null);

  async function newKomen(e) {
    e.preventDefault();

    setLoading(true);

    // Gather form data
    const data = new FormData();
    data.append('komentar', e.target.komentar.value);

    try {

      // Make the POST request with form data
      Axios.post(`/komentar/store/${currentUser.id}/${chapter.id}`, data);
      setComments(prevComments => [...prevComments, data]);
      setLoading(false);

    } catch (error) {
      setLoading(false)
      console.error("Error during Axios request:", error);
      if (error.response) {
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
      }
    }
  }

  return (
    <div className="min-h-96 bg-black py-12 px-4 sm:px-6 lg:px-8 lg:pb-64">
      <div className="max-w-4xl mx-auto space-y-8">
        <a href={`/karya/${chapter.karya.slug}/${chapter.karya.id}`}>Back</a>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-video">
            <video
              className="w-full h-full object-contain rounded-md"
              ref={videoRef}
              controls={false}
              loop={true}
              muted={true}
            >
              <source src={chapter.ilustrasi_karya} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-5">
            <h1 className="text-3xl font-bold text-white">{chapter.judul_chapter}</h1>
            <p className="text-gray-300 font-light">{chapter.karya.judul_karya}</p>
          </div>
        </div>

        {/* commets */}
        <h1 className="text-2xl font-bold text-white">Comments (29)</h1>

        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-0 mx-auto">
          <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">

              <form onSubmit={newKomen} className="w-full">
                <textarea name="komentar" className="textarea textarea-bordered  w-full bg-black" rows={6} placeholder="Silahkan"></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-3 me-2 btn btn-sm bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400"
                >
                  <Save size={20} /> {loading ? 'Saving...' : 'Submit'}
                </button>
              </form>


              <div className="w-full flex flex-col gap-5">
                {chapter.komentar.map((comment) => (
                  <div
                    key={comment.id}
                    className="w-full lg:p-8 p-5 bg-black rounded-3xl border border-gray-700 flex-col justify-start items-end gap-2.5 flex"
                  >
                    <div className="w-full flex-col justify-start items-end gap-3.5 flex">
                      <div className="w-full justify-between items-center inline-flex">
                        <div className="w-full justify-start items-center gap-2.5 flex">
                          <div className="w-10 h-10 bg-slate-400 rounded-full justify-start items-start gap-2.5 flex">
                            <img
                              className="w-10 h-10 rounded-full object-cover"
                              src={comment.user.avatar || 'https://via.placeholder.com/150'} // Replace with actual avatar or fallback image
                              alt={`${comment.user.name} image`}
                            />
                          </div>
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h5 className="text-white text-sm font-semibold leading-snug">{comment.user.username}</h5>
                            <h6 className="text-gray-500 text-xs font-normal leading-5">
                              {comment.created_at} {/* Format this date as needed */}
                            </h6>
                          </div>
                        </div>
                        <div className="group justify-end items-center flex">{/* empty space */}</div>
                      </div>

                      <p className="text-white w-full text-start text-sm font-normal">{comment.komentar}</p>

                      {/* <Pagination links={comment.link} total={comment.total}/> */}

                      {/* admin */}
                      {/* <div className="w-full justify-end items-start gap-6 inline-flex">
                        <button
                          className="sm:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-gray-200 hover:border-transparent transition-all duration-700 ease-in-out border border-gray-200 justify-center items-center flex"
                          onClick={() => handleDelete(comment.id)}
                        >
                          <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">Delete</span>
                        </button>
                        <button
                          className="sm:w-fit w-full px-5 py-2.5 bg-green-600 hover:bg-green-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                          onClick={() => handleEdit(comment.id)}
                        >
                          <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">Edit</span>
                        </button>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>



        <AudioPlayer
          cover={chapter.karya.cover_karya}
          judul_karya={chapter.judul_chapter}
          penyunting={chapter.karya.penyunting}
          audioFile={chapter.audio_file}
          prevChapter={prevChapter?.id ? `/karya/${chapter.karya.slug}/${chapter.karya.id}/chapter/${prevChapter.id}` : "#"}
          nextChapter={nextChapter?.id ? `/karya/${chapter.karya.slug}/${chapter.karya.id}/chapter/${nextChapter.id}` : "#"}
          videoRef={videoRef}
        />
      </div>
    </div>
  );
};

export default Play;
