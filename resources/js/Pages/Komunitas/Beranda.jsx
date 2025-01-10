import { Link } from "react-router-dom";
import DefaultLayout from "../../Layout/DefautLayout";
import FloatingButton from "../../Components/FloatingButton";

function Beranda() {

    const KomunitasContent = [
        { username: 'zinx', content: 'Eh sumpah naratornya keren bangett, jadi seakan ikut hidup di ceritanya' },
        { username: 'mekYorMuv', content: 'Seru, tapi bingung ini maksudnya apa sih?', attachment: 'https://placehold.co/200' },
        { username: 'ahmad', content: 'Ini puisi lucu bangett, naratornya juga santai dan enak pas dengerinnya!' },
        { username: 'garden_oil', content: 'Novel yang bagus, tapi susah, tapi seru. Baru setengahnya sih, hihihihi' },
    ];


    return (
        <DefaultLayout>
            {/* Header */}
            <div className="flex flex-row justify-center lg:pt-0 md:pt-8 sm:pt-8">
                <div role="tablist" className="tabs tabs-lg tabs-bordered w-full justify-center ">
                    {/* Beranda */}
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab px-16 md:px-32 lg:px-52"
                        aria-label="Beranda"
                        defaultChecked />
                    <div role="tabpanel" className="tab-content p-4">
                        {/* card */}
                        {KomunitasContent.map((item, index) => (
                            <a key={index} className="card mb-8 border-b-2 border-gray-700 rounded-none">
                                {/* Profile section */}
                                <div className="flex items-center space-x-4">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src="https://placehold.co/400"
                                        alt="Profile"
                                    />
                                    <div>
                                        <h2 className="font-bold ">{item.username}</h2>
                                        <p className="text-sm ">@{item.username}</p>
                                    </div>
                                </div>
                                {/* Tweet content */}
                                <p className="mt-4 mb-4">
                                    {item.content}
                                </p>
                                {item.attachment && (
                                    <img
                                        src={item.attachment}
                                        alt={item.attachment}
                                        className="h-16 w-16 min-w-[256px] min-h-[128px] object-cover rounded-md mb-3"
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                    {/* End Beranda */}

                    {/* Jelajah */}
                    <input type="radio" name="my_tabs_1" role="tab" className="tab px-16 md:px-32 lg:px-52" aria-label="Jelajah" />
                    <div role="tabpanel" className="tab-content p-4">
                        {/* card */}

                        <a className="card mb-8 border-b-2 border-gray-700 rounded-none">
                            {/* Profile section */}
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="https://placehold.co/400"
                                    alt="Profile"
                                />
                                <div>
                                    <h2 className="font-bold ">daffaSurya</h2>
                                    <p className="text-sm ">@daffaSurya</p>
                                </div>
                            </div>
                            {/* Tweet content */}
                            <p className="mt-4 mb-4">
                                anjay kerenn
                            </p>
                        </a>

                    </div>
                    {/* End Jelajah */}

                    {/* Button */}
                    <FloatingButton />

                </div>
            </div>

        </DefaultLayout>
    )
}

export default Beranda;