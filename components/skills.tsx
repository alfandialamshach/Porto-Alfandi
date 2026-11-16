"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillGroups, skilss } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingShape from "./floating-shape";
import { onSpotlightMove } from "@/lib/spotlight";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <div className="bg-[#38BDF8]/25 absolute bottom-[-rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0369A1]/25"></div>

      <div className="flex justify-center">
        <SectionHeading>🎯 Specialized Skills</SectionHeading>
        <FloatingShape />
      </div>
      <div className="mt-8 flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-sky-300/80">
              {group.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {group.names.map((name) => {
                const skill = skilss.find((s) => s.name === name)!;
                const index = skilss.indexOf(skill);
                return (
                  <motion.div
                    key={name}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                    onMouseMove={onSpotlightMove}
                    className="spotlight relative flex h-[120px] w-[8.5rem] flex-col items-center justify-center rounded-xl bg-white dark:bg-[#0f172a]/80 border border-gray-200 dark:border-sky-500/20 p-4 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 hover:border-sky-400 dark:hover:border-sky-400 dark:hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 backdrop-blur-sm"
                  >
                    <Image
                      src={skill.imgUrl}
                      alt={skill.name}
                      width="48"
                      height="48"
                      quality="95"
                      className="h-10 w-10 object-contain mb-2"
                    />
                    <span className="text-sm font-semibold text-gray-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
