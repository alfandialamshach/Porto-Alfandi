"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[1001] h-1 w-full origin-left bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#6CABDD]"
      style={{ scaleX }}
    />
  );
}
