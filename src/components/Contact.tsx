"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    ArrowUpRight,
} from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "COMMS CHANNEL",
        value: "jesudaszion@gmail.com",
        href: "mailto:jesudaszion@gmail.com",
        color: "var(--tva-amber)",
        colorDim: "var(--tva-amber-dim)",
    },
    {
        icon: Phone,
        label: "DIRECT LINE",
        value: "+91 9176391966",
        href: "tel:+919176391966",
        color: "var(--tva-teal)",
        colorDim: "var(--tva-teal-dim)",
    },
    {
        icon: MapPin,
        label: "COORDINATES",
        value: "Chennai, Tamil Nadu",
        href: "#",
        color: "var(--tva-amber)",
        colorDim: "var(--tva-amber-dim)",
    },
];

const socials = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/Zion203",
        handle: "@Zion203",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/jesudas-zion-49b804305/",
        handle: "Jesudas Zion",
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:jesudaszion@gmail.com",
        handle: "jesudaszion@gmail.com",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-10 relative">
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
                            06 — COMMS
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="section-heading mt-4"
                            style={{ fontFamily: "'Orbitron', monospace" }}
                        >
                            <span style={{ color: "var(--tva-text)" }}>TEMPAD </span>
                            <span className="gradient-text-amber">TERMINAL</span>
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
                            Open a communication channel across the sacred timeline.
                            All transmissions are encrypted and temporally secure.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Left — Contact info cards */}
                    <div className="space-y-5">
                        {contactInfo.map((item, i) => (
                            <ScrollReveal key={item.label} delay={i * 0.1} direction="left">
                                <a
                                    href={item.href}
                                    className="tva-card p-5 flex items-center gap-5 group"
                                    data-cursor-hover
                                >
                                    <div
                                        className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                        style={{ background: item.colorDim }}
                                    >
                                        <item.icon
                                            size={20}
                                            style={{ color: item.color }}
                                        />
                                    </div>
                                    <div>
                                        <div
                                            className="text-[0.5rem] uppercase tracking-[0.2em] mb-1"
                                            style={{
                                                color: "var(--tva-text-muted)",
                                                fontFamily: "'Space Mono', monospace",
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                        <div
                                            className="text-sm group-hover:text-[var(--tva-amber)] transition-colors"
                                            style={{
                                                color: "var(--tva-text)",
                                                fontFamily: "'Syne', sans-serif",
                                            }}
                                        >
                                            {item.value}
                                        </div>
                                    </div>
                                </a>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Right — TemPad terminal */}
                    <div>
                        <ScrollReveal delay={0.15} direction="right">
                            <div
                                className="tva-card p-8 relative overflow-hidden"
                            >
                                {/* TemPad screen effect */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            "repeating-linear-gradient(0deg, rgba(255,107,0,0.01) 0px, rgba(255,107,0,0.01) 1px, transparent 1px, transparent 4px)",
                                    }}
                                />

                                {/* Terminal header */}
                                <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: "1px solid var(--tva-border)" }}>
                                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--tva-amber)" }} />
                                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--tva-teal)" }} />
                                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--tva-text-muted)" }} />
                                    <span
                                        className="ml-3 text-[0.55rem] tracking-[0.15em]"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            color: "var(--tva-text-muted)",
                                        }}
                                    >
                                        TEMPAD_COMMS_v2.1
                                    </span>
                                </div>

                                <h3
                                    className="text-sm font-bold tracking-wider mb-6"
                                    style={{
                                        fontFamily: "'Orbitron', monospace",
                                        color: "var(--tva-text)",
                                        fontSize: "0.8rem",
                                    }}
                                >
                                    COMMUNICATION PORTALS
                                </h3>

                                <div className="space-y-3 mb-8">
                                    {socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 rounded transition-all duration-300 group hover:translate-x-1"
                                            style={{
                                                background: "var(--tva-surface-light)",
                                                border: "1px solid var(--tva-border)",
                                            }}
                                            data-cursor-hover
                                        >
                                            <div className="flex items-center gap-3">
                                                <social.icon
                                                    size={18}
                                                    style={{ color: "var(--tva-text-muted)" }}
                                                    className="group-hover:text-[var(--tva-amber)] transition-colors"
                                                />
                                                <div>
                                                    <div
                                                        className="text-xs font-medium"
                                                        style={{
                                                            color: "var(--tva-text)",
                                                            fontFamily: "'Syne', sans-serif",
                                                        }}
                                                    >
                                                        {social.label}
                                                    </div>
                                                    <div
                                                        className="text-[0.6rem]"
                                                        style={{
                                                            color: "var(--tva-text-muted)",
                                                            fontFamily: "'Space Mono', monospace",
                                                        }}
                                                    >
                                                        {social.handle}
                                                    </div>
                                                </div>
                                            </div>
                                            <ArrowUpRight
                                                size={14}
                                                style={{ color: "var(--tva-text-muted)" }}
                                                className="group-hover:text-[var(--tva-amber)] group-hover:rotate-0 -rotate-45 transition-all"
                                            />
                                        </a>
                                    ))}
                                </div>

                                {/* CTA button */}
                                <a
                                    href="mailto:jesudaszion@gmail.com"
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-[0.65rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl group"
                                    style={{
                                        fontFamily: "'Orbitron', monospace",
                                        background: "var(--tva-amber)",
                                        color: "var(--tva-void)",
                                        boxShadow: "0 0 30px rgba(255, 107, 0, 0.2)",
                                    }}
                                    data-cursor-hover
                                >
                                    <Send
                                        size={14}
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    />
                                    TRANSMIT MESSAGE
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
