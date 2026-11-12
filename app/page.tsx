import { Nav } from "@/components/Nav";
import { HeroPhoto } from "@/components/HeroPhoto";
import { KineticHeadline } from "@/components/KineticHeadline";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { WorkCard } from "@/components/WorkCard";
import { ParallaxBand } from "@/components/ParallaxBand";
import { TiltCard } from "@/components/TiltCard";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <SmoothScroll>
      <CursorGlow />
      <ScrollProgress />
      <div id="top" className="relative overflow-x-hidden">
        <Nav />

        {/* HERO */}
        <header className="relative mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-16 px-8 py-24 lg:grid-cols-[1.25fr_1fr]">
          <div className="pointer-events-none absolute -left-20 top-16 h-80 w-80 rounded-full bg-mossSoft opacity-50 blur-3xl animate-drift" />
          <div
            className="pointer-events-none absolute -right-16 -bottom-10 h-96 w-96 rounded-full bg-sand opacity-45 blur-3xl animate-drift"
            style={{ animationDelay: "4s" }}
          />

          <div className="relative z-10 flex flex-col gap-7">
            <Reveal delay={0}>
              <span className="font-hand text-[30px] leading-none text-moss">
                Hi, I&apos;m Anns.
              </span>
            </Reveal>
            <KineticHeadline />
            <Reveal delay={0.3} className="max-w-[560px]">
              <p className="m-0 text-[19px] text-soft">
                Senior full-stack engineer and tech lead in Munich. Twelve years
                of JavaScript, the last six in travel: a luxury stays platform I
                am building from scratch at{" "}
                <a href="#work" className="link-underline">
                  WeStay
                </a>
                , and before that search and SEO for a million monthly
                travellers at{" "}
                <a href="#work" className="link-underline">
                  Almosafer
                </a>
                . These days a good part of my work is making AI tools useful to
                real engineering teams.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-2">
              <div className="flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href="#work"
                    className="btn-primary inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-moss px-6 py-3.5 text-[16px] font-medium text-ivory"
                  >
                    See what I have built
                    <ArrowRight size={18} />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="/Anns_Qasim_CV.pdf"
                    className="btn-ghost inline-flex min-h-[48px] items-center gap-2 rounded-full border border-hair px-6 py-3.5 text-[16px] font-medium text-ink"
                  >
                    Download my CV
                  </a>
                </Magnetic>
              </div>
            </Reveal>
            <Reveal delay={0.5} className="mt-1">
              <div className="flex items-center gap-2.5 text-[15px] text-mute">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-moss animate-pulse" />
                <span>
                  Open to senior and lead roles in Germany. Blue Card eligible.
                </span>
              </div>
            </Reveal>
          </div>

          <HeroPhoto />
        </header>

        <Marquee />

        {/* SELECTED WORK */}
        <section id="work" className="mx-auto max-w-[1120px] px-8 pb-10 pt-24">
          <Reveal className="mb-11 max-w-[640px]">
            <h2 className="m-0 font-serif text-[44px] font-normal tracking-tight">
              Work I am proud of
            </h2>
            <p className="mt-2.5 text-[17px] text-mute">
              Three projects, told the way I would explain them over coffee:
              what the problem was, what we decided, and how it turned out.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <WorkCard
                tag="WeStay · Munich · 2025 to now"
                title="A luxury stays platform, from an empty repo to paying guests"
                description="I was the first engineer in. A year on, five engineers ship weekly on an architecture I designed, and an AI content pipeline I built drafts the property pages our editors approve."
                stack="Next.js · NestJS · PostgreSQL · Azure AI Foundry"
                cta="Read the story"
                href="/work/westay"
                image="/screenshots/westay.png"
                imageAlt="WeStay search and booking screen"
              />
            </Reveal>

            <Reveal>
              <WorkCard
                reverse
                tag="Almosafer · Dubai · 2020 to 2025"
                title="Five years of search, pricing and SEO for a million travellers a month"
                description="Big Next.js codebase, lots of traffic, lots of experiments. I owned the surfaces where people compare hotels and decide to book, and built the SEO platform that brought them there in the first place."
                stack="React · Next.js · GraphQL · Core Web Vitals · A/B testing"
                cta="Read the story"
                href="/work/almosafer"
                image="/screenshots/almosafer.png"
                imageAlt="Almosafer travel booking homepage"
              />
            </Reveal>

            <Reveal>
              <WorkCard
                tag="The Halal Explorer · side project · live"
                title="A travel guide I wanted to exist, so I built it"
                description="Finding halal food and prayer spaces while travelling is harder than it should be. This is my answer: a curated dataset, search with an LLM layer that cites its sources, and a content workflow I run through custom Claude Code skills on weekends."
                stack="Next.js · RAG · vector database · MCP · Vercel"
                cta="Visit thehalalexplorer.com"
                href="https://thehalalexplorer.com"
                external
                image="/screenshots/halal-explorer.png"
                imageAlt="The Halal Explorer homepage"
              />
            </Reveal>
          </div>
        </section>

        {/* ABOUT with parallax band */}
        <section id="about" className="relative mt-24 overflow-hidden bg-ink">
          <ParallaxBand />
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-16 px-8 py-24 text-paper lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="m-0 font-serif text-[44px] font-normal leading-tight tracking-tight">
                A bit about me,{" "}
                <em className="not-italic text-mossSoft">
                  <span className="italic">beyond the CV</span>
                </em>
              </h2>
            </Reveal>
            <div className="flex flex-col gap-5 text-[18px] text-[#D9D4C8]">
              <Reveal delay={0.1}>
                <p className="m-0">
                  I grew up in Karachi, spent six years in Dubai, and moved to
                  Munich in 2025 with my family. I like cities with mountains
                  nearby, which worked out well.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="m-0">
                  I got into programming because I wanted to make things, and
                  that has not changed. What has changed is that I now get as
                  much satisfaction from helping five other people ship well as
                  from shipping myself. Code review, pairing, the occasional
                  hard conversation about scope, that is the job and I enjoy
                  it.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="m-0">
                  On AI: I use Claude Code and Cursor every day and I have built
                  MCP skills that my team relies on. I am neither a sceptic nor
                  a hype merchant. These tools make a good engineer faster and
                  a careless one dangerous, so I spend a lot of time on the
                  review bar.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="m-0">
                  Outside work I travel whenever I can, vlog some of it, and am
                  slowly getting my German past A2. Ask me about the best place
                  for chai in Munich.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-[1120px] px-8 pb-16 pt-24">
          <Reveal>
            <h2 className="m-0 mb-10 font-serif text-[44px] font-normal tracking-tight">
              Where I have worked
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {[
              {
                when: "2025 to now",
                where: "Munich",
                company: "WeStay",
                role: "Senior Full-Stack Engineer and Tech Lead",
                body: "First engineer in. I designed the platform, hired and now lead five of our eight engineers, and brought AI-assisted delivery into the team without lowering the quality bar.",
              },
              {
                when: "2020 to 2025",
                where: "Dubai",
                company: "Almosafer",
                role: "Senior Frontend Engineer",
                body: "Owned search, pricing and SEO surfaces on a Next.js codebase serving over a million monthly users. Ran Core Web Vitals and A/B programmes, built the shared component library.",
              },
              {
                when: "2018 to 2020",
                where: "Dubai",
                company: "Conceptualize",
                role: "Frontend Engineer",
                body: "Client web applications for aviation and media customers on React and Node.",
              },
              {
                when: "2016 to 2018",
                where: "Karachi",
                company: "VentureDive",
                role: "Software Engineer",
                body: "Front-end features for enterprise and consumer products on React and Angular. Where I learned to ship.",
              },
            ].map((job, i, arr) => (
              <Reveal key={job.company}>
                <div
                  className={`grid grid-cols-1 gap-10 border-t border-line py-7 md:grid-cols-[200px_1fr] ${
                    i === arr.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex flex-col gap-0.5 text-[15px] text-mute">
                    <span className="font-medium text-ink">{job.when}</span>
                    <span>{job.where}</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div>
                      <div className="font-serif text-[26px] font-medium">
                        {job.company}
                      </div>
                      <div className="text-[15px] text-mute">{job.role}</div>
                    </div>
                    <p className="m-0 max-w-[680px] text-base text-soft">
                      {job.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-[1120px] px-8 pb-28 pt-14">
          <Reveal>
            <TiltCard max={3} className="group">
              <div className="relative grid grid-cols-1 items-center gap-14 overflow-hidden rounded-[28px] border border-line bg-gradient-to-br from-cream to-[#EFEBE0] p-16 lg:grid-cols-[1.3fr_1fr]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-mossSoft opacity-50 blur-3xl animate-drift" />
                <div className="relative flex flex-col gap-5">
                  <span className="font-hand text-[30px] leading-none text-moss">
                    Let&apos;s talk
                  </span>
                  <h2 className="m-0 font-serif text-[44px] font-normal leading-tight tracking-tight">
                    If you are building something in travel, AI or anything with
                    real users, I would like to hear about it.
                  </h2>
                  <p className="m-0 text-[17px] text-soft">
                    I am in Munich, happy to work across Germany, hybrid or
                    remote. I hold a Chancenkarte and switch to a Blue Card with
                    an offer, which only takes a short declaration from the
                    employer. I reply to every message, usually within a day.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Magnetic>
                      <a
                        href="mailto:anns.qasim@gmail.com"
                        className="btn-primary inline-flex min-h-[48px] items-center gap-2 rounded-full bg-moss px-6 py-3.5 text-[16px] font-medium text-ivory"
                      >
                        Email me
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href="https://linkedin.com/in/annsqasim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost inline-flex min-h-[48px] items-center gap-2 rounded-full border border-hair px-6 py-3.5 text-[16px] font-medium text-ink"
                      >
                        LinkedIn
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href="https://github.com/annsqasim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost inline-flex min-h-[48px] items-center gap-2 rounded-full border border-hair px-6 py-3.5 text-[16px] font-medium text-ink"
                      >
                        GitHub
                      </a>
                    </Magnetic>
                  </div>
                </div>
                <div className="relative flex flex-col border-t border-line text-[15px]">
                  {[
                    ["Based in", "Munich, Germany"],
                    ["Time zone", "CET"],
                    ["Work permit", "Chancenkarte, Blue Card eligible"],
                    ["Languages", "English, Urdu, German (learning)"],
                    ["Looking for", "Senior or lead, hybrid or remote"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between gap-4 border-b border-line py-3.5"
                    >
                      <span className="text-mute">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </section>

        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-4 px-8 py-7 text-sm text-mute">
            <span>
              Muhammad Anns Bin Qasim, 2026. Written by me, not generated.
            </span>
            <span>Built with Next.js, hosted on Vercel.</span>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
