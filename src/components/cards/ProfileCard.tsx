"use client";

import { BentoCard } from "../BentoCard";
import { Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

export function ProfileCard() {
    return (
        <BentoCard colSpan={2} rowSpan={2} delay={0} className="p-6 md:p-8">
            <div className="flex flex-col h-full justify-between">
                {/* Top Section */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-violet-500/30">
                            <Image
                                src="/images/tushar.jpg"
                                alt="Tushar Developer"
                                width={128}
                                height={128}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Online indicator */}
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
                    </div>

                    {/* Name and Title */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Tushar Developer
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Full-Stack Developer & UI Designer
                        </p>
                        <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-500 text-sm">Mumbai, India</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col gap-4 mt-6">
                    {/* Available Badge */}
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow" />
                        <span className="text-green-400 text-sm font-medium">
                            Available for Work
                        </span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="https://github.com/tushartambe12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tushartambe12/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                        </a>
                        <a
                            href="/resume.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors flex items-center gap-2"
                        >
                            <span>Show Resume</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
