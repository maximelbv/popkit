import MiniPreviewWrapper from "@/components/MiniPreviewWrapper";
import PreviewWrapper from "@/components/PreviewWrapper";
import ShowcaseMenuDemo from "@/components/demo/ShowcaseMenu";
import { Categories } from "@/constants/categories";
import { Status } from "@/constants/status";
import { ICode, IComponent } from "@/types/components";

const mocks = {
  mock1: [
    {
      link: "#",
      text: "Div Soup",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "404 Labs", image: "https://picsum.photos/1700" },
    {
      link: "#",
      text: "Aperture UI",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "Blackbox",
      image: "https://picsum.photos/1500",
    },
  ],
  mock2: [
    {
      link: "#",
      text: "ピンク スカイの宮殿",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "アストラル力学",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "ブレイズド", image: "https://picsum.photos/1700" },
    {
      link: "#",
      text: "リフトの神殿",
      image: "https://picsum.photos/1500",
    },
  ],
  mock3: [
    {
      link: "#",
      text: "Hover Me !",
    },
  ],
  mock4: [
    {
      link: "#",
      text: "First",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "Second",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "Third", image: "https://picsum.photos/1700" },
  ],
  mock5: [
    {
      link: "#",
      text: "Without",
      image: "https://picsum.photos/1600",
    },
    {
      link: "#",
      text: "The",
      image: "https://picsum.photos/1800",
    },
    { link: "#", text: "Background", image: "https://picsum.photos/1700" },
    { link: "#", text: "Animation", image: "https://picsum.photos/1710" },
  ],
};

const manualInstallation = {
  mode: "manual",
  variantSelectable: true,
  steps: [
    {
      step: 1,
      title: "Copy the component to your project",
      description: "Place it in your /components folder",
      codeBlock: {
        js: `import { useRef, useState, useEffect, useCallback } from "react";

const sizeConfig = {
  xxs: { fontSize: "16px", padding: "8px", imgWidth: "160px" },
  xs: { fontSize: "20px", padding: "8px", imgWidth: "240px" },
  sm: { fontSize: "30px", padding: "16px", imgWidth: "320px" },
  md: { fontSize: "48px", padding: "32px", imgWidth: "400px" },
  lg: { fontSize: "72px", padding: "40px", imgWidth: "480px" },
  xl: { fontSize: "96px", padding: "48px", imgWidth: "560px" },
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
}) => {
  const itemRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  const { fontSize, padding } = sizeConfig[size];
  const separatorStyle = displaySeparators
    ? { borderBottom: \`1px solid \${textColor}\` }
    : {};

  const findClosestEdge = useCallback((e, element) => {
    const rect = element.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    return Math.abs(mouseY) < Math.abs(mouseY - rect.height) ? "top" : "bottom";
  }, []);

  const applyTransition = useCallback(
    (element, fromValue, toValue) => {
      if (!element) return;

      element.style.transition = "none";
      element.style.transform = \`translateY(\${fromValue})\`;

      void element.offsetWidth;

      element.style.transition = \`transform \${transitionDuration}ms \${transitionEasing}\`;
      element.style.transform = \`translateY(\${toValue})\`;
    },
    [transitionDuration, transitionEasing]
  );

  const handleMouseEnter = useCallback(
    (e) => {
      onHover(e, image || null);

      if (
        !itemRef.current ||
        !bgRef.current ||
        !textRef.current ||
        !backgroundAnimation
      )
        return;

      const edge = findClosestEdge(e, itemRef.current);
      applyTransition(bgRef.current, edge === "top" ? "-101%" : "101%", "0%");
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
    (e) => {
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
      applyTransition(bgRef.current, "0%", edge === "top" ? "-101%" : "101%");
    },
    [findClosestEdge, applyTransition, onHover, textColor, backgroundAnimation]
  );

  return (
    <a
      className={\`\${className}\`}
      ref={itemRef}
      href={link}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        fontWeight: 700,
        fontSize: fontSize,
        padding: padding,
        color: textColor,
        background: bgColor,
        ...separatorStyle,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={textRef}
        style={{
          position: "relative",
          zIndex: 10,
          transition: \`color \${transitionDuration}ms\`,
        }}
      >
        {text}
      </span>
      <span
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundColor: textColor,
          transform: "translateY(101%)",
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
}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);
  const { imgWidth } = sizeConfig[size];

  useEffect(() => {
    const imageUrls = items
      .filter((item) => item.image)
      .map((item) => item.image);
    imageUrls.forEach((url) => (new Image().src = url));
  }, [items]);

  const handleMouseMove = useCallback(
    (event) =>
      hoveredImage && setPosition({ x: event.clientX, y: event.clientY }),
    [hoveredImage]
  );

  const handleHover = useCallback((event, image) => {
    setHoveredImage(image);
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  return (
    <div
      className={\`\${className}\`}
      ref={menuRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        userSelect: "none",
        textAlign: textAlignment,
      }}
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
                style={{
                  position: "fixed",
                  width: imgWidth,
                  aspectRatio: "16/9",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  transition: "opacity 300ms",
                  opacity: hoveredImage === item.image ? 1 : 0,
                  top: \`\${position.y + 10}px\`,
                  left: \`\${position.x + 10}px\`,
                  backgroundImage: \`url(\${item.image})\`,
                  zIndex: 50,
                }}
              />
            )
        )}
    </div>
  );
};

export default ShowcaseMenu;`,
        ts: `import {
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
  xxs: { fontSize: "16px", padding: "8px", imgWidth: "160px" },
  xs: { fontSize: "20px", padding: "8px", imgWidth: "240px" },
  sm: { fontSize: "30px", padding: "16px", imgWidth: "320px" },
  md: { fontSize: "48px", padding: "32px", imgWidth: "400px" },
  lg: { fontSize: "72px", padding: "40px", imgWidth: "480px" },
  xl: { fontSize: "96px", padding: "48px", imgWidth: "560px" },
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
  const separatorStyle = displaySeparators
    ? { borderBottom: \`1px solid \${textColor}\` }
    : {};

  const findClosestEdge = useCallback(
    (
      e: MouseEvent<HTMLAnchorElement>,
      element: HTMLElement
    ): "top" | "bottom" => {
      const rect = element.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      return Math.abs(mouseY) < Math.abs(mouseY - rect.height)
        ? "top"
        : "bottom";
    },
    []
  );

  const applyTransition = useCallback(
    (element: HTMLElement, fromValue: string, toValue: string) => {
      if (!element) return;

      element.style.transition = "none";
      element.style.transform = \`translateY(\${fromValue})\`;

      void element.offsetWidth;

      element.style.transition = \`transform \${transitionDuration}ms \${transitionEasing}\`;
      element.style.transform = \`translateY(\${toValue})\`;
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
      applyTransition(bgRef.current, edge === "top" ? "-101%" : "101%", "0%");
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
      applyTransition(bgRef.current, "0%", edge === "top" ? "-101%" : "101%");
    },
    [findClosestEdge, applyTransition, onHover, textColor, backgroundAnimation]
  );

  return (
    <a
      className={\`\${className}\`}
      ref={itemRef}
      href={link}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        fontWeight: 700,
        fontSize: fontSize,
        padding: padding,
        color: textColor,
        background: bgColor,
        ...separatorStyle,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={textRef}
        style={{
          position: "relative",
          zIndex: 10,
          transition: \`color \${transitionDuration}ms\`,
        }}
      >
        {text}
      </span>
      <span
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundColor: textColor,
          transform: "translateY(101%)",
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
    imageUrls.forEach((url) => (new Image().src = url));
  }, [items]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) =>
      hoveredImage && setPosition({ x: event.clientX, y: event.clientY }),
    [hoveredImage]
  );

  const handleHover = useCallback((event: MouseEvent, image: string | null) => {
    setHoveredImage(image);
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  return (
    <div
      className={\`\${className}\`}
      ref={menuRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        userSelect: "none",
        textAlign: textAlignment,
      }}
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
                style={{
                  position: "fixed",
                  width: imgWidth,
                  aspectRatio: "16/9",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  transition: "opacity 300ms",
                  opacity: hoveredImage === item.image ? 1 : 0,
                  top: \`\${position.y + 10}px\`,
                  left: \`\${position.x + 10}px\`,
                  backgroundImage: \`url(\${item.image})\`,
                  zIndex: 50,
                }}
              />
            )
        )}
    </div>
  );
};

export default ShowcaseMenu;`,
        jsTailwind: `import { useRef, useState, useEffect, useCallback } from "react";

const sizeConfig = {
  xxs: { fontSize: "text-md", padding: "p-2", imgWidth: "w-40" },
  xs: { fontSize: "text-xl", padding: "p-2", imgWidth: "w-60" },
  sm: { fontSize: "text-3xl", padding: "p-4", imgWidth: "w-80" },
  md: { fontSize: "text-5xl", padding: "p-8", imgWidth: "w-100" },
  lg: { fontSize: "text-7xl", padding: "p-10", imgWidth: "w-120" },
  xl: { fontSize: "text-8xl", padding: "p-12", imgWidth: "w-140" },
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
}) => {
  const itemRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  const { fontSize, padding } = sizeConfig[size];
  const separatorClass = displaySeparators ? "border-b" : "";

  const findClosestEdge = useCallback((e, element) => {
    const rect = element.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;

    const topEdgeDist = Math.abs(mouseY);
    const bottomEdgeDist = Math.abs(mouseY - rect.height);

    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  }, []);

  const applyTransition = useCallback(
    (element, fromValue, toValue) => {
      if (!element) return;

      element.style.transition = "none";
      element.style.transform = \`translateY(\${fromValue})\`;

      void element.offsetWidth;

      element.style.transition = \`transform \${transitionDuration}ms \${transitionEasing}\`;
      element.style.transform = \`translateY(\${toValue})\`;
    },
    [transitionDuration, transitionEasing]
  );

  const handleMouseEnter = useCallback(
    (e) => {
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
    (e) => {
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
      className={\`relative block group overflow-hidden font-bold \${fontSize} \${padding} \${separatorClass} \${className}\`}
      style={{
        color: textColor,
        background: bgColor,
        borderColor: textColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={textRef}
        className="relative z-10 transition-colors duration-600"
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
}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);
  const { imgWidth } = sizeConfig[size];

  useEffect(() => {
    const imageUrls = items
      .filter((item) => item.image)
      .map((item) => item.image);

    const preloadedImages = [];

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
    (event) => {
      if (hoveredImage) {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    },
    [hoveredImage]
  );

  const handleHover = useCallback((event, image) => {
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
      className={\`relative select-none \${alignmentClass} \${className}\`}
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
                className={\`fixed \${imgWidth} aspect-video bg-cover bg-center rounded-[10px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-50 \${
                  hoveredImage === item.image ? "opacity-100" : "opacity-0"
                }\`}
                style={{
                  top: \`\${position.y + 10}px\`,
                  left: \`\${position.x + 10}px\`,
                  backgroundImage: \`url(\${item.image})\`,
                }}
              />
            )
        )}
    </div>
  );
};

export default ShowcaseMenu;`,
        tsTailwind: `import {
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
  xxs: { fontSize: "text-md", padding: "p-2", imgWidth: "w-40" },
  xs: { fontSize: "text-xl", padding: "p-2", imgWidth: "w-60" },
  sm: { fontSize: "text-3xl", padding: "p-4", imgWidth: "w-80" },
  md: { fontSize: "text-5xl", padding: "p-8", imgWidth: "w-100" },
  lg: { fontSize: "text-7xl", padding: "p-10", imgWidth: "w-120" },
  xl: { fontSize: "text-8xl", padding: "p-12", imgWidth: "w-140" },
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
  const separatorClass = displaySeparators ? "border-b" : "";

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
      element.style.transform = \`translateY(\${fromValue})\`;

      void element.offsetWidth;

      element.style.transition = \`transform \${transitionDuration}ms \${transitionEasing}\`;
      element.style.transform = \`translateY(\${toValue})\`;
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
      className={\`relative block group overflow-hidden font-bold \${fontSize} \${padding} \${separatorClass} \${className}\`}
      style={{
        color: textColor,
        background: bgColor,
        borderColor: textColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={textRef}
        className="relative z-10 transition-colors duration-600"
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
      className={\`relative select-none \${alignmentClass} \${className}\`}
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
                className={\`fixed \${imgWidth} aspect-video bg-cover bg-center rounded-[10px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-50 \${
                  hoveredImage === item.image ? "opacity-100" : "opacity-0"
                }\`}
                style={{
                  top: \`\${position.y + 10}px\`,
                  left: \`\${position.x + 10}px\`,
                  backgroundImage: \`url(\${item.image})\`,
                }}
              />
            )
        )}
    </div>
  );
};

export default ShowcaseMenu;`,
      } as ICode,
    },
    {
      step: 2,
      title: "Import and Customize",
      description:
        "Use it anywhere in your app, adjust props for customization",
      codeBlock: {
        js: `import ShowcaseMenu from '@/components/ShowcaseMenu'

const myItems = [...];

export default function MyComponent() {
  return (
    <ShowcaseMenu
      items={myItems}
      size="xl"
      bgColor="blue"
      transitionDuration={700}
    />
  );
}`,
        ts: `import ShowcaseMenu from '@/components/ShowcaseMenu'

const myItems = [...];

export default function MyComponent() {
  return (
    <ShowcaseMenu
      items={myItems}
      size="xl"
      bgColor="blue"
      transitionDuration={700}
    />
  );
}`,
        jsTailwind: `import ShowcaseMenu from '@/components/ShowcaseMenu'

const myItems = [...];

export default function MyComponent() {
  return (
    <ShowcaseMenu
      items={myItems}
      size="xl"
      bgColor="blue"
      transitionDuration={700}
    />
  );
}`,
        tsTailwind: `import ShowcaseMenu from '@/components/ShowcaseMenu'

const myItems = [...];

export default function MyComponent() {
  return (
    <ShowcaseMenu
      items={myItems}
      size="xl"
      bgColor="blue"
      transitionDuration={700}
    />
  );
}`,
      },
    },
  ],
};

const overview = {
  miniPreview: () => (
    <MiniPreviewWrapper>
      <ShowcaseMenuDemo
        items={mocks.mock1}
        size="xs"
        bgColor="#18181b"
        displaySeparators={false}
      />
    </MiniPreviewWrapper>
  ),
  preview: () => (
    <PreviewWrapper>
      <ShowcaseMenuDemo
        items={mocks.mock1}
        size="sm"
        className="max-w-[800px] !m-auto"
        bgColor="#050608"
      />
    </PreviewWrapper>
  ),
  code: `import ShowcaseMenu from '@/components/ShowcaseMenu'

const previewItems = [
  { link: "#", text: "Div Soup", image: "https://picsum.photos/1600" },
  { link: "#", text: "404 Labs", image: "https://picsum.photos/1800" },
  { link: "#", text: "Aperture UI", image: "https://picsum.photos/1700" },
  { link: "#", text: "Blackbox", image: "https://picsum.photos/1500" },
];

export default function ShowcaseMenuPreview() {
  return <ShowcaseMenu items={previewItems} size="sm" />
}`,
  quickCopyCode: manualInstallation.steps[0].codeBlock.tsTailwind,
};

const props = [
  {
    property: "items",
    type: "ItemData[]",
    default: "[]",
    description: "Array of the items that will be displayed in the menu",
  },
  {
    property: "textAlignment",
    type: "'left' | 'center' | 'right'",
    default: "'left'",
    description: "Alignment of the text in the menu items",
  },
  {
    property: "textColor",
    type: "string",
    default: "'white'",
    description: "Color of the text in the menu items",
  },
  {
    property: "bgColor",
    type: "string",
    default: "'black'",
    description:
      "Background color of the menu (Also defines the text color on items hover)",
  },
  {
    property: "displayImages",
    type: "boolean",
    default: "true",
    description: "Enable / disable image display on hover",
  },
  {
    property: "displaySeparators",
    type: "boolean",
    default: "true",
    description: "Enable / disable separators between menu items",
  },
  {
    property: "backgroundAnimation",
    type: "boolean",
    default: "true",
    description: "Enable / disable background animation on hover",
  },
  {
    property: "transitionDuration",
    type: "number",
    default: "500",
    description: "Duration of the hover transition in milliseconds",
  },
  {
    property: "transitionEasing",
    type: "Easing",
    default: "'cubic-bezier(0.19,1,0.22,1)'",
    description: "Easing function for the hover transition",
  },
  {
    property: "size",
    type: "MenuSize",
    default: "'md'",
    description: "Size preset for the menu items",
  },
  {
    property: "className",
    type: "string",
    default: "undefined",
    description: "Additional CSS class for the menu container",
  },
  {
    property: "itemClassName",
    type: "string",
    default: "undefined",
    description: "Additional CSS class for individual menu items",
  },
];

const examples = () => [
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
    <MiniPreviewWrapper className="!bg-[#F26850]">
      <ShowcaseMenuDemo
        items={mocks.mock3}
        size="lg"
        textAlignment="center"
        textColor="#F6EBE2"
        bgColor="#F26850"
        className="max-w-[80%] !m-auto"
        itemClassName="!rounded-md"
        displaySeparators={false}
        displayImages={false}
      />
    </MiniPreviewWrapper>
    <MiniPreviewWrapper className="!border !border-border-default">
      <ShowcaseMenuDemo
        items={mocks.mock5}
        size="xxs"
        className="max-w-[80%] !m-auto"
        bgColor="#18181b"
        backgroundAnimation={false}
      />
    </MiniPreviewWrapper>
    <MiniPreviewWrapper className="!bg-[#45853B]">
      <ShowcaseMenuDemo
        items={mocks.mock2}
        size="sm"
        textAlignment="center"
        textColor="#BADD7F"
        bgColor="#45853B"
        className="!font-darumadrop max-w-[80%] !m-auto"
        itemClassName="!rounded-md"
        displaySeparators={false}
        displayImages={false}
      />
    </MiniPreviewWrapper>
    <MiniPreviewWrapper className="!bg-[#F0F1FA]">
      <ShowcaseMenuDemo
        textColor="blue"
        bgColor="#F0F1FA"
        items={mocks.mock4}
        size="lg"
        className="max-w-[60%] !m-auto !font-jetbrains"
      />
    </MiniPreviewWrapper>
  </div>,
];

const ShowcaseMenu: IComponent = {
  name: "Showcase Menu",
  description:
    "A customizable navigation menu with interactive hover effects and optional image previews, featuring adjustable styles and animations.",
  category: Categories.MENUS,
  status: Status.NEW,
  overview: overview,
  installation: [manualInstallation],
  examples: examples,
  props: props,
  dependencies: [],
};

export default ShowcaseMenu;
