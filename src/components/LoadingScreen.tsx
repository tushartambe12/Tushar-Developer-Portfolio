"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading screen after animation completes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-slate-950 flex items-center justify-center"
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* Animated Logo/Name */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Tushar
                            </motion.h1>
                            <motion.p
                                className="text-slate-400 text-center mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Developer
                            </motion.p>
                        </motion.div>

                        {/* Loading bar */}
                        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-500 to-pink-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Loading dots */}
                        <div className="flex gap-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-violet-500 rounded-full"
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
