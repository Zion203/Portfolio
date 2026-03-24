"use client";

import { useEffect, useRef, useState } from "react";

export default function CrosshairCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        let x = 0, y = 0;

        const move = (e: MouseEvent) => {
            x = e.clientX;
            y = e.clientY;
            cursor.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`;
        };

        const checkHover = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            setHovering(!!el.closest("a, button, [data-cursor-hover], input, textarea, select"));
        };

        window.addEventListener("mousemove", move, { passive: true });
        window.addEventListener("mouseover", checkHover, { passive: true });

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", checkHover);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="crosshair-cursor fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{ willChange: "transform" }}
        >
            {hovering ? (
                <div className="w-[32px] h-[32px] rounded-full border-2 border-black/50 -ml-[6px] -mt-[6px] transition-all duration-150" />
            ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <line x1="10" y1="0" x2="10" y2="7" stroke="#111" strokeWidth="0.8" />
                    <line x1="10" y1="13" x2="10" y2="20" stroke="#111" strokeWidth="0.8" />
                    <line x1="0" y1="10" x2="7" y2="10" stroke="#111" strokeWidth="0.8" />
                    <line x1="13" y1="10" x2="20" y2="10" stroke="#111" strokeWidth="0.8" />
                    <circle cx="10" cy="10" r="1.5" fill="#E63946" />
                </svg>
            )}
        </div>
    );
}
