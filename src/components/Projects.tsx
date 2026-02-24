"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Elever",
        description:
            "A premium e-commerce platform built for modern online retail. Features seamless product browsing, cart management, secure checkout, and responsive design across all devices.",
        tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        category: "FULL STACK",
        highlight: "E-COMMERCE",
        threatLevel: "OMEGA",
        link: "https://elever-online.vercel.app/",
    },
    {
        title: "Sarah",
        description:
            "An intelligent AI assistant currently in development. Uses advanced language models and smart memory management to deliver contextual, personalized interactions.",
        tech: ["Python", "AI/ML", "LangChain", "React"],
        category: "AI / ML",
        highlight: "IN DEVELOPMENT",
        threatLevel: "OMEGA",
        link: "https://github.com/Zion203/Sarah",
    },
    {
        title: "HoverNest",
        description:
            "A professional freelancing platform connecting clients with top talent. Built as a client project with polished UI, real-time features, and production-grade reliability.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        category: "FULL STACK",
        highlight: "FREELANCE PROJECT",
        threatLevel: "ALPHA",
        link: "https://www.hovernest.com/",
    },
    {
        title: "D-Twin",
        description:
            "A mobile-first digital twin platform powered by AI. Creates intelligent digital replicas for monitoring, simulation, and predictive analysis in real time.",
        tech: ["React Native", "AI/ML", "Node.js", "Vercel"],
        category: "AI / MOBILE",
        highlight: "DIGITAL TWIN",
        threatLevel: "OMEGA",
        link: "https://d-twinpro.vercel.app/",
    },
    {
        title: "You Journal",
        description:
            "A personal journaling web app designed for mindful self-reflection. Clean, distraction-free interface with secure entries and an intuitive writing experience.",
        tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        category: "FRONTEND",
        highlight: "PERSONAL TOOL",
        threatLevel: "BETA",
        link: "https://mye-journal.vercel.app/",
    },
    {
        title: "Train Like a Trainer",
        description:
            "An online sports learning platform helping users build athletic skills through tutorials, community engagement, and personalized progress tracking.",
        tech: ["React", "Node.js", "MongoDB", "AWS"],
        category: "FULL STACK",
        highlight: "CAPSTONE PROJECT",
        threatLevel: "ALPHA",
        link: "https://github.com/kalviumcommunity/S51_JesudasZion_Capstone_TrainLikeTrainer",
    },
];

const threatColors: Record<string, string> = {
    OMEGA: "var(--tva-red)",
    ALPHA: "var(--tva-amber)",
    BETA: "var(--tva-teal)",
};

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ScrollReveal
            delay={index * 0.1}
            direction={index % 2 === 0 ? "left" : "right"}
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <motion.div
                    className="tva-card p-7 h-full relative overflow-hidden group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4 }}
                    data-cursor-hover
                >
                    {/* Scan effect on hover */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.04) 50%, transparent 100%)",
                            backgroundSize: "100% 200%",
                        }}
                        animate={{
                            backgroundPosition: isHovered ? ["0% 0%", "0% 100%"] : "0% 0%",
                        }}
                        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                    />

                    {/* Top row — category + arrow */}
                    <div className="relative flex items-start justify-between mb-5">
                        <div>
                            <span
                                className="text-[0.55rem] uppercase tracking-[0.2em]"
                                style={{
                                    color: "var(--tva-amber)",
                                    fontFamily: "'Space Mono', monospace",
                                }}
                            >
                                {project.category}
                            </span>
                            <h3
                                className="text-base font-bold mt-2 tracking-wider"
                                style={{
                                    fontFamily: "'Orbitron', monospace",
                                    color: "var(--tva-text)",
                                    fontSize: "0.85rem",
                                }}
                            >
                                {project.title}
                            </h3>
                        </div>
                        <motion.div
                            animate={{ rotate: isHovered ? 0 : -45 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowUpRight
                                size={18}
                                style={{
                                    color: isHovered
                                        ? "var(--tva-amber)"
                                        : "var(--tva-text-muted)",
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Description */}
                    <p
                        className="relative text-sm leading-relaxed mb-5"
                        style={{
                            color: "var(--tva-text-secondary)",
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {project.description}
                    </p>

                    {/* Badges */}
                    <div className="relative flex items-center gap-2 mb-5">
                        <span
                            className="inline-flex items-center px-2.5 py-1 rounded-sm text-[0.55rem] font-semibold tracking-wider"
                            style={{
                                background: "var(--tva-amber-dim)",
                                color: "var(--tva-amber)",
                                fontFamily: "'Space Mono', monospace",
                            }}
                        >
                            ◆ {project.highlight}
                        </span>
                        <span
                            className="inline-flex items-center px-2.5 py-1 rounded-sm text-[0.55rem] font-semibold tracking-wider"
                            style={{
                                background: `${threatColors[project.threatLevel]}20`,
                                color: threatColors[project.threatLevel],
                                fontFamily: "'Space Mono', monospace",
                                border: `1px solid ${threatColors[project.threatLevel]}30`,
                            }}
                        >
                            {project.threatLevel}
                        </span>
                    </div>

                    {/* Tech stack */}
                    <div className="relative">
                        <div
                            className="text-[0.5rem] uppercase tracking-[0.2em] mb-2"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "var(--tva-text-muted)",
                            }}
                        >
                            EQUIPMENT USED
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-2.5 py-1 rounded-sm text-[0.6rem]"
                                    style={{
                                        background: "var(--tva-surface-lighter)",
                                        color: "var(--tva-text-secondary)",
                                        fontFamily: "'Space Mono', monospace",
                                        border: "1px solid var(--tva-border)",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom accent line on hover */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px]"
                        style={{ background: "var(--tva-amber)" }}
                        initial={{ width: "0%" }}
                        animate={{ width: isHovered ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </motion.div>
            </a>
        </ScrollReveal>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 md:px-10 relative">
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
                            03 — MISSIONS
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="section-heading mt-4"
                            style={{ fontFamily: "'Orbitron', monospace" }}
                        >
                            <span style={{ color: "var(--tva-text)" }}>NEXUS </span>
                            <span className="gradient-text-amber">EVENTS</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p
                            className="mt-4 max-w-lg mx-auto text-sm"
                            style={{
                                color: "var(--tva-text-secondary)",
                                fontFamily: "'Syne', sans-serif",
                            }}
                        >
                            A collection of critical missions that impacted the sacred timeline.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
