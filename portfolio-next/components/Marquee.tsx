const items = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Claude Code",
  "MCP",
  "Azure AI Foundry",
  "Vercel",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-cream py-[18px]">
      <div className="flex gap-14 whitespace-nowrap animate-marquee will-change-transform font-serif text-[22px] italic text-moss">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-14">
            <span>{item}</span>
            <span className="text-hair">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
