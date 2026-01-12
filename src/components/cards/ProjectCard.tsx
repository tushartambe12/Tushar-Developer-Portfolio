"use client";

import { useState } from "react";
import { BentoCard } from "../BentoCard";
import { ExternalLink, ArrowUpRight, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Tushar AI",
        description: "An intelligent AI-powered application with cutting-edge features and modern design.",
        tags: ["AI", "Next.js", "React"],
        color: "from-violet-500 to-purple-600",
        icon: Sparkles,
        liveUrl: "https://tushar-ai-inky.vercel.app/",
        year: "2024",
    },
    {
        id: 2,
        title: "Tushar Agency",
        description: "A professional digital agency website with stunning animations and premium UI.",
        tags: ["Agency", "Tailwind", "Framer"],
        color: "from-cyan-500 to-blue-600",
        icon: Building2,
        liveUrl: "https://tushar-agency.vercel.app/",
        year: "2024",
    },
];

export function ProjectCard() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <BentoCard colSpan={2} rowSpan={1} delay={3} className="p-4 md:p-6">
            <div className="h-full">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-slate-400">Featured Projects</h3>
                    <a
                        href="https://github.com/tushartambe12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                    >
                        View All →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projects.map((project) => (
                        <motion.a
                            key={project.id}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Background gradient on hover */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                            />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-2">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color}`}>
                                        <project.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <motion.div
                                        animate={{
                                            rotate: hoveredId === project.id ? 45 : 0
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                                    </motion.div>
                                </div>

                                <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                                <p className="text-slate-400 text-xs line-clamp-2 mb-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
}
