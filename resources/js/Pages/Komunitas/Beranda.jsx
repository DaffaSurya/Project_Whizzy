
import DefaultLayout from "../../Layout/DefautLayout";
import FloatingButton from "../../Components/FloatingButton";
import Garitan from "../../assets/Garitan Filantropi.jpg";
import { useState } from "react";
import { Settings, Star, User } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";


function Beranda({ komunitas }) {

    const currentUser = usePage().props.auth.user;
    console.log(komunitas)

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

            {komunitas.data.map((item) => (
                <Link href={`/komunitas/show/${item.id}`} key={item.id} className="flex space-x-3 rounded-xl p-6 hover:bg-zinc-950">
                    <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-2">
                            <span className="font-bold">{item.display_name}</span>
                            <span className="text-gray-500">@{item.user.username} · {item.created_at}</span>
                        </div>
                        <p className="mt-1">{item.content}</p>
                        <img src={item.attachment} alt="attachment" className="object-fit max-w-72 rounded-xl" />
                        <div className="flex justify-between mt-3 text-gray-500">
                            <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4" />
                                <span>{item.likes_count}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <FloatingButton currentUserid={currentUser ? currentUser.id : null} />

        </DefaultLayout>
    )
}

export default Beranda;