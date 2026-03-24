"use client";

import dynamic from "next/dynamic";

const InteractiveGrid = dynamic(() => import("@/components/InteractiveGrid"), { ssr: false });
const CrosshairCursor = dynamic(() => import("@/components/CrosshairCursor"), { ssr: false });
const FloatingPixels = dynamic(() => import("@/components/FloatingPixels"), { ssr: false });
const StatusRail = dynamic(() => import("@/components/StatusRail"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const CoverSheet = dynamic(() => import("@/components/CoverSheet"), { ssr: false });
const Brief = dynamic(() => import("@/components/Brief"), { ssr: false });
const ProjectGallery = dynamic(() => import("@/components/ProjectGallery"), { ssr: false });
const SpecTable = dynamic(() => import("@/components/SpecTable"), { ssr: false });
const SectionCut = dynamic(() => import("@/components/SectionCut"), { ssr: false });
const ParallelPractice = dynamic(() => import("@/components/ParallelPractice"), { ssr: false });
const StampBlock = dynamic(() => import("@/components/StampBlock"), { ssr: false });

export default function Home() {
    return (
        <>
            <InteractiveGrid />
            <FloatingPixels />
            <CrosshairCursor />
            <StatusRail />
            <Navbar />
            <CoverSheet />
            <Brief />
            <ProjectGallery />
            <SpecTable />
            <SectionCut />
            <ParallelPractice />
            <StampBlock />
        </>
    );
}
