"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 h-[2px] w-full bg-moss z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
