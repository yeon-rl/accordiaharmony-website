"use client";
import StaticBg from "@/components/StaticBg";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";

export default function PrivacyPolicyPage() {
  const downloadPDF = () => {
    try {
      const pdf = new jsPDF();
      const content = document.querySelector(".policy-content");
      if (!content) return;

      // PDF Styling
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text("Privacy Policy", 20, 20);
      pdf.setFontSize(10);
      pdf.text("Last Updated: November 2025", 20, 30);

      // Content sections
      pdf.setFontSize(12);
      let yPos = 40;
      const sections = content.querySelectorAll("section");

      sections.forEach((section) => {
        const title = section.querySelector("h2");
        if (title) {
          pdf.setFontSize(14);
          pdf.setFont("helvetica", "bold");
          pdf.text(title.textContent || "", 20, yPos);
          yPos += 10;
        }

        const paragraphs = section.querySelectorAll("p");
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "normal");

        paragraphs.forEach((p) => {
          const text = p.textContent || "";
          const lines = pdf.splitTextToSize(text, 170);

          // Check if we need a new page
          if (yPos + lines.length * 7 > 280) {
            pdf.addPage();
            yPos = 20;
          }

          pdf.text(lines, 20, yPos);
          yPos += lines.length * 7 + 5;
        });

        const lists = section.querySelectorAll("ul");
        lists.forEach((ul) => {
          const items = ul.querySelectorAll("li");
          items.forEach((li) => {
            const text = "• " + (li.textContent || "");
            const lines = pdf.splitTextToSize(text, 160);

            if (yPos + lines.length * 7 > 280) {
              pdf.addPage();
              yPos = 20;
            }

            pdf.text(lines, 25, yPos);
            yPos += lines.length * 7 + 2;
          });
          yPos += 5;
        });

        yPos += 10;
      });

      pdf.save("AccordiaHarmony-Privacy-Policy.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div className="text-white">
      <div className="w-[90%] max-w-360 mx-auto py-10">
        <Navbar />
      </div>
      <div className="min-h-screen w-full text-white flex justify-center md:py-20 px-4 mb-10">
        <div className="max-w-5xl w-full bg-[#FFFFFF0D] p-3 py-5 md:p-10 rounded-2xl shadow-xl border-none border-white/10 policy-content">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-3xl font-semibold">Privacy Policy</h1>
            <button
              onClick={downloadPDF}
              className="px-5 py-2 mt-5 w-fit md:mt-0 rounded-full cursor-pointer bg-white text-black font-medium shadow hover:bg-gray-100 transition-colors duration-200"
            >
              Download PDF
            </button>
          </div>
          <p className="text-sm text-white/70 mb-8">
            Last Updated: November 2025
          </p>

          <div className="h-px w-full bg-white/10 my-6" />

          {/* Introduction */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p className="text-white/70 leading-relaxed">
              Accorda Harmony C.I.C. (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) is committed to protecting and respecting your
              privacy. This Privacy Policy explains how we collect, use, and
              protect your personal information when you use our websites and
              digital platforms, including LifeSkills Connect, Skill Forge, and
              Playground (collectively referred to as &quot;our
              platforms&quot;).
            </p>
            <p className="text-white/70 leading-relaxed">
              We comply with the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p className="text-white/70">
              We may collect and process the following types of personal data:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Name, email address, and contact information</li>
              <li>Account login details (if you create an account)</li>
              <li>Date of birth or age range (for eligibility purposes)</li>
              <li>
                Information you provide when you contact us or submit forms
              </li>
              <li>
                Usage data such as IP address, browser type, and pages visited
              </li>
              <li>
                Feedback, survey responses, or participation data from learning
                activities
              </li>
            </ul>
            <p className="text-white/70">
              We do not collect or store sensitive personal information unless
              it is strictly necessary and you have given explicit consent.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">
              How We Use Your Information
            </h2>
            <p className="text-white/70">We use your personal data to:</p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Provide and manage access to our platforms and services</li>
              <li>Personalise your learning experience</li>
              <li>
                Communicate updates, news, or opportunities (if you opt in)
              </li>
              <li>Respond to enquiries or support requests</li>
              <li>
                Maintain the safety, security, and functionality of our
                platforms
              </li>
              <li>Comply with our legal and community interest obligations</li>
            </ul>
            <p className="text-white/70">
              We do not sell or rent your personal information to any third
              parties.
            </p>
          </section>

          {/* Legal Basis */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">
              Legal Basis for Processing
            </h2>
            <p className="text-white/70">
              We process your data based on one or more of the following
              grounds:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Your consent</li>
              <li>Performance of a contract or agreement with you</li>
              <li>Compliance with legal obligations</li>
              <li>
                Legitimate interests pursued by Accorda Harmony C.I.C. in
                fulfilling its community objectives
              </li>
            </ul>
          </section>

          {/* Data Storage */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Data Storage and Security</h2>
            <p className="text-white/70 leading-relaxed">
              Your data is stored securely using encrypted servers and access
              controls. We take appropriate technical and organisational
              measures to prevent unauthorised access, alteration, or
              disclosure.
            </p>
            <p className="text-white/70 leading-relaxed">
              We retain your personal data only for as long as necessary to
              fulfil the purposes outlined in this policy.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Your Rights</h2>
            <p className="text-white/70">You have the right to:</p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Access and obtain a copy of your data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>
                Lodge a complaint with the UK Information Commissioner&apos;s
                Office (ICO)
              </li>
            </ul>
            <p className="text-white/70">
              To exercise any of these rights, please contact us at
              privacy@accordiaharmony.org.
            </p>
          </section>

          {/* Changes */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this policy occasionally. Any changes will be
              published on this page with a revised &quot;Last Updated&quot;
              date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-4 mb-4">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact:
            </p>
            <p className="text-white/70">Email: privacy@accordiaharmony.org</p>
            <p className="text-white/70">
              Address: Accorda Harmony C.I.C., London, United Kingdom
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
