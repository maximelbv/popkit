import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

type ParticleShape =
  | "circle"
  | "square"
  | "confetti"
  | "shard"
  | "streak"
  | "ring"
  | "starburst"
  | "smokey"
  | "leaf";

type ClickParticlesProps = {
  particleCount?: number;
  particleSize?: number;
  particleColor?: string | string[];
  duration?: number;
  spread?: number;
  ease?: string;
  shape?: ParticleShape;
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
    const baseStyle: Partial<CSSStyleDeclaration> = {
      position: "absolute",
      pointerEvents: "none",
      transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
      opacity: "0",
      zIndex: zIndex.toString(),
    };

    switch (shape) {
      case "circle":
        return {
          ...baseStyle,
          width: `${particleSize}px`,
          height: `${particleSize}px`,
          backgroundColor: getRandomColor(),
          borderRadius: "50%",
        };
      case "square":
        return {
          ...baseStyle,
          width: `${particleSize}px`,
          height: `${particleSize}px`,
          backgroundColor: getRandomColor(),
          borderRadius: "0%",
        };
      case "confetti":
        return {
          ...baseStyle,
          width: `${particleSize * 1.5}px`,
          height: `${particleSize * 0.4}px`,
          backgroundColor: getRandomColor(),
          borderRadius: "2px",
        };
      case "shard":
        return {
          ...baseStyle,
          width: `${particleSize * 0.4}px`,
          height: `${particleSize * 1.6}px`,
          backgroundColor: getRandomColor(),
          borderRadius: "0%",
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        };
      case "streak":
        return {
          ...baseStyle,
          width: `${particleSize * 0.2}px`,
          height: `${particleSize * 2}px`,
          backgroundColor: getRandomColor(),
          borderRadius: "0%",
        };
      case "leaf":
        return {
          ...baseStyle,
          width: `${particleSize}px`,
          height: `${particleSize * 0.6}px`,
          backgroundColor: getRandomColor(),
          borderRadius: "100% 0%",
          transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
        };
      case "starburst":
        return {
          ...baseStyle,
          width: `${particleSize}px`,
          height: `${particleSize}px`,
          backgroundColor: getRandomColor(),
          clipPath:
            "polygon(50% 0%, 60% 35%, 100% 35%, 68% 57%, 78% 100%, 50% 75%, 22% 100%, 32% 57%, 0% 35%, 40% 35%)",
        };
      case "smokey":
        return {
          ...baseStyle,
          width: `${particleSize}px`,
          height: `${particleSize}px`,
          backgroundColor: getRandomColor(),
          borderRadius: "50%",
          filter: "blur(4px)",
        };
      default:
        return baseStyle;
    }
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
