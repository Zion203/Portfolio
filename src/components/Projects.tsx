"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Train Like a Trainer",
        description:
            "Online Sports Learning Platform with 850K+ users. An expansive platform helping users build sports skills through tutorials, community engagement, and personalized progress tracking.",
        tech: ["React", "Node.js", "MongoDB", "AWS"],
        category: "FULL STACK",
        highlight: "850K+ USERS",
        threatLevel: "OMEGA",
        link: "#", // TODO: Add project link
    },
    {
        title: "Feedback Personalized Video",
        description:
            "AI-powered video feedback system for personalized learning experiences with advanced analytics, real-time processing, and comprehensive reporting dashboards.",
        tech: ["Python", "AI/ML", "Video Processing", "React"],
        category: "AI / ML",
        highlight: "AI-POWERED",
        threatLevel: "ALPHA",
        link: "#", // TODO: Add project link
    },
    {
        title: "Google OAuth Integration",
        description:
            "Secure user authentication system with Google OAuth for seamless login experiences across multiple platforms. Enterprise-grade security with JWT tokens.",
        tech: ["OAuth 2.0", "Node.js", "Express", "JWT"],
        category: "BACKEND",
        highlight: "ENTERPRISE AUTH",
        threatLevel: "BETA",
        link: "#", // TODO: Add project link
    },
    {
        title: "RESTful API Backend",
        description:
            "Robust backend architecture with MongoDB integration, supporting high-traffic applications with optimal performance, caching, and load balancing.",
        tech: ["Node.js", "Express", "MongoDB", "REST API"],
        category: "BACKEND",
        highlight: "HIGH TRAFFIC",
        threatLevel: "BETA",
        link: "#", // TODO: Add project link
    },
    {
        title: "Real-time Communication",
        description:
            "WebSocket-based real-time messaging and notification system for enhanced user engagement with presence detection and typing indicators.",
        tech: ["WebSocket", "Socket.io", "React", "Node.js"],
        category: "FULL STACK",
        highlight: "REAL-TIME",
        threatLevel: "ALPHA",
        link: "#", // TODO: Add project link
    },
    {
        title: "AI Progress Tracking",
        description:
            "Intelligent progress tracking system using machine learning to provide personalized insights, adaptive recommendations, and visual analytics.",
        tech: ["Python", "TensorFlow", "Analytics", "React"],
        category: "AI / ML",
        highlight: "ML-DRIVEN",
        threatLevel: "OMEGA",
        link: "#", // TODO: Add project link
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
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noopener noreferrer" : undefined}
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

                    {/* Top row — category + threat level */}
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
                        {/* Impact badge */}
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
                        {/* Threat level */}
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

                    {/* Equipment used (tech) */}
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
