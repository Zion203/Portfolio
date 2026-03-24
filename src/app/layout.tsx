import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "JESUDAS ZION — WWW.JESUDASZION.COM",
    description: "Full Stack Developer & AI Specialist. Systems. Interfaces. AI.",
    keywords: ["Jesudas Zion", "Full Stack Developer", "AI", "Portfolio", "Systems Engineer"],
    authors: [{ name: "Jesudas Zion" }],
    icons: {
        icon: "/logo.svg",
    },
    openGraph: {
        title: "JESUDAS ZION — WWW.JESUDASZION.COM",
        description: "Full Stack Developer & AI Specialist. Building exceptional software.",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Space+Mono:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <main className="relative z-10">{children}</main>
            </body>
        </html>
    );
}
