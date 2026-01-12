"use client";

import { useEffect, useState } from "react";
import { BentoCard } from "../BentoCard";
import { Clock, MapPin } from "lucide-react";

export function TimeLocationCard() {
    const [time, setTime] = useState<string>("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const updateTime = () => {
            const now = new Date();
            // Mumbai timezone (IST = UTC+5:30)
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata",
            };
            setTime(now.toLocaleTimeString("en-US", options));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <BentoCard colSpan={1} rowSpan={1} delay={6} className="relative overflow-hidden">
            {/* Mini Map Background */}
            <div className="absolute inset-0 opacity-20">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Simple map grid pattern */}
                    <defs>
                        <pattern
                            id="grid"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 10 0 L 0 0 0 10"
                                fill="none"
                                stroke="rgba(148, 163, 184, 0.3)"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                    {/* Abstract city paths */}
                    <path
                        d="M20 80 Q40 60 60 70 T90 50"
                        fill="none"
                        stroke="rgba(139, 92, 246, 0.5)"
                        strokeWidth="1"
                    />
                    <path
                        d="M10 40 Q30 30 50 45 T80 30"
                        fill="none"
                        stroke="rgba(139, 92, 246, 0.3)"
                        strokeWidth="0.5"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 p-4 md:p-5 h-full flex flex-col justify-between">
                {/* Time */}
                <div>
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider">Local Time</span>
                    </div>
                    <p className="text-2xl font-bold text-white font-mono">
                        {mounted ? time : "--:-- --"}
                    </p>
                </div>

                {/* Location */}
                <div className="mt-4">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-dot-pulse" />
                        </div>
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-300">Mumbai, IN</span>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
