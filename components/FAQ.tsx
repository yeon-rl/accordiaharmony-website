"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, ArrowRight } from "lucide-react";
import { Add } from "iconsax-reactjs";
import Button from "./Button";

const faqs = [
  {
    question: "What does Accordia Harmony CIC do?",
    answer:
      "Accordia Harmony empowers young people with practical life skills, career readiness, digital competence, and financial independence — through structured programmes, mentoring, and community partnerships.",
  },
  {
    question: "Who are the services designed for?",
    answer:
      "Our programmes are designed for young individuals aged 16–25 who want to develop personal and professional skills to achieve greater independence and confidence.",
  },
  {
    question: "What programmes do you offer?",
    answer:
      "We offer tailored programmes including mentorship, employability training, digital literacy, and personal development workshops to prepare young people for life and work.",
  },
  {
    question: "Do you partner with organisations and employers?",
    answer:
      "Yes, we collaborate with businesses, schools, and community organisations to provide holistic support and create impactful opportunities for young people.",
  },
];

const FAQSection = () => {
  // Initialize with the first FAQ (index 0) open by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center text-white my-10 w-full">
      <div className="w-full space-y-3">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`bg-[#FFFFFF1A] rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 border border-transparent hover:border-[#1C1C1C]/80 relative`}
            >
              <div className="flex justify-between items-center ">
                {isActive ? (
                  <div className="h-6 w-1 bg-[#646FC6] absolute left-0"></div>
                ) : null}
                <h3
                  className={`text-base font-medium transition-colors ${
                    isActive ? "text-[#4285F4]" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                <div className="w-6 h-6 flex items-center justify-center text-gray-400 transition-transform">
                  {isActive ? (
                    <Minus size={16} className="text-[#4285F4]" />
                  ) : (
                    <Add
                      size="16"
                      color="CurrentColor"
                      className="text-[#4285F4]"
                    />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Ask Question Button */}
      <div className="mt-10">
        <Button title="Ask Question" hasIcon />
      </div>
    </section>
  );
};

export default FAQSection;
