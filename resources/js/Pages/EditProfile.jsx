import DefaultLayout from "../Layout/DefautLayout";
import "../Style/EditProfile.css";
const Audio = () => {
    return (
        <DefaultLayout>
            <div className="div-Editprofile">
                {/* Edit Profile for Mobile */}
                <div className="Edit-profile-mobile">
                    {/* button cancel Edit profile mobile */}
                    <div className="cancel-editprofile-mobile">
                        {/* button cancel edit profile */}
                        <a href="/profile">
                            <p className="p-editprofile-mobile">Cancel</p>
                            {/* button cancel edit profile mobile end */}
                        </a>
                        {/* profil and background change  */}
                        <div className="div-profilchange-mobile">
                            <div className="indicator">
                                <div className="indicator-item indicator-bottom badge badge-warning h-30 w-30 mr-2 mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#000000"
                                            d="M21 6h-3.2L16 4h-6v2h5.1L17 8h4v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 14c0 4.45 5.39 6.69 8.54 3.54S17.45 9 13 9c-2.76 0-5 2.24-5 5m5-3a3.09 3.09 0 0 1 3 3a3.09 3.09 0 0 1-3 3a3.09 3.09 0 0 1-3-3a3.09 3.09 0 0 1 3-3M5 6h3V4H5V1H3v3H0v2h3v3h2"
                                        />
                                    </svg>
                                </div>
                                <div className="avatar indicator">
                                    <div className="bg-base-300 grid h-20 w-20 place-items-center rounded-full">
                                        <img
                                            alt="Tailwind CSS examples"
                                            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* profil and background change end  */}
                        
                        {/* input edit profile for mobile */}
                        <div className="div-datauser-EditProfile">
                            <p>username</p>
                            <input
                                type="text"
                                placeholder="@Karevlaneis"
                                className="input-username"
                            />
                        </div>

                        <div className="div-datauser-EditProfile">
                            <p>Email</p>
                            <input
                                type="text"
                                placeholder="Kareva123@gmail.com"
                                className="input-username"
                            />
                        </div>

                        <div className="div-datauser-EditProfile">
                            <p>Password</p>
                            <input
                                type="password"
                                placeholder="12345"
                                className="input-username"
                                value="12345"
                            />
                        </div>

                        <div className="div-button-perubahan-mobile">
                            <button className="button-simpan-perubahan-mobile">
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                    {/* button cancel Edit profile mobile end */}

                    {/* input edit profile for mobile */}
                </div>
                {/* Edit Profile for Mobie end */}

                {/* Edit Profile for Tablet */}
                <div className="Edit-profile-tablet">
                    <div className="cancel-editprofile-tablet">
                        <a href="/profile" >
                        <p>Cancel</p>
                        </a>
                    </div>

                 
                <div className="div-editprofile-card-tablet">
                     <img src="https://wallpapercat.com/w/full/7/0/2/1290-3840x2160-desktop-4k-among-us-background.jpg" className="img-background-Editprofile-tablet"/>

                <div className="div-container-Editprofile-tablet">
                    <div className="indicator">
                                <div className="indicator-item indicator-bottom badge badge-warning h-30 w-30 mr-2 mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#000000"
                                            d="M21 6h-3.2L16 4h-6v2h5.1L17 8h4v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 14c0 4.45 5.39 6.69 8.54 3.54S17.45 9 13 9c-2.76 0-5 2.24-5 5m5-3a3.09 3.09 0 0 1 3 3a3.09 3.09 0 0 1-3 3a3.09 3.09 0 0 1-3-3a3.09 3.09 0 0 1 3-3M5 6h3V4H5V1H3v3H0v2h3v3h2"
                                        />
                                    </svg>
                                </div>
                                <div className="avatar indicator">
                                    <div className="bg-base-300 grid h-25 w-20 place-items-center rounded-full">
                                        <img
                                            alt="Tailwind CSS examples"
                                            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        />
                                    </div>
                                </div>
                            </div>
                </div>
                </div>

                   {/* input edit profile for tablet*/}
                        <div className="div-datauser-EditProfile-tablet">
                            <p>username</p>
                            <input
                                type="text"
                                placeholder="@Karevlaneis"
                                className="input-username-tablet"
                            />
                        </div>

                        <div className="div-datauser-EditProfile-tablet">
                            <p>Email</p>
                            <input
                                type="text"
                                placeholder="Kareva123@gmail.com"
                                className="input-username-tablet"
                            />
                        </div>

                        <div className="div-datauser-EditProfile-tablet">
                            <p>Password</p>
                            <input
                                type="password"
                                placeholder="12345"
                                className="input-username-tablet"
                                value="12345"
                            />
                        </div>

                        {/* button cancel edit profile tablet */}
                        <div className="div-button-perubahan-tablet">
                            <button className="button-simpan-perubahan-tablet">
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                    {/* button cancel Edit profile tablet end */}

                    {/* input edit profile for tablet */}
               
                {/* Edit Profile for Tablet end */}
            </div>

            {/* Edit profile for desktop */}
                <div className="">

                </div>
            {/* edit profile for desktop end */}
        </DefaultLayout>
    );
};

export default Audio;
