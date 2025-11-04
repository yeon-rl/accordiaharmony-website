import React from "react";
import Image from "next/image";
import Text from "./Text";

const WhyTrustUs = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const reasons = [
    {
      icon: "/icons/rocket-01.png",
      text: "Independent Living Skills Training",
      longText:
        "Learn essential life skills, from budgeting and cooking to household management and personal care for confident, independent living.",
    },
    {
      icon: "/icons/new-job.png",
      text: "Employment Readiness Programmes",
      longText:
        "Prepare for the workplace with expert guidance in CV writing, interview skills, professional behaviour, and career planning.",
    },
    {
      icon: "/icons/money-bag-02.png",
      text: "Financial Literacy Education",
      longText:
        "Gain control of your finances through practical lessons on banking, saving, debt management, and benefits awareness.",
    },
    {
      icon: "/icons/globe-02.png",
      text: "Digital & Technology Skills",
      longText:
        "Build digital confidence and employability with hands-on training in everyday tech and online communication.",
    },
    {
      icon: "/icons/shield-02.png",
      text: "Safeguarding & Personal Safety",
      longText:
        "Stay informed and empowered with awareness programmes focused on personal safety, boundaries, and self-protection.",
    },
    {
      icon: "/icons/brain-02.png",
      text: "Mental Health & Wellbeing Support",
      longText:
        "Develop emotional resilience and confidence through mentoring, coaching, and holistic wellbeing support.",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5">
      {reasons.map((reason, index) => (
        <div
          className="flex items-center flex-col justify-center py-24 gradient-border cursor-pointer h-[200px]"
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index ? (
            <div
              className="absolute -inset-8 rounded-full pointer-events-none transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(66,133,244,0.15) 0%, rgba(66,133,244,0.05) 55%, rgba(66,133,244,0) 100%)",
                filter: "blur(20px)",
              }}
            ></div>
          ) : null}
          <div className="flex items-center flex-col justify-center transition-opacity duration-300 h-full w-full">
            {hoveredIndex === index ? (
              <Text type="body" className="text-center px-6">
                {reason.longText}
              </Text>
            ) : (
              <>
                <Image
                  src={reason.icon}
                  alt="Why Trust Us"
                  width={1000}
                  height={1000}
                  className="w-[60px] h-[60px]"
                />
                <Text
                  type="body"
                  className="mt-4 text-center font-semibold text-xl text-[#A7C8FF] px-12"
                >
                  {reason.text}
                </Text>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyTrustUs;
