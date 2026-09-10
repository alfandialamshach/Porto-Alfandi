import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://alamshach.site";

export const viewport: Viewport = {
  themeColor: "#090d16",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alfandi Alamshach | Information Technology",
    template: "%s | Alfandi Alamshach",
  },
  description:
    "Alfandi Alamshach adalah profesional di bidang Teknologi Informasi dengan fokus pada full-stack development, networking, dan cybersecurity. Berpengalaman mengembangkan aplikasi web dan mobile, API, database, serta solusi teknologi yang aman dan andal.",
  authors: [{ name: "Alfandi Alamshach", url: siteUrl }],
  creator: "Alfandi Alamshach",
  publisher: "Alfandi Alamshach",
  keywords: [
    "Alfandi Alamshach",
    "Information Technology",
    "Full-Stack Development",
    "Networking",
    "Cybersecurity",
    "Web Development",
    "Mobile Development",
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
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Alfandi Alamshach | Information Technology",
    description:
      "Alfandi Alamshach adalah profesional di bidang Teknologi Informasi dengan fokus pada full-stack development, networking, dan cybersecurity. Berpengalaman mengembangkan aplikasi web dan mobile, API, database, serta solusi teknologi yang aman dan andal.",
    url: siteUrl,
    siteName: "Alfandi Alamshach",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/profile.jpeg`,
        width: 800,
        height: 800,
        alt: "Alfandi Alamshach - Information Technology Professional",
      },
      {
        url: `${siteUrl}/images/project/dompet-warga/1.png`,
        width: 1200,
        height: 630,
        alt: "Portofolio Dompet Warga - Alfandi Alamshach",
      },
      {
        url: `${siteUrl}/images/project/smart-village/1.png`,
        width: 1200,
        height: 630,
        alt: "Portofolio Smart Village Klapagading - Alfandi Alamshach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfandi Alamshach | Information Technology",
    description:
      "Alfandi Alamshach adalah profesional di bidang Teknologi Informasi dengan fokus pada full-stack development, networking, dan cybersecurity.",
    creator: "@alamshach_",
    images: [`${siteUrl}/images/profile.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 md:pt-36 dark:bg-[#090d16] dark:text-slate-100 dark:text-opacity-95`}
      >
        {/* Sky Blue Ambient Background Blobs */}
        <div className="bg-[#38BDF8]/40 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#0284C7]/30"></div>
        <div className="bg-[#6CABDD]/35 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#38BDF8]/20"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
