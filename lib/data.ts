import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Web Developer Intern",
    location: "PT Lintas Data Prima (LDP)",
    description:
      "Mengembangkan dan memelihara website HRIS. Mengembangkan fitur aplikasi dan integrasi API. Melakukan deployment dan testing aplikasi.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2025 - Januari 2026",
  },
  {
    title: "Social Media Specialist & Designer (Part-time)",
    location: "",
    description:
      "Membuat desain dan konten untuk media sosial. Merancang konsep visual sesuai kebutuhan dan identitas brand. Mengelola serta mengoptimalkan konten untuk meningkatkan engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "Juli 2024 - Februari 2025",
  },
  {
    title: "Intern",
    location: "Telkom Akses Pekalongan",
    description:
      "Membantu operasional dan pengelolaan gudang. Melakukan pengecekan, penataan, dan pencatatan peralatan. Membantu administrasi serta dokumentasi aktivitas gudang.",
    icon: React.createElement(CgWorkAlt),
    date: "Desember 2020 – Maret 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Dompet Warga",
    description:
      "Aplikasi mobile yang dikembangkan untuk membantu digitalisasi pengelolaan tabungan warga dan kas RT. Sistem memungkinkan pengurus melakukan pencatatan tabungan berdasarkan rumah, melihat riwayat transaksi dan saldo, serta menggunakan QR Code sebagai identitas setiap rumah.",
    screenshots: [
      "images/project/dompet-warga/1.png",
      "images/project/dompet-warga/2.png",
      "images/project/dompet-warga/3.png",
    ],
    image: "images/project/dompet-warga/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/shapes/javascript.svg",
      "/images/shapes/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Pencatatan tabungan warga berdasarkan rumah",
      "Riwayat transaksi dan pemantauan saldo kas RT",
      "Integrasi QR Code sebagai identitas setiap rumah",
    ],
    languages: ["React Native", "Express.js", "MySQL", "QR Code"],
  },
  {
    title: "HRIS",
    description:
      "Website Human Resources Information System yang dikembangkan selama pengalaman sebagai Web Developer di PT Lintas Data Prima. Sistem dikembangkan untuk mendukung pengelolaan data dan proses administrasi sumber daya manusia secara digital.",
    screenshots: [
      "images/project/hris/1.png",
      "images/project/hris/2.png",
      "images/project/hris/3.png",
    ],
    image: "images/project/hris/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/shapes/javascript.svg",
      "/images/shapes/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Pengelolaan data karyawan dan administrasi SDM secara terpusat",
      "Digitalisasi proses HRD dan pemantauan kehadiran/kinerja",
      "Integrasi API dan manajemen data berbasis web",
    ],
    languages: ["Laravel", "Inertia.js", "MySQL"],
  },
  {
    title: "Smart Village Klapagading",
    description:
      "Sistem informasi desa yang dikembangkan untuk mendukung digitalisasi informasi dan layanan Desa Klapagading. Proyek ini berfokus pada pengembangan sistem yang dapat membantu masyarakat dan perangkat desa dalam mengakses serta mengelola informasi secara digital.",
    screenshots: [
      "images/project/smart-village/1.png",
      "images/project/smart-village/2.png",
      "images/project/smart-village/3.png",
    ],
    image: "images/project/smart-village/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/shapes/javascript.svg",
      "/images/shapes/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Digitalisasi informasi dan layanan administrasi desa",
      "Portal informasi publik untuk masyarakat desa",
      "Akses multi-platform berbasis web & mobile",
    ],
    languages: ["Express.js", "React", "MySQL"],
  },
  {
    title: "Mini Clinic Information System",
    description:
      "Sistem informasi klinik yang dikembangkan sebagai technical assignment untuk mensimulasikan proses pengelolaan data dan layanan klinik secara digital. Proyek ini mencakup pengembangan backend dan frontend untuk mendukung kebutuhan sistem informasi klinik.",
    screenshots: [
      "images/project/mini-clinic/1.png",
      "images/project/mini-clinic/2.png",
      "images/project/mini-clinic/3.png",
    ],
    image: "images/project/mini-clinic/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/shapes/javascript.svg",
      "/images/shapes/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Pengelolaan data pasien, dokter, dan rekam medis klinik",
      "Pengembangan arsitektur backend dan interface frontend",
      "Simulasi manajemen operasional klinik secara digital",
    ],
    languages: ["Express.js", "React", "MySQL"],
  },
] as const;

export const skillsData = [
  "React Native",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MySQL",
  "Linux",
  "Cisco",
] as const;

export const skilss = [
  {
    name: "React Native",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "React",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    imgUrl: "/images/shapes/next-js.svg",
  },
  {
    name: "TypeScript",
    imgUrl: "/images/shapes/typescript.svg",
  },
  {
    name: "JavaScript",
    imgUrl: "/images/shapes/javascript.svg",
  },
  {
    name: "Node.js",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "MySQL",
    imgUrl: "/images/shapes/mysql.svg",
  },
  {
    name: "Linux",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  },
  {
    name: "Cisco",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  },
] as const;
