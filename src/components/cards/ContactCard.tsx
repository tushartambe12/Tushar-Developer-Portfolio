"use client";

import { useState } from "react";
import { BentoCard } from "../BentoCard";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactCard() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !message) return;

        setStatus("loading");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");

        // Reset after showing success
        setTimeout(() => {
            setStatus("idle");
            setEmail("");
            setMessage("");
        }, 2000);
    };

    return (
        <BentoCard colSpan={2} rowSpan={1} delay={5} className="p-4 md:p-6">
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <h3 className="text-sm font-medium text-slate-400 mb-4">
                    Get in Touch
                </h3>

                <div className="flex flex-col md:flex-row gap-3 flex-1">
                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                        disabled={status !== "idle"}
                    />

                    {/* Message Input */}
                    <input
                        type="text"
                        placeholder="Your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-[2] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                        disabled={status !== "idle"}
                    />

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={status !== "idle"}
                        className="px-6 py-3 rounded-xl bg-violet-500 text-white font-medium flex items-center justify-center gap-2 hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[100px]"
                        whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                        whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                    >
                        <AnimatePresence mode="wait">
                            {status === "idle" && (
                                <motion.span
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    Send <Send className="w-4 h-4" />
                                </motion.span>
                            )}
                            {status === "loading" && (
                                <motion.span
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                </motion.span>
                            )}
                            {status === "success" && (
                                <motion.span
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </ form>
        </BentoCard>
    );
}
