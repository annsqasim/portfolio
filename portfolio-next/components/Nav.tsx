"use client";
import Link from "next/link";
import { Magnetic } from "./Magnetic";

export function Nav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-8 py-5">
        <Link href="#top" className="inline-flex items-center gap-2.5 font-serif text-[22px] font-medium text-ink">
          <span className="inline-block h-[10px] w-[10px] rounded-sm bg-moss animate-spin" />
          Anns Qasim
        </Link>
        <div className="flex flex-wrap items-center gap-7 text-[15px] text-mute">
          <Link href="#work" className="nav-item hover:text-ink transition-colors">
            Work
          </Link>
          <Link href="#about" className="nav-item hover:text-ink transition-colors">
            About
          </Link>
          <Link href="#experience" className="nav-item hover:text-ink transition-colors">
            Experience
          </Link>
          <Magnetic>
            <Link
              href="#contact"
              className="inline-flex min-h-[40px] items-center rounded-full border border-ink px-[18px] py-[9px] text-[15px] text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              Say hello
            </Link>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}
