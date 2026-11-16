"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-[#0f172a]/90 dark:border-sky-500/40 dark:text-sky-300 dark:shadow-lg dark:shadow-sky-500/20"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="flex"
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.18 }}
        >
          {theme === "light" ? <BsSun /> : <BsMoon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
