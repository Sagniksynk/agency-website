import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  type?: "word" | "letter";
  gradient?: boolean;
}

const TextReveal = ({ 
  text, 
  className, 
  delay = 0,
  staggerChildren = 0.05,
  type = "word",
  gradient = false
}: TextRevealProps) => {
  const items = type === "word" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("inline-flex flex-wrap", className)}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className={cn(
            "inline-block",
            type === "word" && "mr-[0.25em]",
            gradient && "shimmer-text"
          )}
          style={{ transformOrigin: "center bottom" }}
        >
          {item}
          {type === "letter" && item === " " && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
