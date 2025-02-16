import { CalendarIcon, Camera, LinkIcon, MapPinIcon, Plus, Trash2 } from "lucide-react"
import DefaultLayout from '../Layout/DefautLayout'
import { Link, router, useForm, usePage } from "@inertiajs/react"
import { useState } from "react";
import Axios from "axios";
import FloatingButton from "../Components/FloatingButton";

const Profile = ({ user, post }) => {

    const { data, setData } = useForm({
        username: user.username || "",
        fullname: user.fullname || "",
        email: user.email || "",
        bio: user.bio || "",
        profile_pict: null,
        cover_pict: null,
    });

    const currentUser = usePage().props.auth.user;
    const [profilePreview, setProfilePreview] = useState(user.profile_pict || null);
    const [coverPreview, setCoverPreview] = useState(user.cover_pict || null);
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});

    const [likesCount, setLikesCount] = useState(post.likes_count); // Initialize likes count
    const [isLiked, setIsLiked] = useState(post.is_liked || false); // Track if the user has liked the post

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData(e.target.name, file);
            if (e.target.name === "profile_pict") setProfilePreview(URL.createObjectURL(file));
            if (e.target.name === "cover_pict") setCoverPreview(URL.createObjectURL(file));
        }
    };

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

    const handleLike = async (postId) => {
        try {
            if (isLiked) {
                await Axios.post(`/dislike/${currentUser.id}/${postId}`);
                setLikesCount((prev) => prev - 1);
                setIsLiked(false);
            } else {
                await Axios.post(`/like/${currentUser.id}/${postId}`);
                setLikesCount((prev) => prev + 1);
                setIsLiked(true);
            }
        } catch (error) {
            console.error('Error handling like/dislike:', error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setProcessing(true);

        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("fullname", data.fullname);
        formData.append("email", data.email);
        formData.append("bio", data.bio);
        if (data.profile_pict) formData.append("profile_pict", data.profile_pict);
        if (data.cover_pict) formData.append("cover_pict", data.cover_pict);

        try {
            const response = await Axios.post(`/profile/${currentUser.id}/${currentUser.username}/update`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            router.visit(`/profile/${currentUser.id}/adminuser`)
        } catch (error) {
            setProcessing(false);
            console.error("Error updating profile:", error);
            if (error.response) {
                if (error.response.status === 422) {
                    setErrors(error.response.data.errors);  // Validation errors
                } else {
                    setErrors({ general: "Something went wrong. Please try again." }); // Other server errors
                }
            } else {
                setErrors({ general: "Network error. Please check your connection." });
            }
        }
    };

    const deleteProfilePicture = async () => {
        try {
            await Axios.post(`/profile/${user.id}/${currentUser.username}/delete-profile-picture`);
            alert("Profile picture deleted successfully!");
        } catch (error) {
            console.error("Error deleting profile picture:", error);
        }
    };

    const deleteCoverPicture = async () => {
        try {
            await axios.post(`/profile/${user.id}/${currentUser.username}/delete-cover-picture`);
            alert("Cover picture deleted successfully!");
        } catch (error) {
            console.error("Error deleting cover picture:", error);
        }
    };


    return (
        <DefaultLayout>

            {/* Floating Button */}
            <FloatingButton currentUserid={currentUser ? currentUser.id : null} />

            <div className="bg-black text-white min-h-screen">
                {/* Header */}
                <header className="relative lg:pt-0 pt-6">
                    <img
                        src={user.cover_pict || "https://placehold.co/1200x200"}
                        alt="Profile header"
                        className="w-full h-48 object-cover rounded-xl"
                        lazy={true}
                    />
                    <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                        <img
                            src={
                                user.profile_pict ||
                                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                            }
                            alt="Profile picture"
                            className="w-32 h-32 object-cover rounded-full border-4 border-black"
                            lazy={true}
                        />
                    </div>
                </header>

                {/* Profile Info */}
                <div className="grid lg:grid-cols-12 mt-16 px-4">
                    <div className="info col-span-10 lg:order-first">
                        <h1 className="text-xl font-bold">{user.fullname}</h1>
                        <p className="text-gray-500">@{user.username}</p>
                        <p className="mt-2">{user.bio}</p>

                        <div className="flex flex-wrap gap-y-2 mt-2 text-gray-500">
                            <div className="flex items-center">
                                <CalendarIcon className="w-4 h-4 mr-1" />
                                <span>Bergabung di {new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                        </div>

                        {/* <div className="flex mt-4">
                            <div className="mr-4">
                                <span className="font-bold">1,234</span> <span className="text-gray-500">Following</span>
                            </div>
                            <div>
                                <span className="font-bold">5,678</span> <span className="text-gray-500">Followers</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex items-center lg:justify-end justify-start my-4 h-10 col-span-2">
                        {/* <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full">Edit profile</button> */}
                        <label htmlFor="editProfile" className="btn bg-yellow-400 text-black font-bold px-4 rounded-full hover:bg-yellow-500"><Plus size={18} /> Edit profile</label>

                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-800 mt-4">
                    <button className="flex-1 py-4 font-bold text-yellow-400 border-b-2 border-yellow-400">Postingan & Komentar</button>
                    {/* <button className="flex-1 py-4 text-gray-500">Yang Disukai</button> */}
                </div>

                {/* Tweet Feed */}
                <div className="px-4">

                    {post.length === 0 ? (
                        <p className="text-center mt-10 text-gray-500">Belum ada postingan</p>
                    ) : (
                        post.map((item) =>
                            <div key={item.id} className="py-4 border-b border-gray-800">
                                <Link href={`/komunitas/show/${item.id}`} className="flex">
                                    <img src={user.profile_pict || "https://placehold.co/400"} alt="User avatar" className="w-12 h-12 object-cover rounded-full mr-3" />
                                    <div className="w-full">

                                        {/* info */}
                                        <span className="text-gray-500 text-sm">
                                            {item.parent_id ? " membalas postingan" : " posted"}
                                        </span>

                                        <div className="flex lg:flex-row md:flex-col flex-col items-start lg:mb-2 md:mb-5 mb-5">
                                            <span className="font-bold mr-2">{user.fullname}</span>
                                            <span className="text-gray-500">{user.username} · {timeAgo(item.created_at)}</span>
                                        </div>
                                        <p className="mt-1 whitespace-pre-line">{item.content}</p>
                                        {item.attachment && (
                                            <img src={item.attachment} alt="attachment" className="mt-2 object-fit max-w-72 rounded-xl" />
                                        )}
                                        <div className="flex justify-between gap-5 mt-3 text-gray-500">
                                            <div className="flex gap-5">
                                                <button onClick={() => router.visit(`/like/${currentUser.id}/${item.id}`)} className="flex items-center hover:text-pink-500">
                                                    <svg
                                                        className="w-5 h-5 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                        ></path>
                                                    </svg>
                                                    {likesCount}
                                                </button>
                                                {/* <button className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 mr-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                                    ></path>
                                                </svg>
                                            </button> */}
                                                <button className="flex items-center">
                                                    <svg
                                                        className="w-5 h-5 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                        ></path>
                                                    </svg>
                                                    {item.comment_count}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="">
                                    <Link href={`/komunitas/delete/${item.id}`} className="text-gray-500 hover:text-red-500"><Trash2 size={20} /></Link>
                                </div>
                            </div>
                        )
                    )}

                    {/* More tweets would go here */}
                </div>
            </div>

            {/* Add category modal */}
            <input type="checkbox" id="editProfile" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-3xl bg-black border border-gray-600 rounded-lg">
                    <h3 className="text-2xl font-bold mb-6 text-white">Edit Profile</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Cover Photo */}
                        <div className="relative w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                            {coverPreview ? (
                                <img src={coverPreview || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <span className="text-gray-400">No Cover Photo</span>
                                    <span className="text-gray-500">max 2mb</span>
                                </div>
                            )}
                            <label className="absolute bottom-3 right-3 p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-600 cursor-pointer transition-colors duration-200">
                                <Camera size={20} />
                                <input type="file" name="cover_pict" className="hidden" onChange={handleFileChange} accept="image/*" />
                            </label>
                            {errors.cover_pict && <p className="text-red-600 text-xs mt-2">{errors.cover_pict[0]}</p>}
                        </div>
                        {/* Profile Picture */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center border-4 border-black -mt-16">
                                {profilePreview ? (
                                    <img src={profilePreview || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-400">No Profile Image (max 2mb)</span>
                                )}
                            </div>
                            <label className="absolute bottom-0 transform translate-y-1/2 p-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-600 cursor-pointer transition-colors duration-200">
                                <Camera size={20} />
                                <input type="file" name="profile_pict" className="hidden" onChange={handleFileChange} accept="image/*" />
                            </label>
                        </div>

                        {/* Delete Picture Links */}
                        <div className="flex justify-center gap-2 space-x-4 text-sm">
                            <Link
                                href={`/profile/${currentUser.id}/${currentUser.username}/delete-profile-picture`}
                                className="text-gray-500 hover:text-red-400 transition-colors duration-200"
                            >
                                Delete Profile Picture
                            </Link>
                            <Link
                                href={`/profile/${currentUser.id}/${currentUser.username}/delete-cover-picture`}
                                className="text-gray-500 hover:text-red-400 transition-colors duration-200"
                            >
                                Delete Cover Picture
                            </Link>
                        </div>

                        {/* errors */}
                        {errors.cover_pict && <p className="text-red-600 text-xs">{errors.cover_pict[0]}</p>}
                        {errors.profile_pict && <p className="text-red-600 text-xs">{errors.profile_pict[0]}</p>}
                        {errors.bio && <p className="text-red-600 text-xs">{errors.bio[0]}</p>}

                        {/* Input Fields */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={handleChange}
                                placeholder="Username"
                                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                            />
                            <input
                                type="text"
                                name="fullname"
                                value={data.fullname}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                            />
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                            />
                            <textarea
                                name="bio"
                                placeholder="Bio"
                                rows="4"
                                value={data.bio}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="btn btn-outline text-white hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                                disabled={processing}
                            >
                                {processing ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="editProfile">
                    Close
                </label>
            </div>

        </DefaultLayout>
    )
}

export default Profile

