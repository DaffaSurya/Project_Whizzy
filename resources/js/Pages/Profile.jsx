import DefaultLayout from "../Layout/DefautLayout";
import "../Style/Profile.css";
import { NavLink } from "react-router-dom";
const Profile = () => {
    return (
        <DefaultLayout>

            {/* card profile for mobile */}
            <div className="div-profile">
                {/* profile-background for mobile */}
                <div className="card-profile-mobile">
                    <img
                        src="https://wallpapercat.com/w/full/7/0/2/1290-3840x2160-desktop-4k-among-us-background.jpg"
                        className="img-background-profile"
                    />
                    <div className="div-container-dataprofile">
                        <div className="div-profile-picture">
                            <img
                                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="img-profile"
                            />
                        </div>

                        <div className="data-profile">
                            <p className="p-data-profile">@Karevlaneis</p>
                            <p className="p-data-sinceJoin">
                                Since 2020 Join
                            </p>
                        </div>
                    </div>
                </div>
                {/* profile-background for mobile */}
            </div>
            {/* card profile for mobile */}

            {/* card profile for desktop */}
            <div className="div-profile-desktop">
                <p className="p-Profile-font-desktop">Profile</p>

                <div className="card-profile-desktop">
                    <img
                        src="https://wallpapercat.com/w/full/7/0/2/1290-3840x2160-desktop-4k-among-us-background.jpg"
                        className="img-background-desktop-profile"
                    />

                    <div className="div-container-dataprofile-desktop">
                        <div className="div-pictureprofile-desktop">
                            <img
                                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="img-profile-desktop"
                            />
                        </div>

                        <div className="data-profile-desktop">
                            <div className="div-container-data-profile-desktop">
                                <p className="p-dataprofile-desktop">@Karevlaneis</p>
                                <p className="p-sincejoin">Since 2020 Join</p>
                            </div>

                            <button className="button-editprofile-desktop">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* card profile for desktop end */}

            {/* unggahan user for mobile */}
            <div className="div-tweet-useraccount">
                <div className="div-tweet">
                    <article className="border border-white-300 bg-gray-800 p-4 ">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="size-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-medium text-white">
                                    @Karevlaneis
                                </h3>
                            </div>
                        </div>

                        <ul className="mt-2 space-y-2">
                            <p className="p-tweet-user">
                                Punya mimpi tak akan pernah mudah. Habibie
                                dan Ainun tahu itu. Cinta mereka terbangun
                                dalam perjalanan mewujudkan mimpi. Dinginnya
                                salju Jerman, pengorbanan, rasa sakit,
                                kesendirian serta godaan harta dan kuasa
                                saat mereka kembali ke Indonesia mengiringi
                                perjalanan dua hidup menjadi satu.
                            </p>
                        </ul>
                    </article>
                </div>

                <div className="div-tweet">
                    <article className="border border-white-300 bg-gray-800 p-4 ">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="size-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-medium text-white">
                                    @Karevlaneis
                                </h3>
                                <div className="flow-root"></div>
                            </div>
                        </div>

                        <ul className="mt-2 space-y-2">
                            <p className="p-tweet-user">
                                Punya mimpi tak akan pernah mudah. Habibie
                                dan Ainun tahu itu. Cinta mereka terbangun
                                dalam perjalanan mewujudkan mimpi. Dinginnya
                                salju Jerman, pengorbanan, rasa sakit,
                                kesendirian serta godaan harta dan kuasa
                                saat mereka kembali ke Indonesia mengiringi
                                perjalanan dua hidup menjadi satu.
                            </p>
                        </ul>

                        <img src="https://www.cultura.id/wp-content/uploads/2019/08/bumi_manusia.jpg" className="img-unggahan-mobile" />
                    </article>
                </div>
            </div>
            {/* unggahan user for mobile*/}

            {/* unggahan user for desktop */}
            <div className="div-unggahan-desktop">
                <div className="div-tweet-desktop">
                    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 ">
                        <div className="flex items-center gap-4 ">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="size-16 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-medium text-white">@Karevlaneis</h3>
                            </div>
                        </div>

                        <div className="div-title-unggahan-desktop">
                            <p>Bumi Manusia - Pramodya Ananta toer </p>
                        </div>

                        <ul className="mt-4 space-y-2 text-white">
                            Punya mimpi tak akan pernah mudah. Habibie dan Ainun tahu itu. Cinta mereka terbangun dalam perjalanan mewujudkan mimpi. Dinginnya salju Jerman, pengorbanan, rasa sakit, kesendirian serta godaan harta dan kuasa saat mereka kembali ke Indonesia mengiringi perjalanan dua hidup menjadi satu.
                        </ul>
                    </article>
                </div>

                <div className="div-tweet-desktop">
                    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="size-16 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-medium text-white">@Karevlaneis</h3>
                            </div>
                        </div>

                        <div className="div-title-unggahan-desktop">
                            <p>Bumi Manusia - Pramodya Ananta toer </p>
                        </div>

                        <ul className="mt-4 space-y-2 text-white">
                            Kalau kemanusiaan tersinggung, semua orang yang berperasaan dan berpikiran waras ikut tersinggung, kecuali orang gila dan orang yang berjiwa kriminal, biarpun dia sarjana.
                        </ul>

                        <img src="https://th.bing.com/th/id/OIP.aQe_irQ8w79h04Y_xSyDWwHaEA?rs=1&pid=ImgDetMain" className="img-unggahan-desktop" />
                    </article>
                </div>
            </div>

            {/* unggahan user for desktop */}


        </DefaultLayout>

    );
};

export default Profile;
