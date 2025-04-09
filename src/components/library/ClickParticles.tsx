import React, { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";

type ClickParticlesProps = {
  particleCount?: number;
  particleSize?: number;
  particleColor?: string;
  duration?: number;
  spread?: number;
  ease?: string;
  shape?: "circle" | "square";
  className?: string;
  children?: React.ReactNode;
};

export const ClickParticles: React.FC<ClickParticlesProps> = ({
  particleCount = 12,
  particleSize = 6,
  particleColor = "#ffffff",
  duration = 0.6,
  spread = 360,
  ease = "power2.out",
  shape = "circle",
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlePool = useRef<HTMLSpanElement[]>([]);
  const particleIndex = useRef(0);

  useEffect(() => {
    const pool: HTMLSpanElement[] = [];

    for (let i = 0; i < 100; i++) {
      const span = document.createElement("span");
      Object.assign(span.style, {
        position: "absolute",
        width: `${particleSize}px`,
        height: `${particleSize}px`,
        backgroundColor: particleColor,
        borderRadius: shape === "circle" ? "50%" : "0%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        opacity: "0",
      });
      pool.push(span);
    }

    particlePool.current = pool;
    const container = containerRef.current;
    if (container) {
      pool.forEach((el) => container.appendChild(el));
    }

    return () => {
      pool.forEach((el) => el.remove());
    };
  }, [particleColor, particleSize, shape]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const baseAngle = Math.random() * 360;
      const halfSpread = spread / 2;

      for (let i = 0; i < particleCount; i++) {
        const angle = baseAngle - halfSpread + Math.random() * spread;
        const distance = 30 + Math.random() * 40;
        const rad = (angle * Math.PI) / 180;
        const dx = Math.cos(rad) * distance;
        const dy = Math.sin(rad) * distance;

        const particle = particlePool.current[particleIndex.current];
        particleIndex.current =
          (particleIndex.current + 1) % particlePool.current.length;

        gsap.killTweensOf(particle);
        Object.assign(particle.style, {
          left: `${x}px`,
          top: `${y}px`,
          opacity: "1",
        });

        gsap.set(particle, {
          x: 0,
          y: 0,
          scale: 1,
        });

        gsap.to(particle, {
          x: dx,
          y: dy,
          opacity: 0,
          scale: 0.5,
          duration,
          ease,
        });
      }
    },
    [duration, ease, particleCount, spread]
  );

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{
        position: "relative",
      }}
      className={`${className}`}
    >
      {children}
    </div>
  );
};
