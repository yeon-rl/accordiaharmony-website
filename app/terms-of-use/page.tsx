"use client";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";

export default function TermsOfUse() {
  const downloadPDF = () => {
    try {
      const pdf = new jsPDF();
      const content = document.querySelector(".terms-content");
      if (!content) return;

      // PDF Styling
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text("Terms of Use / Terms of Service", 20, 20);
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

      pdf.save("AccordiaHarmony-Terms-of-Use.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div className="text-white!">
      <div className="w-[90%] max-w-360 mx-auto py-8 md:py-10">
        <Navbar />
        <div className="min-h-screen w-full text-white py-10 md:py-16 flex justify-center">
          <Card className="w-full  bg-[#FFFFFF0D] border-none border-white/10 rounded-2xl  py-5 md:p-12 shadow-xl">
            <CardContent className="space-y-8 text-white terms-content">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Terms of Use / Terms of Service
                </h1>
                <button
                  onClick={downloadPDF}
                  className="px-5 py-2 rounded-full w-fit mt-5 md:mt-0 cursor-pointer bg-white text-black font-medium shadow hover:bg-gray-100 transition-colors duration-200"
                >
                  Download PDF
                </button>
              </div>

              <p className="text-sm text-white/70">
                Last Updated: November 2025
              </p>
              <hr className="border-white/10" />

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Introduction</h2>
                <p>
                  Welcome to Accordia Harmony C.I.C. By accessing or using our
                  website and digital platforms (including LifeSkills Connect,
                  Skill Forge, and Playground), you agree to comply with these
                  Terms of Use. Please read them carefully before using our
                  services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Who We Are</h2>
                <p>
                  Accordia Harmony C.I.C. is a registered Community Interest
                  Company in England and Wales, committed to developing digital
                  education and empowerment solutions for young people aged
                  17–21.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Use of Our Platforms</h2>
                <p>You agree to use our platforms:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Only for lawful, non‑commercial, and educational purposes
                  </li>
                  <li>In a respectful manner towards other users</li>
                  <li>
                    Without attempting to damage, disable, or disrupt the
                    platforms or their content
                  </li>
                </ul>
                <p>
                  You must not misuse our platforms or use them to distribute
                  harmful, illegal, or misleading material.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">User Accounts</h2>
                <p>
                  Certain areas of our platforms may require you to create an
                  account. You are responsible for keeping your login details
                  secure and for all activities under your account. We reserve
                  the right to suspend or terminate any account that breaches
                  these terms or misuses our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Intellectual Property</h2>
                <p>
                  All content on our website and platforms, including text,
                  graphics, logos, and learning materials, is owned or licensed
                  by Accordia Harmony C.I.C. and protected under UK copyright
                  law. You may use the content for personal learning only.
                  Reproduction, distribution, or commercial use without written
                  permission is strictly prohibited.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Disclaimer</h2>
                <p>
                  While we strive to ensure all information is accurate and up
                  to date, our content is provided for general educational
                  purposes and does not constitute professional advice. We make
                  no guarantees regarding the availability, accuracy, or
                  completeness of our content.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Accordia Harmony
                  C.I.C. shall not be liable for any loss or damage resulting
                  from the use or inability to use our platforms or materials.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  Links to Other Websites
                </h2>
                <p>
                  Our platforms may include links to external sites. We are not
                  responsible for the content or practices of third‑party
                  websites.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Changes to Terms</h2>
                <p>
                  We may modify these Terms of Use at any time. Continued use of
                  our platforms after such updates constitutes acceptance of the
                  revised terms.
                </p>
              </section>

              <section className="space-y-4 pb-4">
                <h2 className="text-xl font-semibold">Contact</h2>
                <p>
                  For any enquiries regarding these Terms, please contact us at
                  info@accordiaharmony.org.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
