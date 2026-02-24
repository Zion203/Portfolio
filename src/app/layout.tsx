import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "JESUDAS ZION — TVA Case File | Full Stack Developer & AI Specialist",
    description:
        "Variant Classification: Full Stack Developer & AI Enthusiast. Temporal Agent Jesudas Zion — building exceptional software across the sacred timeline.",
    keywords: [
        "Jesudas Zion",
        "Full Stack Developer",
        "AI Enthusiast",
        "React",
        "Node.js",
        "Portfolio",
        "TVA",
    ],
    authors: [{ name: "Jesudas Zion" }],
    openGraph: {
        title: "JESUDAS ZION — TVA Case File",
        description:
            "Variant Classification: Full Stack Developer. Building exceptional software across the sacred timeline.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                {/* Orbitron — retro-futuristic display */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                {/* Syne — geometric body */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                {/* Space Mono — terminal labels */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className="antialiased"
                style={{
                    fontFamily: "'Syne', sans-serif",
                }}
            >
                {/* Temporal gradient mesh background */}
                <div className="temporal-bg" />
                {/* CRT scanline overlay */}
                <div className="crt-scanlines" />
                {/* Film grain overlay */}
                <div className="grain-overlay" />
                {/* Main content */}
                <main className="relative z-10">{children}</main>
            </body>
        </html>
    );
}
