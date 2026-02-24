import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                tva: {
                    void: "#0d0907",
                    surface: "#1a130e",
                    "surface-light": "#261c14",
                    "surface-lighter": "#33271d",
                    amber: "#FF6B00",
                    "amber-bright": "#FFA235",
                    "amber-dim": "rgba(255, 107, 0, 0.2)",
                    teal: "#00E5A0",
                    "teal-dim": "rgba(0, 229, 160, 0.2)",
                    phosphor: "#33ff66",
                    red: "#ff3344",
                    text: "#E8DCC8",
                    "text-secondary": "#9B8B78",
                    "text-muted": "#5C4F42",
                    border: "rgba(255, 107, 0, 0.12)",
                },
            },
            fontFamily: {
                display: ["'Orbitron'", "monospace"],
                body: ["'Syne'", "sans-serif"],
                mono: ["'Space Mono'", "monospace"],
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "glow-pulse": "glow-pulse 3s ease-in-out infinite",
                "slide-up": "slide-up 0.8s ease-out",
                "fade-in": "fade-in 1s ease-out",
                "spin-slow": "spin 20s linear infinite",
                "grain": "grain 8s steps(10) infinite",
                "temporal-pulse": "temporal-pulse 2.5s ease-in-out infinite",
                "crt-flicker": "crt-flicker 4s infinite",
                "scanline": "scanline-scroll 10s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "glow-pulse": {
                    "0%, 100%": { opacity: "0.4" },
                    "50%": { opacity: "1" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(40px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "temporal-pulse": {
                    "0%, 100%": {
                        boxShadow: "0 0 8px #FF6B00, 0 0 20px rgba(255, 107, 0, 0.2)",
                    },
                    "50%": {
                        boxShadow: "0 0 16px #FF6B00, 0 0 40px rgba(255, 107, 0, 0.4)",
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
