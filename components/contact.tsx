"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HiMail } from "react-icons/hi";
import { BsArrowRight, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const currentYear = new Date().getFullYear();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-full max-w-[58rem] px-4"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="relative rounded-[2.5rem] bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border border-gray-200/80 dark:border-sky-500/20 p-8 sm:p-12 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300">
        {/* Soft background ambient light */}
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text & CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left pr-0 lg:pr-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                Mari terhubung
              </h2>
              <p className="text-gray-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
                atau peluang kolaborasi. Jangan ragu untuk menghubungi!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:a.alamshach@gmail.com"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gray-950 text-white hover:bg-gray-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-gray-950 font-semibold text-sm shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <HiMail className="text-lg" />
                Hubungi
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-slate-800/80 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700/80 font-semibold text-sm border border-gray-200/60 dark:border-slate-700/60 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Lihat proyek
                <BsArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Social Links & Copyright Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gray-50/90 dark:bg-[#1e293b]/70 border border-gray-200/50 dark:border-slate-700/50 p-8 flex flex-col items-center justify-center min-h-[220px] text-center shadow-inner transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                <a
                  href="mailto:a.alamshach@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-sky-300 hover:text-sky-500 dark:hover:text-white hover:border-sky-400 dark:hover:border-sky-400 shadow-sm transition-all duration-200 hover:scale-110"
                  aria-label="Email"
                >
                  <HiMail className="text-lg" />
                </a>

                <a
                  href="https://www.linkedin.com/in/alfandialamshach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-sky-300 hover:text-sky-500 dark:hover:text-white hover:border-sky-400 dark:hover:border-sky-400 shadow-sm transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin className="text-base" />
                </a>

                <a
                  href="https://github.com/alfandialamshach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-sky-300 hover:text-sky-500 dark:hover:text-white hover:border-sky-400 dark:hover:border-sky-400 shadow-sm transition-all duration-200 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-base" />
                </a>

                <a
                  href="https://www.instagram.com/alamshach_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-sky-300 hover:text-sky-500 dark:hover:text-white hover:border-sky-400 dark:hover:border-sky-400 shadow-sm transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <BsInstagram className="text-base" />
                </a>
              </div>

              <p className="text-xs text-gray-500 dark:text-slate-400 font-medium tracking-wide">
                &copy; {currentYear} Alfandi Alamshach
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
