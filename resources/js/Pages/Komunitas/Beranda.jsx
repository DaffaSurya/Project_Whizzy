
import DefaultLayout from "../../Layout/DefautLayout";
import FloatingButton from "../../Components/FloatingButton";
import Garitan from "../../assets/Garitan Filantropi.jpg";
import { useEffect, useRef, useState } from "react";
import { BookAudio, Heart, MessageCircle, Music, Play, Settings, Star, User } from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";
import Axios from "axios";


function Beranda({ komunitas: initialKomunitas }) {

    console.log(initialKomunitas);

    const currentUser = usePage().props.auth.user;

    const [komunitas, setKomunitas] = useState(initialKomunitas.data);
    const [nextPage, setNextPage] = useState(initialKomunitas.next_page_url);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

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

    const loadMoreKomunitas = (direction) => {
        if (loading) return;

        setLoading(true);
        let url = direction === "next" ? nextPage : prevPage;
        if (!url) return setLoading(false);

        router.visit(url, {
            method: "get",
            preserveScroll: true,
            preserveState: true,
            only: ["komunitas"],
            onSuccess: (page) => {
                console.log(`✅ Data received (${direction}):`, page.props.komunitas);

                if (direction === "next") {
                    setKomunitas((prev) => [...prev, ...page.props.komunitas.data]);
                    setNextPage(page.props.komunitas.next_page_url);
                } else {
                    setKomunitas((prev) => [...page.props.komunitas.data, ...prev]);
                    setPrevPage(page.props.komunitas.prev_page_url);
                }
            },
            onFinish: () => setLoading(false),
        });
    };

    // Detect scrolling up (load previous page)
    const firstElementRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && prevPage) {
                loadMoreKomunitas("prev");
            }
        });

        if (node) observer.current.observe(node);
    };

    // Detect scrolling down (load next page)
    const lastElementRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && nextPage) {
                loadMoreKomunitas("next");
            }
        });

        if (node) observer.current.observe(node);
    };



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
                    <Link href="/komunitas/all" className="flex-1 px-4 py-3 text-center border-b-2 border-yellow-400">
                        <span className="font-bold text-yellow-400">Komunitas</span>
                    </Link>
                    <Link href="/Komunitas/forum" className="flex-1 px-4 py-3 text-center text-gray-500 hover:text-yellow-400">
                        <span>Forum</span>
                    </Link>
                </div>
            </header>

            {komunitas.length === 0 ? (
                <p className="text-gray-500 mt-10">belum ada postingan</p>
            ) : (
                komunitas.map((item, index) => (

                    <Link
                        href={`/komunitas/show/${item.id}`}
                        key={item.id}
                        ref={index === komunitas.length - 1 ? lastElementRef : null}
                        className="group block space-y-4 p-5 transition-colors border-b-2 border-gray-800 hover:bg-zinc-950/50"
                    >
                        <div className="flex items-start gap-4">
                            <img
                                src={item.user.profile_pict || "https://placehold.co/400"}
                                className="h-10 w-10 rounded-full object-cover ring-2 ring-zinc-800/50"
                                alt=""
                            />

                            <div className="flex-1 space-y-1">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                                    <span className="font-medium">{item.user.fullname}</span>
                                    <span className="text-sm text-zinc-500">
                                        @{item.user.username} · {timeAgo(item.created_at)}
                                    </span>
                                </div>

                                {item.chapter && (
                                    <div className="flex items-center lg:gap-2 gap-1 text-sm rounded-xl py-1 w-fit">
                                        <BookAudio className="lg:text-sm text-xs" size={20} />
                                        <Link href={`/karya/${item.chapter.karya.slug}/${item.chapter.karya.id}`} className="lg:text-sm text-xs underline hover:underline hover:text-yellow-400 active:text-yellow-400">{item.chapter.karya.judul_karya}</Link>
                                        <Link className="text-white lg:text-sm text-xs">-</Link>
                                        <span className="font-medium lg:text-sm text-xs">{item.chapter.judul_chapter}</span>
                                    </div>
                                )}

                                <p className="whitespace-pre-line text-zinc-300 py-3">{item.content}</p>

                                {item.attachment && (
                                    <img
                                        src={item.attachment || "/placeholder.svg"}
                                        alt=""
                                        className="rounded-xl object-cover max-w-[256px] w-full"
                                    />
                                )}

                                <div className="flex gap-6 pt-2">
                                    <button
                                        onClick={handleLike}
                                        className={`group flex items-center gap-2 transition-colors ${isLiked ? "text-pink-500" : "text-zinc-500 hover:text-pink-500"
                                            }`}
                                    >
                                        <Heart
                                            className="h-4 w-4 transition-transform group-hover:scale-110"
                                            fill={isLiked ? "currentColor" : "none"}
                                            stroke="currentColor"
                                        />
                                        <span className="text-sm">{item.likes_count}</span>
                                    </button>

                                    <div className="flex items-center gap-2 text-zinc-500">
                                        <MessageCircle className="h-4 w-4" />
                                        <span className="text-sm">{item.comment_count}</span>
                                    </div>
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