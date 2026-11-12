"use client";
import { motion, useReducedMotion } from "framer-motion";

const parts = [
  { text: "I build web products" },
  { text: " people actually " },
  { text: "use", emph: true },
  { text: ", and I lead the teams that ship them." },
];

export function KineticHeadline() {
  const prefersReduced = useReducedMotion();
  let idx = 0;
  return (
    <h1 className="m-0 font-serif font-normal text-[52px] sm:text-[60px] lg:text-[64px] leading-[1.08] tracking-[-0.015em] text-ink">
      {parts.map((p, pi) => (
        <span
          key={pi}
          className={p.emph ? "italic text-moss" : ""}
          style={{ fontStyle: p.emph ? "italic" : "inherit" }}
        >
          {p.text.split("").map((ch) => {
            const i = idx++;
            return (
              <motion.span
                key={i}
                initial={prefersReduced ? false : { opacity: 0, y: 40, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.012,
                }}
                className="inline-block"
              >
                {ch === " " ? " " : ch}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
