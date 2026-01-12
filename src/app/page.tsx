"use client";

import { BentoGrid } from "@/components/BentoGrid";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { TechStackCard } from "@/components/cards/TechStackCard";
import { SpotifyCard } from "@/components/cards/SpotifyCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { ContactCard } from "@/components/cards/ContactCard";
import { TimeLocationCard } from "@/components/cards/TimeLocationCard";
import { EducationCard } from "@/components/cards/EducationCard";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />

      <main className="min-h-screen py-8 md:py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-violet-400">
            Developer Portfolio
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building beautiful, performant web experiences with modern technologies
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <BentoGrid>
            {/* Row 1: Profile (2x2) + Spotify (1x1) + Stats (1x1) */}
            <ProfileCard />
            <SpotifyCard />
            <StatsCard />

            {/* Row 2: Tech Stack (2x1) + Time/Location (1x1) -> TechStack needs full 2 cols, Profile takes 2 cols on left.
               Actually Profile spans 2 rows.
               Grid is 4 cols.
               Row 1: Profile(2) | Spotify(1) | Stats(1)
               Row 2: Profile(cont) | TechStack(2) | TimeLocation(??) 
               Wait, TechStack(2) will take col 3-4? TimeLocation pushed?
               Let's re-arrange.
            */}

            {/* We want to fit EducationCard (2x1).
                Let's move things around.
                
                Row 1: Profile(2x2) | Spotify(1x1) | Stats(1x1)
                Row 2: (Profile cont) | TimeLocation(1x1) | [Empty 1x1?] -> TechStack is 2x1.
                
                Let's make TechStack 2x1 sit below Spotify/Stats.
                Row 2: (Profile cont) | TechStack(2x1)
                This leaves 0 cols? No, 2+2=4. Perfect.
                
                Where to put TimeLocation? And Education?
                
                Row 3: Education(2x1) | Project(2x1)
                Row 4: TimeLocation(1x1) | Contact(2x1) | [Empty 1x1?]
                
                Let's try:
                Row 1: Profile (2x2), Spotify (1), Stats (1)
                Row 2: TechStack (2) -> occupies col 3-4.
                Row 3: Education (2), Project (2)
                Row 4: TimeLocation (1), Contact (2), [New Small Card?] or center Contact?
            */}

            <TechStackCard />
            <EducationCard />

            <ProjectCard />

            <div className="md:col-span-1">
              <TimeLocationCard />
            </div>

            <ContactCard />

          </BentoGrid>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="text-center py-8 text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <p>
            © {new Date().getFullYear()} Tushar Developer. Built with Next.js &
            Tailwind CSS.
          </p>
        </motion.footer>
      </main>
    </>
  );
}
