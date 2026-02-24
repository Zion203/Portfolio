"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 md:px-10">
            {/* Accent line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 5%, var(--tva-amber) 30%, var(--tva-teal) 70%, transparent 95%)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo + tagline */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                            <div
                                className="w-8 h-8 rounded flex items-center justify-center"
                                style={{
                                    border: "1px solid var(--tva-amber)",
                                    background: "rgba(255, 107, 0, 0.08)",
                                }}
                            >
                                <span
                                    className="text-xs font-bold"
                                    style={{
                                        fontFamily: "'Orbitron', monospace",
                                        color: "var(--tva-amber)",
                                    }}
                                >
                                    JZ
                                </span>
                            </div>
                            <span
                                className="text-[0.6rem] tracking-[0.3em] uppercase"
                                style={{
                                    fontFamily: "'Orbitron', monospace",
                                    color: "var(--tva-text-muted)",
                                }}
                            >
                                FOR ALL TIME. ALWAYS.
                            </span>
                        </div>
                        <div
                            className="text-[0.6rem] tracking-[0.15em]"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "var(--tva-text-muted)",
                            }}
                        >
                            © 2025 JESUDAS ZION // TVA CASE FILE JZ-2024-001 // CLASSIFIED
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {[
                            {
                                icon: Github,
                                href: "https://github.com/Zion203",
                                label: "GitHub",
                            },
                            {
                                icon: Linkedin,
                                href: "https://linkedin.com/in/jesudas-zion-49b804305/",
                                label: "LinkedIn",
                            },
                            {
                                icon: Mail,
                                href: "mailto:jesudaszion@gmail.com",
                                label: "Email",
                            },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-10 h-10 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[var(--tva-amber-dim)]"
                                style={{
                                    background: "var(--tva-surface-light)",
                                    color: "var(--tva-text-muted)",
                                    border: "1px solid var(--tva-border)",
                                }}
                                data-cursor-hover
                            >
                                <social.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom text */}
                <div className="mt-8 text-center">
                    <div
                        className="text-[0.55rem] tracking-[0.15em]"
                        style={{
                            color: "var(--tva-text-muted)",
                            fontFamily: "'Space Mono', monospace",
                        }}
                    >
                        BUILT WITH NEXT.JS • TYPESCRIPT • FRAMER MOTION • TEMPORAL ENERGY
                    </div>
                </div>
            </div>
        </footer>
    );
}
