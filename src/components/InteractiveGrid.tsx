"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let mouseClient = { x: -1000, y: -1000 };
        let animFrame: number;

        // Smooth cursor position (slow lerp for silk-like trailing)
        let smoothMouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onMouse = (e: MouseEvent) => {
            mouseClient = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMouse, { passive: true });

        const CELL = 50;
        const MAX_RADIUS = 160;
        const RING_WIDTH = 50;

        // Time-based: a continuous wave flows outward
        let time = 0;

        const draw = () => {
            // Silky-smooth cursor follow
            smoothMouse.x += (mouseClient.x - smoothMouse.x) * 0.04;
            smoothMouse.y += (mouseClient.y - smoothMouse.y) * 0.04;

            // Slow continuous outward flow — ring radius cycles 0 → MAX_RADIUS over ~4s
            time += 0.003;
            const wavePos = (time % 1) * MAX_RADIUS; // current ring center distance

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cols = Math.ceil(canvas.width / CELL) + 1;
            const rows = Math.ceil(canvas.height / CELL) + 1;

            // --- Always-visible base line grid ---
            ctx.strokeStyle = `rgba(17, 17, 17, 0.07)`;
            ctx.lineWidth = 0.5;

            for (let r = 0; r <= rows; r++) {
                const y = r * CELL;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
            for (let c = 0; c <= cols; c++) {
                const x = c * CELL;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // --- Flowing outward pulse on grid lines ---
            // Fade based on how far the wave has traveled (fades as it expands out)
            const waveFade = 1 - (wavePos / MAX_RADIUS);
            const overallIntensity = waveFade * waveFade; // quadratic fade

            // Horizontal lines
            for (let r = 0; r <= rows; r++) {
                const y = r * CELL;
                const dy = Math.abs(y - smoothMouse.y);
                if (dy > MAX_RADIUS) continue;

                const xSpan = Math.sqrt(MAX_RADIUS * MAX_RADIUS - dy * dy);

                // How close is this line to the wave ring?
                const distToWave = Math.abs(dy - wavePos);
                if (distToWave > RING_WIDTH) continue;

                const ringT = 1 - distToWave / RING_WIDTH;
                // Smooth bell curve shape
                const intensity = ringT * ringT * (1 - ringT * 0.3) * overallIntensity;
                if (intensity < 0.01) continue;

                const span = xSpan * (0.3 + ringT * 0.7);
                const xStart = Math.max(0, smoothMouse.x - span);
                const xEnd = Math.min(canvas.width, smoothMouse.x + span);

                ctx.beginPath();
                ctx.moveTo(xStart, y);
                ctx.lineTo(xEnd, y);
                ctx.strokeStyle = `rgba(230, 57, 70, ${intensity * 0.35})`;
                ctx.lineWidth = 0.8 + ringT * 0.6;
                ctx.stroke();
            }

            // Vertical lines
            for (let c = 0; c <= cols; c++) {
                const x = c * CELL;
                const dx = Math.abs(x - smoothMouse.x);
                if (dx > MAX_RADIUS) continue;

                const ySpan = Math.sqrt(MAX_RADIUS * MAX_RADIUS - dx * dx);

                const distToWave = Math.abs(dx - wavePos);
                if (distToWave > RING_WIDTH) continue;

                const ringT = 1 - distToWave / RING_WIDTH;
                const intensity = ringT * ringT * (1 - ringT * 0.3) * overallIntensity;
                if (intensity < 0.01) continue;

                const span = ySpan * (0.3 + ringT * 0.7);
                const yStart = Math.max(0, smoothMouse.y - span);
                const yEnd = Math.min(canvas.height, smoothMouse.y + span);

                ctx.beginPath();
                ctx.moveTo(x, yStart);
                ctx.lineTo(x, yEnd);
                ctx.strokeStyle = `rgba(230, 57, 70, ${intensity * 0.35})`;
                ctx.lineWidth = 0.8 + ringT * 0.6;
                ctx.stroke();
            }

            animFrame = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animFrame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        />
    );
}
