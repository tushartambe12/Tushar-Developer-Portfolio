"use client";

import { useState, useRef, useEffect } from "react";
import { BentoCard } from "../BentoCard";
import { Music, Play, Pause, Volume2 } from "lucide-react";

export function SpotifyCard() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleEnded = () => setIsPlaying(false);
            audio.addEventListener("ended", handleEnded);
            return () => audio.removeEventListener("ended", handleEnded);
        }
    }, []);

    return (
        <BentoCard colSpan={1} rowSpan={1} delay={2} className="p-4 md:p-5">
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                preload="metadata"
            />

            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md bg-green-500">
                            <Music className="w-3 h-3 text-black" />
                        </div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider">
                            {isPlaying ? "Now Playing" : "Click to Play"}
                        </span>
                    </div>
                    <Volume2 className="w-4 h-4 text-slate-500" />
                </div>

                {/* Album art and info */}
                <div className="flex gap-4 items-center flex-1">
                    {/* Rotating Album Art */}
                    <button
                        onClick={togglePlay}
                        className="relative w-14 h-14 flex-shrink-0 cursor-pointer group"
                    >
                        <div
                            className={`absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 ${isPlaying ? "animate-spin-slow" : ""
                                }`}
                        />
                        <div className="absolute inset-[6px] rounded-full bg-slate-900 flex items-center justify-center">
                            {isPlaying ? (
                                <Pause className="w-4 h-4 text-white" />
                            ) : (
                                <Play className="w-4 h-4 text-white ml-0.5" />
                            )}
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                            SoundHelix Track
                        </p>
                        <p className="text-xs text-slate-400 truncate">
                            Ambient Music
                        </p>
                    </div>
                </div>

                {/* Music Bars Visualizer */}
                <div className="flex items-end gap-1 h-6 mt-4">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className={`flex-1 bg-green-500 rounded-sm transition-all ${isPlaying ? "" : "!h-1"
                                }`}
                            style={{
                                animation: isPlaying
                                    ? `music-bar 0.${3 + (i % 4)}s ease-in-out infinite`
                                    : "none",
                                animationDelay: `${i * 0.05}s`,
                                minHeight: "4px",
                            }}
                        />
                    ))}
                </div>
            </div>
        </BentoCard>
    );
}
