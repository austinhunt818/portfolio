'use client';

import { useState } from "react";

export function LikeButton() {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1);
        console.log(`Likes: ${likes}`);
    };
    
    return (
        <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleLike}>
                Like
            </button>
            <p className="mt-0">
                {likes} {likes === 1 ? "Like" : "Likes"}
            </p>
        </div>
    );
    }