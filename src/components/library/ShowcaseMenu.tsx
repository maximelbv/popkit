import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type MouseEvent,
} from "react";

type MenuSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

type Easing =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear"
  | string;

interface ItemData {
  readonly link: string;
  readonly text: string;
  readonly image?: string | null;
}

interface ShowcaseMenuProps {
  readonly items: ItemData[];
  readonly textAlignment?: "left" | "center" | "right";
  readonly textColor?: string;
  readonly bgColor?: string;
  readonly displayImages?: boolean;
  readonly displaySeparators?: boolean;
  readonly backgroundAnimation?: boolean;
  readonly transitionDuration?: number;
  readonly transitionEasing?: Easing;
  readonly size?: MenuSize;
  readonly className?: string;
  readonly itemClassName?: string;
}

interface MenuItemProps extends ItemData {
  readonly onHover: (event: MouseEvent, image: string | null) => void;
  readonly textColor: string;
  readonly bgColor: string;
  readonly displayImages: boolean;
  readonly backgroundAnimation?: boolean;
  readonly transitionDuration: number;
  readonly transitionEasing: string;
  readonly size: MenuSize;
  readonly displaySeparators: boolean;
  readonly className?: string;
}

const sizeConfig = {
  xxs: { fontSize: "16px", padding: "8px", imgWidth: "120px" },
  xs: { fontSize: "24px", padding: "12px", imgWidth: "180px" },
  sm: { fontSize: "30px", padding: "16px", imgWidth: "240px" },
  md: { fontSize: "48px", padding: "18px", imgWidth: "300px" },
  lg: { fontSize: "72px", padding: "20px", imgWidth: "380px" },
  xl: { fontSize: "96px", padding: "20px", imgWidth: "500px" },
};

const MenuItem = ({
  link,
  text,
  image,
  onHover,
  textColor,
  bgColor,
  backgroundAnimation,
  transitionDuration,
  transitionEasing,
  size,
  displaySeparators,
  className,
}: MenuItemProps) => {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const { fontSize, padding } = sizeConfig[size];
  const separatorClass = displaySeparators ? "!border-b" : "";

  const findClosestEdge = useCallback(
    (
      e: MouseEvent<HTMLAnchorElement>,
      element: HTMLElement
    ): "top" | "bottom" => {
      const rect = element.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;

      const topEdgeDist = Math.abs(mouseY);
      const bottomEdgeDist = Math.abs(mouseY - rect.height);

      return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
    },
    []
  );

  const applyTransition = useCallback(
    (element: HTMLElement, fromValue: string, toValue: string) => {
      if (!element) return;

      element.style.transition = "none";
      element.style.transform = `translateY(${fromValue})`;

      void element.offsetWidth;

      element.style.transition = `transform ${transitionDuration}ms ${transitionEasing}`;
      element.style.transform = `translateY(${toValue})`;
    },
    [transitionDuration, transitionEasing]
  );

  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onHover(e, image || null);

      if (
        !itemRef.current ||
        !bgRef.current ||
        !textRef.current ||
        !backgroundAnimation
      )
        return;

      const edge = findClosestEdge(e, itemRef.current);
      const fromValue = edge === "top" ? "-101%" : "101%";

      applyTransition(bgRef.current, fromValue, "0%");
      textRef.current.style.color = bgColor;
    },
    [
      findClosestEdge,
      applyTransition,
      onHover,
      bgColor,
      image,
      backgroundAnimation,
    ]
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onHover(e, null);

      if (
        !itemRef.current ||
        !bgRef.current ||
        !textRef.current ||
        !backgroundAnimation
      )
        return;

      const edge = findClosestEdge(e, itemRef.current);
      textRef.current.style.color = textColor;
      const toValue = edge === "top" ? "-101%" : "101%";

      applyTransition(bgRef.current, "0%", toValue);
      textRef.current.style.color = textColor;
    },
    [findClosestEdge, applyTransition, onHover, textColor, backgroundAnimation]
  );

  return (
    <a
      ref={itemRef}
      href={link}
      className={`relative block group overflow-hidden ${separatorClass} ${className}`}
      style={{
        fontWeight: "bold",
        color: textColor,
        background: bgColor,
        borderColor: textColor,
        fontSize: fontSize,
        padding: padding,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={textRef}
        className={`relative z-10 transition-colors duration-600`}
      >
        {text}
      </span>
      <span
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 ease-in-out group-hover:translate-y-0"
        style={{
          transform: "translateY(101%)",
          backgroundColor: textColor,
        }}
      />
    </a>
  );
};

const ShowcaseMenu = ({
  items = [],
  textAlignment = "left",
  textColor = "white",
  bgColor = "black",
  displayImages = true,
  displaySeparators = true,
  backgroundAnimation = true,
  transitionDuration = 500,
  transitionEasing = "cubic-bezier(0.19,1,0.22,1)",
  size = "md",
  className,
  itemClassName,
}: ShowcaseMenuProps) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const { imgWidth } = sizeConfig[size];

  useEffect(() => {
    const imageUrls = items
      .filter((item) => item.image)
      .map((item) => item.image!);

    const preloadedImages: HTMLImageElement[] = [];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      preloadedImages.push(img);
    });

    return () => {
      preloadedImages.length = 0;
    };
  }, [items]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (hoveredImage) {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    },
    [hoveredImage]
  );

  const handleHover = useCallback((event: MouseEvent, image: string | null) => {
    setHoveredImage(image);
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[textAlignment || "left"];

  return (
    <div
      ref={menuRef}
      onMouseMove={handleMouseMove}
      className={`relative select-none ${alignmentClass} ${className}`}
    >
      <nav>
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            onHover={handleHover}
            textColor={textColor}
            bgColor={bgColor}
            displayImages={displayImages}
            backgroundAnimation={backgroundAnimation}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
            size={size}
            displaySeparators={displaySeparators}
            className={itemClassName}
          />
        ))}
      </nav>

      {displayImages &&
        items.map(
          (item, idx) =>
            item.image && (
              <div
                key={idx}
                className={`fixed ${imgWidth} aspect-video bg-cover bg-center rounded-[10px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-50 ${
                  hoveredImage === item.image ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: imgWidth,
                  top: `${position.y + 10}px`,
                  left: `${position.x + 10}px`,
                  backgroundImage: `url(${item.image})`,
                }}
              />
            )
        )}
    </div>
  );
};

export default ShowcaseMenu;
