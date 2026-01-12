"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2;
    rowSpan?: 1 | 2;
    delay?: number;
}

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: delay * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    })
};

export function BentoCard({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
    delay = 0
}: BentoCardProps) {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={delay}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            className={cn(
                "relative overflow-hidden rounded-2xl",
                "bg-slate-900/50 backdrop-blur-md",
                "border border-white/10",
                "transition-colors duration-300",
                "hover:bg-slate-800/60 hover:border-white/20",
                colSpan === 2 && "md:col-span-2",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
