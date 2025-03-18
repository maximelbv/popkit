import { motion } from "motion/react";

interface BounceCardsProps {
  images: string[];
  spacing?: number;
  rotations?: number[];
  imgWidth?: string;
  imgHeight?: string;
  className?: string;
  itemClassName?: string;
  delay?: number;
  animateWhenVisible?: boolean;
}

const BounceCards = ({
  images,
  spacing = -50,
  rotations = [9, -5, 10, 2],
  imgWidth = "200px",
  imgHeight = "200px",
  className,
  itemClassName,
  delay = 0.1,
  animateWhenVisible = true,
}: BounceCardsProps) => {
  return (
    <div className={`flex ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`rounded-xl bg-cover ${itemClassName}`}
          style={{
            width: imgWidth,
            height: imgHeight,
            rotate: `${rotations[index % rotations.length]}deg`,
            backgroundImage: `url(${image})`,
            marginLeft: index === 0 ? 0 : spacing,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animateWhenVisible ? undefined : { opacity: 1, scale: 1 }}
          whileInView={
            animateWhenVisible ? { opacity: 1, scale: 1 } : undefined
          }
          viewport={
            animateWhenVisible ? { once: true, amount: 0.2 } : undefined
          }
          transition={{
            delay: index * delay,
            type: "spring",
            stiffness: 100,
          }}
        />
      ))}
    </div>
  );
};

export default BounceCards;
