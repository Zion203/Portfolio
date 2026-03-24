"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        title: "Elever",
        year: "2024",
        role: "Lead Developer",
        constraint: "Build a premium shopping experience with zero-latency feel on mobile.",
        decision: "Chose SSR with Next.js for instant product page loads; designed a cart system that works offline-first.",
        result: "Fully deployed e-commerce platform with seamless product discovery and checkout.",
        tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        link: "https://elever-online.vercel.app/",
        type: "Full Stack / E-Commerce",
    },
    {
        title: "Sarah",
        year: "2024",
        role: "AI Architect",
        constraint: "Create an AI assistant that actually remembers context across long conversations.",
        decision: "Built a memory-augmented retrieval pipeline with LangChain — context window management with conversation summarization.",
        result: "Intelligent assistant with persistent memory and personalized interaction patterns.",
        tech: ["Python", "LangChain", "LLMs", "React"],
        link: "https://github.com/Zion203/Sarah",
        type: "AI / Machine Learning",
    },
    {
        title: "HoverNest",
        year: "2024",
        role: "Full Stack Engineer",
        constraint: "Freelancing platform needs real-time features while keeping ops cost near zero.",
        decision: "Implemented WebSocket layer with graceful degradation; role-based access with JWT refresh tokens.",
        result: "Production freelancing platform connecting clients with vetted talent. Real-time messaging, production-grade auth.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind"],
        link: "https://www.hovernest.com/",
        type: "Full Stack / Freelancing",
    },
    {
        title: "D-Twin",
        year: "2024",
        role: "Mobile + AI Lead",
        constraint: "Digital twin platform must run smoothly on mid-range mobile devices.",
        decision: "Optimized rendering pipeline for React Native; moved heavy ML inference to edge API calls.",
        result: "Mobile-first digital twin platform with real-time monitoring and predictive analytics.",
        tech: ["React Native", "AI/ML", "Node.js"],
        link: "https://d-twinpro.vercel.app/",
        type: "AI / Mobile",
    },
    {
        title: "You Journal",
        year: "2023",
        role: "Frontend Engineer",
        constraint: "Journaling app where privacy and distraction-free writing are non-negotiable.",
        decision: "Client-side encryption for entries; stripped UI to essential elements only.",
        result: "Mindful journaling app with encrypted entries and intuitive writing interface.",
        tech: ["React", "Next.js", "Tailwind CSS"],
        link: "https://mye-journal.vercel.app/",
        type: "Frontend / Personal",
    },
    {
        title: "Train Like a Trainer",
        year: "2023",
        role: "Full Stack Developer",
        constraint: "Sports learning platform needs video streaming without high CDN costs.",
        decision: "Leveraged AWS S3 presigned URLs with progressive loading; built community features with real-time updates.",
        result: "Online sports platform with video tutorials and community engagement. 200+ beta users.",
        tech: ["React", "Node.js", "MongoDB", "AWS"],
        link: "https://github.com/kalviumcommunity/S51_JesudasZion_Capstone_TrainLikeTrainer",
        type: "Full Stack / Sports",
    },
];

export default function ProjectGallery() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section id="projects" className="py-24 md:py-40 relative">
            {/* Heading */}
            <div className="px-6 md:px-16 lg:px-24 mb-12">
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="label">02</span>
                        <div className="h-px w-10 bg-black/[0.08]" />
                        <span className="label">CASE INDEX</span>
                        <div className="flex-1" />
                        <span className="revision-mark">REV 01</span>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-[900] uppercase leading-[0.85] tracking-[-0.03em] display">
                        SELECTED<br /><span className="opacity-10">WORKS</span>
                    </h2>
                </ScrollReveal>
            </div>

            {/* Project case files — vertical stack */}
            <div className="px-6 md:px-16 lg:px-24 space-y-3">
                {projects.map((p, i) => {
                    const isOpen = expanded === i;
                    return (
                        <ScrollReveal key={p.title} delay={i * 0.06}>
                            <motion.div
                                className={`sheet border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? "border-black/15 bg-white/50"
                                        : "border-black/[0.06] bg-white/25 hover:border-black/10"
                                }`}
                                data-sheet-code={`CASE-${String(i + 1).padStart(2, "0")}`}
                                layout
                            >
                                {/* Header row — always visible */}
                                <button
                                    onClick={() => setExpanded(isOpen ? null : i)}
                                    className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 group"
                                    data-cursor-hover
                                >
                                    <div className="flex items-center gap-4 md:gap-6 min-w-0">
                                        <span className="mono text-[0.55rem] font-bold opacity-20 flex-shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-lg md:text-2xl font-[800] uppercase tracking-tight truncate display">
                                            {p.title}
                                        </span>
                                        <span className="hidden md:inline mono text-[0.5rem] font-bold tracking-[0.1em] uppercase" style={{ color: "var(--slate)" }}>
                                            {p.role}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 flex-shrink-0">
                                        <span className="mono text-[0.5rem] font-bold opacity-25">
                                            {p.year}
                                        </span>
                                        <motion.div
                                            className="w-4 h-4 border border-black/15 flex items-center justify-center"
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <line x1="4" y1="0" x2="4" y2="8" />
                                                <line x1="0" y1="4" x2="8" y2="4" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </button>

                                {/* Expanded case file */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-black/[0.06]">
                                                <div className="pt-6 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-10">
                                                    {/* Left — case details */}
                                                    <div className="space-y-5">
                                                        <div>
                                                            <div className="mono text-[0.45rem] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--slate-light)" }}>
                                                                CONSTRAINT
                                                            </div>
                                                            <p className="text-sm leading-relaxed font-medium reading" style={{ color: "var(--slate)" }}>
                                                                {p.constraint}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="mono text-[0.45rem] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--slate-light)" }}>
                                                                KEY DECISION
                                                            </div>
                                                            <p className="text-sm leading-relaxed font-medium reading" style={{ color: "var(--slate)" }}>
                                                                {p.decision}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Right — result + margin notes */}
                                                    <div className="space-y-5">
                                                        <div>
                                                            <div className="mono text-[0.45rem] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--slate-light)" }}>
                                                                RESULT
                                                            </div>
                                                            <p className="text-sm leading-relaxed font-semibold reading">
                                                                {p.result}
                                                            </p>
                                                        </div>

                                                        {/* Margin notes — tech as annotations */}
                                                        <div className="border-l-2 border-[var(--red)] pl-3">
                                                            <div className="mono text-[0.4rem] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "var(--slate-light)" }}>
                                                                TOOLS USED
                                                            </div>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {p.tech.map((t, ti) => (
                                                                    <motion.span
                                                                        key={t}
                                                                        className="mono text-[0.5rem] font-bold uppercase tracking-[0.05em]"
                                                                        style={{ color: "var(--slate)" }}
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: 0.1 + ti * 0.05 }}
                                                                    >
                                                                        {t}{ti < p.tech.length - 1 ? " ·" : ""}
                                                                    </motion.span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* View link */}
                                                        <a href={p.link} target="_blank" rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 mono text-[0.55rem] font-bold tracking-[0.1em] uppercase hover:text-[var(--red)] transition-colors"
                                                            data-cursor-hover>
                                                            VIEW PROJECT
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
}
