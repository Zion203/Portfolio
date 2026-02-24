"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Sacred Timeline — horizontal glowing line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
                <motion.div
                    className="h-[1px] w-full"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent 5%, var(--tva-amber) 30%, var(--tva-amber-bright) 50%, var(--tva-amber) 70%, transparent 95%)",
                        boxShadow: "0 0 30px rgba(255, 107, 0, 0.3)",
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.4 }}
                    transition={{ delay: 2.6, duration: 1.5, ease: "easeOut" }}
                />
                {/* Branch points on the sacred timeline */}
                {[15, 35, 55, 75, 88].map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-0 -translate-y-1/2"
                        style={{ left: `${pos}%` }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.2 + i * 0.15, duration: 0.4 }}
                    >
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{
                                background: "var(--tva-amber)",
                                boxShadow: "0 0 8px var(--tva-amber)",
                            }}
                        />
                        {/* Branch line going up or down */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{
                                width: 1,
                                height: 20 + i * 8,
                                background: `linear-gradient(${i % 2 === 0 ? "180deg" : "0deg"}, var(--tva-amber), transparent)`,
                                top: i % 2 === 0 ? "100%" : "auto",
                                bottom: i % 2 === 0 ? "auto" : "100%",
                                opacity: 0.3,
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Floating temporal particles — reduced count */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: 2,
                            height: 2,
                            background:
                                i % 3 === 0
                                    ? "#FF6B00"
                                    : i % 3 === 1
                                        ? "#00E5A0"
                                        : "rgba(232, 220, 200, 0.2)",
                            left: `${10 + i * 9}%`,
                            top: `${15 + i * 7}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.15, 0.5, 0.15],
                        }}
                        transition={{
                            duration: 5 + i * 0.8,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Radial glow — static, no animation */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 55%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* TVA Classification */}
                <motion.div
                    className="mb-4 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 0.8 }}
                >
                    <div
                        className="h-[1px] w-12"
                        style={{ background: "var(--tva-amber)", opacity: 0.5 }}
                    />
                    <span
                        className="text-[0.6rem] tracking-[0.35em] uppercase"
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            color: "var(--tva-amber)",
                        }}
                    >
                        VARIANT CLASSIFICATION: FULL STACK DEVELOPER
                    </span>
                    <div
                        className="h-[1px] w-12"
                        style={{ background: "var(--tva-amber)", opacity: 0.5 }}
                    />
                </motion.div>

                {/* Name — massive glitch text */}
                <motion.h1
                    className="mb-6 glitch-text"
                    data-text="JESUDAS ZION"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        fontSize: "clamp(2.5rem, 9vw, 7rem)",
                        fontWeight: 900,
                        lineHeight: 0.95,
                        letterSpacing: "0.06em",
                        color: "var(--tva-text)",
                    }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 3.0,
                        duration: 1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <span className="gradient-text-amber">JESUDAS</span>
                    <br />
                    <span className="gradient-text-teal">ZION</span>
                </motion.h1>

                {/* Case number readout */}
                <motion.div
                    className="mb-6 flex items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.3, duration: 0.8 }}
                >
                    {[
                        { label: "CASE", value: "JZ-2024-001" },
                        { label: "STATUS", value: "ACTIVE" },
                        { label: "THREAT", value: "MINIMAL" },
                    ].map((item) => (
                        <div key={item.label} className="text-center">
                            <div
                                className="text-[0.5rem] tracking-[0.2em] uppercase mb-0.5"
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    color: "var(--tva-text-muted)",
                                }}
                            >
                                {item.label}
                            </div>
                            <div
                                className="text-[0.65rem] tracking-[0.15em]"
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    color:
                                        item.value === "ACTIVE"
                                            ? "var(--tva-teal)"
                                            : "var(--tva-text-secondary)",
                                }}
                            >
                                {item.value}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10"
                    style={{
                        color: "var(--tva-text-secondary)",
                        fontFamily: "'Syne', sans-serif",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.4, duration: 0.8 }}
                >
                    A leader by nature and a builder by choice. I use technology to solve
                    real-world problems — building exceptional software at the intersection
                    of web and artificial intelligence.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.6, duration: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 px-8 py-3.5 rounded text-[0.7rem] font-bold tracking-[0.12em] uppercase transition-all duration-300 hover:shadow-xl"
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            background: "var(--tva-amber)",
                            color: "var(--tva-void)",
                            boxShadow: "0 0 30px rgba(255, 107, 0, 0.2)",
                        }}
                        data-cursor-hover
                    >
                        VIEW MISSIONS
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-[0.7rem] font-bold tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[var(--tva-amber-dim)]"
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            border: "1px solid rgba(255, 107, 0, 0.4)",
                            color: "var(--tva-amber)",
                        }}
                        data-cursor-hover
                    >
                        OPEN COMMS
                    </a>
                </motion.div>

                {/* "For All Time. Always." watermark */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.0 }}
                >
                    <span
                        className="text-[0.55rem] tracking-[0.4em] uppercase"
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            color: "var(--tva-text-muted)",
                            opacity: 0.5,
                        }}
                    >
                        FOR ALL TIME. ALWAYS.
                    </span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.2 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ChevronDown size={20} style={{ color: "var(--tva-text-muted)" }} />
                </motion.div>
            </motion.div>

            {/* Bottom accent line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, var(--tva-amber), var(--tva-teal), transparent)",
                    opacity: 0.25,
                }}
            />
        </section>
    );
}
