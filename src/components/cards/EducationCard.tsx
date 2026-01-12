"use client";

import { BentoCard } from "../BentoCard";
import { GraduationCap, Award, Calendar } from "lucide-react";

export function EducationCard() {
    return (
        <BentoCard colSpan={2} rowSpan={1} delay={5} className="p-4 md:p-6">
            <div className="flex flex-col h-full justify-between">
                <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                    <h3 className="text-sm font-medium text-slate-400">Education & Certifications</h3>
                </div>

                <div className="space-y-4">
                    {/* Degree */}
                    <div className="relative pl-4 border-l-2 border-white/10">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-violet-500" />
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-white font-semibold">B.Sc - Information Technology</h4>
                                <p className="text-slate-400 text-xs">Mumbai University</p>
                            </div>
                            <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-slate-400">
                                2024
                            </span>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="relative pl-4 border-l-2 border-white/10">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-500" />
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-white font-semibold text-sm">MySQL Development</h4>
                                <p className="text-slate-400 text-xs">LinkedIn Learning</p>
                            </div>
                            <Award className="w-3 h-3 text-cyan-400 mt-1" />
                        </div>
                    </div>

                    <div className="relative pl-4 border-l-2 border-white/10">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-pink-500" />
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-white font-semibold text-sm">Java Full Stack</h4>
                                <p className="text-slate-400 text-xs">Certification Course</p>
                            </div>
                            <Award className="w-3 h-3 text-pink-400 mt-1" />
                        </div>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
