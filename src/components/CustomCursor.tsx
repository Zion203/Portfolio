"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const onMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);

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

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[10001] rounded-full"
                style={{
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    border: `1.5px solid ${isHovering ? "var(--tva-amber)" : "rgba(255, 107, 0, 0.5)"}`,
                    boxShadow: isHovering
                        ? "0 0 20px rgba(255, 107, 0, 0.3), inset 0 0 15px rgba(255, 107, 0, 0.1)"
                        : "none",
                    mixBlendMode: "difference",
                }}
                animate={{
                    x: position.x - (isHovering ? 24 : 16),
                    y: position.y - (isHovering ? 24 : 16),
                    scale: isHovering ? 1.2 : 1,
                }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                    mass: 0.5,
                }}
            />
            {/* Center dot */}
            <motion.div
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[10002] rounded-full"
                style={{
                    width: 4,
                    height: 4,
                    background: "var(--tva-amber)",
                    boxShadow: "0 0 8px var(--tva-amber)",
                }}
                animate={{
                    x: position.x - 2,
                    y: position.y - 2,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                    mass: 0.3,
                }}
            />
            {/* Crosshair lines (on hover) */}
            {isHovering && (
                <>
                    <motion.div
                        className="custom-cursor fixed pointer-events-none z-[10000]"
                        style={{
                            width: 1,
                            height: 12,
                            background: "var(--tva-amber)",
                            opacity: 0.4,
                        }}
                        animate={{
                            x: position.x - 0.5,
                            y: position.y - 30,
                        }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                    <motion.div
                        className="custom-cursor fixed pointer-events-none z-[10000]"
                        style={{
                            width: 1,
                            height: 12,
                            background: "var(--tva-amber)",
                            opacity: 0.4,
                        }}
                        animate={{
                            x: position.x - 0.5,
                            y: position.y + 18,
                        }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                </>
            )}
        </>
    );
}
