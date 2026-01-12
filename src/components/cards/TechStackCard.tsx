"use client";

import { BentoCard } from "../BentoCard";

const technologies = [
    { name: "Next.js", color: "bg-white text-black" },
    { name: "React", color: "bg-cyan-500/20 text-cyan-400" },
    { name: "TypeScript", color: "bg-blue-500/20 text-blue-400" },
    { name: "Tailwind", color: "bg-teal-500/20 text-teal-400" },
    { name: "Node.js", color: "bg-green-500/20 text-green-400" },
    { name: "PostgreSQL", color: "bg-indigo-500/20 text-indigo-400" },
    { name: "Prisma", color: "bg-purple-500/20 text-purple-400" },
    { name: "GraphQL", color: "bg-pink-500/20 text-pink-400" },
];

export function TechStackCard() {
    return (
        <BentoCard colSpan={2} rowSpan={1} delay={2} className="p-0 overflow-hidden">
            <div className="h-full flex flex-col justify-center py-4 relative group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                <div className="flex flex-col gap-3">
                    {/* First Row - Moving Left */}
                    <div className="flex animate-marquee gap-3 pl-3">
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div
                                key={`row1-${tech.name}-${index}`}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm hover:border-white/20 transition-colors whitespace-nowrap"
                            >
                                <div className={`w-2 h-2 rounded-full ${tech.color} bg-current opacity-80`} />
                                <span className="text-xs font-medium text-slate-200">{tech.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - Moving Right (Reverse) */}
                    <div className="flex animate-marquee-reverse gap-3 pl-3">
                        {[...technologies].reverse().concat([...technologies].reverse()).map((tech, index) => (
                            <div
                                key={`row2-${tech.name}-${index}`}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm hover:border-white/20 transition-colors whitespace-nowrap"
                            >
                                <div className={`w-2 h-2 rounded-full ${tech.color} bg-current opacity-80`} />
                                <span className="text-xs font-medium text-slate-200">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
