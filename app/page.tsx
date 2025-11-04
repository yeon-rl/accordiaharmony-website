"use client";

import { useState } from "react";
import StaticBg from "../components/StaticBg";
import Onboarding from "../components/Onboarding";
import Home from "@/components/Home";

export default function Page() {
  const [onboardingDone, setOnboardingDone] = useState(false);
  return (
    <StaticBg>
      {!onboardingDone && (
        <Onboarding onFinish={() => setOnboardingDone(true)} />
      )}
      {onboardingDone && <Home />}
    </StaticBg>
  );
}
