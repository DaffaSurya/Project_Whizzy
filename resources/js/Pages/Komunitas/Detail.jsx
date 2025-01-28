import React, { useState } from "react";
import DefaultLayout from "../../Layout/DefautLayout";
import { ArrowLeft, MoreHorizontal, MessageCircle, Repeat2, Heart, Share, Bookmark } from 'lucide-react';
import { usePage } from "@inertiajs/react";
import Axios from "axios";


function Detail({ detail }) {


    // get current user
    const currentUser = usePage().props.auth.user;
    const parent_id = detail.id;

    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    console.log(detail);

    // add comments function
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        const data = {
            parent_id: parent_id, // Corrected syntax
            content: e.target.content.value
        };

        try {
            const response = await Axios.post(`/komunitas/store/${currentUser.id}`, data);

            console.log('Comment submitted successfully:');

            // Optionally reset the form
            setContent('');

            // setToastVisible(true);
            // setToastMessage("Comment submitted successfully.");

            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            if (error.response) {
                console.log("Error data:", error.response.data);
                console.log("Error status:", error.response.status);
                console.log("Error headers:", error.response.headers);
            } else {
                console.error('Error submitting comment:', error.message);
            }
        } 
    };




    return (
        <>
            <DefaultLayout>
                {/* Header */}
                <header className="mx-8 sticky top-0 backdrop-blur-md bg-black/70 border-b border-gray-800">
                    <div className="flex items-center px-4 py-3 space-x-6">
                        <ArrowLeft className="w-5 h-5" />
                        <h1 className="text-xl font-bold">Post</h1>
                    </div>
                </header>

                {/* Main Content */}
                <main className="px-8">
                    {/* Tweet Content */}
                    <article className="p-4 border-b border-gray-800">
                        {/* Tweet Header */}
                        <div className="flex items-start justify-between">
                            <div className="flex space-x-3">
                                <div className="w-12 h-12 rounded-full bg-gray-700" />
                                <div>
                                    <div className="flex flex-col">
                                        <span className="font-bold hover:underline">{detail.user.username}</span>
                                        <span className="text-gray-500">@{detail.user.username}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Tweet Text */}
                        <div className="mt-4 text-xl">
                            <p className="mb-5" style={{ whiteSpace: 'pre-wrap' }}>{detail.content}</p>
                            <img src={detail.attachment} alt="" className="rounded-xl max-w-72" />
                        </div>

                        {/* Tweet Timestamp */}
                        <div className="mt-4 flex space-x-1 text-gray-500 text-sm">
                            <span>{detail.created_at}</span>
                        </div>



                        {/* Interaction Buttons */}
                        <div className="flex justify-start gap-10 mt-4 pt-4 border-t border-gray-800">

                            <button className="flex items-center gap-3 hover:text-pink-500">
                                <Heart className="w-5 h-5" />
                                <div className="flex space-x-1">
                                    <span className="font-bold">2,048</span>
                                    <span className="text-gray-500">Likes</span>
                                </div>
                            </button>

                            <button className="hover:text-blue-500">
                                <Share className="w-5 h-5" />
                            </button>
                        </div>
                    </article>

                    {/* Reply Input */}
                    <form onSubmit={handleSubmit}>
                        <div className="p-4 flex space-x-3 border-b border-gray-800">
                            <div className="w-10 h-10 rounded-full bg-gray-700" />
                            <div className="flex flex-row justify-between w-full">
                                <textarea
                                    type="text"
                                    rows={5}
                                    name="content"
                                    placeholder="Post your reply!"
                                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                                />
                                <button type="submit" disabled={isSubmitting} className="btn btn-outline btn-sm text-white hover:bg-yellow-400">{isSubmitting ? 'Submitting...' : 'Submit Comment'}</button>
                            </div>
                        </div>
                    </form>

                    {/* Sample Reply */}
                    {detail.comments.length > 0 ? (
                        detail.comments.map((komentar) => (
                            <div
                                key={komentar.id}
                                className="p-4 flex space-x-3 border-b border-gray-800"
                            >
                                {/* User avatar */}
                                <div className="w-10 h-10 rounded-full bg-gray-700" />

                                {/* Comment details */}
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-bold">
                                            {komentar.user.username}
                                        </span>
                                        <span className="text-gray-500">
                                            @{komentar.user.username.toLowerCase()}
                                        </span>
                                        {komentar.created_at && (
                                            <span className="text-gray-500">
                                                ·{" "}
                                                {new Date(komentar.created_at).toLocaleTimeString(
                                                    "en-US",
                                                    { hour: "2-digit", minute: "2-digit" }
                                                )}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-1" style={{ whiteSpace: 'pre-wrap' }}>{komentar.content}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-12   ">No comments yet.</p>
                    )}
                </main>
            </DefaultLayout>
        </>
    )
}

export default Detail;