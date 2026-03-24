"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
    { id: "home", label: "COVER", code: "00" },
    { id: "about", label: "BRIEF", code: "01" },
    { id: "projects", label: "INDEX", code: "02" },
    { id: "skills", label: "SPEC", code: "03" },
    { id: "experience", label: "SECTION", code: "04" },
    { id: "practice", label: "PRACTICE", code: "06" },
    { id: "contact", label: "STAMP", code: "07" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [scrollPct, setScrollPct] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);

            // Scroll percentage
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setScrollPct(docH > 0 ? Math.round((window.scrollY / docH) * 100) : 0);

            // Find active section
            const offsets = sections.map(s => {
                const el = document.getElementById(s.id);
                // getBoundingClientRect().top is relative to the viewport.
                // If it's <= 200, it has scrolled into the upper part of the viewing window.
                return { id: s.id, top: el?.getBoundingClientRect().top ?? Infinity };
            });
            const passedSections = offsets.filter(s => s.top <= 200);
            const currentId = passedSections.length > 0 
                ? passedSections[passedSections.length - 1].id 
                : sections[0].id;
            
            setActive(currentId);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const activeSection = sections.find(s => s.id === active);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? "bg-[#F5F2EC]/92 backdrop-blur-sm" : ""
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {/* Main nav row */}
                <div className="px-6 md:px-16 lg:px-24 py-3 flex items-center justify-between">
                    {/* Logo Area */}
                    <a href="#home" data-cursor-hover className="flex items-center gap-4 group">
                        <div className="w-10 h-10 border-2 border-black/80 flex items-center justify-center p-2 transition-all duration-300 bg-white group-hover:border-[var(--red)]">
                            <Image src="/logo.svg" alt="JZ Logo" width={24} height={24} className="w-full h-full object-contain transition-colors duration-300 group-hover:text-[var(--red)] text-black" />
                        </div>
                        <div className="hidden md:flex flex-col">
                            <span className="mono text-[0.4rem] font-bold tracking-[0.25em] text-[#C8102E] uppercase transition-opacity group-hover:opacity-80">
                                WWW.JESUDASZION.COM
                            </span>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="mono text-[0.38rem] font-bold tracking-[0.15em] uppercase opacity-40">
                                    DOC.SET
                                </span>
                                <div className="w-1 h-1 bg-black/10 rounded-full" />
                                <span className="mono text-[0.38rem] font-bold tracking-[0.12em] uppercase opacity-20">
                                    REV.01 — 2025
                                </span>
                            </div>
                        </div>
                    </a>

                    {/* Navigation links */}
                    <div className="flex items-center gap-0">
                        {sections.map(s => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                data-cursor-hover
                                className={`mono px-3 py-2 text-[0.5rem] font-bold tracking-[0.12em] uppercase transition-all relative flex items-center gap-1.5 ${
                                    active === s.id
                                        ? "opacity-100"
                                        : "opacity-20 hover:opacity-50"
                                }`}
                            >
                                {/* Technical marker for active state */}
                                {active === s.id && (
                                    <motion.span
                                        className="w-[5px] h-[5px] bg-[#C8102E] inline-block flex-shrink-0"
                                        layoutId="nav-marker"
                                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                    />
                                )}
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Document status line */}
                {scrolled && (
                    <motion.div
                        className="border-t border-black/[0.05] px-6 md:px-16 lg:px-24 py-1.5 flex items-center justify-between"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center gap-4">
                            <span className="mono text-[0.4rem] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--slate-light)" }}>
                                SHT-{activeSection?.code}
                            </span>
                            <span className="mono text-[0.4rem] font-bold tracking-[0.15em] uppercase" style={{ color: "var(--slate-light)" }}>
                                {activeSection?.label}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="mono text-[0.4rem] font-bold tracking-[0.15em] uppercase" style={{ color: "var(--slate-light)" }}>
                                2025
                            </span>
                            <div className="w-16 h-[2px] bg-black/[0.06] relative overflow-hidden hidden md:block">
                                <motion.div
                                    className="h-full bg-[#C8102E] absolute left-0 top-0"
                                    style={{ width: `${scrollPct}%` }}
                                    transition={{ duration: 0.15 }}
                                />
                            </div>
                            <span className="mono text-[0.4rem] font-bold tracking-[0.15em] hidden md:inline" style={{ color: "var(--slate-light)" }}>
                                {scrollPct}%
                            </span>
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
}
