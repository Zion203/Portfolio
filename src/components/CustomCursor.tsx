"use client";

import { useState, useEffect, useCallback } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const onMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove, { passive: true });

        const handleHoverIn = () => setIsHovering(true);
        const handleHoverOut = () => setIsHovering(false);

        const addListeners = () => {
            document
                .querySelectorAll("[data-cursor-hover], a, button")
                .forEach((el) => {
                    el.addEventListener("mouseenter", handleHoverIn);
                    el.addEventListener("mouseleave", handleHoverOut);
                });
        };

        addListeners();
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            observer.disconnect();
        };
    }, [onMouseMove]);

    if (!isVisible) return null;

    const size = isHovering ? 48 : 32;
    const offset = size / 2;

    return (
        <>
            {/* Outer ring — using CSS transform (GPU-accelerated, no spring) */}
            <div
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[10001] rounded-full"
                style={{
                    width: size,
                    height: size,
                    border: `1.5px solid ${isHovering ? "#FF6B00" : "rgba(255, 107, 0, 0.5)"}`,
                    boxShadow: isHovering
                        ? "0 0 20px rgba(255, 107, 0, 0.3), inset 0 0 15px rgba(255, 107, 0, 0.1)"
                        : "none",
                    transform: `translate3d(${position.x - offset}px, ${position.y - offset}px, 0)`,
                    transition: "width 0.2s, height 0.2s, border 0.2s, box-shadow 0.2s, transform 0.05s linear",
                    willChange: "transform",
                }}
            />
            {/* Center dot */}
            <div
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[10002] rounded-full"
                style={{
                    width: 4,
                    height: 4,
                    background: "#FF6B00",
                    boxShadow: "0 0 8px #FF6B00",
                    transform: `translate3d(${position.x - 2}px, ${position.y - 2}px, 0)`,
                    transition: "transform 0.02s linear",
                    willChange: "transform",
                }}
            />
        </>
    );
}
