"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const systems = [
    {
        category: "LANGUAGES",
        icon: "◈",
        primary: ["TypeScript", "Python", "JavaScript"],
        supporting: ["HTML5", "CSS3", "SQL"],
    },
    {
        category: "PRODUCT SURFACES",
        icon: "◧",
        primary: ["React", "Next.js", "React Native"],
        supporting: ["Astro", "Framer Motion"],
    },
    {
        category: "BACKEND SYSTEMS",
        icon: "◨",
        primary: ["Node.js", "Express", "REST APIs"],
        supporting: ["DDD Architecture", "WebSockets"],
    },
    {
        category: "AI TOOLING",
        icon: "◐",
        primary: ["LangChain", "LLMs", "Prompt Engineering"],
        supporting: ["TensorFlow", "RAG Pipelines"],
    },
    {
        category: "DATA & STORAGE",
        icon: "◑",
        primary: ["MongoDB", "MySQL"],
        supporting: ["Redis", "S3"],
    },
    {
        category: "DELIVERY",
        icon: "◒",
        primary: ["Git", "Vercel", "AWS"],
        supporting: ["Agile/Sprints", "CI/CD"],
    },
];

export default function SpecTable() {
    return (
        <section id="skills" className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
            {/* Header */}
            <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                    <span className="label">03</span>
                    <div className="h-px w-10 bg-black/[0.08]" />
                    <span className="label">SPEC TABLE</span>
                    <div className="flex-1" />
                    <span className="revision-mark">REV 01</span>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[900] uppercase leading-[0.9] tracking-[-0.03em] mb-14 display">
                    Systems &<br /><span className="opacity-10">Toolkit</span>
                </h2>
            </ScrollReveal>

            {/* Systems inventory — grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {systems.map((sys, i) => (
                    <ScrollReveal key={sys.category} delay={i * 0.06}>
                        <motion.div
                            className="sheet p-6 md:p-7 hover:border-black/12 transition-all group"
                            data-sheet-code={sys.category}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-5">
                                <span className="text-lg opacity-30">{sys.icon}</span>
                                <span className="mono text-[0.55rem] font-bold tracking-[0.15em] uppercase">
                                    {sys.category}
                                </span>
                            </div>

                            {/* Primary tools — bold, listed first */}
                            <div className="mb-4">
                                {sys.primary.map((tool, ti) => (
                                    <motion.div
                                        key={tool}
                                        className="flex items-center gap-2 mb-2 last:mb-0"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + ti * 0.06 }}
                                    >
                                        <div className="w-[5px] h-[5px] bg-[var(--red)] flex-shrink-0" />
                                        <span className="text-sm font-bold tracking-tight reading">
                                            {tool}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Supporting tools — lighter */}
                            <div className="border-t border-black/[0.04] pt-3">
                                <div className="flex flex-wrap gap-x-2 gap-y-1">
                                    {sys.supporting.map((tool, ti) => (
                                        <span
                                            key={tool}
                                            className="mono text-[0.5rem] font-bold tracking-[0.05em] uppercase"
                                            style={{ color: "var(--slate-light)" }}
                                        >
                                            {tool}{ti < sys.supporting.length - 1 ? " ·" : ""}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Summary line */}
            <ScrollReveal delay={0.3}>
                <div className="mt-10 flex items-center gap-4">
                    <span className="mono text-[0.45rem] font-bold tracking-[0.15em] uppercase" style={{ color: "var(--slate-light)" }}>
                        {systems.length} SYSTEMS
                    </span>
                    <div className="h-px w-4 bg-black/[0.06]" />
                    <span className="mono text-[0.45rem] font-bold tracking-[0.15em] uppercase" style={{ color: "var(--slate-light)" }}>
                        {systems.reduce((a, s) => a + s.primary.length + s.supporting.length, 0)} TOOLS
                    </span>
                    <div className="h-px w-4 bg-black/[0.06]" />
                    <span className="mono text-[0.45rem] font-bold tracking-[0.1em]" style={{ color: "var(--red)", opacity: 0.5 }}>
                        CONFIDENCE SHOWN BY ARRANGEMENT
                    </span>
                </div>
            </ScrollReveal>
        </section>
    );
}
