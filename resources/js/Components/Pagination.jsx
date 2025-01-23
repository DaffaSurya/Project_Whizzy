import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links, total }) => {
    return (
        <nav className="p-4 bg-black text-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                {/* Total Data */}
                <span className="text-sm text-gray-400">
                    Total: {total} items
                </span>

                {/* Pagination Links */}
                <ul className="flex gap-2">
                    {links.map((link, index) => (
                        <li key={index}>
                            {link.url ? (
                                <Link
                                    href={link.url}
                                    className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${link.active
                                            ? "bg-yellow-400 text-black font-semibold"
                                            : "text-gray-300 hover:bg-gray-800"
                                        }`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ) : (
                                <span
                                    className="px-3 py-1 text-sm rounded text-gray-500 cursor-not-allowed"
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Pagination;
