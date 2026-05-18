// Centered rule broken by a small gold diamond — the Figma's era separator.
export function TimelineOrnament({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span className="h-px w-16 bg-gold/50" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px w-16 bg-gold/50" />
    </div>
  );
}
