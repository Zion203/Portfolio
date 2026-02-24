"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
    {
        company: "iCliniq",
        role: "Full Stack Developer",
        period: "Present",
        description:
            "Leading development of scalable web applications and AI-powered solutions for online doctor consultation platforms.",
        achievements: [
            "Developed MSKCC healthcare project — supporting various medical management systems",
            "Created enterprise-level web applications with React and Node.js",
            "Implemented secure authentication with OAuth and JWT",
            "Built RESTful APIs serving 850K+ users with optimized performance",
            "Worked with healthcare data using various software architectures",
        ],
        accentColor: "var(--tva-amber)",
        status: "ACTIVE",
    },
    {
        company: "Freelance",
        role: "Full Stack Developer & AI Consultant",
        period: "2023 — Present",
        description:
            "Providing comprehensive development and AI solutions to various clients across different industries.",
        achievements: [
            "Contributing indie, scalable code with optimized API integrations",
            "Getting hands-on experience in healthcare consulting and implementation",
            "Building AI-powered applications for client-specific needs",
            "Implementing real-time communication features and progress tracking systems",
        ],
        accentColor: "var(--tva-teal)",
        status: "ONGOING",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 md:px-10 relative">
            {/* Divider */}
            <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, var(--tva-border-active), transparent)",
                }}
            />

            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <ScrollReveal>
                        <span
                            className="section-label"
                            style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                            04 — TIMELINE
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="section-heading mt-4"
                            style={{ fontFamily: "'Orbitron', monospace" }}
                        >
                            <span style={{ color: "var(--tva-text)" }}>SACRED </span>
                            <span className="gradient-text-amber">TIMELINE</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical glowing line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px]">
                        <motion.div
                            className="w-full h-full origin-top"
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--tva-amber), var(--tva-teal), rgba(255,107,0,0.1))",
                                boxShadow: "0 0 10px rgba(255, 107, 0, 0.3)",
                            }}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>

                    {/* Experience cards */}
                    <div className="space-y-16">
                        {experiences.map((exp, i) => (
                            <ScrollReveal
                                key={exp.company}
                                delay={i * 0.2}
                                direction="left"
                            >
                                <div className="relative pl-8 md:pl-20">
                                    {/* Timeline branch point */}
                                    <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                                        <motion.div
                                            className="w-4 h-4 rounded-full temporal-pulse"
                                            style={{
                                                background: exp.accentColor,
                                            }}
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.5,
                                            }}
                                        />
                                        {/* Horizontal connector line */}
                                        <div
                                            className="absolute top-1/2 left-full -translate-y-1/2 h-[1px] w-6"
                                            style={{
                                                background: exp.accentColor,
                                                opacity: 0.4,
                                            }}
                                        />
                                    </div>

                                    {/* Card */}
                                    <div className="tva-card p-8">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div>
                                                <h3
                                                    className="text-base font-bold tracking-wider"
                                                    style={{
                                                        fontFamily: "'Orbitron', monospace",
                                                        color: "var(--tva-text)",
                                                        fontSize: "0.85rem",
                                                    }}
                                                >
                                                    {exp.role}
                                                </h3>
                                                <div
                                                    className="text-sm mt-1"
                                                    style={{
                                                        color: exp.accentColor,
                                                        fontFamily: "'Space Mono', monospace",
                                                        fontSize: "0.7rem",
                                                        letterSpacing: "0.1em",
                                                    }}
                                                >
                                                    @ {exp.company}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                                                <span
                                                    className="px-3 py-1 rounded-sm text-[0.55rem] tracking-wider"
                                                    style={{
                                                        background: "var(--tva-surface-lighter)",
                                                        color: "var(--tva-text-muted)",
                                                        fontFamily: "'Space Mono', monospace",
                                                    }}
                                                >
                                                    {exp.period}
                                                </span>
                                                <span
                                                    className="px-2 py-1 rounded-sm text-[0.5rem] tracking-wider font-bold"
                                                    style={{
                                                        background: `${exp.accentColor}20`,
                                                        color: exp.accentColor,
                                                        fontFamily: "'Space Mono', monospace",
                                                        border: `1px solid ${exp.accentColor}30`,
                                                    }}
                                                >
                                                    {exp.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p
                                            className="mb-6 leading-relaxed text-sm"
                                            style={{
                                                color: "var(--tva-text-secondary)",
                                                fontFamily: "'Syne', sans-serif",
                                            }}
                                        >
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <ul className="space-y-3">
                                            {exp.achievements.map((achievement, ai) => (
                                                <motion.li
                                                    key={ai}
                                                    className="flex items-start gap-3 text-sm"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: 0.3 + ai * 0.1,
                                                    }}
                                                >
                                                    <span
                                                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                        style={{
                                                            background: exp.accentColor,
                                                            boxShadow: `0 0 6px ${exp.accentColor}`,
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            color: "var(--tva-text-secondary)",
                                                            fontFamily: "'Syne', sans-serif",
                                                        }}
                                                    >
                                                        {achievement}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
