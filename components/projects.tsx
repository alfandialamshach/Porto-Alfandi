"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import FloatingShape from "./floating-shape";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLink, FaArrowDown } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import SectionHeading from "./section-heading";
import { onSpotlightMove } from "@/lib/spotlight";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  screenshots: string[];
  features: string[];
  languages: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative w-full h-48">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="object-cover"
    />
  </div>
);

const ModalScreenshotImage: React.FC<{ src: string; alt: string; onClick: () => void }> = ({ src, alt, onClick }) => (
  <button type="button" onClick={onClick} className="mb-4" aria-label={`Perbesar ${alt}`}>
    <Image
      src={src}
      alt={alt}
      width={128}
      height={128}
      className="w-32 h-32 object-cover rounded-md hover:opacity-80 transition"
    />
  </button>
);

const ProjectSection: React.FC = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
  });
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 4);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (zoomedImage) setZoomedImage(null);
      else if (selectedProject) handleCloseModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomedImage, selectedProject]);

  const handleScreenshotClick = (screenshot: string) => {
    setZoomedImage(screenshot);
  };

  const handleCloseZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="py-12 px-10 scroll-mt-28 mb-28"
      ref={ref}
      style={{ padding: "0 8%" }}
    >
      <div ref={sectionRef} className="container mx-auto">
        <div className="flex justify-center mb-2">
          <SectionHeading>🚀 Projects</SectionHeading>
          <FloatingShape />
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => handleProjectClick(project)}
              onMouseMove={onSpotlightMove}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              style={{ cursor: "pointer" }}
              className="spotlight bg-white dark:bg-[#0f172a]/80 text-black border-white dark:border-sky-500/20 border-solid border-4 rounded-xl shadow-lg dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] dark:hover:border-sky-400/50 dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] overflow-hidden transition-all duration-300 backdrop-blur-sm"
            >
              <ProjectCardImage
                src={project.image}
                alt={project.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 mb-3 text-left line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.languages.map((language) => (
                    <span
                      key={language}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-200"
                    >
                      {language}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex space-x-2">
                    {project.tech.map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={tech}
                        alt={`Tech ${techIndex}`}
                        className="h-6"
                        width="24"
                        height="24"
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Demo ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-gray-600 dark:text-sky-300 hover:underline text-xl`}
                      >
                        <BiLinkExternal />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-gray-600 dark:text-sky-300 dark:hover:text-white hover:text-gray-700 text-xl`}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleProjectClick(project)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-400 outline-none rounded"
                >
                  Lihat detail <BsArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAllProjects && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleShowAllProjects}
              className="group flex items-center justify-center gap-2 h-[3rem] px-6 bg-[#6CABDD] text-white hover:bg-[#589dcf] dark:bg-[#38BDF8] dark:hover:bg-[#0284c7] dark:text-gray-950 rounded-full outline-none transition-all focus:scale-110 hover:scale-105 active:scale-95 shadow-lg shadow-[#6CABDD]/30"
            >
              Muat Lebih Banyak
              <FaArrowDown className="text-xs opacity-70 transition-all" />{" "}
            </button>
          </div>
        )}
        <div className="flex justify-center mt-6">
          <a
            href="https://github.com/alfandialamshach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-300 transition"
          >
            <FaGithub /> Lihat proyek lainnya di GitHub <BsArrowRight />
          </a>
        </div>
      </div>
      {/* Modal for detailed description */}
      <AnimatePresence>
      {selectedProject && (
        <div
          key="project-modal"
          className="modal-overlay flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-[#0f172a] dark:border dark:border-sky-500/30 p-8 max-w-[900px] w-full mx-4 my-8 rounded-xl shadow-2xl relative overflow-y-scroll max-h-[80vh]"
            >
              <button
                onClick={handleCloseModal}
                aria-label="Tutup"
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-700"
              >
                <span className="text-xl">&times;</span>
              </button>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {selectedProject.title}
              </h3>
              <div className=" relative overflow-y-auto">
                <p className="modal-content text-gray-600 dark:text-gray-200 mb-4 text-justify max-h-60vh">
                  {selectedProject.description}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 dark:text-white">
                  Fitur yang Saya Kerjakan:
                </h4>
                <ul className="list-disc list-inside">
                  {selectedProject.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.08 }}
                      className="text-gray-600 dark:text-gray-200"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Klik gambar untuk memperbesar
              </p>
              <div className="flex space-x-4 flex-wrap mb-4">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <ModalScreenshotImage
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    onClick={() => handleScreenshotClick(screenshot)}
                  />
                ))}
              </div>
              <h4 className="text-lg font-semibold mb-2 dark:text-white">
                Bahasa dan Tools
              </h4>
              <div className="flex justify-between items-end">
                <div className="flex space-x-2">
                  {selectedProject.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
      <AnimatePresence>
      {zoomedImage && (
        <div
          key="zoom-modal"
          className="image-modal-overlay flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot diperbesar"
        >
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-[#0f172a] dark:border dark:border-sky-500/30 p-8 max-w-[1000px] w-full mx-4 my-8 rounded-xl shadow-2xl relative"
            >
              <button
                onClick={handleCloseZoomedImage}
                aria-label="Tutup"
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-700"
              >
                <span className="text-xl">&times;</span>
              </button>
              <div className="relative w-full h-[600px] mb-4 overflow-hidden">
                <Image
                  src={zoomedImage}
                  alt="Screenshot diperbesar"
                  fill
                  sizes="1000px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectSection;
