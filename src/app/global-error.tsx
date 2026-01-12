"use client";

import { useEffect } from "react";

export default function GlobalError({
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
        <html lang="en">
            <body className="bg-slate-950 text-white flex items-center justify-center min-h-screen">
                <div className="text-center p-8">
                    <h2 className="text-3xl font-bold mb-4">Critical Error</h2>
                    <p className="text-slate-400 mb-6 max-w-md mx-auto">
                        {error.message || "The application encountered a critical error."}
                    </p>
                    <button
                        onClick={() => reset()}
                        className="px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-full transition-colors"
                    >
                        Reload Application
                    </button>
                </div>
            </body>
        </html>
    );
}
