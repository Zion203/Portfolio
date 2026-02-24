"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface TimelineBranch {
    id: number;
    x: number;
    y: number;
    speed: number;
    width: number;
    pruned: boolean;
    angle: number;
    color: string;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
}

const GAME_WIDTH = 700;
const GAME_HEIGHT = 420;
const BRANCH_COLORS = ["#FF6B00", "#FFA235", "#ff3344", "#00E5A0", "#33ff66"];

export default function TimelineGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const branchesRef = useRef<TimelineBranch[]>([]);
    const particlesRef = useRef<Particle[]>([]);
    const scannerXRef = useRef(GAME_WIDTH / 2);
    const spawnTimerRef = useRef(0);

    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [highScore, setHighScore] = useState(0);
    const [missed, setMissed] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    const keysRef = useRef<Set<string>>(new Set());

    const startGame = useCallback(() => {
        branchesRef.current = [];
        particlesRef.current = [];
        scannerXRef.current = GAME_WIDTH / 2;
        spawnTimerRef.current = 0;
        setScore(0);
        setMissed(0);
        setTimeLeft(30);
        setGameOver(false);
        setIsPlaying(true);
    }, []);

    // Timer countdown
    useEffect(() => {
        if (!isPlaying || gameOver) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsPlaying(false);
                    setGameOver(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isPlaying, gameOver]);

    // Update high score on game end
    useEffect(() => {
        if (gameOver) {
            setHighScore((prev) => Math.max(prev, score));
        }
    }, [gameOver, score]);

    // Keyboard input
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keysRef.current.add(e.key);
            if (e.key === " " || e.key === "ArrowUp") {
                e.preventDefault();
                firePrune();
            }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            keysRef.current.delete(e.key);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying]);

    const firePrune = useCallback(() => {
        if (!isPlaying) return;
        const sx = scannerXRef.current;

        // Check for hits
        let hit = false;
        branchesRef.current = branchesRef.current.map((b) => {
            if (!b.pruned && Math.abs(b.x + b.width / 2 - sx) < 30 && b.y > GAME_HEIGHT * 0.3) {
                hit = true;
                // Spawn particles
                for (let i = 0; i < 8; i++) {
                    particlesRef.current.push({
                        x: b.x + b.width / 2,
                        y: b.y,
                        vx: (Math.random() - 0.5) * 5,
                        vy: (Math.random() - 0.5) * 5,
                        life: 1,
                        color: b.color,
                    });
                }
                return { ...b, pruned: true };
            }
            return b;
        });

        if (hit) {
            setScore((prev) => prev + 10);
        }

        // Fire beam particles
        for (let i = 0; i < 3; i++) {
            particlesRef.current.push({
                x: sx,
                y: GAME_HEIGHT - 40,
                vx: (Math.random() - 0.5) * 1,
                vy: -8 - Math.random() * 4,
                life: 0.6,
                color: "#FF6B00",
            });
        }
    }, [isPlaying]);

    // Game loop
    useEffect(() => {
        if (!isPlaying) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const gameLoop = () => {
            // Input handling — move scanner
            if (keysRef.current.has("ArrowLeft") || keysRef.current.has("a")) {
                scannerXRef.current = Math.max(20, scannerXRef.current - 5);
            }
            if (keysRef.current.has("ArrowRight") || keysRef.current.has("d")) {
                scannerXRef.current = Math.min(GAME_WIDTH - 20, scannerXRef.current + 5);
            }

            // Spawn branches
            spawnTimerRef.current++;
            if (spawnTimerRef.current > 35) {
                spawnTimerRef.current = 0;
                const bWidth = 3 + Math.random() * 4;
                branchesRef.current.push({
                    id: Date.now() + Math.random(),
                    x: 20 + Math.random() * (GAME_WIDTH - 40),
                    y: -20,
                    speed: 1.5 + Math.random() * 2,
                    width: bWidth,
                    pruned: false,
                    angle: (Math.random() - 0.5) * 0.5,
                    color: BRANCH_COLORS[Math.floor(Math.random() * BRANCH_COLORS.length)],
                });
            }

            // Update branches
            branchesRef.current = branchesRef.current.filter((b) => {
                if (b.pruned) return false;
                b.y += b.speed;
                b.x += Math.sin(b.angle) * 0.3;
                if (b.y > GAME_HEIGHT + 20) {
                    setMissed((prev) => prev + 1);
                    return false;
                }
                return true;
            });

            // Update particles
            particlesRef.current = particlesRef.current.filter((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.03;
                return p.life > 0;
            });

            // Clear
            ctx.fillStyle = "rgba(13, 9, 7, 1)";
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

            // Draw sacred timeline (center line)
            const gradient = ctx.createLinearGradient(0, 0, 0, GAME_HEIGHT);
            gradient.addColorStop(0, "rgba(255, 107, 0, 0.05)");
            gradient.addColorStop(0.5, "rgba(255, 107, 0, 0.15)");
            gradient.addColorStop(1, "rgba(255, 107, 0, 0.3)");
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(GAME_WIDTH / 2, 0);
            ctx.lineTo(GAME_WIDTH / 2, GAME_HEIGHT);
            ctx.stroke();

            // Grid lines
            ctx.strokeStyle = "rgba(255, 107, 0, 0.04)";
            ctx.lineWidth = 1;
            for (let x = 0; x < GAME_WIDTH; x += 40) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, GAME_HEIGHT);
                ctx.stroke();
            }
            for (let y = 0; y < GAME_HEIGHT; y += 40) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(GAME_WIDTH, y);
                ctx.stroke();
            }

            // Draw branches
            branchesRef.current.forEach((b) => {
                ctx.save();
                ctx.strokeStyle = b.color;
                ctx.lineWidth = b.width;
                ctx.shadowBlur = 10;
                ctx.shadowColor = b.color;
                ctx.globalAlpha = 0.9;
                ctx.beginPath();
                ctx.moveTo(b.x, b.y - 15);
                ctx.lineTo(b.x + Math.sin(b.angle) * 10, b.y + 15);
                ctx.stroke();

                // Glow at tip
                ctx.beginPath();
                ctx.arc(b.x + Math.sin(b.angle) * 10, b.y + 15, 3, 0, Math.PI * 2);
                ctx.fillStyle = b.color;
                ctx.fill();
                ctx.restore();
            });

            // Draw particles
            particlesRef.current.forEach((p) => {
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            // Draw scanner
            const sx = scannerXRef.current;
            ctx.save();
            // Scanner beam
            ctx.strokeStyle = "rgba(255, 107, 0, 0.15)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(sx, GAME_HEIGHT - 30);
            ctx.lineTo(sx - 20, 0);
            ctx.moveTo(sx, GAME_HEIGHT - 30);
            ctx.lineTo(sx + 20, 0);
            ctx.stroke();

            // Scanner head
            ctx.fillStyle = "#FF6B00";
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#FF6B00";
            ctx.beginPath();
            ctx.moveTo(sx, GAME_HEIGHT - 40);
            ctx.lineTo(sx - 10, GAME_HEIGHT - 25);
            ctx.lineTo(sx + 10, GAME_HEIGHT - 25);
            ctx.closePath();
            ctx.fill();

            // Scanner base
            ctx.fillStyle = "#FFA235";
            ctx.fillRect(sx - 15, GAME_HEIGHT - 25, 30, 4);
            ctx.restore();

            // HUD scanlines
            ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
            for (let y = 0; y < GAME_HEIGHT; y += 3) {
                ctx.fillRect(0, y, GAME_WIDTH, 1);
            }

            animRef.current = requestAnimationFrame(gameLoop);
        };

        animRef.current = requestAnimationFrame(gameLoop);
        return () => cancelAnimationFrame(animRef.current);
    }, [isPlaying]);

    return (
        <section id="game" className="py-32 px-6 md:px-10 relative">
            {/* Divider */}
            <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, var(--tva-border-active), transparent)",
                }}
            />

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <ScrollReveal>
                        <span
                            className="section-label"
                            style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                            05 — TEMPORAL ANOMALY DETECTED
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="section-heading mt-4"
                            style={{ fontFamily: "'Orbitron', monospace" }}
                        >
                            <span style={{ color: "var(--tva-text)" }}>PRUNE THE </span>
                            <span className="gradient-text-amber">TIMELINE</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p
                            className="mt-4 max-w-md mx-auto text-sm"
                            style={{
                                color: "var(--tva-text-secondary)",
                                fontFamily: "'Syne', sans-serif",
                            }}
                        >
                            Nexus events detected! Use arrow keys to move, space to prune
                            divergent branches before they escape.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Game container */}
                <ScrollReveal delay={0.15}>
                    <div className="tva-card p-6 relative">
                        {/* Controls bar */}
                        <div className="flex items-center justify-between mb-4 pb-4" style={{ borderBottom: "1px solid var(--tva-border)" }}>
                            <div className="flex items-center gap-4">
                                <div>
                                    <span
                                        className="text-[0.5rem] tracking-[0.15em] block"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            color: "var(--tva-text-muted)",
                                        }}
                                    >
                                        PRUNED
                                    </span>
                                    <span
                                        className="text-lg font-bold"
                                        style={{
                                            fontFamily: "'Orbitron', monospace",
                                            color: "var(--tva-amber)",
                                        }}
                                    >
                                        {score}
                                    </span>
                                </div>
                                <div>
                                    <span
                                        className="text-[0.5rem] tracking-[0.15em] block"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            color: "var(--tva-text-muted)",
                                        }}
                                    >
                                        ESCAPED
                                    </span>
                                    <span
                                        className="text-lg font-bold"
                                        style={{
                                            fontFamily: "'Orbitron', monospace",
                                            color: "var(--tva-red)",
                                        }}
                                    >
                                        {missed}
                                    </span>
                                </div>
                                <div>
                                    <span
                                        className="text-[0.5rem] tracking-[0.15em] block"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            color: "var(--tva-text-muted)",
                                        }}
                                    >
                                        TIME
                                    </span>
                                    <span
                                        className="text-lg font-bold"
                                        style={{
                                            fontFamily: "'Orbitron', monospace",
                                            color: timeLeft <= 10 ? "var(--tva-red)" : "var(--tva-teal)",
                                        }}
                                    >
                                        {timeLeft}s
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span
                                    className="text-[0.5rem] tracking-[0.15em] block text-right"
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        color: "var(--tva-text-muted)",
                                    }}
                                >
                                    HIGH SCORE
                                </span>
                                <span
                                    className="text-lg font-bold"
                                    style={{
                                        fontFamily: "'Orbitron', monospace",
                                        color: "var(--tva-amber-bright)",
                                    }}
                                >
                                    {highScore}
                                </span>
                            </div>
                        </div>

                        {/* Canvas */}
                        <div className="relative w-full flex justify-center" style={{ aspectRatio: `${GAME_WIDTH}/${GAME_HEIGHT}` }}>
                            <canvas
                                ref={canvasRef}
                                width={GAME_WIDTH}
                                height={GAME_HEIGHT}
                                className="rounded w-full h-full"
                                style={{
                                    border: "1px solid var(--tva-border)",
                                    maxWidth: GAME_WIDTH,
                                    imageRendering: "pixelated",
                                }}
                            />

                            {/* Overlay states */}
                            <AnimatePresence>
                                {!isPlaying && (
                                    <motion.div
                                        className="absolute inset-0 flex flex-col items-center justify-center rounded"
                                        style={{
                                            background: "rgba(13, 9, 7, 0.85)",
                                            backdropFilter: "blur(5px)",
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {gameOver ? (
                                            <div className="text-center">
                                                <div
                                                    className="text-[0.55rem] tracking-[0.3em] mb-2"
                                                    style={{
                                                        fontFamily: "'Space Mono', monospace",
                                                        color: "var(--tva-red)",
                                                    }}
                                                >
                                                    TEMPORAL ANOMALY CONTAINED
                                                </div>
                                                <div
                                                    className="text-4xl font-bold mb-2"
                                                    style={{
                                                        fontFamily: "'Orbitron', monospace",
                                                        color: "var(--tva-amber)",
                                                    }}
                                                >
                                                    {score}
                                                </div>
                                                <div
                                                    className="text-[0.6rem] tracking-wider mb-6"
                                                    style={{
                                                        fontFamily: "'Space Mono', monospace",
                                                        color: "var(--tva-text-muted)",
                                                    }}
                                                >
                                                    BRANCHES ESCAPED: {missed}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <div
                                                    className="text-2xl font-bold mb-2"
                                                    style={{
                                                        fontFamily: "'Orbitron', monospace",
                                                        color: "var(--tva-amber)",
                                                    }}
                                                >
                                                    PRUNE THE TIMELINE
                                                </div>
                                                <div
                                                    className="text-[0.6rem] tracking-wider mb-1"
                                                    style={{
                                                        fontFamily: "'Space Mono', monospace",
                                                        color: "var(--tva-text-muted)",
                                                    }}
                                                >
                                                    ← → MOVE SCANNER
                                                </div>
                                                <div
                                                    className="text-[0.6rem] tracking-wider mb-6"
                                                    style={{
                                                        fontFamily: "'Space Mono', monospace",
                                                        color: "var(--tva-text-muted)",
                                                    }}
                                                >
                                                    SPACE / ↑ FIRE
                                                </div>
                                            </div>
                                        )}
                                        <button
                                            onClick={startGame}
                                            className="px-8 py-3 rounded text-[0.65rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl"
                                            style={{
                                                fontFamily: "'Orbitron', monospace",
                                                background: "var(--tva-amber)",
                                                color: "var(--tva-void)",
                                                boxShadow: "0 0 20px rgba(255, 107, 0, 0.3)",
                                            }}
                                            data-cursor-hover
                                        >
                                            {gameOver ? "RETRY MISSION" : "BEGIN MISSION"}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Instructions */}
                        <div className="mt-4 flex items-center justify-center gap-6">
                            {[
                                { key: "← →", desc: "Move" },
                                { key: "SPACE", desc: "Fire" },
                                { key: "A / D", desc: "Alt Move" },
                            ].map((ctrl) => (
                                <div
                                    key={ctrl.key}
                                    className="flex items-center gap-2"
                                >
                                    <span
                                        className="px-2 py-0.5 rounded text-[0.55rem]"
                                        style={{
                                            background: "var(--tva-surface-lighter)",
                                            border: "1px solid var(--tva-border)",
                                            fontFamily: "'Space Mono', monospace",
                                            color: "var(--tva-amber)",
                                        }}
                                    >
                                        {ctrl.key}
                                    </span>
                                    <span
                                        className="text-[0.55rem]"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            color: "var(--tva-text-muted)",
                                        }}
                                    >
                                        {ctrl.desc}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
