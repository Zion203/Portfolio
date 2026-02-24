"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skillGroups = [
    {
        title: "LANGUAGES & FRAMEWORKS",
        category: "PRIMARY WEAPONS",
        color: "#FF6B00",
        colorDim: "rgba(255, 107, 0, 0.2)",
        skills: [
            { name: "React / Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Node.js / Express", level: 90 },
            { name: "Python", level: 85 },
            { name: "C++", level: 75 },
        ],
    },
    {
        title: "DATA & AI",
        category: "TEMPORAL TECH",
        color: "#00E5A0",
        colorDim: "rgba(0, 229, 160, 0.2)",
        skills: [
            { name: "MongoDB / APIs", level: 90 },
            { name: "Machine Learning", level: 80 },
            { name: "TensorFlow / PyTorch", level: 75 },
            { name: "Data Analysis", level: 80 },
            { name: "LLM Integration", level: 85 },
        ],
    },
    {
        title: "DESIGN & FRONTEND",
        category: "VISUAL OPS",
        color: "#FF6B00",
        colorDim: "rgba(255, 107, 0, 0.2)",
        skills: [
            { name: "UI/UX Design", level: 85 },
            { name: "Figma / Adobe", level: 80 },
            { name: "Responsive Design", level: 95 },
            { name: "Tailwind CSS", level: 90 },
            { name: "Framer Motion", level: 85 },
        ],
    },
    {
        title: "DEVOPS & TOOLS",
        category: "FIELD EQUIPMENT",
        color: "#00E5A0",
        colorDim: "rgba(0, 229, 160, 0.2)",
        skills: [
            { name: "Git / GitHub", level: 95 },
            { name: "Docker", level: 75 },
            { name: "AWS / Cloud", level: 70 },
            { name: "CI/CD Pipelines", level: 75 },
            { name: "Linux / Shell", level: 80 },
        ],
    },
];

function EnergyBar({
    name,
    level,
    color,
    index,
}: {
    name: string;
    level: number;
    color: string;
    index: number;
}) {
    const barRef = useRef(null);
    const isInView = useInView(barRef, { once: true, margin: "-30px" });

    return (
        <div className="mb-4" ref={barRef}>
            <div className="flex justify-between mb-1.5">
                <span
                    className="text-sm"
                    style={{
                        color: "var(--tva-text-secondary)",
                        fontFamily: "'Syne', sans-serif",
                    }}
                >
                    {name}
                </span>
                <span
                    className="text-[0.6rem] tracking-wider"
                    style={{
                        color: "var(--tva-text-muted)",
                        fontFamily: "'Space Mono', monospace",
                    }}
                >
                    {level}%
                </span>
            </div>
            <div
                className="h-1.5 rounded-sm overflow-hidden relative"
                style={{ background: "var(--tva-surface-lighter)" }}
            >
                {/* Background grid pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 9px)`,
                    }}
                />
                <motion.div
                    className="h-full rounded-sm relative"
                    style={{
                        background: `linear-gradient(90deg, ${color}, ${color}88)`,
                        boxShadow: `0 0 10px ${color}40`,
                    }}
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: `${level}%` } : { width: "0%" }}
                    transition={{
                        duration: 1.2,
                        delay: index * 0.12,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 md:px-10 relative">
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
                            02 — ABILITIES
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="section-heading mt-4"
                            style={{ fontFamily: "'Orbitron', monospace" }}
                        >
                            <span style={{ color: "var(--tva-text)" }}>VARIANT </span>
                            <span className="gradient-text-amber">POWERS</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p
                            className="mt-4 max-w-md mx-auto text-sm"
                            style={{
                                color: "var(--tva-text-secondary)",
                                fontFamily: "'Syne', sans-serif",
                            }}
                        >
                            Temporal scan readings of variant abilities and arsenal.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Skill cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillGroups.map((group, gi) => (
                        <ScrollReveal
                            key={group.title}
                            delay={gi * 0.1}
                            direction={gi % 2 === 0 ? "left" : "right"}
                        >
                            <div className="tva-card p-8 h-full relative">
                                {/* Category badge */}
                                <div
                                    className="inline-flex items-center px-3 py-1 rounded-sm mb-5"
                                    style={{
                                        background: group.colorDim,
                                        border: `1px solid ${group.color}33`,
                                    }}
                                >
                                    <span
                                        className="text-[0.55rem] tracking-[0.15em] uppercase font-semibold"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            color: group.color,
                                        }}
                                    >
                                        {group.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-lg font-bold mb-6 tracking-wider"
                                    style={{
                                        fontFamily: "'Orbitron', monospace",
                                        color: "var(--tva-text)",
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    {group.title}
                                </h3>

                                {/* Energy bars */}
                                {group.skills.map((skill, si) => (
                                    <EnergyBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        color={group.color}
                                        index={si}
                                    />
                                ))}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
