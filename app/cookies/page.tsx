"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";

export default function CookiePolicy() {
  const downloadPDF = () => {
    try {
      const pdf = new jsPDF();
      const content = document.querySelector(".cookie-content");
      if (!content) return;

      // PDF Styling
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text("Cookie Policy", 20, 20);
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

      pdf.save("AccordiaHarmony-Cookie-Policy.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div className="text-white!">
      <div className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10">
        <Navbar />
        <div className="min-h-screen w-full text-white py-10 md:py-20 flex justify-center">
          <div className="max-w-5xl w-full bg-[#FFFFFF0D] p-3 py-5 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Decorative background circles */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="w-[900px] h-[900px] rounded-full border border-white/10 absolute -top-40 -left-40"></div>
              <div className="w-[700px] h-[700px] rounded-full border border-white/10 absolute top-40 left-20"></div>
              <div className="w-[500px] h-[500px] rounded-full border border-white/10 absolute top-60 right-10"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <h1 className="text-3xl font-bold">Cookie Policy</h1>
                {/* <button
                  onClick={downloadPDF}
                  className="bg-white text-black text-sm px-4 py-2 mt-5 md:mt-0 rounded-full shadow hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  Download PDF
                </button> */}
              </div>

              <p className="text-sm text-gray-300 mb-8">
                Last Updated: November 2025
              </p>

              {/* Sections */}
              <div className="space-y-10 text-gray-200 cookie-content">
                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    What Are Cookies?
                  </h2>
                  <p>
                    Cookies are small text files placed on your device when you
                    visit a website. They help us improve user experience and
                    website performance.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    How We Use Cookies
                  </h2>
                  <p className="mb-3">We use cookies to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Remember your preferences and login details</li>
                    <li>
                      Analyse traffic and user engagement to improve our
                      services
                    </li>
                    <li>
                      Support functionality of learning platforms, such as
                      progress tracking and language setting
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Types of Cookies We Use
                  </h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Essential cookies:</strong> Required for basic
                      site operation and security
                    </li>
                    <li>
                      <strong>Analytics cookies:</strong> Help us understand how
                      visitors use our site (e.g. Google Analytics)
                    </li>
                    <li>
                      <strong>Functional cookies:</strong> Enhance your
                      experience with personalisation and saved preferences
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Managing Cookies
                  </h2>
                  <p>
                    You can control or delete cookies through your browser
                    settings. Note that disabling cookies may affect some
                    website features and performance.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Consent</h2>
                  <p>
                    By using our website, you consent to the use of cookies in
                    accordance with this policy. A cookie banner will appear on
                    your first visit to confirm your choice.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Contact</h2>
                  <p>
                    For any questions about this Cookie Policy, contact us at
                    privacy@accordiaharmony.org.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Changes to This Policy
                  </h2>
                  <p>
                    We may update this policy occasionally. Any changes will be
                    published on this page with a revised &quot;Last
                    Updated&quot; date.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
