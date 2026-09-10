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

const inter = Inter({ subsets: ["latin"] });
const baseUrlMeta = `${new URL("https://alfandialamshach.github.io/")}`;
export const viewport = {
  colorScheme: "dark",
};

export const metadata = {
  metadataBase: new URL("https://alfandialamshach.github.io/"),
  title: "Alfandi Alamshach | Portfolio",
  description:
    "Alfandi Alamshach is an IT graduate passionate about full-stack development, networking, and cybersecurity.",
  author: "Alfandi Alamshach",
  subject: "Web Development & IT Engineering",
  copyright: "© Alfandi Alamshach",
  keywords: [
    "Alfandi Alamshach",
    "Full Stack Developer",
    "Cybersecurity",
    "Networking",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "Web Developer",
    "Information Technology",
  ],
  generator: "Next.js",
  applicationName: "Alfandi Alamshach | Portfolio",
  referrer: "origin-when-cross-origin",
  creator: "Alfandi Alamshach",
  publisher: "Alfandi Alamshach",
  language: "id",
  geo: {
    country: "ID",
    placename: "Indonesia",
  },
  openGraph: {
    images: [
      {
        url: `${baseUrlMeta}images/profile.jpeg`,
        alt: "Alfandi Alamshach",
      },
      {
        url: `${baseUrlMeta}images/project/dompet-warga/1.png`,
        alt: "Portofolio Dompet Warga",
      },
      {
        url: `${baseUrlMeta}images/project/smart-village/1.png`,
        alt: "Portofolio Smart Village Klapagading",
      },
    ],
    description:
      "Alfandi Alamshach is an IT graduate passionate about full-stack development, networking, and cybersecurity.",
    author: "Alfandi Alamshach",
  },
  basic: {
    title: "Alfandi Alamshach - Fullstack & IT Engineer",
    type: "website",
    image: {
      url: `${baseUrlMeta}images/profile.jpeg`,
      alt: "Alfandi Alamshach",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 md:pt-36 dark:bg-[#090d16] dark:text-slate-100 dark:text-opacity-95`}
      >
        {/* Manchester City Sky Blue Ambient Background Blobs */}
        <div className="bg-[#38BDF8]/40 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#0284C7]/30"></div>
        <div className="bg-[#6CABDD]/35 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#38BDF8]/20"></div>
        {/* <div className="bg-[#fbe2e3] absolute bottom-[-6rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute bottom-[-1rem] -z-10 right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#676394]"></div> */}

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
