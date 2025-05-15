import React, { useState } from "react";
import AdminLayout from "../../../Layout/AdminLayout";
import { Link, router } from "@inertiajs/react";
import { Plus, Trash2 } from "lucide-react";
import Axios from "axios";

const Index = ({ karya, featured, carousel }) => {
    const [loading, setLoading] = useState(false);

    function truncateText(text, maxLength) {
        if (!text) return text;
        return text.length > maxLength
            ? text.substring(0, maxLength) + "..."
            : text;
    }

    async function newCarousel(e) {
        e.preventDefault();

        setLoading(true);

        const data = {
            karya_id: e.target.karya_id.value,
        };

        try {
            console.log(data);
            const response = await Axios.post(
                "/admin/homepage-settings/store-carousel",
                data
            );

            document.getElementById("addCarousel").checked = false;

            // setToastVisible(true);
            // setToastMessage("Karya Added successfully.");

            router.visit("/admin/homepage-settings");
        } catch (error) {
            setLoading(false);

            if (error.response) {
                console.log("Error data:", error.response.data.message);
                console.log("Error status:", error.response.status);
                console.log("Error headers:", error.response.headers);
            }
        } finally {
            setLoading(false);
        }
    }

    async function newFeatured(e) {
        e.preventDefault();

        setLoading(true);

        const data = {
            featured_audiobook: e.target.featured_audiobook.value,
        };

        try {
            const response = await Axios.post(
                "/admin/homepage-settings/store-featured",
                data
            );

            document.getElementById("addCategory").checked = false;

            // setToastVisible(true);
            // setToastMessage("Item moved successfully.");

            router.visit("/admin/homepage-settings");
        } catch (error) {
            setLoading(false);

            if (error.response) {
                console.log("Error data:", error.response.data);
                console.log("Error status:", error.response.status);
                console.log("Error headers:", error.response.headers);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <AdminLayout title={`Homepage Settings`}>
            {/* Carousel Settings */}
            <div className="flex flex-row justify-between">
                <h1 className="text-lg font-bold">
                    Kreasi Terbaru{" "}
                    <span className="text-sm text-gray-600">
                        Maximum 4 Carousel items
                    </span>
                </h1>
                {carousel.length >= 4 ? (
                    <div className="controls flex flex-row items-center gap-5">
                        <label
                            htmlFor="addCarousel"
                            disabled={true}
                            className="btn btn-outline btn-sm text-white hover:bg-yellow-400"
                        >
                            <Plus size={18} /> New Carousel Item
                        </label>
                    </div>
                ) : (
                    <div className="controls flex flex-row items-center gap-5">
                        <label
                            htmlFor="addCarousel"
                            className="btn btn-outline btn-sm text-white hover:bg-yellow-400"
                        >
                            <Plus size={18} /> New Carousel Item
                        </label>
                    </div>
                )}
            </div>
            <div className="flex flex-row justify-between gap-4 max-w-full lg:gap-0 overflow-autolg:overflow-hidden">
                {carousel.length === 0 ? (
                    <div className="text-center py-10 border w-full border-gray-700">
                        <h2 className="text-lg font-bold text-gray-600">
                            Empty Carousel
                        </h2>
                    </div>
                ) : (
                    carousel.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-72 h-32 group border border-gray-600 rounded-xl"
                        >
                            <img
                                item={item.id}
                                src={item.karya.cover_karya}
                                className="w-64 h-32 object-contain"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link
                                    href={`/admin/homepage-settings/delete-carousel/${item.id}`}
                                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md"
                                >
                                    <Trash2 size={20} />
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Featured Audiobook */}
            <div className="flex flex-row justify-between">
                <h1 className="text-lg font-bold">
                    Buku Terfavorit{" "}
                    <span className="text-sm text-gray-600">
                        Maximum 2 Featured items
                    </span>
                </h1>

                <div className="controls flex flex-row items-center gap-5">
                    {featured.length >= 2 ? (
                        <label
                            htmlFor="addCategory"
                            className="btn btn-disabled btn-outline btn-sm text-white hover:bg-yellow-400"
                        >
                            <Plus size={18} /> New Category
                        </label>
                    ) : (
                        <label
                            htmlFor="addCategory"
                            className="btn btn-outline btn-sm text-white hover:bg-yellow-400"
                        >
                            <Plus size={18} /> New Category
                        </label>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start">
                {featured.length > 0 ? (
                    featured.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="flex bg-black rounded-xl shadow-xl border border-gray-700 h-64 overflow-hidden">
                                <div className="flex-shrink-0">
                                    <img
                                        src={item.karya.cover_karya}
                                        alt={item.karya.judul_karya}
                                        className="w-36 lg:w-48 h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col p-4 flex-grow">
                                    <h2 className="text-lg font-semibold mb-2">
                                        {item.karya.judul_karya}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {featured.length > 0 &&
                                        item?.karya?.deskripsi_karya
                                            ? truncateText(
                                                  item.karya.deskripsi_karya,
                                                  320
                                              )
                                            : "No description available."}
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href={`homepage-settings/delete-featured/${item.id}`}
                                            className="inline-block text-white border py-1 px-3 rounded-xl hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-colors"
                                        >
                                            Remove from Featured
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center col-span-2 py-10 border w-full border-gray-700">
                        <h2 className="text-lg font-bold text-gray-600">
                            Empty Featured{" "}
                            <span className="text-yellow-200">Content</span>
                        </h2>
                        <p className="text-gray-600">
                            Check back later for new updates!
                        </p>
                    </div>
                )}
            </div>

            {/* modal */}
            <input type="checkbox" id="addCategory" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-black border border-gray-600 rounded-lg">
                    <h3 className="text-lg font-bold mb-3">
                        Create New Featured
                    </h3>

                    <form onSubmit={newFeatured}>
                        {/* audiobooks */}
                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">Audiobooks</span>
                            </div>
                            <select
                                name="featured_audiobook"
                                className="select select-bordered"
                            >
                                <option disabled>Pick one</option>
                                {karya.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.judul_karya}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn btn-sm px-4 py-1 mt-3 ${
                                loading
                                    ? "bg-yellow-600 text-white cursor-not-allowed"
                                    : "bg-yellow-400 text-black hover:bg-yellow-500"
                            }`}
                        >
                            {loading ? "Processing..." : "Save"}
                        </button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="addCategory">
                    Close
                </label>
            </div>

            {/* carousel modal */}
            <input type="checkbox" id="addCarousel" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-black border border-gray-600 rounded-lg">
                    <h3 className="text-lg font-bold mb-3">
                        Create New Carousel
                    </h3>

                    <form onSubmit={newCarousel} encType="multipart/form-data">
                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">
                                    Audiobooks (optional)
                                </span>
                            </div>
                            <select
                                name="karya_id"
                                className="select select-bordered"
                            >
                                <option value="">None</option>
                                {karya.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.judul_karya}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">
                                    File (optional)
                                </span>
                            </div>
                            <input
                                type="file"
                                name="file"
                                className="file-input file-input-bordered w-full"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn btn-sm px-4 py-1 mt-3 ${
                                loading
                                    ? "bg-yellow-600 text-white cursor-not-allowed"
                                    : "bg-yellow-400 text-black hover:bg-yellow-500"
                            }`}
                        >
                            {loading ? "Processing..." : "Save"}
                        </button>
                    </form>
                    
                </div>
                <label className="modal-backdrop" htmlFor="addCarousel">
                    Close
                </label>
            </div>

            {/* modal */}
        </AdminLayout>
    );
};

export default Index;
