"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsInstagram, BsChevronDown } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";

const roles = [
  "Full-Stack Developer",
  "Network Engineer",
  "Cybersecurity Enthusiast",
];

const socialLinkClass =
  "bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus-visible:ring-2 focus-visible:ring-sky-400 outline-none focus-visible:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <span
            aria-hidden
            className="ring-pulse absolute inset-0 rounded-full ring-2 ring-sky-400/50"
          />
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/profile.jpeg"
              alt="Alfandi Alamshach"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white ring-4 ring-[#6CABDD]/40 shadow-xl shadow-[#6CABDD]/15 dark:ring-[#38BDF8]/40 dark:border-gray-800"
            />
          </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        Terbuka untuk peluang &amp; kolaborasi
      </motion.div>

      <motion.h1
        className="mb-4 mt-4 px-4 text-3xl font-extrabold !leading-[1.3] sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Halo, saya{" "}
        <span
          className="gradient-shift font-extrabold text-[#0284C7] dark:text-[#38BDF8]"
          style={{
            background: "linear-gradient(135deg, #0284C7 0%, #38BDF8 25%, #6CABDD 50%, #38BDF8 75%, #0284C7 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Alfandi Alamshach.
        </span>
      </motion.h1>
      <div
        className="mb-6 h-8 text-xl font-semibold text-gray-600 dark:text-sky-200 sm:text-2xl"
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIndex}
            className="inline-block"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.p
        className="mb-10 px-4 text-lg font-normal text-gray-700 dark:text-white/80 !leading-[1.6] sm:text-xl max-w-[42rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Praktisi Teknologi Informasi yang berfokus pada{" "}
        <span className="font-semibold text-[#0284C7] dark:text-sky-300">
          full-stack development, networking, dan cybersecurity
        </span>
        . Saya tertarik membangun solusi digital yang{" "}
        <span className="font-semibold text-[#0284C7] dark:text-sky-300">
          aman, andal, dan berorientasi pada kebutuhan pengguna
        </span>
        , serta terus mengembangkan keterampilan di bidang teknologi.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="mailto:a.alamshach@gmail.com"
          className="group mr-2 bg-[#6CABDD] text-white hover:bg-[#589dcf] dark:bg-[#38BDF8] dark:hover:bg-[#0284c7] dark:text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-95 shadow-lg shadow-[#6CABDD]/30 transition"
        >
          Hubungi saya{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-95 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/cv/resume.pdf"
          download
        >
          Unduh CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-row items-center justify-center mt-5 gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className={socialLinkClass}
          href="https://www.linkedin.com/in/alfandialamshach/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>

        <a
          className={socialLinkClass}
          href="mailto:a.alamshach@gmail.com"
          aria-label="Email"
        >
          <RiMailSendLine />
        </a>
        <a
          className={socialLinkClass}
          href="https://github.com/alfandialamshach"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithubSquare />
        </a>
        <a
          className={socialLinkClass}
          href="https://www.instagram.com/alamshach_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <BsInstagram />
        </a>
      </motion.div>

      <a
        href="#projects"
        aria-label="Gulir ke proyek"
        className="mt-10 hidden sm:inline-flex text-gray-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300 transition"
      >
        <BsChevronDown className="text-2xl animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
