"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-md text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
                    <p className="text-slate-400 mb-6">
                        {error.message || "An unexpected error occurred."}
                    </p>
                    <button
                        onClick={() => reset()}
                        className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors"
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}
