import {
  useState,
  useRef,
  type ReactNode,
  type CSSProperties,
  type FC,
  type MouseEvent,
} from "react";

interface TiltCardProps {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}

export const TiltCard: FC<TiltCardProps> = ({
  children,
  strength = 25,
  radius = 300,
  className = "",
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < radius) {
      const normalizedX = distanceX / radius;
      const normalizedY = distanceY / radius;

      setTiltX(normalizedY * strength);
      setTiltY(-normalizedX * strength);
    } else {
      const angle = Math.atan2(distanceY, distanceX);
      setTiltX(Math.sin(angle) * strength);
      setTiltY(-Math.cos(angle) * strength);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTiltX(0);
    setTiltY(0);
  };

  const containerStyle: CSSProperties = {
    position: "relative",
    transformStyle: "preserve-3d",
    willChange: "transform",
    transform: isHovering
      ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      : "perspective(1000px) rotateX(0) rotateY(0)",
    transition: isHovering
      ? "transform 0.1s ease-out"
      : "transform 0.5s ease-out",
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={containerStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
