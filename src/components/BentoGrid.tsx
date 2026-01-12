"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8",
                "max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
}
