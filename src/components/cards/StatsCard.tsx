"use client";

import { BentoCard } from "../BentoCard";
import { TrendingUp } from "lucide-react";

export function StatsCard() {
    return (
        <BentoCard colSpan={1} rowSpan={1} delay={4} className="p-4 md:p-5">
            <div className="flex flex-col h-full justify-between">
                {/* Icon */}
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-violet-500/20">
                        <TrendingUp className="w-4 h-4 text-violet-400" />
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-4">
                    <div className="text-3xl md:text-4xl font-bold text-white animate-glow-pulse">
                        Fresher
                    </div>
                    <p className="text-slate-400 text-sm mt-1">Ready to Hire</p>
                </div>

                {/* Secondary stat */}
                <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">10+</span>
                        <span className="text-slate-400 text-sm">Projects</span>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
