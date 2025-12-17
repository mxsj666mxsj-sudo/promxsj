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
        "group relative overflow-hidden rounded-3xl bg-black/40 border border-white/10 p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Rainbow Gradient Glow on Hover */}
      {!noHover && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.15),
                transparent 80%
              )
            `,
          }}
        />
      )}
      
      {/* Dynamic Border Gradient */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/5 to-white/0 opacity-50 group-hover:from-neon-purple group-hover:via-neon-cyan group-hover:to-neon-pink group-hover:opacity-100 transition-all duration-500 -z-10" />

      <div className="relative z-10 h-full flex flex-col">
        {children}
        {(title || subtitle) && (
          <div className="mt-auto pt-8">
            {subtitle && <p className="text-xs font-bold text-white/50 mb-2 uppercase tracking-wider">{subtitle}</p>}
            {title && <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-purple transition-all">{title}</h3>}
          </div>
        )}
      </div>
    </div>
  );
};
