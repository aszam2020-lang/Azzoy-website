"use client";

interface ColorDotsProps {
  colors: { name: string; hex: string }[];
  size?: "sm" | "md";
  activeColor?: string;
  onSelect?: (hex: string) => void;
}

export default function ColorDots({
  colors,
  size = "sm",
  activeColor,
  onSelect,
}: ColorDotsProps) {
  const dotSize = size === "sm" ? "w-3 h-3" : "w-5 h-5";
  const ringSize = size === "sm" ? "w-5 h-5" : "w-7 h-7";

  return (
    <div className="flex items-center gap-3">
      {colors.map((color) => {
        const isActive = activeColor === color.hex;
        return (
          <button
            key={color.hex}
            onClick={() => onSelect?.(color.hex)}
            className={`${ringSize} rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive
                ? "ring-1 ring-stone ring-offset-2 ring-offset-cream"
                : ""
            } ${onSelect ? "cursor-pointer" : "cursor-default"}`}
            title={color.name}
            aria-label={color.name}
          >
            <span
              className={`${dotSize} rounded-full block`}
              style={{ backgroundColor: color.hex }}
            />
          </button>
        );
      })}
    </div>
  );
}
