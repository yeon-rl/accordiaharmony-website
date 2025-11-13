import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Accordia Harmony",
  description:
    "Explore our comprehensive range of services including life skills training, digital literacy programs, career development, and mentorship for young people.",
  keywords: [
    "services",
    "life skills training",
    "digital literacy",
    "career development",
    "mentorship",
    "programs",
  ],
  openGraph: {
    title: "Our Services | Accordia Harmony",
    description:
      "Discover the comprehensive services we offer to empower young people.",
    url: "https://accordiaharmony.org/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Accordia Harmony",
    description: "Explore our youth empowerment services and programs.",
  },
  alternates: {
    canonical: "https://accordiaharmony.org/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
