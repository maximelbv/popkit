import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

type ClickParticlesProps = {
  particleCount?: number;
  particleSize?: number;
  particleColor?: string | string[];
  duration?: number;
  spread?: number;
  ease?: string;
  shape?: "circle" | "square" | "confetti";
  className?: string;
  children?: React.ReactNode;
  particleOpacity?: number;
  scaleFrom?: number;
  scaleTo?: number;
  distanceMin?: number;
  distanceMax?: number;
  zIndex?: number;
  containerStyle?: React.CSSProperties;
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
  particleOpacity = 1,
  scaleFrom = 1,
  scaleTo = 0.5,
  distanceMin = 30,
  distanceMax = 70,
  zIndex = 1,
  containerStyle = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleIndex = useRef(0);
  const particlePool = useRef<HTMLSpanElement[]>([]);

  const getRandomColor = useCallback(() => {
    if (Array.isArray(particleColor)) {
      const i = Math.floor(Math.random() * particleColor.length);
      return particleColor[i];
    }
    return particleColor;
  }, [particleColor]);

  const createParticleStyle = useCallback((): Partial<CSSStyleDeclaration> => {
    const isConfetti = shape === "confetti";
    return {
      position: "absolute",
      width: `${isConfetti ? particleSize * 1.5 : particleSize}px`,
      height: `${isConfetti ? particleSize * 0.4 : particleSize}px`,
      backgroundColor: getRandomColor(),
      borderRadius:
        shape === "circle" ? "50%" : shape === "square" ? "0%" : "2px",
      pointerEvents: "none",
      transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
      opacity: "0",
      zIndex: zIndex.toString(),
    };
  }, [particleSize, shape, getRandomColor, zIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pool: HTMLSpanElement[] = Array.from({ length: 100 }, () => {
      const span = document.createElement("span");
      Object.assign(span.style, createParticleStyle());
      container.appendChild(span);
      return span;
    });

    particlePool.current = pool;

    return () => {
      pool.forEach((el) => el.remove());
    };
  }, [createParticleStyle]);

  const animateParticles = useCallback(
    (x: number, y: number) => {
      const baseAngle = Math.random() * 360;
      const halfSpread = spread / 2;

      for (let i = 0; i < particleCount; i++) {
        const angle = baseAngle - halfSpread + Math.random() * spread;
        const distance =
          distanceMin + Math.random() * (distanceMax - distanceMin);
        const rad = (angle * Math.PI) / 180;
        const dx = Math.cos(rad) * distance;
        const dy = Math.sin(rad) * distance;

        const particle = particlePool.current[particleIndex.current];
        particleIndex.current =
          (particleIndex.current + 1) % particlePool.current.length;

        particle.style.backgroundColor = getRandomColor();
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = particleOpacity.toString();

        gsap.killTweensOf(particle);
        gsap.set(particle, { x: 0, y: 0, scale: scaleFrom });
        gsap.to(particle, {
          x: dx,
          y: dy,
          opacity: 0,
          scale: scaleTo,
          duration,
          ease,
        });
      }
    },
    [
      duration,
      ease,
      particleCount,
      spread,
      particleOpacity,
      scaleFrom,
      scaleTo,
      distanceMin,
      distanceMax,
      getRandomColor,
    ]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      animateParticles(e.clientX - rect.left, e.clientY - rect.top);
    },
    [animateParticles]
  );

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{ position: "relative", ...containerStyle }}
      className={className}
    >
      {children}
    </div>
  );
};
