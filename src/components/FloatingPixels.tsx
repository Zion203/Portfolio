"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Decorative shapes — tiny architectural/geometric marks
const shapes = [
    // Crosses
    { type: "cross" as const, x: 8, y: 15 },
    { type: "cross" as const, x: 85, y: 35 },
    { type: "cross" as const, x: 12, y: 62 },
    { type: "cross" as const, x: 92, y: 78 },
    { type: "cross" as const, x: 45, y: 45 },

    // Diamonds
    { type: "diamond" as const, x: 75, y: 12 },
    { type: "diamond" as const, x: 20, y: 42 },
    { type: "diamond" as const, x: 88, y: 55 },
    { type: "diamond" as const, x: 5, y: 82 },

    // Small circles
    { type: "circle" as const, x: 35, y: 8 },
    { type: "circle" as const, x: 65, y: 28 },
    { type: "circle" as const, x: 15, y: 55 },
    { type: "circle" as const, x: 78, y: 68 },
    { type: "circle" as const, x: 50, y: 88 },

    // Dots (tiny squares)
    { type: "dot" as const, x: 55, y: 18 },
    { type: "dot" as const, x: 30, y: 72 },
    { type: "dot" as const, x: 70, y: 48 },
    { type: "dot" as const, x: 42, y: 92 },
    { type: "dot" as const, x: 95, y: 25 },
    { type: "dot" as const, x: 8, y: 38 },
];

interface DecorItem {
    type: "cross" | "diamond" | "circle" | "dot";
    x: number;
    y: number;
    delay: number;
    duration: number;
    isRed: boolean;
}

function Shape({ item }: { item: DecorItem }) {
    const color = item.isRed ? "#E63946" : "#111";
    const opacity = item.isRed ? 0.12 : 0.06;

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{
                y: [0, -8, 4, -4, 0],
                opacity: [0, opacity, opacity * 0.6, opacity, 0],
            }}
            transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {item.type === "cross" && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <line x1="5" y1="0" x2="5" y2="10" stroke={color} strokeWidth="0.8" />
                    <line x1="0" y1="5" x2="10" y2="5" stroke={color} strokeWidth="0.8" />
                </svg>
            )}
            {item.type === "diamond" && (
                <div style={{
                    width: 6, height: 6,
                    border: `1px solid ${color}`,
                    transform: "rotate(45deg)",
                    opacity: 0.8,
                }} />
            )}
            {item.type === "circle" && (
                <div style={{
                    width: 5, height: 5,
                    borderRadius: "50%",
                    border: `0.8px solid ${color}`,
                    opacity: 0.8,
                }} />
            )}
            {item.type === "dot" && (
                <div style={{
                    width: 3, height: 3,
                    backgroundColor: color,
                    opacity: 0.8,
                }} />
            )}
        </motion.div>
    );
}

export default function FloatingPixels() {
    const [items, setItems] = useState<DecorItem[]>([]);

    useEffect(() => {
        setItems(shapes.map((s, i) => ({
            ...s,
            delay: Math.random() * 5,
            duration: 6 + Math.random() * 8,
            isRed: i < 3,
        })));
    }, []);

    return (
        <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
            {items.map((item, i) => (
                <Shape key={i} item={item} />
            ))}
        </div>
    );
}
