import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "pink" | "mixed";
  hover?: boolean;
}

const GlowCard = ({ 
  children, 
  className, 
  glowColor = "purple",
  hover = true 
}: GlowCardProps) => {
  const glowGradients = {
    purple: "from-primary to-secondary",
    cyan: "from-accent to-secondary",
    pink: "from-accent-pink to-primary",
    mixed: "from-primary via-accent to-accent-pink",
  };

  return (
    <motion.div 
      className="relative group"
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur opacity-0 transition-all duration-500",
          glowGradients[glowColor],
          hover && "group-hover:opacity-75"
        )} 
      />
      
      {/* Card content */}
      <div 
        className={cn(
          "relative glass rounded-2xl p-6 h-full",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
