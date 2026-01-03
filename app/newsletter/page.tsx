"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const articles = [
  {
    id: 1,
    category: "Event",
    title: "Lorem ipsum dolor sit amet consectetur. Sed suspendisse lectus consectetu",
    description: "Lorem ipsum dolor sit amet consectetur. Sed suspendisse lectus consecteturLorem ipsum dolor sit amet consectetur.",
    date: "24th Dec 2025",
    comments: 6,
    image: "/images/news.png",
    color: "text-blue-500",
    link: "/newsletter/skill-forge"
  },
  {
    id: 2,
    category: "Meeting",
    title: "Quisque aliquet nisl nec tristique porttitor. Valiquam, nunc at interdum blandit.",
    description: "Quisque aliquet nisl nec tristique porttitor. Valiquam, aliquam, nunc at interdum blandit. Aenean tincidunt",
    date: "15th Jan 2026",
    comments: 7,
    image: "/images/news.png",
    color: "text-blue-400",
    link: "#"
  },
  {
    id: 3,
    category: "Conference",
    title: "Mauris vitae sapien tincidunt, posuere erat id, hendrerit libero. Praesent vitae quam.",
    description: "Mauris vitae sapien tincidunt, posuere, len tincidunt, posuere erat id, hendrerit libero. Praesent vitae quam. In hac habitasse",
    date: "11th Feb 2026",
    comments: 8,
    image: "/images/news.png",
    color: "text-blue-600",
    link: "#"
  },
  {
    id: 4,
    category: "Event",
    title: "Lorem ipsum dolor sit amet consectetur. Sed suspendisse lectus consectetu",
    description: "Lorem ipsum dolor sit amet consectetur. Sed suspendisse lectus consecteturLorem ipsum dolor sit amet consectetur.",
    date: "24th Dec 2025",
    comments: 6,
    image: "/images/news.png",
    color: "text-blue-500",
    link: "#"
  },
  {
    id: 5,
    category: "Meeting",
    title: "Quisque aliquet nisl nec tristique porttitor. Valiquam, nunc at interdum blandit.",
    description: "Quisque aliquet nisl nec tristique porttitor. Valiquam, aliquam, nunc at interdum blandit. Aenean tincidunt",
    date: "15th Jan 2026",
    comments: 7,
    image: "/images/news.png",
    color: "text-blue-400",
    link: "#"
  },
  {
    id: 6,
    category: "Conference",
    title: "Mauris vitae sapien tincidunt, posuere erat id, hendrerit libero. Praesent vitae quam.",
    description: "Mauris vitae sapien tincidunt, posuere, len tincidunt, posuere erat id, hendrerit libero. Praesent vitae quam. In hac habitasse",
    date: "11th Feb 2026",
    comments: 8,
    image: "/images/news.png",
    color: "text-blue-600",
    link: "#"
  },
];

const Newsletter = () => {
  return (
    <div className="text-foreground min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10"
      >
        <Navbar />
      </motion.div>

      <StaticBg scroll={true}>
        <div className="w-[90%] max-w-7xl mx-auto py-16 relative z-[50]">
          {/* Recent Post Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-[#4285F4] rounded-full"></div>
              <Text type="heading" className="text-2xl font-semibold">
                Recent Post
              </Text>
            </div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-10 items-center overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/news.png"
                  alt="Skill Forge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#4285F4] font-medium text-lg">Skill forge</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-muted-foreground font-medium">31 Dec 2025</span>
                </div>
                <Text type="heading" className="text-4xl md:text-5xl font-bold leading-tight">
                  Build Skills, Build Power, Build Your Future
                </Text>
                <Text className="text-lg text-muted-foreground leading-relaxed">
                  Practical vocational training supporting young people to develop confidence, independence and life-ready skills. <Link href="/newsletter/skill-forge" className="text-[#4285F4] hover:underline font-medium">See more</Link>
                </Text>
                <Link href="/newsletter/skill-forge">
                  <button className="bg-[#4285F4] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors w-fit">
                    Read now
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Must Read Section */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-[#4285F4] rounded-full"></div>
              <Text type="heading" className="text-2xl font-semibold">
                Must Read
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {articles.map((article) => (
                <Link key={article.id} href={article.link}>
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className={`${article.color} font-semibold text-sm mb-3`}>{article.category}</span>
                      <Text className="text-xl font-bold! mb-4 line-clamp-2 leading-snug group-hover:text-[#4285F4] transition-colors" >
                        {article.title}
                      </Text>
                      <Text className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                        {article.description} <span className="text-[#4285F4] hover:underline font-medium">See more</span>
                      </Text>
                      <div className="mt-auto flex items-center justify-between text-sm text-gray-500 font-medium border-t border-gray-100 dark:border-white/10 pt-4">
                        <span>{article.date}</span>
                        <div className="flex items-center gap-1.5">
                          <MessageCircle size={16} />
                          <span>Comment {article.comments}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </StaticBg>

      <Footer />
    </div>
  );
};

export default Newsletter;

