"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function HeroPhoto() {
  const wrap = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const ix = useMotionValue(0);
  const iy = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 18 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18 });
  const six = useSpring(ix, { stiffness: 140, damping: 18 });
  const siy = useSpring(iy, { stiffness: 140, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (prefersReduced || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width / 2)) / r.width;
    const py = (e.clientY - (r.top + r.height / 2)) / r.height;
    ry.set(px * 10);
    rx.set(-py * 10);
    ix.set(-px * 22);
    iy.set(-py * 22);
  };
  const onLeave = () => {
    rx.set(0); ry.set(0); ix.set(0); iy.set(0);
  };

  return (
    <div ref={wrap} onMouseMove={onMove} onMouseLeave={onLeave} className="relative flex justify-center [perspective:1000px]">
      <motion.figure
        className="relative m-0 flex max-w-[400px] w-full flex-col gap-3.5 rounded-md border border-line bg-ivory px-3.5 pb-[18px] pt-3.5 shadow-[0_18px_40px_rgba(30,31,28,0.12)] animate-float"
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden rounded-[3px] aspect-[4/5]">
          <motion.div
            className="absolute inset-0"
            style={{ x: six, y: siy, scale: 1.1 }}
          >
            <Image
              src="/images/anns-portrait.jpg"
              alt="Anns in Lauterbrunnen, Switzerland"
              fill
              sizes="(max-width:768px) 90vw, 400px"
              className="object-cover object-[50%_30%]"
              priority
            />
          </motion.div>
        </div>
        <figcaption className="text-center font-hand text-[22px] text-soft leading-tight">
          Lauterbrunnen, one rainy Saturday
        </figcaption>
      </motion.figure>
    </div>
  );
}
