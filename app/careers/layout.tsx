import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Accordia Harmony",
  description:
    "Join our team at Accordia Harmony. We're looking for passionate professionals to help us empower young people through innovative learning programs.",
  keywords: ["careers", "jobs", "employment", "join us"],
  openGraph: {
    title: "Careers | Accordia Harmony",
    description: "Explore career opportunities with Accordia Harmony.",
    url: "https://www.accordiaharmony.org/careers",
    type: "website",
  },
  alternates: {
    canonical: "https://www.accordiaharmony.org/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
