import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Accordia Harmony",
  description:
    "Learn about Accordia Harmony's mission to empower young people with essential life skills, digital literacy, and confidence for independent living.",
  keywords: [
    "about",
    "mission",
    "values",
    "youth empowerment",
    "life skills",
    "our story",
  ],
  openGraph: {
    title: "About Us | Accordia Harmony",
    description:
      "Discover our mission to empower young people through innovative learning programmes.",
    url: "https://accordiaharmony.org/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Accordia Harmony",
    description: "Learn about Accordia Harmony's mission and values.",
  },
  alternates: {
    canonical: "https://accordiaharmony.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
