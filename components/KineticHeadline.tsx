"use client";
import { motion, useReducedMotion } from "framer-motion";

const parts = [
  { text: "I build web products" },
  { text: " people actually " },
  { text: "use", emph: true },
  { text: ", and I lead the teams that ship them." },
];

const fullText = parts.map((p) => p.text).join("");

// Group characters into words so lines only wrap at spaces. A word can span
// parts (e.g. "use" + ","), so each character keeps its own emphasis flag.
type Char = { ch: string; emph: boolean; i: number };
const words: Char[][] = [[]];
let charIdx = 0;
for (const p of parts) {
  for (const ch of p.text) {
    if (ch === " ") {
      if (words[words.length - 1].length) words.push([]);
    } else {
      words[words.length - 1].push({ ch, emph: !!p.emph, i: charIdx++ });
    }
  }
}

export function KineticHeadline() {
  const prefersReduced = useReducedMotion();
  return (
    <h1
      aria-label={fullText}
      className="m-0 font-serif font-normal text-[52px] sm:text-[60px] lg:text-[64px] leading-[1.08] tracking-[-0.015em] text-ink"
    >
      {words.map((word, wi) => (
        <span key={wi} aria-hidden>
          <span className="inline-block whitespace-nowrap">
            {word.map(({ ch, emph, i }) => (
              <motion.span
                key={i}
                initial={prefersReduced ? false : { opacity: 0, y: 40, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.012,
                }}
                className={`inline-block ${emph ? "italic text-moss" : ""}`}
              >
                {ch}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 && " "}
        </span>
      ))}
    </h1>
  );
}
