"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

type Props = {
  tag: string;
  title: string;
  description: string;
  stack: string;
  href: string;
  external?: boolean;
  cta: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export function WorkCard({
  tag,
  title,
  description,
  stack,
  href,
  external,
  cta,
  image,
  imageAlt,
  reverse,
}: Props) {
  const Content = (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-medium tracking-wide text-moss">{tag}</span>
      <h3 className="m-0 font-serif text-[32px] font-medium leading-[1.2]">
        {title}
      </h3>
      <p className="m-0 text-base text-soft">{description}</p>
      <span className="text-sm text-mute">{stack}</span>
      <span className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-medium text-moss">
        {cta}
        <span className="transition-transform duration-500 ease-out group-hover:translate-x-1.5">
          {external ? (
            <ArrowUpRight size={16} strokeWidth={2} />
          ) : (
            <ArrowRight size={16} strokeWidth={2} />
          )}
        </span>
      </span>
    </div>
  );

  const Visual = (
    <div className="relative min-h-[320px] overflow-hidden rounded-[14px] bg-ink/5">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width:768px) 90vw, 500px"
        className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
      />
    </div>
  );

  return (
    <TiltCard className="group">
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="grid grid-cols-1 items-center gap-10 rounded-[20px] border border-line bg-cream p-9 text-ink no-underline transition-colors hover:border-hair md:grid-cols-2"
      >
        {reverse ? (
          <>
            {Visual}
            {Content}
          </>
        ) : (
          <>
            {Content}
            {Visual}
          </>
        )}
      </Link>
    </TiltCard>
  );
}
