import { useState } from "react";
import Axios from "axios";

const RatingComponent = ({ karyaId }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [message, setMessage] = useState("");

    const handleRatingSubmit = async () => {
        try {
            const response = await Axios.post("/rate-karya", {
                rateable_id: karyaId, // Ganti karyaId sesuai dengan ID dari Karya atau Chapter
                rateable_type: "App\\Models\\Karya", // Sesuaikan tipe modelnya
                rating: rating,
            });

            setMessage(response.data.message);
        } catch (error) {
            console.error("Error submitting rating:", error.response?.data || error.message);
        }
    };

    return (
        <div className="rating-container">
            <h2 className="text-xl text-white font-semibold mb-3">
                Beri Rating Karya Ini
            </h2>

            <div className="flex space-x-2">
                {[...Array(5)].map((_, index) => {
                    const currentRating = index + 1;

                    return (
                        <button
                            key={index}
                            type="button"
                            className={`text-4xl ${currentRating <= (hover || rating)
                                ? "text-yellow-400"
                                : "text-gray-400"
                                }`}
                            onClick={() => setRating(currentRating)}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            ★
                        </button>
                    );
                })}
            </div>

            <button
                onClick={handleRatingSubmit}
                className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded"
            >
                Kirim Rating
            </button>

            {message && (
                <div className="mt-3 text-green-500">{message}</div>
            )}
        </div>
    );
};

export default RatingComponent;
