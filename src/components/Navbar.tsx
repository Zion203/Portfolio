"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const navLinks = [
    { label: "DOSSIER", href: "#about" },
    { label: "ABILITIES", href: "#skills" },
    { label: "MISSIONS", href: "#projects" },
    { label: "TIMELINE", href: "#experience" },
    { label: "GAME", href: "#game" },
    { label: "COMMS", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[100] ${scrolled ? "py-2" : "py-4"}`}
            style={{
                background: scrolled
                    ? "rgba(13, 9, 7, 0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(255, 107, 0, 0.1)"
                    : "1px solid transparent",
                transition: "background 0.5s, backdrop-filter 0.5s, border-bottom 0.5s, padding 0.5s",
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.8,
                delay: 2.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {/* Top amber accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 5%, var(--tva-amber) 20%, var(--tva-amber-bright) 50%, var(--tva-amber) 80%, transparent 95%)",
                    opacity: scrolled ? 0.8 : 0.4,
                    transition: "opacity 0.5s",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                {/* Logo — TVA badge */}
                <a
                    href="#hero"
                    className="relative group flex items-center gap-3"
                    data-cursor-hover
                >
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
                    <div className="hidden sm:block">
                        <div
                            className="text-[0.55rem] tracking-[0.2em] uppercase"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "var(--tva-text-muted)",
                            }}
                        >
                            TVA CASE FILE
                        </div>
                        <div
                            className="text-xs font-semibold tracking-wider"
                            style={{
                                fontFamily: "'Orbitron', monospace",
                                color: "var(--tva-amber)",
                            }}
                        >
                            JESUDAS ZION
                        </div>
                    </div>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            className="relative px-4 py-2 text-[0.65rem] tracking-[0.15em] font-medium transition-all duration-300 group"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "var(--tva-text-secondary)",
                            }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.0 + i * 0.08 }}
                            data-cursor-hover
                        >
                            <span className="group-hover:text-[var(--tva-amber)] transition-colors duration-300">
                                [{link.label}]
                            </span>
                            <span
                                className="absolute bottom-0 left-2 right-2 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                style={{ background: "var(--tva-amber)" }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Social + CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="https://github.com/Zion203"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded transition-colors duration-300 hover:bg-[var(--tva-amber-dim)]"
                        style={{ color: "var(--tva-text-secondary)" }}
                        data-cursor-hover
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://linkedin.com/in/jesudas-zion-49b804305/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded transition-colors duration-300 hover:bg-[var(--tva-amber-dim)]"
                        style={{ color: "var(--tva-text-secondary)" }}
                        data-cursor-hover
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="#contact"
                        className="ml-1 px-5 py-2 rounded text-[0.65rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl"
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            background: "var(--tva-amber)",
                            color: "var(--tva-void)",
                            boxShadow: "0 0 20px rgba(255, 107, 0, 0.2)",
                        }}
                        data-cursor-hover
                    >
                        RECRUIT
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    data-cursor-hover
                >
                    <motion.span
                        className="w-6 h-[2px] block"
                        style={{ background: "var(--tva-amber)" }}
                        animate={
                            mobileOpen
                                ? { rotate: 45, y: 6 }
                                : { rotate: 0, y: 0 }
                        }
                    />
                    <motion.span
                        className="w-6 h-[2px] block"
                        style={{ background: "var(--tva-amber)" }}
                        animate={
                            mobileOpen ? { opacity: 0 } : { opacity: 1 }
                        }
                    />
                    <motion.span
                        className="w-6 h-[2px] block"
                        style={{ background: "var(--tva-amber)" }}
                        animate={
                            mobileOpen
                                ? { rotate: -45, y: -6 }
                                : { rotate: 0, y: 0 }
                        }
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="md:hidden tva-glass-strong mt-2 mx-4 rounded p-6"
                        style={{ border: "1px solid var(--tva-border)" }}
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm tracking-[0.15em] py-2 transition-colors hover:text-[var(--tva-amber)]"
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        color: "var(--tva-text-secondary)",
                                    }}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    [{link.label}]
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
