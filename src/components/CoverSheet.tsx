"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const letterAnim = {
    hidden: { opacity: 0, y: 60, skewY: 4 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: { delay: 0.3 + i * 0.035, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
};

function AnimLetters({ text }: { text: string }) {
    return (
        <>
            {text.split("").map((c, i) => (
                <motion.span key={i} custom={i} variants={letterAnim} initial="hidden" animate="visible"
                    style={{ display: "inline-block" }}>
                    {c === " " ? "\u00A0" : c}
                </motion.span>
            ))}
        </>
    );
}

const Typewriter = ({ text, startDelay = 0 }: { text: string; startDelay?: number }) => {
    return (
        <>
            {Array.from(text).map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: startDelay + i * 0.035, duration: 0 }}
                >
                    {char}
                </motion.span>
            ))}
        </>
    );
};

export default function CoverSheet() {
    const [stampVisible, setStampVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStampVisible(true), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="min-h-screen flex flex-col relative">

            {/* Main area — name fills the screen */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 md:pt-24 relative">

                {/* Sheet code — top left */}
                <motion.div
                    className="absolute top-20 md:top-24 left-6 md:left-16 lg:left-24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <span className="mono text-[0.4rem] font-bold tracking-[0.25em] uppercase" style={{ color: "var(--slate-light)" }}>
                        SHT-00 · COVER SHEET · REV.01
                    </span>
                </motion.div>

                {/* ISSUED FOR REVIEW stamp — top right */}
                {stampVisible && (
                    <div className="absolute top-24 md:top-28 right-6 md:right-16 lg:right-24 hidden md:block animate-stamp-in">
                        <div className="stamp">
                            ISSUED FOR REVIEW
                        </div>
                    </div>
                )}

                {/* Main Content Row: Name + Portrait */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12 mb-16">
                    {/* Giant name and context */}
                    <div className="flex-1 w-full relative z-30">
                        <h1 className="text-[clamp(2.8rem,12vw,10rem)] font-[900] uppercase leading-[0.82] tracking-[-0.04em] mb-10 display">
                            <AnimLetters text="JESU" /><br />
                            <AnimLetters text="DAS" /><br />
                            <AnimLetters text="ZION" />
                        </h1>

                        {/* Tagline */}
                        <motion.p
                            className="text-base md:text-xl font-medium leading-relaxed tracking-tight max-w-lg mb-8 reading"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.7 }}
                        >
                            Building software at the intersection of{" "}
                            <span className="relative inline-block">
                                <strong className="font-bold">precision</strong>
                                <motion.span className="absolute bottom-0 left-0 h-[2px] bg-[var(--red)]"
                                    initial={{ width: 0 }} animate={{ width: "100%" }}
                                    transition={{ delay: 1.6, duration: 0.4 }}
                                    style={{ transformOrigin: "left" }} />
                            </span>{" "}and{" "}
                            <span className="relative inline-block">
                                <strong className="font-bold">poetry</strong>
                                <motion.span className="absolute bottom-0 left-0 h-[2px] bg-[var(--red)]"
                                    initial={{ width: 0 }} animate={{ width: "100%" }}
                                    transition={{ delay: 1.8, duration: 0.4 }}
                                    style={{ transformOrigin: "left" }} />
                            </span>.
                        </motion.p>

                        {/* Domain stamps */}
                        <motion.div className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ delay: 1.3, duration: 0.5 }}>
                            {["SYSTEMS", "INTERFACES", "AI"].map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    className="mono px-4 py-2 text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.15em] uppercase border-2 border-black/80"
                                    style={{
                                        background: i === 0 ? "var(--ink)" : "transparent",
                                        color: i === 0 ? "var(--canvas)" : "var(--ink)",
                                    }}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.3 + i * 0.1, duration: 0.3 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Main Portrait Area (Right side) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                        className="relative w-[300px] md:w-[400px] lg:w-[480px] shrink-0 aspect-[4/5] z-20 group mx-auto lg:mx-0"
                    >
                        {/* Technical Frame / Crop Marks */}
                        <div className="absolute -inset-4 border border-black/[0.05] pointer-events-none hidden md:block" />
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black/20" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black/20" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black/20" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-black/20" />

                        <div className="relative w-full h-full bg-transparent overflow-hidden">
                            <Image 
                                src="/portrait.png" 
                                alt="Jesudas Zion Portrait" 
                                fill 
                                priority
                                className="object-cover object-[50%_15%] grayscale brightness-[1.05] contrast-[1.15] mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Identification Labels */}
                        <div className="absolute -bottom-4 -right-4 bg-[#C8102E] text-white px-4 py-2 mono text-[0.6rem] font-bold tracking-[0.2em] shadow-xl z-30">
                            SUBJECT_01 // ZION
                        </div>
                        <div className="absolute top-8 -left-8 bg-black text-white px-3 py-1 mono text-[0.5rem] font-bold tracking-[0.3em] -rotate-90 origin-bottom-right shadow-lg hidden md:block">
                            VERIFIED_ID
                        </div>
                    </motion.div>
                </div>

                {/* Margin note — philosophy */}
                <motion.div
                    className="absolute bottom-36 right-6 md:right-16 lg:right-24 hidden lg:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                >
                    <div className="margin-note w-[220px]">
                        <Typewriter text="“If you feel pain, you are alive. If you feel other people's pain, you are a human being.”" startDelay={2.2} />
                    </div>
                </motion.div>
            </div>

            {/* Bottom metadata bar */}
            <motion.div
                className="border-t border-black/[0.06] px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
            >
                <div className="flex items-center gap-6">
                    <span className="label">COVER SHEET</span>
                    <div className="flex items-center gap-2">
                        <div className="w-[6px] h-[6px] bg-[var(--red)]" />
                        <span className="mono text-[0.5rem] font-bold uppercase">Available</span>
                    </div>
                    <span className="label hidden md:inline">CHENNAI 13.08° N, 80.27° E</span>
                </div>
                <div className="hidden md:flex items-center gap-5">
                    {[
                        { label: "GITHUB", href: "https://github.com/Zion203" },
                        { label: "LINKEDIN", href: "https://linkedin.com/in/jesudas-zion-49b804305/" },
                        { label: "EMAIL", href: "mailto:jesudaszion@gmail.com" },
                    ].map(l => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                            className="mono text-[0.5rem] font-bold uppercase opacity-25 hover:opacity-80 transition-opacity tracking-[0.1em]"
                            data-cursor-hover>
                            {l.label} ↗
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
