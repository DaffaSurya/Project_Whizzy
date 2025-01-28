import { useState, useEffect, useCallback } from 'react';
import { Link, router } from '@inertiajs/react';
import { Home, Search } from 'lucide-react';
import debounce from 'lodash/debounce';
import DefaultLayout from '../Layout/DefautLayout'
import Axios from 'axios';

const Cari = ({ initialResults = [], initialQuery = '' }) => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState(initialResults);
    const [loading, setLoading] = useState(false);

    // Debounced API call
    const fetchResults = useCallback(
        debounce(async (searchQuery) => {
            if (!searchQuery) {
                setResults([]);
                return;
            }

            setLoading(true);
            try {
                const response = await Axios.get('/search', {
                    params: { query: searchQuery },
                });
                console.log('API Response:', response.data);
                setResults(response.data.results || []);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        }, 300),
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
                {/* Home Button */}
                {/* <a href="/">
                    <div className="p-4 bg-[#333333] rounded-full shadow-lg hover:scale-105 transition-transform">
                        <Home className="text-white w-6 h-6" />
                    </div>
                </a> */}

                {/* Search Bar */}
                <div className="flex items-center gap-3 w-full max-w-xl p-2 bg-[#333333] rounded-full shadow-lg">
                    <Search className="text-gray-400 w-6 h-6" />
                    <input
                        type="text"
                        value={query}
                        onChange={handleQueryChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Search here..."
                        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        onClick={() => fetchResults(query)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                    >
                        Go
                    </button>
                </div>
            </div>

            {/* Grid Section */}
            <div className="py-8">
                <div className="flex flex-col gap-5 justify-start">
                    {loading ? (
                        <div className="col-span-2 text-center text-white">
                            <span class="loading loading-spinner loading-md"></span>
                        </div>
                    ) : results.length > 0 ? (
                        results.map((result, index) => (
                            <div className="w-full" key={index}>
                                <div className="flex bg-black rounded-xl shadow-xl border border-gray-700 h-42 overflow-hidden">
                                    {/* Image Section */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={result.cover_karya || '/default-placeholder.png'}
                                            alt={result.judul_karya || 'Image placeholder'}
                                            className="w-36 lg:w-48 h-full object-cover"
                                        />
                                    </div>
                                    {/* Content Section */}
                                    <div className="flex flex-col p-4 flex-grow">
                                        <h2 className="text-lg font-semibold mb-2">
                                            {result.judul_karya}
                                        </h2>
                                        <p className="text-sm text-gray-600 mb-4">
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
                        ))
                    ) : (
                        <div className="col-span-2 text-center text-white">
                            No results found.
                        </div>
                    )}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Cari;
