import { useState, useEffect, useCallback } from 'react';
import { Link, router } from '@inertiajs/react';
import { Home, Search } from 'lucide-react';
import debounce from 'lodash/debounce';
import DefaultLayout from '../Layout/DefautLayout'
import Axios from 'axios';
import whizzy_logo from "../../../public/logo.png"

const Cari = ({ initialResults = [], initialQuery = '' }) => {
    const [query, setQuery] = useState('');
    const [karyaResults, setKaryaResults] = useState([]);
    const [userResults, setUserResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Debounced API call
    const fetchResults = useCallback(
        debounce(async (searchQuery) => {
            if (!searchQuery) {
                setKaryaResults([]);
                setUserResults([]);
                return;
            }

            setLoading(true);
            try {
                const response = await Axios.get('/search', {
                    params: { query: searchQuery },
                });

                setKaryaResults(response.data.karya_results || []);
                setUserResults(response.data.user_results || []);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        }, 800),
        []
    );

    // Cleanup debounce on unmount or query change
    useEffect(() => {
        return () => {
            fetchResults.cancel();
        };
    }, [fetchResults]);

    // Trigger debounce on query change
    useEffect(() => {
        fetchResults(query);
    }, [query, fetchResults]);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchResults(query);
        }
    };


    return (
        <DefaultLayout>
            {/* Search bar */}
            <div className="flex justify-center items-center gap-4 pt-8 lg:px-2 lg:pt-0">
                {/* Search Bar */}
                <div className="flex items-center gap-3 w-full max-w-xl p-2 bg-[#333333] rounded-full shadow-lg">
                    <Search className="text-gray-400 w-6 h-6" />
                    <input
                        type="text"
                        value={query}
                        onChange={handleQueryChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Cari karya / pengguna..."
                        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    {/* <button
                        onClick={() => fetchResults(query)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                    >
                        Go
                    </button> */}
                </div>
            </div>

            {/* Grid Section */}
            <div className="py-8">
                <div className="flex flex-col gap-5 justify-start">
                    {loading ? (
                        <div className="col-span-2 text-center text-white">
                            <span className="loading loading-spinner loading-md"></span>
                        </div>
                    ) : (
                        <>
                            {/* User Search Results */}
                            {userResults.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Users</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {userResults.map((user) => (
                                            <div
                                                key={user.id}
                                                className="flex items-center bg-[#222] p-4 rounded-xl shadow-md border border-gray-700"
                                            >
                                                <img
                                                    src={user.profile_pict || "https://placehold.co/50"}
                                                    alt="User Avatar"
                                                    className="w-12 h-12 object-cover rounded-full mr-4"
                                                />
                                                <div>
                                                    <h4 className="text-white font-semibold">{user.fullname}</h4>
                                                    <p className="text-gray-400">@{user.username}</p>
                                                    <Link
                                                        href={`/profile/${user.id}/${user.username}`}
                                                        className="text-yellow-400 hover:underline text-sm"
                                                    >
                                                        View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Karya Search Results */}
                            {karyaResults.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Works</h3>
                                    <div className="flex flex-col gap-5">
                                        {karyaResults.map((result, index) => (
                                            <div className="w-full" key={index}>
                                                <div className="flex bg-black rounded-xl shadow-xl border border-gray-700 h-42 overflow-hidden">
                                                    {/* Image Section */}
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src={result.cover_karya || whizzy_logo}
                                                            alt={result.judul_karya || 'Image placeholder'}
                                                            className="w-36 lg:w-48 h-full object-cover"
                                                        />
                                                    </div>
                                                    {/* Content Section */}
                                                    <div className="flex flex-col p-4 flex-grow">
                                                        <h2 className="text-lg font-semibold mb-2 text-white">
                                                            {result.judul_karya}
                                                        </h2>
                                                        <p className="text-sm text-gray-400 mb-4">
                                                            {result.penyunting || 'Explore this item.'}
                                                        </p>
                                                        <div className="mt-auto">
                                                            <Link
                                                                href={`/karya/${result.slug}/${result.id}`}
                                                                className="inline-block bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                                                            >
                                                                Explore the Story
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* No Results Found */}
                            {userResults.length === 0 && karyaResults.length === 0 && query && (
                                <div className="col-span-2 text-center text-white">
                                    No results found.
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </DefaultLayout>

    );
};

export default Cari;
