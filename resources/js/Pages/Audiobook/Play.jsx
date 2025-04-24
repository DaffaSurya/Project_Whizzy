import React, { useRef, useState } from "react";
import AudioPlayer from "../../Components/AudioPlayer";
import { ArrowLeft, Save, Trash2 } from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";
import Axios from "axios";
import Pagination from "../../Components/Pagination";
import Toast from "../../Components/Toast";
import whizzy_logo from "../../../../public/logo.png";

const Play = ({ chapter, nextChapter, prevChapter }) => {

  const [comments, setComments] = useState(chapter.komentar);

  // get current logged users
  const currentUser = usePage().props.auth.user;
  console.log(chapter.komentar)

  // loading
  const [loading, setLoading] = useState(false);

  // toast
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // video ref
  const videoRef = useRef(null);

  function timeAgo(createdAt) {
    const seconds = Math.round((new Date() - new Date(createdAt)) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' });

    if (seconds < 60) return rtf.format(-seconds, 'second'); // 'detik' in Indonesian locale
    if (minutes < 60) return rtf.format(-minutes, 'minute'); // 'menit'
    if (hours < 24) return rtf.format(-hours, 'hour'); // 'jam'
    return rtf.format(-days, 'day'); // 'hari'
  }

  async function newKomen(e) {
    e.preventDefault();

    setLoading(true);

    const komentar = e.target.komentar.value;
    const data = new FormData();
    data.append("komentar", komentar);

    try {
      const response = await Axios.post(
        `/komentar/store/${currentUser.id}/${chapter.id}`,
        data
      );

      // Update comments list with the new comment
      setComments((prevComments) => [...prevComments, response.data]);

      e.target.reset();

      router.reload();
    } catch (error) {
      setLoading(false);
      console.error("Error during Axios request:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteChapterComments(id) {
    setLoading(true);

    try {
      const response = await Axios.delete(`/admin/karya/comments/delete/${id}`);

      setComments((prevComments) => prevComments.filter((c) => c.id !== id));

      setToastMessage("Comment deleted successfully");
      setToastVisible(true);
      window.location.reload();
    } catch (error) {
      console.error("Delete failed:", error);
      setToastMessage("Failed to delete comment");
      setToastVisible(true);
    } finally {
      setLoading(false);
    }
  }



  return (
    <div className="min-h-96 bg-black py-12 px-5 sm:px-6 lg:px-8 lg:pb-64">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href={`/karya/${chapter.karya.slug}/${chapter.karya.id}`}>
          <ArrowLeft size={20} />
        </Link>

        <Toast show={toastVisible} message={toastMessage} />

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-video">
            {chapter.ilustrasi_karya ? (
              <video className="w-full h-full object-contain rounded-md" ref={videoRef} controls={false} loop muted>
                <source src={chapter.ilustrasi_karya} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={whizzy_logo} alt="" className="w-full h-full object-contain rounded-md" />
            )}
          </div>

          <div className="mt-5">
            <h1 className="text-3xl font-bold text-white">{chapter.judul_chapter}</h1>
            <p className="text-gray-300 font-light">{chapter.karya.judul_karya}</p>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white">Comments ({comments.length})</h1>

        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-0 mx-auto">
          <div className="w-full flex-col justify-start items-start gap-7 lg:gap-14 inline-flex">
            <form onSubmit={newKomen} className="w-full">
              <textarea name="komentar" className="textarea textarea-bordered text-white w-full bg-black" rows={3} placeholder="Silahkan"></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`mt-3 me-2 btn btn-sm text-black focus:ring-2 ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-400"}`}
              >
                <Save size={20} /> {loading ? "Saving..." : "Submit"}
              </button>
            </form>

            <div className="w-full flex flex-col gap-5">
              {chapter.komentar.map((comment) => (
                <div key={comment.id} className="w-full p-5 lg:p-8 bg-black rounded-3xl border border-gray-700 flex flex-col gap-2.5">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <img className="w-10 h-10 rounded-full object-cover" src={comment.user.profile_pict || 'https://placehold.co/400'} alt={`${comment.user.name} image`} />
                      <div className="flex flex-col">
                        <h5 className="text-white text-sm font-semibold">{comment.user.username}</h5>
                        <h6 className="text-gray-500 text-xs">{timeAgo(comment.created_at)}</h6>
                      </div>
                    </div>
                    {currentUser.id === comment.user_id && (
                      <button
                        onClick={() => deleteChapterComments(comment.id)}
                        className={`group hover:text-red-500 ${loading ? "text-gray-800 cursor-not-allowed" : ""}`}
                        disabled={loading}
                      >
                        <Trash2 />
                      </button>

                    )}
                  </div>
                  <p className="text-white text-sm">{comment.komentar} - {comment.id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AudioPlayer
          cover={chapter.karya.cover_karya || whizzy_logo}
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
