import React from "react";
import { HiDownload, HiMail } from "react-icons/hi";
import { links } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-6 px-4 text-center text-gray-500 dark:text-slate-400">
      <nav
        aria-label="Footer"
        className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium"
      >
        {links.map((link) => (
          <a
            key={link.hash}
            href={link.hash}
            className="transition hover:text-gray-950 dark:hover:text-sky-300"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
        <a
          href="mailto:a.alamshach@gmail.com"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 transition hover:scale-105 borderBlack dark:bg-white/10"
        >
          <HiMail /> Email
        </a>
        <a
          href="/cv/resume.pdf"
          download
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 transition hover:scale-105 borderBlack dark:bg-white/10"
        >
          <HiDownload /> CV
        </a>
      </div>
      <small className="block text-xs">
        &copy; {currentYear} Alfandi Alamshach. All rights reserved.
      </small>
    </footer>
  );
}
