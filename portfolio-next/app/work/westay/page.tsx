import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";

export const metadata = {
  title: "Case study: WeStay | Anns Qasim",
  description:
    "From an empty repo to a live luxury stays platform in under a year. What we built, the decisions that mattered, and what I would do differently.",
};

export default function WeStayCase() {
  return (
    <SmoothScroll>
      <CursorGlow />
      <ScrollProgress />
      <div className="relative overflow-x-hidden">
        <Nav />

        <header className="mx-auto max-w-[1120px] px-8 pb-14 pt-24">
          <span className="text-[15px] font-medium text-moss">
            WeStay · Munich · November 2025 to now
          </span>
          <h1 className="m-0 mb-6 mt-3.5 max-w-[880px] font-serif text-[60px] font-normal leading-[1.06] tracking-[-0.015em]">
            From an empty repository to a live luxury stays platform in under a
            year
          </h1>
          <p className="m-0 mb-10 max-w-[700px] text-[20px] text-soft">
            I joined as the first engineer and became tech lead for a team of
            five. Here is what we built, the decisions that mattered, and what
            I would do differently next time.
          </p>

          <div className="grid grid-cols-2 gap-6 border-y border-line py-6 text-[15px] md:grid-cols-4">
            {[
              ["My role", "Tech Lead, Senior Full-Stack"],
              ["Team", "5 engineers, 1 PM, 1 designer"],
              ["Stack", "Next.js, NestJS, PostgreSQL, Azure"],
              ["Timeline", "[X] months to first booking"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span className="text-mute">{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="mx-auto max-w-[1120px] px-8">
          <div className="relative h-[540px] overflow-hidden rounded-[18px] border border-line">
            <Image
              src="/screenshots/westay.png"
              alt="WeStay search and property page"
              fill
              sizes="(max-width:768px) 90vw, 1120px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <article className="mx-auto grid max-w-[1120px] grid-cols-1 gap-16 px-8 pb-24 pt-20 lg:grid-cols-[220px_1fr]">
          <aside className="flex flex-col gap-2.5 self-start text-[15px] lg:sticky lg:top-24">
            <span className="mb-1 font-semibold">In this story</span>
            {[
              ["#problem", "Where we started"],
              ["#decisions", "Three decisions that mattered"],
              ["#ai", "Where AI fit in"],
              ["#outcome", "How it turned out"],
              ["#next", "What I would change"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-mute transition-colors hover:text-moss"
              >
                {label}
              </Link>
            ))}
          </aside>

          <div className="flex max-w-[700px] flex-col gap-14">
            <Reveal>
              <section id="problem" className="flex flex-col gap-3.5">
                <h2 className="m-0 font-serif text-[34px] font-normal">
                  Where we started
                </h2>
                <p className="m-0 text-[18px] text-soft">
                  A founding team with a clear product vision, a designer, and
                  no engineering. The brief was a booking platform for high-end
                  stays with a content-led front end, supplier integrations and
                  payments, launched before the next season. I had a laptop and
                  a blank repository.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section id="decisions" className="flex flex-col gap-2">
                <h2 className="m-0 mb-3 font-serif text-[34px] font-normal">
                  Three decisions that mattered
                </h2>
                {[
                  {
                    n: "1.",
                    t: "A modular monolith, not microservices",
                    p: "One NestJS application with strict module boundaries and a single PostgreSQL database. Five engineers do not need a distributed system, they need fast local development and one deploy. We kept the seams clean so a module can be pulled out later if it ever needs to be. So far none has.",
                  },
                  {
                    n: "2.",
                    t: "Server components by default, client state only where it earns it",
                    p: "Next.js App Router with most property and content pages rendered on the server. Search and booking are isolated client islands. The result is a content-heavy site that scores well on Core Web Vitals without anyone whose job is performance.",
                  },
                  {
                    n: "3.",
                    t: "Buy payments and auth, build the booking engine",
                    p: "Stripe and a managed identity provider from day one. Engineering time went into what differentiates the product: availability, pricing rules and supplier sync, which is where the real complexity lives.",
                  },
                ].map((d, i, arr) => (
                  <div
                    key={d.n}
                    className={`grid grid-cols-[48px_1fr] gap-4 border-t border-line py-6 ${
                      i === arr.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-hand text-[36px] leading-none text-moss">
                      {d.n}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="m-0 text-[21px] font-semibold">{d.t}</h3>
                      <p className="m-0 text-[17px] text-soft">{d.p}</p>
                    </div>
                  </div>
                ))}
              </section>
            </Reveal>

            <Reveal>
              <section id="ai" className="flex flex-col gap-3.5">
                <h2 className="m-0 font-serif text-[34px] font-normal">
                  Where AI fit in
                </h2>
                <p className="m-0 text-[18px] text-soft">
                  Two places. In delivery, custom MCP skills that encode our
                  conventions so Claude Code and Cursor produce code that
                  already looks like the repo. In product, an Azure AI Foundry
                  pipeline that drafts property descriptions from supplier data
                  for a human editor to approve. Every AI-generated change
                  still goes through review and CI. That rule is not
                  negotiable.
                </p>
                <pre className="m-0 mt-1.5 whitespace-pre-line rounded-[14px] border border-line bg-cream px-6 py-5 font-mono text-[14px] leading-[1.7] text-soft">
{`skills/
  review-pr.md        the checklist the team actually uses
  new-module.md       NestJS module scaffold with tests
  design-tokens.md    maps Figma tokens to Tailwind config
  release-notes.md    drafts notes from merged PRs`}
                </pre>
              </section>
            </Reveal>

            <Reveal>
              <section id="outcome" className="flex flex-col gap-4">
                <h2 className="m-0 font-serif text-[34px] font-normal">
                  How it turned out
                </h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {[
                    ["[X]", "months to first live booking"],
                    ["[X]", "Lighthouse performance on mobile"],
                    ["5", "engineers onboarded and shipping weekly"],
                  ].map(([n, l]) => (
                    <div
                      key={l}
                      className="flex flex-col gap-1 rounded-[14px] border border-line bg-cream p-5"
                    >
                      <span className="font-serif text-[40px] leading-none">
                        {n}
                      </span>
                      <span className="text-sm text-mute">{l}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="next" className="flex flex-col gap-3.5">
                <h2 className="m-0 font-serif text-[34px] font-normal">
                  What I would change
                </h2>
                <p className="m-0 text-[18px] text-soft">
                  [One honest paragraph in your own words. Hiring managers
                  trust this section more than the numbers above.]
                </p>
              </section>
            </Reveal>

            <div className="flex flex-wrap justify-between gap-4 border-t border-line pt-7">
              <Link
                href="/"
                className="inline-flex min-h-[44px] items-center gap-2 text-mute transition-colors hover:text-moss"
              >
                <ArrowLeft size={16} />
                Back to all work
              </Link>
              <Link
                href="/#work"
                className="inline-flex min-h-[44px] items-center gap-2 font-medium text-moss"
              >
                Next story: Almosafer
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>

        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-4 px-8 py-7 text-sm text-mute">
            <span>
              Muhammad Anns Bin Qasim, 2026. Written by me, not generated.
            </span>
            <span>Munich, Germany</span>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
