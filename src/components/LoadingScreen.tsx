"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingStages = [
    "TEMPORAL BREACH DETECTED",
    "ISOLATING VARIANT",
    "SCANNING TIMELINE",
    "DOSSIER LOADED",
];

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [stage, setStage] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const stageInterval = setInterval(() => {
            setStage((prev) => {
                if (prev < loadingStages.length - 1) return prev + 1;
                return prev;
            });
        }, 550);

        const progressInterval = setInterval(() => {
            setProgress((prev) => Math.min(prev + 2, 100));
        }, 40);

        const timer = setTimeout(() => setIsLoading(false), 2600);
        return () => {
            clearTimeout(timer);
            clearInterval(stageInterval);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{ background: "var(--tva-void)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* Concentric rings */}
                    <div className="relative w-40 h-40 mb-12">
                        {/* Outer ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                border: "1px solid rgba(255, 107, 0, 0.15)",
                            }}
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{
                                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            }}
                        />
                        {/* Mid ring */}
                        <motion.div
                            className="absolute inset-4 rounded-full"
                            style={{
                                border: "2px solid transparent",
                                borderTopColor: "var(--tva-amber)",
                                borderRightColor: "var(--tva-teal)",
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Inner ring */}
                        <motion.div
                            className="absolute inset-8 rounded-full"
                            style={{
                                border: "1px solid rgba(255, 107, 0, 0.25)",
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Core */}
                        <motion.div
                            className="absolute inset-12 rounded-full flex items-center justify-center"
                            style={{
                                background: "radial-gradient(circle, rgba(255,107,0,0.3) 0%, transparent 70%)",
                            }}
                        >
                            <motion.div
                                className="w-4 h-4 rounded-full"
                                style={{
                                    background: "var(--tva-amber)",
                                    boxShadow:
                                        "0 0 30px var(--tva-amber), 0 0 60px rgba(255, 107, 0, 0.4)",
                                }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* TVA text in ring */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                fontFamily: "'Orbitron', monospace",
                                fontSize: "0.5rem",
                                letterSpacing: "0.4em",
                                color: "var(--tva-amber)",
                                opacity: 0.5,
                            }}
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            TVA
                        </motion.div>
                    </div>

                    {/* Status text */}
                    <motion.div className="text-center">
                        <motion.div
                            key={stage}
                            className="text-sm tracking-[0.3em] uppercase mb-4"
                            style={{
                                fontFamily: "'Orbitron', monospace",
                                color: "var(--tva-amber)",
                            }}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {loadingStages[stage]}
                        </motion.div>

                        {/* Progress bar */}
                        <div
                            className="w-48 h-[2px] mx-auto rounded-full overflow-hidden"
                            style={{ background: "var(--tva-surface-light)" }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: "var(--tva-amber)" }}
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>

                        {/* Case number */}
                        <motion.div
                            className="mt-4 text-[0.6rem] tracking-[0.2em]"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "var(--tva-text-muted)",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 0.8 }}
                        >
                            CASE FILE // JZ-2024-001
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
