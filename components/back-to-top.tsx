"use client";

import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-20 z-[999] flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] outline-none transition-all hover:scale-[1.15] focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-105 dark:border-sky-500/40 dark:bg-[#0f172a]/90 dark:text-sky-300 dark:shadow-lg dark:shadow-sky-500/20"
    >
      <BsArrowUp />
    </button>
  );
}
