"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";

export default function GovernanceTransparency() {
  const downloadPDF = () => {
    const pdf = new jsPDF();
    const content =
      document.querySelector(".governance-content")?.textContent || "";

    pdf.setFontSize(16);
    pdf.text("Governance and Transparency", 20, 20);

    pdf.setFontSize(12);
    const textLines = pdf.splitTextToSize(content, 170);
    pdf.text(textLines, 20, 30);

    pdf.save("governance-and-transparency.pdf");
  };
  return (
    <div className="text-white!">
      <div className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10">
        <Navbar />
      </div>

      <div className="w-[90%] max-w-360 mx-auto py-10 md:py-10">
        <div className="min-h-screen w-full  text-white flex justify-center">
          <div className="w-full bg-white/5 backdrop-blur-sm p-3 py-5 md:p-10 rounded-2xl shadow-xl border-none border-white/10 governance-content">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Governance and Transparency
              </h1>
              <button
                onClick={downloadPDF}
                className="px-5 py-2 mt-5 md:mt-0 bg-white text-black rounded-full shadow hover:bg-gray-200 transition cursor-pointer"
              >
                Download PDF
              </button>
            </div>

            <p className="text-sm text-gray-300 mb-3">
              Last Updated: November 2025
            </p>

            <hr className="w-full border-b border-b-white/10 mb-5" />

            <section className="space-y-6 mb-12">
              <h2 className="text-xl font-semibold">
                Our Commitment to Integrity and Accountability
              </h2>
              <p>
                At Accordia Harmony C.I.C, we believe that integrity and
                transparency form the foundation of lasting social impact. As a
                registered Community Interest Company in the United Kingdom, we
                operate with a clear commitment to serve the public good and
                reinvest our resources into projects that empower young people
                aged 17 to 21.
              </p>
              <p>
                Our governance structure ensures that every action we take
                aligns with our mission to equip young people with the life
                skills, confidence and knowledge they need to thrive in
                today&apos;s world.
              </p>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="text-xl font-semibold">
                Our Structure as a Community Interest Company
              </h2>
              <p>
                Accordia Harmony C.I.C. is registered in England and Wales under
                the Companies Act 2006 as a Community Interest Company (CIC).
                This legal structure guarantees that our activities are
                conducted for the benefit of the community rather than for
                private profit.
              </p>
              <p>
                As a CIC, we are regulated by the Office of the Regulator of
                Community Interest Companies and operate under an asset lock,
                which ensures that all profits and assets are permanently
                dedicated to our social mission.
              </p>
              <p>
                Any surplus generated through our products or services is
                reinvested into developing youth learning programmes, expanding
                access to digital skills, and strengthening our community
                partnerships.
              </p>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="text-xl font-semibold">
                Our Statement of Community Benefit
              </h2>
              <p>
                The purpose of Accordia Harmony C.I.C. is to support and empower
                young people across the United Kingdom, particularly those aged
                17 to 21, who are preparing for independence and adult life.
              </p>
              <p>
                We create digital platforms and educational resources that help
                young people develop essential life skills, improve
                employability, and enhance personal wellbeing.
              </p>
              <p>
                Our work also benefits schools, community organisations and
                local partners by providing innovative learning tools that
                complement traditional education.
              </p>
              <p>
                Every decision we make begins with a simple question: How does
                this improve opportunities for young people and the communities
                they belong to?
              </p>
            </section>

            <section className="space-y-4 mb-12">
              <h2 className="text-xl font-semibold">
                Our Governance Principles
              </h2>
              <p>
                Our governance framework is guided by principles that ensure
                accountability, fairness and ethical conduct at every level of
                operation.
              </p>

              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="font-semibold">Accountability</h3>
                  <p>
                    We take responsibility for the way we use our resources and
                    measure our impact against our mission and social
                    objectives.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Integrity</h3>
                  <p>
                    We act with honesty, openness and consistency in our
                    relationships with funders, partners and the communities we
                    serve.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Inclusion</h3>
                  <p>
                    We value diversity and ensure that our leadership and
                    programmes reflect the voices and experiences of the young
                    people we aim to support.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Impact Measurement</h3>
                  <p>
                    We are building a transparent reporting system to track and
                    communicate the outcomes of our initiatives once our first
                    operating year is complete.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="text-xl font-semibold">
                Our Board and Leadership
              </h2>
              <p>
                Accordia Harmony C.I.C. is led by a board of directors who bring
                expertise in technology, education, business development and
                social innovation. The board provides strategic direction,
                oversees governance, and ensures compliance with the Community
                Interest Company regulations.
              </p>
              <p>
                Our leadership team is responsible for day-to-day operations and
                for maintaining high standards of accountability and ethical
                practice. Together, the board and management work
                collaboratively to deliver measurable progress toward our
                mission.
              </p>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="text-xl font-semibold">
                Our Transparency Commitment
              </h2>
              <p>
                Although Accordia Harmony C.I.C. has not yet reached its first
                full year of operation, we are committed to producing an Annual
                Report and Community Impact Summary at the end of our first
                financial year. These reports will outline our progress,
                partnerships, financial stewardship and social outcomes.
              </p>
              <p>
                In the meantime, we maintain open communication with our
                partners, regulators and supporters. Our official company
                filings can be accessed through Companies House and the
                Community Interest Company Register, and we are always available
                to provide additional information about our operations or
                governance policies.
              </p>
            </section>

            <section className="space-y-6 mb-6">
              <h2 className="text-xl font-semibold">Looking Ahead</h2>
              <p>
                As we continue to grow, we will uphold the highest standards of
                responsibility and transparency. Our goal is to ensure that
                Accordia Harmony C.I.C. remains a trusted organisation that
                delivers measurable benefit to young people and their
                communities.
              </p>
              <p>
                We are building our governance framework not only to meet
                regulatory requirements but to set an example of how ethical
                innovation can drive sustainable social change.
              </p>
              <p>
                For any questions regarding our governance or community benefit
                statement, please contact info@accordiaharmony.org
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
