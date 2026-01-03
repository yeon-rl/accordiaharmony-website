"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import StaticBg from "@/components/StaticBg";
import Text from "@/components/Text";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import RegisterDialog from "@/components/RegisterDialog";

const COUNTRIES = [
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Netherlands", code: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "Belgium", code: "BE", dial: "+32", flag: "🇧🇪" },
  { name: "Switzerland", code: "CH", dial: "+41", flag: "🇨🇭" },
  { name: "Austria", code: "AT", dial: "+43", flag: "🇦🇹" },
  { name: "Sweden", code: "SE", dial: "+46", flag: "🇸🇪" },
  { name: "Norway", code: "NO", dial: "+47", flag: "🇳🇴" },
  { name: "Denmark", code: "DK", dial: "+45", flag: "🇩🇰" },
  { name: "Finland", code: "FI", dial: "+358", flag: "🇫🇮" },
  { name: "Poland", code: "PL", dial: "+48", flag: "🇵🇱" },
  { name: "Czech Republic", code: "CZ", dial: "+420", flag: "🇨🇿" },
  { name: "Hungary", code: "HU", dial: "+36", flag: "🇭🇺" },
  { name: "Romania", code: "RO", dial: "+40", flag: "🇷🇴" },
  { name: "Greece", code: "GR", dial: "+30", flag: "🇬🇷" },
  { name: "Portugal", code: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Ireland", code: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "Mexico", code: "MX", dial: "+52", flag: "🇲🇽" },
  { name: "Brazil", code: "BR", dial: "+55", flag: "🇧🇷" },
  { name: "Argentina", code: "AR", dial: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "CL", dial: "+56", flag: "🇨🇱" },
  { name: "Colombia", code: "CO", dial: "+57", flag: "🇨🇴" },
  { name: "Peru", code: "PE", dial: "+51", flag: "🇵🇪" },
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", code: "BD", dial: "+880", flag: "🇧🇩" },
  { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
  { name: "China", code: "CN", dial: "+86", flag: "🇨🇳" },
  { name: "South Korea", code: "KR", dial: "+82", flag: "🇰🇷" },
  { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
  { name: "Thailand", code: "TH", dial: "+66", flag: "🇹🇭" },
  { name: "Malaysia", code: "MY", dial: "+60", flag: "🇲🇾" },
  { name: "Indonesia", code: "ID", dial: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "PH", dial: "+63", flag: "🇵🇭" },
  { name: "Vietnam", code: "VN", dial: "+84", flag: "🇻🇳" },
  { name: "Nigeria", code: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Ghana", code: "GH", dial: "+233", flag: "🇬🇭" },
  { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
  { name: "Kenya", code: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Egypt", code: "EG", dial: "+20", flag: "🇪🇬" },
  { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "United Arab Emirates", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "Israel", code: "IL", dial: "+972", flag: "🇮🇱" },
  { name: "Turkey", code: "TR", dial: "+90", flag: "🇹🇷" },
  { name: "Russia", code: "RU", dial: "+7", flag: "🇷🇺" },
  { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const SkillForgePage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        <div className="w-[90%] max-w-5xl mx-auto pt-10 md:pt-16 relative z-[50]">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="text-center mb-8 md:mb-10">
            <span className="text-[#4285F4] font-bold! uppercase tracking-wider text-sm mb-2 block">Skills Forge</span>
            <Text type="heading" className="text-4xl md:text-5xl font-bold mb-3">
              Build Skills, Build Power, Build Your Future
            </Text>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical vocational training supporting young people to develop confidence, independence and life-ready skills.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mb-8 md:mb-10">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/main.png"
                alt="Skill Forge Hero"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Sections */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* About Skill Forge */}
            <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Text type="heading" className="text-2xl! font-medium mb-3 text-[#4285F4] dark:text-white">ABOUT SKILL FORGE</Text>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Skill Forge is a community-focused vocational training initiative delivered by Accordia Harmony. The
                  programme is designed to support young people to develop practical skills that contribute to personal growth,
                  independence and long-term positive outcomes. <br />
                  Through structured hands-on training and guidance from experienced professionals, Skill Forge provides young
                  people with opportunities to explore practical pathways, build confidence, and develop a strong sense of
                  responsibility and self-belief. <br />
                  The programme complements existing education and employment pathways and is particularly suited to young
                  people who benefit from applied learning and real-world engagement.
                </p>
              </div>
            </motion.section>

            {/* Program Highlights */}
            <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Text type="heading" className="text-2xl! font-medium mb-6 text-[#4285F4] dark:text-white">PROGRAM HIGHLIGHTS</Text>
              <p className="mb-2">Skill Forge is designed to</p>

              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Support young people to develop practical and transferable skills</li>
                <li>Build confidence self belief and independence</li>
                <li>Encourage positive engagement and participation</li>
                <li>Promote responsibility, teamwork and discipline</li>
                <li>Reduce barriers to accessing vocational learning</li>
                <li>Contribute to wider community development and social inclusion</li>
              </ul>
              <p className="mt-2">The programme aligns with youth development, safeguarding and skills progression priorities.</p>
            </motion.section>

            {/* Training Areas Grid */}
            <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {/* <Text type="heading" className="text-2xl! font-medium mb-10 text-[#4285F4] dark:text-white">TRAINING AREAS</Text> */}
              <div className="grid grid-cols-1 gap-8">
                <div className="relative rounded-2xl overflow-hidden ">
                  <Image src="/images/objs1.png" alt="Training 1" width={1000} height={1000} className="w-full h-auto" />
                </div>
                <div className="relative rounded-2xl overflow-hidden ">
                  <Image src="/images/objs2.png" alt="Training 4" width={1000} height={1000} className="w-full h-auto" />
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Text type="heading" className="text-2xl! font-bold! mb-6 text-[#4285F4] dark:text-white">TRAINING AREAS</Text>
              <p className="mb-2">Skill Forge offers vocational training across a range of practical disciplines, subject to availability and local delivery partners.</p>
              <p className="mb-2">These may include</p>

              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Barbering and grooming</li>
                <li>Fashion design and tailoring</li>
                <li>Professional cooking and catering</li>
                <li>Plumbing and basic maintenance</li>
                <li>Baking and food preparation</li>
                <li>Makeup artistry and beauty skills</li>
                <li>Hair styling and personal care</li>
                <li>Photography and creative skills</li>
                <li>Additional practical trades and crafts</li>
              </ul>
              <p className="mt-2">Training areas may vary depending on location mentor availability and programme phase.</p>
            </motion.section>

            <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {/* <Text type="heading" className="text-2xl! font-medium mb-10 text-[#4285F4] dark:text-white">TRAINING AREAS</Text> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden ">
                  <Image src="/images/programme.png" alt="Training 1" width={1000} height={1000} className="w-full h-auto" />
                </div>
                <div className="relative ">
                 <div>
              <Text type="heading" className="text-2xl! font-medium mb-6 text-[#4285F4] dark:text-white">WHO THE PROGRAMME IS FOR?</Text>
              <p className="mb-2">Skill Forge is suitable for young people who</p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Are interested in practical hands-on learning</li>
                <li>Want to build confidence and independence</li>
                <li>Are exploring future education, training or employment pathways</li>
                <li>May not thrive in traditional classroom-based environments</li>
                <li>Are seeking supportive, structured skill development opportunities</li>
              </ul>
              <p className="mt-2">No prior experience is required.</p>
            </div>
                </div>
              </div>
            </motion.section>

            {/* Delivery Approach */}
            <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Text type="heading" className="text-2xl! font-bold! mb-6 text-[#4285F4]">DELIVERY APPROACH</Text>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Skill Forge is delivered in a supportive, structured and inclusive environment.
Participants engage in guided practical sessions supported by skilled mentors and facilitators. Emphasis is
placed on learning by doing, building confidence at an appropriate pace and fostering positive behaviour and
responsibility. <br />
Safeguarding inclusion and well-being are central to programme delivery.</p>
              </div>
            </motion.section>

            <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Text type="heading" className="text-2xl! font-bold! mb-6 text-[#4285F4] dark:text-white">COMMUNITY AND SOCIAL IMPACT</Text>
              <p className="mb-2">Skill Forge contributes to positive outcomes by</p>

              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Supporting youth confidence and self-development</li>
                <li>Encouraging independence and resilience</li>
                <li>Promoting constructive community engagement</li>
                <li>Strengthening pathways into further training, volunteering or employment</li>
                <li>Supporting wider social and economic inclusion objectives</li>
              </ul>
              <p className="mt-2">The programme is designed to deliver long-term community benefit.</p>
            </motion.section>


<div>
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mb-5">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/impact.png"
                alt="Skill Forge Hero"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.section variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Text type="heading" className="text-2xl! font-bold! mb-6 text-[#4285F4]">GET INVOLVED</Text>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Skill Forge welcomes both young people and skilled professionals.
Young people can register their interest in taking part in upcoming vocational training programmes.
<br /> <br />
Skilled professionals are invited to volunteer as mentors, sharing practical knowledge and supporting the
development of young people within their community.</p>
              </div>
            </motion.section>
</div>

            {/* Registration CTA */}
            <motion.section 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true }}
              className="bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-3xl p-5 md:p-8 mb-10"
            >
               <div>
              <Text type="heading" className="text-2xl! font-bold! mb-6 text-[#4285F4] dark:text-white">Register Your Interest</Text>
              <p className="mb-2">This form allows you to register your interest in upcoming Skill Forge vocational training programmes.
By completing the form, you will</p>

              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Receive updates about programme dates and locations</li>
                <li>Be contacted when relevant training opportunities become available</li>
                <li>Help us tailor delivery to local needs and interests</li>
              </ul>
              <p className="mt-2">Registration does not guarantee a place, but helps us plan inclusive, accessible and well-supported programmes.
For young people under 18, parental or guardian consent may be required.</p>
            </div>
             <button 
                onClick={() => setIsDialogOpen(true)}
                className="bg-[#4285F4] text-white px-8 cursor-pointer py-2 mt-5 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                Register
              </button>
            </motion.section>
          </div>
        </div>
      </StaticBg>

      <Footer />

      <RegisterDialog 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        product="Skill Forge"
      />
    </div>
  );
};

export default SkillForgePage;
