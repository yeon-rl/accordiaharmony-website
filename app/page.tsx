"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StaticBg from "../components/StaticBg";
import Onboarding from "../components/Onboarding";
import Home from "@/components/Home";

export default function Page() {
  const [onboardingDone, setOnboardingDone] = useState(false);
  return (
    <>
      <AnimatePresence mode="wait">
        {!onboardingDone ? (
          <motion.div
            key="onboarding"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StaticBg>
              <Onboarding onFinish={() => setOnboardingDone(true)} />
            </StaticBg>
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
