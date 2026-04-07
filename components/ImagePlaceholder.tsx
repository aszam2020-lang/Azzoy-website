interface ImagePlaceholderProps {
  aspect?: string;
  color: string;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  aspect = "4/5",
  color,
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: aspect, backgroundColor: color }}
    >
      {label && (
        <span className="absolute bottom-4 left-4 font-body text-label uppercase tracking-[0.1em] text-white/60">
          {label}
        </span>
      )}
    </div>
  );
}
