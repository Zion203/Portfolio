"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function StampBlock() {
    return (
        <section id="contact" className="bg-[#111] text-[#F5F2EC] relative overflow-hidden">
            <div className="min-h-[80vh] flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-20">

                {/* Top — sheet label */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="mono text-[0.5rem] font-bold tracking-[0.25em] uppercase opacity-20">07</span>
                    <div className="h-px w-10 bg-white/10" />
                    <span className="mono text-[0.5rem] font-bold tracking-[0.25em] uppercase opacity-20">STAMP BLOCK</span>
                    <div className="flex-1" />
                    <span className="mono text-[0.35rem] font-bold tracking-[0.15em] uppercase opacity-15 border border-white/10 px-2 py-0.5">REV 01</span>
                </div>

                {/* Big CTA */}
                <div className="flex-1 flex flex-col justify-center py-8">
                    <ScrollReveal>
                        <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-[900] uppercase leading-[0.9] tracking-[-0.03em] mb-6 display">
                            Let&apos;s Build<br />
                            <span className="opacity-15">Together.</span>
                        </h2>
                    </ScrollReveal>

                    {/* Emotional note */}
                    <ScrollReveal delay={0.05}>
                        <p className="text-sm font-medium max-w-lg mb-3 leading-relaxed reading" style={{ opacity: 0.5 }}>
                            I want to work on things that matter — systems that make
                            complexity feel simple, tools that respect people&apos;s time.
                        </p>
                    </ScrollReveal>

                    {/* What kind of work */}
                    <ScrollReveal delay={0.1}>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-[5px] h-[5px] bg-[var(--red)]" />
                            <span className="mono text-[0.55rem] font-bold tracking-[0.12em] uppercase" style={{ opacity: 0.6 }}>
                                Seeking: Product Engineering · AI-Integrated Systems · Meaningful Collaborations
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <div className="flex items-center gap-3">
                            <a href="mailto:jesudaszion@gmail.com" data-cursor-hover
                                className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black mono text-[0.6rem] font-bold tracking-[0.15em] uppercase hover:bg-[var(--red)] hover:text-white transition-all duration-200 w-fit">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
                                </svg>
                                SEND TRANSMISSION
                            </a>
                            <span className="mono text-[0.4rem] font-bold tracking-[0.1em] uppercase opacity-20">
                                ≤24H RESPONSE
                            </span>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Drawing title block — real spec-sheet style */}
                <div className="mt-auto">
                    <div className="border-2 border-white/15 mb-6">
                        {/* Top row — project info */}
                        <div className="grid grid-cols-4 border-b border-white/10">
                            <div className="col-span-2 p-3 md:p-4 border-r border-white/10">
                                <div className="mono text-[0.35rem] font-bold tracking-[0.25em] uppercase opacity-20 mb-1">PROJECT</div>
                                <div className="text-xs font-bold display">ARCHITECTURAL PORTFOLIO</div>
                            </div>
                            <div className="p-3 md:p-4 border-r border-white/10">
                                <div className="mono text-[0.35rem] font-bold tracking-[0.25em] uppercase opacity-20 mb-1">DWG NO.</div>
                                <div className="mono text-xs font-bold">JZ-2025-001</div>
                            </div>
                            <div className="p-3 md:p-4">
                                <div className="mono text-[0.35rem] font-bold tracking-[0.25em] uppercase opacity-20 mb-1">REV</div>
                                <div className="mono text-xs font-bold">01</div>
                            </div>
                        </div>
                        {/* Bottom row — personal info */}
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            {[
                                { label: "DRAWN BY", value: "JESUDAS ZION" },
                                { label: "EMAIL", value: "jesudaszion@gmail.com", href: "mailto:jesudaszion@gmail.com" },
                                { label: "PHONE", value: "+91 6379561596", href: "tel:+916379561596" },
                                { label: "LOCATION", value: "CHENNAI, TN" },
                            ].map((cell, i) => (
                                <motion.div key={cell.label}
                                    className={`p-3 md:p-4 ${i < 3 ? "border-r border-white/10" : ""}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.06 }}>
                                    <div className="mono text-[0.35rem] font-bold tracking-[0.25em] uppercase opacity-20 mb-1">
                                        {cell.label}
                                    </div>
                                    {cell.href ? (
                                        <a href={cell.href} data-cursor-hover
                                            className="mono text-[0.6rem] font-bold hover:text-[var(--red)] transition-colors">
                                            {cell.value}
                                        </a>
                                    ) : (
                                        <div className="mono text-[0.6rem] font-bold">{cell.value}</div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Social + copyright */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {[
                                { label: "GitHub", href: "https://github.com/Zion203",
                                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                                { label: "LinkedIn", href: "https://linkedin.com/in/jesudas-zion-49b804305/",
                                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                                { label: "Email", href: "mailto:jesudaszion@gmail.com",
                                    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" },
                            ].map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                                    className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                                    data-cursor-hover>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"
                                        className="opacity-25 group-hover:opacity-100 transition-opacity">
                                        <path d={s.d} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                        <span className="mono text-[0.4rem] font-bold tracking-[0.12em] uppercase opacity-12">
                            © 2025 JESUDAS ZION · Next.js · TypeScript
                        </span>
                    </div>
                </div>
            </div>

            {/* APPROVED watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none select-none">
                <span className="text-[8rem] md:text-[14rem] font-[900] uppercase leading-none opacity-[0.012] tracking-widest display">
                    APPROVED
                </span>
            </div>
        </section>
    );
}
