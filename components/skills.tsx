"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData, skilss } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingShape from "./floating-shape";

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
  const [isHover, setIsHover] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <div className="bg-emerald-400/30 absolute bottom-[-rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0369A1]/25"></div>

      <div className="flex justify-center">
        <SectionHeading>🎯 Specialized Skills</SectionHeading>
        <FloatingShape />
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-5 grid-cols-2 xl:gap-8 md:gap-6 gap-4 items-center mt-8">
        {skilss.map((skill, index) => (
          <div key={index} className="relative flex justify-center">
            <motion.div
              onMouseOver={() => {
                setIsHover(true);
                setDataIndex(index);
              }}
              onMouseOut={() => setIsHover(false)}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="relative flex flex-col items-center justify-center w-full h-[120px] rounded-xl bg-white dark:bg-[#0f172a]/80 border border-gray-200 dark:border-sky-500/20 p-4 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 hover:border-sky-400 dark:hover:border-sky-400 dark:hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 backdrop-blur-sm"
            >
              <Image
                src={skill.imgUrl}
                alt={skill.name}
                width="48"
                height="48"
                quality="95"
                priority={true}
                className="h-10 w-10 object-contain mb-2"
              />
              <span className="text-sm font-semibold text-gray-800 dark:text-slate-200">
                {skill.name}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
