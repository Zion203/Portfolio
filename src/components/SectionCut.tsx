"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
    {
        id: "icliniq",
        period: "2024 — Present",
        company: "iCliniq",
        role: "Full Stack Developer",
        type: "ACTIVE ROLE",
        typeStyle: "bg-[var(--red)] text-white",
        desc: "Leading the MSKCC healthcare project connecting India and New York cancer treatment centers. Building end-to-end modules with Domain-Driven Design in a cross-functional agile team.",
        accomplishment: "Led MSKCC cross-border cancer consultation module from architecture to production.",
        highlights: ["Node.js & TypeScript", "React & Astro", "DDD Architecture", "Agile Sprints"],
    },
    {
        id: "freelance",
        period: "2023 — Present",
        company: "Freelance",
        role: "Full Stack Developer & AI Consultant",
        type: "FREELANCE",
        typeStyle: "border border-black/30 text-black/60",
        desc: "Providing comprehensive development and AI consultation. Building scalable applications across healthcare, real-time communication, and AI-powered client solutions.",
        accomplishment: "Shipped 4 production apps across healthcare, real-time, and AI domains.",
        highlights: ["Scalable APIs", "AI Integration", "Healthcare Tech", "Real-time Systems"],
    },
    {
        id: "education",
        period: "2022 — 2026",
        company: "Kalvium × Vels",
        role: "B.Tech CSE — CGPA 9.3+",
        type: "EDUCATION",
        typeStyle: "border border-dashed border-black/25 text-black/50",
        desc: "Work-Integrated Program blending real industry experience with rigorous academic CS fundamentals. Intensive project-based learning from day one.",
        accomplishment: "Maintained 9.3+ CGPA while shipping production code from semester 1.",
        highlights: ["Project-Based Learning", "Industry Collaboration", "CS Fundamentals"],
    },
];

export default function SectionCut() {
    const [expanded, setExpanded] = useState<string | null>("icliniq");

    return (
        <section id="experience" className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
            {/* Header */}
            <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                    <span className="label">04</span>
                    <div className="h-px w-10 bg-black/[0.08]" />
                    <span className="label">SECTION CUT</span>
                    <div className="flex-1" />
                    <span className="revision-mark">REV 01</span>
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[900] uppercase leading-[0.9] tracking-[-0.03em] mb-14 display">
                    Experience
                </h2>
            </ScrollReveal>

            {/* Dossier-style accordion */}
            <div className="space-y-3">
                {experiences.map((exp, i) => {
                    const isOpen = expanded === exp.id;
                    return (
                        <ScrollReveal key={exp.id} delay={i * 0.08}>
                            <motion.div
                                className={`sheet transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? "border-black/15 bg-white/50"
                                        : "border-black/[0.06] hover:border-black/10"
                                }`}
                                data-sheet-code={`EXP-${String(i + 1).padStart(2, "0")}`}
                                layout
                            >
                                {/* Header row */}
                                <button
                                    onClick={() => setExpanded(isOpen ? null : exp.id)}
                                    className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 group"
                                    data-cursor-hover
                                >
                                    <div className="flex items-center gap-4 md:gap-6 min-w-0">
                                        <span className="mono text-[0.55rem] font-bold opacity-20 flex-shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-lg md:text-xl font-[800] uppercase tracking-tight truncate display">
                                            {exp.company}
                                        </span>

                                        {/* Type badge */}
                                        <span className={`hidden md:inline-flex items-center gap-1.5 mono px-2.5 py-1 text-[0.42rem] font-bold tracking-[0.12em] uppercase flex-shrink-0 ${exp.typeStyle}`}>
                                            {exp.id === "icliniq" && (
                                                <span className="w-[5px] h-[5px] bg-white inline-block flex-shrink-0" />
                                            )}
                                            {exp.type}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 flex-shrink-0">
                                        <span className="mono text-[0.5rem] font-bold opacity-25 hidden md:block">
                                            {exp.period}
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

                                {/* Expanded dossier sheet */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-black/[0.06]">
                                                <div className="pt-5 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 md:gap-10">
                                                    {/* Left — description */}
                                                    <div>
                                                        <div className="mono text-[0.5rem] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "var(--slate)" }}>
                                                            {exp.role}
                                                        </div>
                                                        <p className="text-sm leading-relaxed font-medium mb-5 reading" style={{ color: "var(--slate)" }}>
                                                            {exp.desc}
                                                        </p>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {exp.highlights.map((h, hi) => (
                                                                <motion.span
                                                                    key={h}
                                                                    className="mono px-2.5 py-1 border border-black/[0.06] text-[0.45rem] font-bold uppercase tracking-[0.05em]"
                                                                    style={{ color: "var(--slate)" }}
                                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    transition={{ delay: 0.1 + hi * 0.04 }}
                                                                >
                                                                    {h}
                                                                </motion.span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Right — concrete accomplishment */}
                                                    <div className="md:border-l md:border-black/[0.06] md:pl-8 flex flex-col justify-center">
                                                        <div className="mono text-[0.4rem] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "var(--slate-light)" }}>
                                                            KEY ACCOMPLISHMENT
                                                        </div>
                                                        <div className="margin-note" style={{ maxWidth: "none" }}>
                                                            {exp.accomplishment}
                                                        </div>
                                                        {exp.id === "icliniq" && (
                                                            <motion.div
                                                                className="w-12 h-[3px] bg-[var(--red)] mt-4 origin-left"
                                                                initial={{ scaleX: 0 }}
                                                                animate={{ scaleX: 1 }}
                                                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                            />
                                                        )}
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
