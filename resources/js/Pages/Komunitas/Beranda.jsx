
import DefaultLayout from "../../Layout/DefautLayout";
import FloatingButton from "../../Components/FloatingButton";
import Garitan from "../../assets/Garitan Filantropi.jpg";
import { useEffect, useState } from "react";
import { Heart, MessageCircle, Settings, Star, User } from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";
import Axios from "axios";


function Beranda({ komunitas }) {

    const currentUser = usePage().props.auth.user;

    const [isLiked, setIsLiked] = useState(komunitas.user_liked);
    const [likesCount, setLikesCount] = useState(komunitas.likes_count);

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


    const handleLike = async () => {
        try {
            if (isLiked) {
                router.get(`/dislike/${currentUser.id}/${komunitas.id}`, {}, {
                    onSuccess: () => {
                        setLikesCount((prev) => Math.max(0, prev - 1)); // Prevent negative values
                        setIsLiked(false);
                    },
                });
            } else {
                router.get(`/like/${currentUser.id}/${komunitas.id}`, {}, {
                    onSuccess: () => {
                        setLikesCount((prev) => prev + 1);
                        setIsLiked(true);
                    },
                });
            }
        } catch (error) {
            console.error("Error handling like/dislike:", error);
        }
    };

    useEffect(() => {
        // Fetch if user has liked the post
        Axios.get(`/check-like/${currentUser.id}/${komunitas.id}`).then((res) => {
            setIsLiked(res.data.liked);
        });
    }, [currentUser.id, komunitas.id]);

    return (
        <DefaultLayout>

            <header className="sticky top-0 backdrop-blur-md bg-black/70 border-b border-gray-800">
                {/* Tabs */}
                <div className="flex">
                    <div className="flex-1 px-4 py-3 text-center border-b-2 border-yellow-400">
                        <span className="font-bold">Komunitas</span>
                    </div>
                    <div className="flex-1 px-4 py-3 text-center text-gray-500">
                        <span>Forum</span>
                    </div>
                </div>
            </header>

            {komunitas.length === 0 ? (
                <p className="text-gray-500 mt-10">belum ada postingan</p>
            ) : (
                komunitas.data.map((item) => (
                    <Link href={`/komunitas/show/${item.id}`} key={item.id} className="flex space-x-3 rounded-xl p-6 hover:bg-zinc-950">
                        <img src={item.user.profile_pict || "https://placehold.co/400"} className="w-10 h-10 rounded-full object-cover" />
                        <div className="flex-1">
                            <div className="flex lg:gap-3 lg:flex-row md:flex-col flex-col items-start mb-2">
                                <span className="font-bold">{item.user.fullname}</span>
                                <span className="text-gray-500">@{item.user.username} · {timeAgo(item.created_at)}</span>
                            </div>
                            <p className="mt-1 whitespace-pre-line">{item.content}</p>
                            {item.attachment && (
                                <img
                                    src={item.attachment}
                                    alt="attachment"
                                    className="object-fit max-w-72 rounded-xl mt-3"
                                />
                            )}
                            <div className="flex justify-start mt-3 gap-5 text-gray-500">
                                <button
                                    onClick={handleLike}
                                    className={`flex items-center space-x-1 hover:text-pink-500 ${isLiked ? 'text-pink-500' : 'text-gray-500'}`}
                                >
                                    <Heart
                                        className="w-4 h-4"
                                        fill={isLiked ? "currentColor" : "none"}
                                        stroke="currentColor" // Ensure stroke is visible
                                    />
                                    <span>{item.likes_count}</span>
                                </button>

                                <div className="flex items-center space-x-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{item.comment_count}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            )}


            <FloatingButton currentUserid={currentUser ? currentUser.id : null} />

        </DefaultLayout>
    )
}

export default Beranda;