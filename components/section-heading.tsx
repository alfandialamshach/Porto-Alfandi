"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold capitalize mb-3 text-center">
        {children}
      </h2>
      <motion.span
        aria-hidden
        className="mx-auto block h-1 w-20 origin-center rounded-full bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#6CABDD]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
