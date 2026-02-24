"use client";

import ScrollReveal from "./ScrollReveal";
import { MapPin, Mail, Briefcase } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-10 relative">
            {/* Section divider */}
            <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, var(--tva-border-active), transparent)",
                }}
            />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left column — label & heading */}
                    <div className="lg:col-span-4">
                        <ScrollReveal>
                            <span
                                className="section-label"
                                style={{ fontFamily: "'Space Mono', monospace" }}
                            >
                                01 — DOSSIER
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2
                                className="section-heading mt-4"
                                style={{ fontFamily: "'Orbitron', monospace" }}
                            >
                                <span className="gradient-text-amber">AGENT</span>{" "}
                                <span style={{ color: "var(--tva-text)" }}>FILE</span>
                            </h2>
                        </ScrollReveal>

                        {/* Quick facts — TVA readouts */}
                        <ScrollReveal delay={0.2}>
                            <div className="mt-8 space-y-4">
                                {[
                                    {
                                        icon: MapPin,
                                        label: "LOCATION",
                                        value: "Chennai, Tamil Nadu",
                                        color: "var(--tva-amber)",
                                        colorDim: "var(--tva-amber-dim)",
                                    },
                                    {
                                        icon: Briefcase,
                                        label: "ASSIGNMENT",
                                        value: "Full Stack Developer @ iCliniq",
                                        color: "var(--tva-teal)",
                                        colorDim: "var(--tva-teal-dim)",
                                    },
                                    {
                                        icon: Mail,
                                        label: "COMMS CHANNEL",
                                        value: "jesudaszion@gmail.com",
                                        color: "var(--tva-amber)",
                                        colorDim: "var(--tva-amber-dim)",
                                    },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 rounded flex items-center justify-center"
                                            style={{ background: item.colorDim }}
                                        >
                                            <item.icon
                                                size={16}
                                                style={{ color: item.color }}
                                            />
                                        </div>
                                        <div>
                                            <div
                                                className="text-[0.55rem] uppercase tracking-[0.2em]"
                                                style={{
                                                    color: "var(--tva-text-muted)",
                                                    fontFamily: "'Space Mono', monospace",
                                                }}
                                            >
                                                {item.label}
                                            </div>
                                            <div
                                                className="text-sm"
                                                style={{
                                                    color: "var(--tva-text)",
                                                    fontFamily: "'Syne', sans-serif",
                                                }}
                                            >
                                                {item.value}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right column — bio text in classified file */}
                    <div className="lg:col-span-8">
                        <ScrollReveal delay={0.15}>
                            <div
                                className="tva-card p-8 md:p-10 relative overflow-hidden"
                            >
                                {/* Classified watermark */}
                                <div className="classified-stamp">CLASSIFIED</div>

                                {/* File tab */}
                                <div
                                    className="absolute -top-[1px] left-6 px-4 py-1.5 rounded-b"
                                    style={{
                                        background: "var(--tva-surface-light)",
                                        border: "1px solid var(--tva-border)",
                                        borderTop: "2px solid var(--tva-amber)",
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.55rem",
                                        letterSpacing: "0.15em",
                                        color: "var(--tva-amber)",
                                    }}
                                >
                                    CASE FILE #JZ-2024-001
                                </div>

                                <div className="mt-4">
                                    <p
                                        className="text-lg md:text-xl leading-relaxed mb-6"
                                        style={{
                                            color: "var(--tva-text)",
                                            fontFamily: "'Syne', sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        A leader by nature and a builder by choice, I see the world in
                                        layers of logic, emotion, and unseen connections. My passion for
                                        building exceptional software and systems keeps me pushing
                                        boundaries every single day.
                                    </p>
                                    <p
                                        className="text-base leading-relaxed mb-6"
                                        style={{
                                            color: "var(--tva-text-secondary)",
                                            fontFamily: "'Syne', sans-serif",
                                        }}
                                    >
                                        I believe in the power of technology to solve real-world problems
                                        meaningfully. From healthcare platforms serving hundreds of
                                        thousands of users to AI-powered feedback systems, I build
                                        things that matter.
                                    </p>
                                    <p
                                        className="text-base leading-relaxed"
                                        style={{
                                            color: "var(--tva-text-secondary)",
                                            fontFamily: "'Syne', sans-serif",
                                        }}
                                    >
                                        Currently leading development at{" "}
                                        <span style={{ color: "var(--tva-amber)" }}>iCliniq</span>,
                                        building scalable web applications and AI-powered solutions for
                                        online doctor consultation — contributing to projects that impact
                                        real lives in healthcare.
                                    </p>
                                </div>

                                {/* Divider */}
                                <div
                                    className="mt-8 h-[1px]"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, var(--tva-amber), transparent)",
                                        opacity: 0.25,
                                    }}
                                />

                                {/* Stats row — power readings */}
                                <div className="mt-8 grid grid-cols-3 gap-6">
                                    {[
                                        { value: "850K+", label: "USERS SERVED", color: "gradient-text-amber" },
                                        { value: "10+", label: "MISSIONS COMPLETED", color: "gradient-text-teal" },
                                        { value: "3+", label: "YEARS ACTIVE", color: "gradient-text-amber" },
                                    ].map((stat) => (
                                        <div key={stat.label}>
                                            <div
                                                className={`text-3xl md:text-4xl font-bold ${stat.color}`}
                                                style={{ fontFamily: "'Orbitron', monospace" }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div
                                                className="text-[0.55rem] uppercase tracking-[0.15em] mt-1"
                                                style={{
                                                    color: "var(--tva-text-muted)",
                                                    fontFamily: "'Space Mono', monospace",
                                                }}
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
