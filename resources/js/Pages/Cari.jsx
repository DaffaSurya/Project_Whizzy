import { Link } from "react-router-dom";
import DefaultLayout from "../Layout/DefautLayout";
import { Home, Search } from "lucide-react";

function Cari() {
    return (
        <DefaultLayout>
            {/* Search bar */}
            <div className="flex justify-center items-center gap-4 pt-8 lg:px-2 lg:pt-0">
                {/* Home Button */}
                <a href="/">
                    <div className="p-4 bg-[#333333] rounded-full shadow-lg hover:scale-105 transition-transform">
                        <Home className="text-white w-6 h-6" />
                    </div>
                </a>

                {/* Search Bar */}
                <div className="flex items-center gap-3 w-full max-w-xl p-2 bg-[#333333] rounded-full shadow-lg">
                    <Search className="text-gray-400 w-6 h-6" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors">
                        Go
                    </button>
                </div>
            </div>

            {/* Grid Section */}
            <div className="flex-1 px-2 py-4 mt-5">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Cards */}
                    {[...Array(12)].map((_, index) => (
                        <div
                            key={index}
                            className="group relative p-4 bg-[#333333] rounded-lg shadow-lg hover:scale-105 transition-transform"
                        >
                            <div className="text-white font-bold text-xl">
                                Category {index + 1}
                            </div>
                            <p className="text-gray-200 text-sm mt-1 group-hover:text-gray-50 transition-colors">
                                Explore this category.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </DefaultLayout>



    )
}

export default Cari;