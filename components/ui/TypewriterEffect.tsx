"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <div className="inline-block">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue font-bold">
        {text}
      </span>
      <span className="inline-block w-[3px] h-[1em] bg-neon-cyan ml-1 animate-pulse align-middle" />
    </div>
  );
};

