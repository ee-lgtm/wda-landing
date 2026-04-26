interface SectionIntroProps {
  number: string;
  char: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionIntro({
  number,
  char,
  title,
  subtitle,
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {/* Number + character */}
      <p className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-zinc-400">
          {number}
        </span>
        <span className="text-2xl text-zinc-300 select-none">{char}</span>
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
