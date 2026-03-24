"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function TickCounter({ target, suffix }: { target: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let n = 0;
        const totalSteps = 60;
        const step = target / totalSteps;
        let frame = 0;
        const id = setInterval(() => {
            frame++;
            n += step;
            if (frame >= totalSteps) { setVal(target); clearInterval(id); }
            else setVal(Math.floor(n));
        }, 25); // Stepped, plotter-like tick-in
        return () => clearInterval(id);
    }, [isInView, target]);

    const fmt = target >= 1000 ? Math.floor(val / 1000) + "K" : val.toString();
    return <span ref={ref} className="tabular-nums">{fmt}{suffix}</span>;
}

const metrics = [
    { val: 850, suf: "K+", label: "USERS SERVED", detail: "Healthcare & e-commerce" },
    { val: 8, suf: "+", label: "SYSTEMS SHIPPED", detail: "Production applications" },
    { val: 4, suf: "", label: "DOMAINS WORKED IN", detail: "Health · Commerce · AI · Education" },
    { val: 0, suf: "", label: "CURRENT FOCUS", detail: "AI × Fullstack", isText: true },
];

export default function Brief() {
    return (
        <section id="about" className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
            <ScrollReveal>
                <div className="flex items-center gap-4 mb-16">
                    <span className="label">01</span>
                    <div className="h-px w-10 bg-black/[0.08]" />
                    <span className="label">THE BRIEF</span>
                    <div className="flex-1" />
                    <span className="revision-mark">REV 01</span>
                </div>
            </ScrollReveal>

            {/* Main content with margin note */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 max-w-5xl">
                {/* Left: body copy */}
                <ScrollReveal delay={0.1}>
                    <div>
                        <p className="text-[clamp(1.1rem,2.2vw,1.6rem)] leading-[1.6] font-medium tracking-tight reading">
                            I&apos;m a <strong className="font-bold">thinker by nature</strong> and a{" "}
                            <strong className="font-bold">builder by choice</strong>. I see the world in
                            layers of logic, emotion, and unseen connections. My passion for building
                            exceptional software keeps me pushing boundaries —
                            from <strong className="font-bold">healthcare platforms</strong> serving
                            hundreds of thousands to{" "}
                            <span className="relative inline-block">
                                <strong className="font-bold">AI-powered systems</strong>
                                <motion.span className="absolute bottom-0 left-0 h-[2px] bg-[var(--red)] w-full origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6 }} />
                            </span>{" "}
                            that understand context. Currently at{" "}
                            <strong className="font-bold">iCliniq</strong>, building scalable web
                            applications for global online doctor consultation.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Right: margin annotation */}
                <ScrollReveal delay={0.3}>
                    <div className="hidden lg:block pt-4">
                        <div className="margin-note">
                            &ldquo;I tend to over-engineer things — then simplify until only the essential remains.&rdquo;
                        </div>
                        <div className="mt-6">
                            <div className="mono text-[0.4rem] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--slate-light)" }}>
                                NOTE BY AUTHOR
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Metrics — title-block-style cells, not centered numbers */}
            <ScrollReveal delay={0.2}>
                <div className="max-w-5xl mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-black/[0.1]">
                        {metrics.map((m, i) => (
                            <motion.div
                                key={m.label}
                                className="title-block-cell"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 + i * 0.08 }}
                            >
                                <div className="cell-label" style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.4rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase" as const,
                                    color: "var(--slate-light)",
                                    marginBottom: "6px",
                                }}>
                                    {m.label}
                                </div>
                                <div className="display text-xl md:text-2xl font-[900] tracking-tight leading-none mb-1">
                                    {m.isText ? (
                                        <span className="text-[var(--red)]">{m.detail}</span>
                                    ) : (
                                        <TickCounter target={m.val} suffix={m.suf} />
                                    )}
                                </div>
                                {!m.isText && (
                                    <div className="mono text-[0.45rem] font-bold tracking-[0.1em] uppercase" style={{ color: "var(--slate)" }}>
                                        {m.detail}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
