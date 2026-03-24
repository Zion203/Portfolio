"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const practices = [
    {
        id: "piano",
        discipline: "Piano",
        mode: "Rhythm & restraint",
        trains: "Timing, listening, emotional pacing",
        note: "Where I return when I need clarity",
    },
    {
        id: "chess",
        discipline: "Chess",
        mode: "Strategy & patience",
        trains: "Tradeoffs, foresight, composure",
        note: "Reminds me to think two layers deeper",
    },
    {
        id: "writing",
        discipline: "Writing",
        mode: "Language & reflection",
        trains: "Precision, narrative, meaning",
        note: "Helps me turn vague thought into form",
    }
];

export default function ParallelPractice() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section id="practice" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
            {/* Background watermarks (very faint) */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-around opacity-[0.015] select-none uppercase font-[900] text-[8rem] md:text-[14rem] leading-[0.8] tracking-widest text-center overflow-hidden z-0 pointer-events-none text-black">
                <div>RHYTHM</div>
                <div>STRATEGY</div>
                <div>LANGUAGE</div>
            </div>

            {/* Corner Technical Details */}
            <div className="absolute top-6 left-6 mono text-[0.4rem] font-bold tracking-[0.2em] uppercase text-black/20 hidden md:block">
                FIELD NOTES
            </div>
            <div className="absolute top-6 right-6 mono text-[0.4rem] font-bold tracking-[0.2em] uppercase text-black/20 hidden md:block">
                PERSONAL SYSTEMS
            </div>
            <div className="absolute bottom-6 right-6 mono text-[0.4rem] font-bold tracking-[0.2em] uppercase text-[var(--red)]/40 hidden md:block">
                NON-COMMERCIAL
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* 1. Header band */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-14">
                        <span className="label">06</span>
                        <div className="h-px w-10 bg-black/[0.08]" />
                        <span className="label">PARALLEL PRACTICE</span>
                        <div className="flex-1" />
                        <span className="revision-mark">SUPP. 01</span>
                    </div>
                </ScrollReveal>

                {/* 2. Intro grid */}
                <ScrollReveal delay={0.1}>
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-24 mb-16 items-end">
                        <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-[900] uppercase leading-[0.9] tracking-[-0.03em] display">
                            Parallel<br />Practice
                        </h2>
                        <div className="lg:max-w-md pb-1 relative">
                            {/* Decorative framing line */}
                            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-black/[0.08] hidden lg:block" />
                            <p className="text-[0.9rem] font-medium leading-relaxed tracking-tight text-black/60 reading">
                                Disciplines outside software that shape how I think, build, and communicate. 
                                A supplementary record of ongoing systems.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 3. Practice table */}
                <div className="sheet shadow-sm" data-sheet-code="PRACTICE-01">
                    {/* Table Header (Desktop only) */}
                    <ScrollReveal delay={0.2}>
                        <div className="hidden md:grid grid-cols-[1fr_1.5fr_2fr_1.5fr] gap-6 px-8 py-5 border-b border-black/[0.08] bg-white/40 backdrop-blur-md">
                            <div className="mono text-[0.45rem] font-bold tracking-[0.25em] uppercase text-[var(--slate-light)]">DISCIPLINE</div>
                            <div className="mono text-[0.45rem] font-bold tracking-[0.25em] uppercase text-[var(--slate-light)]">MODE</div>
                            <div className="mono text-[0.45rem] font-bold tracking-[0.25em] uppercase text-[var(--slate-light)]">TRAINS</div>
                            <div className="mono text-[0.45rem] font-bold tracking-[0.25em] uppercase text-[var(--slate-light)]">NOTE</div>
                        </div>
                    </ScrollReveal>

                    {/* Table Rows */}
                    <div className="flex flex-col relative bg-transparent">
                        {practices.map((practice, i) => {
                            const isHovered = hovered === practice.id;

                            return (
                                <ScrollReveal key={practice.id} delay={0.3 + i * 0.1}>
                                    <motion.div
                                        className={`relative group border-b border-black/[0.06] last:border-b-0 cursor-default transition-colors duration-400 ${isHovered ? 'bg-white/60' : 'bg-transparent'}`}
                                        onMouseEnter={() => setHovered(practice.id)}
                                        onMouseLeave={() => setHovered(null)}
                                        layout
                                    >
                                        {/* Row left marker */}
                                        <motion.div 
                                            className="absolute left-[-1px] top-[-1px] bottom-[-1px] w-[2px] bg-[var(--red)] origin-top z-20 hidden md:block"
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: isHovered ? 1 : 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        
                                        {/* Expanding top rule on hover */}
                                        <motion.div 
                                            className="absolute top-[-1px] left-0 h-[1px] bg-[var(--red)] origin-left z-20 hidden md:block"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: isHovered ? 1 : 0 }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ width: "100%" }}
                                        />

                                        <div className="px-6 md:px-8 py-6 md:py-8 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_2fr_1.5fr] gap-6 md:gap-6 items-center relative z-10">
                                            
                                            {/* DISCIPLINE */}
                                            <div className="flex items-center gap-4">
                                                <span className="mono text-[0.45rem] font-bold opacity-20 block md:hidden">0{i + 1}</span>
                                                <span className="text-xl font-[800] uppercase tracking-[-0.02em] display">
                                                    {practice.discipline}
                                                </span>
                                            </div>

                                            {/* MODE */}
                                            <div>
                                                <span className="mono text-[0.45rem] font-bold tracking-[0.25em] uppercase text-[var(--slate-light)] block md:hidden mb-2">MODE</span>
                                                <span className="text-sm font-semibold tracking-tight text-black/80">
                                                    {practice.mode}
                                                </span>
                                            </div>

                                            {/* TRAINS */}
                                            <div>
                                                <span className="mono text-[0.45rem] font-bold tracking-[0.25em] uppercase text-[var(--slate-light)] block md:hidden mb-2">TRAINS</span>
                                                <span className="text-sm font-medium leading-relaxed text-[var(--slate)] reading">
                                                    {practice.trains}
                                                </span>
                                            </div>

                                            {/* NOTE & ANNOTATION */}
                                            <div>
                                                <span className="mono text-[0.45rem] font-bold tracking-[0.25em] uppercase text-[var(--slate-light)] block md:hidden mb-2">NOTE</span>
                                                <span className="text-sm italic font-medium text-[var(--slate-light)] transition-colors duration-300 group-hover:text-black/60">
                                                    {practice.note}
                                                </span>
                                            </div>

                                        </div>

                                    </motion.div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Footer strip */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-black/[0.08] pt-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                            <span className="mono text-[0.45rem] font-bold tracking-[0.2em] uppercase text-[var(--slate-light)]">
                                RHYTHM / STRATEGY / LANGUAGE
                            </span>
                            <div className="hidden md:block h-3 w-px bg-black/[0.1]" />
                            <span className="mono text-[0.45rem] font-bold tracking-[0.2em] uppercase text-[var(--slate-light)]">
                                ONGOING PRACTICES
                            </span>
                        </div>
                        <span className="mono text-[0.45rem] font-bold tracking-[0.2em] uppercase text-[var(--red)] opacity-70">
                            OUTSIDE SOFTWARE, STILL PART OF THE WORK
                        </span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
