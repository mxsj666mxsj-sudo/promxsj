"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

type Props = {
  text: string;
  className?: string;
  trigger?: boolean;
};

export const ScrambleText = ({ text, className, trigger = true }: Props) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    let pos = 0;
    setIsScrambling(true);

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setDisplayText(text);
    setIsScrambling(false);
  };

  useEffect(() => {
    if (trigger) {
      scramble();
    }
    return () => clearInterval(intervalRef.current || undefined);
  }, [trigger, text]);

  return (
    <motion.span 
      className={className}
      onHoverStart={() => { if(!isScrambling) scramble() }}
    >
      {displayText}
    </motion.span>
  );
};

