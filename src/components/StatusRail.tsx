"use client";

import { useState, useEffect } from "react";

const sectionMap: Record<string, { code: string; name: string }> = {
    home: { code: "SHT-00", name: "COVER SHEET" },
    about: { code: "SHT-01", name: "THE BRIEF" },
    projects: { code: "SHT-02", name: "CASE INDEX" },
    skills: { code: "SHT-03", name: "SPEC TABLE" },
    experience: { code: "SHT-04", name: "SECTION CUT" },
    contact: { code: "SHT-05", name: "STAMP BLOCK" },
};

const sectionIds = ["home", "about", "projects", "skills", "experience", "contact"];

export default function StatusRail() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrollPct, setScrollPct] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            // Scroll percentage
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setScrollPct(docH > 0 ? Math.round((window.scrollY / docH) * 100) : 0);

            // Active section
            let current = "home";
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.4) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const info = sectionMap[activeSection] || sectionMap.home;

    return (
        <div className="status-rail">
            <div className="status-rail-text">
                <span style={{ color: "var(--red)", marginRight: "8px" }}>{info.code}</span>
                <span style={{ marginRight: "12px" }}>·</span>
                <span>{info.name}</span>
                <span style={{ marginRight: "12px", marginLeft: "12px" }}>·</span>
                <span>2025</span>
                <span style={{ marginRight: "12px", marginLeft: "12px" }}>·</span>
                <span>READING: {scrollPct}%</span>
            </div>
        </div>
    );
}
