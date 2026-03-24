"use client";

export default function Colophon() {
    return (
        <footer className="border-t border-black/10 px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="mono text-[0.5rem] font-bold tracking-[0.2em] uppercase opacity-20">
                © 2025 JESUDAS ZION — Precision. Layers. Purpose.
            </span>
            <span className="mono text-[0.45rem] font-bold tracking-[0.15em] uppercase opacity-15">
                Next.js • TypeScript • Framer Motion
            </span>
        </footer>
    );
}
