"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";

export default function AccessibilityStatement() {
  const downloadPDF = () => {
    try {
      const pdf = new jsPDF();
      const content = document.querySelector(".accessibility-content");
      if (!content) return;

      // PDF Styling
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text("Accessibility Statement", 20, 20);
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

      pdf.save("AccordiaHarmony-Accessibility-Statement.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div className="text-white!">
      <div className="w-[90%] md:w-[80%] mx-auto pt-8 md:pt-10">
        <Navbar />
        <div className="min-h-screen w-full  text-white flex justify-center py-10 md:py-20">
          <div className="w-full bg-[#FFFFFF0D] rounded-2xl p-5 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute w-[900px] h-[900px] rounded-full border border-white/10 top-[-200px] left-[-150px]"></div>
              <div className="absolute w-[1100px] h-[1100px] rounded-full border border-white/5 top-[-300px] left-[-250px]"></div>
              <div className="absolute w-[1300px] h-[1300px] rounded-full border border-white/5 top-[-400px] left-[-350px]"></div>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start relative z-10">
              <div>
                <h1 className="text-3xl font-semibold">
                  Accessibility Statement
                </h1>
                <p className="text-sm text-gray-300 mt-2">
                  Accordia Harmony C.I.C. is committed to making its website and
                  digital platforms accessible to everyone, including people
                  with disabilities.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Last Updated: November 2025
                </p>
              </div>

              {/* <button
                onClick={downloadPDF}
                className="px-5 py-2 bg-white mt-5 md:mt-0 text-black rounded-full text-sm font-medium shadow-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                Download PDF
              </button> */}
            </div>

            <hr className="border-white/20 my-8" />

            {/* Content */}
            <div className="relative z-10 space-y-10 text-gray-300 text-sm leading-relaxed accessibility-content">
              <section>
                <h2 className="text-white text-lg font-semibold mb-3">
                  Our Commitment
                </h2>
                <p>
                  We aim to comply with the Web Content Accessibility Guidelines
                  (WCAG) 2.1 Level AA standard and follow accessibility best
                  practices in all our digital projects.
                </p>
              </section>

              <section>
                <h2 className="text-white text-lg font-semibold mb-3">
                  Accessibility Features
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Clear and consistent navigation</li>
                  <li>Text alternatives for images</li>
                  <li>Keyboard navigation compatibility</li>
                  <li>Adjustable text size through browser settings</li>
                  <li>High-contrast visuals for readability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-lg font-semibold mb-3">
                  Ongoing Improvements
                </h2>
                <p>
                  We are continuously improving the accessibility of our content
                  and technology. If you encounter any issues, please contact us
                  so we can resolve them promptly.
                </p>
              </section>

              <section>
                <h2 className="text-white text-lg font-semibold mb-3">
                  Managing Cookies
                </h2>
                <p>
                  You can control or delete cookies through your browser
                  settings. Note that disabling cookies may affect some website
                  features and performance.
                </p>
              </section>

              <section>
                <h2 className="text-white text-lg font-semibold mb-3">
                  Feedback
                </h2>
                <p>
                  We welcome feedback on the accessibility of our website and
                  platforms.
                  <br />
                  Please contact us at:
                  <br />
                  <span className="text-white font-medium">
                    Email: accessibility@accordiaharmony.org
                  </span>
                  <br />
                  We aim to respond within 5 working days.
                </p>
              </section>

              <section>
                <h2 className="text-white text-lg font-semibold mb-3">
                  Contact
                </h2>
                <p>
                  For any questions about this Cookie Policy, contact us at{" "}
                  <span className="text-white font-medium">
                    privacy@accordiaharmony.org
                  </span>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-white text-lg font-semibold mb-3">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this policy occasionally. Any changes will be
                  published on this page with a revised “Last Updated” date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
