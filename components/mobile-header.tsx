import React, { useState } from "react";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <div className="md:hidden flex fixed top-[0.25rem] right-1 h-12 -translate-x-1/2 py-2">
      <button
        onClick={() => setOpen((open) => !open)}
        type="button"
        className="bg-white border-none bg-opacity-60 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-[#0f172a]/90 dark:text-sky-300 dark:border-sky-500/30"
      >
        {open ? <CgClose /> : <CgMenuRightAlt />}
      </button>

      <motion.div
        className={`${
          open ? "block" : "hidden"
        } bg-white border-none overflow-hidden top-2 mr-5 ml-2 w-56 right-12 absolute rounded-lg shadow-xl dark:bg-[#0f172a]/95 dark:border dark:border-sky-500/30 backdrop-blur-md`}
        animate={open ? "open" : "closed"}
        variants={variants}
      >
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.hash}
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-base block hover:bg-gray-200 dark:hover:bg-sky-500/20 text-gray-700 dark:text-slate-200 dark:hover:text-sky-300 transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
