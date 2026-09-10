"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import FloatingShape from "./floating-shape";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLink, FaArrowDown } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import SectionHeading from "./section-heading";

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

const ProjectCardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-48 bg-slate-100 dark:bg-slate-800/80 border-b border-gray-200 dark:border-sky-500/20 flex flex-col items-center justify-center p-4 text-center">
        <span className="text-2xl mb-1">📷</span>
        <span className="text-xs text-gray-500 dark:text-sky-300 font-medium">
          File <code className="text-sky-400 font-mono">1.png</code> siap ditambahkan di:
        </span>
        <span className="text-[10px] text-gray-400 dark:text-slate-400 font-mono mt-1">
          public/{src}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImgError(true)}
    />
  );
};

const ModalScreenshotImage: React.FC<{ src: string; alt: string; onClick: () => void }> = ({ src, alt, onClick }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-32 h-32 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-gray-200 dark:border-sky-500/30 flex flex-col items-center justify-center p-2 text-center mb-4">
        <span className="text-lg mb-1">🖼️</span>
        <span className="text-[10px] text-gray-500 dark:text-sky-300 font-mono">
          {src.split('/').pop()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-32 h-32 object-cover rounded-md cursor-pointer mb-4 hover:opacity-80 transition"
      onClick={onClick}
      onError={() => setImgError(true)}
    />
  );
};

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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              style={{ cursor: "pointer" }}
              className="bg-white dark:bg-[#0f172a]/80 text-black border-white dark:border-sky-500/20 border-solid border-4 rounded-xl shadow-lg dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] dark:hover:border-sky-400/50 dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] overflow-hidden transition-all duration-300 backdrop-blur-sm"
            >
              <ProjectCardImage
                src={project.image}
                alt={project.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 mb-4 text-justify">
                  {project.description}
                </p>
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
                        className={`text-gray-600 dark:text-sky-300 dark:hover:text-white hover:text-gray-700 text-xl`}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAllProjects && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleShowAllProjects}
              className="group flex items-center justify-center gap-2 h-[3rem] w-[9rem] bg-[#6CABDD] text-white hover:bg-[#589dcf] dark:bg-[#38BDF8] dark:hover:bg-[#0284c7] dark:text-gray-950 rounded-full outline-none transition-all focus:scale-110 hover:scale-105 active:scale-95 shadow-lg shadow-[#6CABDD]/30"
            >
              Load More
              <FaArrowDown className="text-xs opacity-70 transition-all" />{" "}
            </button>
          </div>
        )}
      </div>
      {/* Modal for detailed description */}
      {selectedProject && (
        <div className="modal-overlay flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {" "}
            <div className="bg-white dark:bg-[#0f172a] dark:border dark:border-sky-500/30 p-8 max-w-[900px] w-full mx-4 my-8 rounded-xl shadow-2xl relative overflow-y-scroll max-h-[80vh]">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-700"
              >
                <span className="text-xl">&times;</span>
              </button>
              <h2 className="text-xl font-semibold mb-2 dark:text-white">
                {selectedProject.title}
              </h2>
              <div className=" relative overflow-y-auto">
                <p className="modal-content text-gray-600 dark:text-gray-200 mb-4 text-justify max-h-60vh">
                  {selectedProject.description}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  Features I Worked On:
                </h3>
                <ul className="list-disc list-inside">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-200"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <h4 className="text-lg font-semibold mb-2 dark:text-white">
                Click the image to enlarge
              </h4>
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
                Language and Tools
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
            </div>
          </motion.div>
        </div>
      )}
      {zoomedImage && (
        <div className="image-modal-overlay flex items-center justify-center">
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white dark:bg-[#0f172a] dark:border dark:border-sky-500/30 p-8 max-w-[1000px] w-full mx-4 my-8 rounded-xl shadow-2xl relative">
              <button
                onClick={handleCloseZoomedImage}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-700"
              >
                <span className="text-xl">&times;</span>
              </button>
              <div className="w-full h-[600px] mb-4 overflow-hidden">
                <img
                  src={zoomedImage}
                  alt="Zoomed Screenshot"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default ProjectSection;
