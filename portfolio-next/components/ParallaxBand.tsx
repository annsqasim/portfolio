"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.12, 1.08]);

  return (
    <div ref={ref} className="relative h-[560px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/lauterbrunnen-wide.jpg"
          alt="Lauterbrunnen valley with Anns in the foreground"
          fill
          sizes="100vw"
          className="object-cover object-[50%_45%] opacity-90"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1120px] px-8 pb-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-hand text-[26px] text-ivory [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]"
        >
          Switzerland, autumn. Taken by a very patient friend.
        </motion.span>
      </div>
    </div>
  );
}
