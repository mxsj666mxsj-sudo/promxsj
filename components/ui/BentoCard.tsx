"use client";

import { cn } from "@/utils/cn";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export const BentoCard = ({ 
  children, 
  className,
  title,
  subtitle,
  noHover = false
}: { 
  children?: React.ReactNode; 
  className?: string;
  title?: string;
  subtitle?: string;
  noHover?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (noHover) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-surface border border-white/5 p-6 md:p-8 transition-colors duration-500",
        !noHover && "hover:border-white/10",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Gradient Glow on Hover */}
      {!noHover && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.1),
                transparent 80%
              )
            `,
          }}
        />
      )}

      <div className="relative z-10 h-full flex flex-col">
        {children}
        {(title || subtitle) && (
          <div className="mt-auto pt-8">
            {subtitle && <p className="text-xs font-medium text-primary/80 mb-2 uppercase tracking-wider">{subtitle}</p>}
            {title && <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">{title}</h3>}
          </div>
        )}
      </div>
    </div>
  );
};
