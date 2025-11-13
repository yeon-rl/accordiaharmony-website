import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import Chatbox from "@/components/Chatbox";
import { Toaster } from "sonner";
import { organizationSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accordia Harmony | Youth Empowerment & Life Skills Training",
  description:
    "Accordia Harmony empowers young people with essential life skills, digital literacy, and confidence for independent living and career success.",
  keywords: [
    "youth empowerment",
    "life skills training",
    "digital literacy",
    "young people",
    "career development",
    "independent living",
    "youth organizations",
    "skills training",
    "UK youth programmes",
  ],
  authors: [{ name: "Accordia Harmony C.I.C." }],
  creator: "Accordia Harmony",
  publisher: "Accordia Harmony C.I.C.",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.accordiaharmony.org",
    siteName: "Accordia Harmony",
    title: "Accordia Harmony | Youth Empowerment & Life Skills Training",
    description:
      "Accordia Harmony empowers young people with essential life skills, digital literacy, and confidence for independent living and career success.",
    images: [
      {
        url: "https://www.accordiaharmony.org/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accordia Harmony - Youth Empowerment",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AccordiaHarmony",
    creator: "@AccordiaHarmony",
    title: "Accordia Harmony | Youth Empowerment & Life Skills Training",
    description:
      "Accordia Harmony empowers young people with essential life skills, digital literacy, and confidence for independent living and career success.",
    images: ["https://www.accordiaharmony.org/images/og-image.png"],
  },
  alternates: {
    canonical: "https://www.accordiaharmony.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060610] text-white ${poppins.variable} overflow-x-hidden`}
      >
        <Toaster position="top-center" theme="dark" />
        {children}
        <GoToTop />
        <Chatbox />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
