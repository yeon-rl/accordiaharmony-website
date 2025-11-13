import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Accordia Harmony",
  description:
    "Get in touch with Accordia Harmony. We're here to answer your questions about our youth empowerment programs, life skills training, and digital learning platforms.",
  keywords: [
    "contact",
    "support",
    "inquiries",
    "get in touch",
    "Accordia Harmony",
  ],
  openGraph: {
    title: "Contact Us | Accordia Harmony",
    description:
      "Get in touch with Accordia Harmony. We're here to answer your questions about our youth empowerment programs.",
    url: "https://www.accordiaharmony.org/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Accordia Harmony",
    description:
      "Get in touch with Accordia Harmony for inquiries about our programs.",
  },
  alternates: {
    canonical: "https://www.accordiaharmony.org/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
