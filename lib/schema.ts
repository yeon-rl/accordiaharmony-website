// lib/schema.ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Accordia Harmony C.I.C.",
  url: "https://accordiaharmony.org",
  logo: "https://accordiaharmony.org/logo.png",
  description:
    "Accordia Harmony empowers young people aged 17-21 with essential life skills, digital literacy, and confidence for independent living.",
  sameAs: [
    "https://www.linkedin.com/company/accordia-harmony",
    "https://twitter.com/AccordiaHarmony",
    "https://www.instagram.com/accordiaharmony",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+44-xxx-xxx-xxxx",
    email: "info@accordiaharmony.org",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "124 City Road",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "EC1V 2NX",
    addressCountry: "GB",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Accordia Harmony C.I.C.",
  image: "https://accordiaharmony.org/logo.png",
  description:
    "Youth empowerment and life skills training organization based in London.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "124 City Road",
    addressLocality: "London",
    postalCode: "EC1V 2NX",
    addressCountry: "GB",
  },
  telephone: "+44-xxx-xxx-xxxx",
  email: "info@accordiaharmony.org",
  url: "https://accordiaharmony.org",
  areaServed: "GB",
  serviceType: "Youth Education & Training",
};
