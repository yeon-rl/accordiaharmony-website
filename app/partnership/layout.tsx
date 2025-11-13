import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships & Collaborations | Accordia Harmony",
  description:
    "Explore partnership opportunities with Accordia Harmony. We collaborate with schools, employers, charities, and community organizations to create measurable impact for young people.",
  keywords: [
    "partnerships",
    "collaborations",
    "schools",
    "employers",
    "community organizations",
    "youth programs",
  ],
  openGraph: {
    title: "Partnerships & Collaborations | Accordia Harmony",
    description:
      "Join us in creating lasting impact through strategic partnerships focused on youth empowerment.",
    url: "https://www.accordiaharmony.org/partnership",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnerships & Collaborations | Accordia Harmony",
    description: "Explore partnership opportunities with Accordia Harmony.",
  },
  alternates: {
    canonical: "https://www.accordiaharmony.org/partnership",
  },
};

export default function PartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
