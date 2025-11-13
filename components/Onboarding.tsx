"use client";
import React, { useEffect, useState } from "react";
// Animation keyframes for smooth fade-in and upward motion (no bounce)
const waveKeyframes = `
@keyframes fadeInUpSmooth {
  0% {
    opacity: 0;
    transform: translateY(30px); // Reduced distance
    filter: blur(6px); // Less blur for faster visual clarity
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}`;

const sentences = ["Empowering Young People", "Empowering The Future "];

export default function Onboarding({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (step < sentences.length) {
      const timer = setTimeout(() => {
        setStep((s) => s + 1);
      }, 1200); // Reduced from 1800ms to 1200ms
      return () => clearTimeout(timer);
    } else {
      // Immediately finish
      setVisible(false);
      onFinish();
    }
  }, [step, onFinish]);

  if (!visible) return null;

  return (
    <>
      {/* Inject keyframes for animation */}
      <style>{waveKeyframes}</style>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          transition: "opacity 0.3s", // Faster fade-out
          opacity: step > sentences.length - 1 ? 0 : 1,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: 24,
              opacity: 1,
              transition: "opacity 0.4s", // Faster text transition
              display: "inline-block",
              textShadow: "0 2px 8px rgba(0,0,0,0.12)",
              animation: "fadeInUpSmooth 0.5s cubic-bezier(.4,0,0.2,1)", // Faster animation
            }}
            className="text-white"
            key={step}
          >
            {sentences[step]}
          </p>
          {/* No skip button, onboarding is automatic */}
        </div>
      </div>
    </>
  );
}
