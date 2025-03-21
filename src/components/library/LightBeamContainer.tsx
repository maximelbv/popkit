import {
  CSSProperties,
  FC,
  MouseEvent,
  PropsWithChildren,
  useRef,
} from "react";

interface LightBeamContainerProps extends PropsWithChildren {
  className?: string;
  beamColor?: string;
  beamRadius?: string;
}

const LightBeamContainer: FC<LightBeamContainerProps> = ({
  children,
  className = "",
  beamColor = "rgba(255, 255, 255, 0.25)",
  beamRadius = "80%",
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const { left, top } = divRef.current.getBoundingClientRect();
    divRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    divRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
    divRef.current.style.setProperty("--beam-color", beamColor);
    divRef.current.style.setProperty("--beam-radius", beamRadius);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden ${className}`}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--beam-color": "rgba(255, 255, 255, 0.05)",
          "--beam-radius": beamRadius,
        } as CSSProperties
      }
    >
      {children}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 ease group-hover:opacity-60 group-focus-within:opacity-60"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--beam-color), transparent var(--beam-radius))",
        }}
      />
    </div>
  );
};

export default LightBeamContainer;
