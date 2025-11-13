"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";

export default function ImpactAndCommunity() {
  const downloadPDF = () => {
    const pdf = new jsPDF();
    const content =
      document.querySelector(".impact-content")?.textContent || "";

    pdf.setFontSize(16);
    pdf.text("Impact and Community", 20, 20);

    pdf.setFontSize(12);
    const textLines = pdf.splitTextToSize(content, 170);
    pdf.text(textLines, 20, 30);

    pdf.save("impact-and-community.pdf");
  };
  return (
    <div className="text-white!">
      <div className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10">
        <Navbar />
        <div className="min-h-screen w-full  text-white my-10 md:py-16  flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" w-full"
          >
            <Card className="bg-[#FFFFFF0D] border-none rounded-2xl shadow-xl p-3 py-5 md:p-6">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <h1 className="text-3xl font-bold text-white">
                  Impact and Community
                </h1>
                {/* <Button
                  onClick={downloadPDF}
                  className="rounded-full mt-5 md:mt-0 px-6 py-2 text-black bg-white hover:bg-white shadow cursor-pointer"
                >
                  Download PDF
                </Button> */}
              </div>

              <p className="text-sm text-white/60">
                Last Updated: November 2025
              </p>

              <hr className="w-full border-b border-b-white/5 mb-5" />

              <CardContent className="space-y-10 text-white/90 leading-relaxed impact-content px-4! md:px-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Creating Change that Lasts
                  </h2>
                  <p>
                    At Accordia Harmony C.I.C., every initiative begins with one
                    purpose: to make a measurable difference in the lives of
                    young people aged 17 to 21. We are more than a digital
                    learning provider. We are a community built around
                    opportunity, inclusion, and empowerment.
                  </p>
                  <p className="mt-3">
                    Our work focuses on helping young people build the skills,
                    confidence, and independence they need to thrive while
                    strengthening the communities they belong to. Through
                    collaboration, innovation, and reinvestment, we continue to
                    turn vision into lasting social impact.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Our Structure as a Community Interest Company
                  </h2>
                  <p>
                    Accordia Harmony C.I.C. is registered in England and Wales
                    under the Companies Act 2006 as a Community Interest Company
                    (CIC). This legal structure guarantees that our activities
                    are conducted for the benefit of the community rather than
                    for private profit.
                  </p>
                  <p className="mt-3">
                    As a CIC, we are regulated by the Office of the Regulator of
                    Community Interest Companies and operate under an asset
                    lock, which ensures that all profits and assets are
                    permanently dedicated to our social mission. Any surplus
                    generated through our products or services is reinvested
                    into developing youth learning programmes, expanding access
                    to digital skills, and strengthening our community
                    partnerships.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Our Statement of Community Benefit
                  </h2>
                  <p>
                    The purpose of Accordia Harmony C.I.C. is to support and
                    empower young people across the United Kingdom, particularly
                    those aged 17 to 21, who are preparing for independence and
                    adult life.
                  </p>
                  <p className="mt-3">
                    We create digital platforms and educational resources that
                    help young people develop essential life skills, improve
                    employability, and enhance personal wellbeing. Our work also
                    benefits schools, community organisations and local partners
                    by providing innovative learning tools that complement
                    traditional education.
                  </p>
                  <p className="mt-3">
                    Every decision we make begins with a simple question: How
                    does this improve opportunities for young people and the
                    communities they belong to?
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Building Stronger Communities
                  </h2>
                  <p>
                    Progress is a collective effort. Accordia Harmony C.I.C.
                    partners with schools, youth organisations, community
                    groups, and local authorities to deliver accessible learning
                    that reaches those who need it most.
                  </p>
                  <p className="mt-3">
                    Our community programmes promote inclusion, wellbeing, and
                    digital literacy while supporting the transition from
                    education to employment. We are committed to reaching young
                    people from all backgrounds and helping them build the
                    confidence and knowledge to participate fully in society.
                  </p>
                  <p className="mt-3">
                    Beyond our digital platforms, we collaborate with mentors,
                    educators, and volunteers who help us deliver local sessions
                    and workshops that amplify youth voices and encourage
                    community engagement.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Reinvestment for Social Good
                  </h2>
                  <p>
                    As a registered Community Interest Company, Accordia Harmony
                    reinvests all surplus income into community development,
                    youth training, and digital innovation. Every partnership,
                    project, and learning initiative contributes directly to the
                    people and communities we serve.
                  </p>
                  <p className="mt-3">
                    Our reinvestment model is guided by transparency and
                    accountability. Funds are directed toward improving learning
                    technologies, expanding outreach, and creating new
                    opportunities for young people to develop their skills and
                    confidence.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Our Path Forward
                  </h2>
                  <p>
                    Although Accordia Harmony C.I.C. is still in its early
                    stages, our commitment to impact is already shaping lives
                    across the United Kingdom. In the coming months, we will
                    begin publishing measurable results and community impact
                    summaries as we expand our platforms and partnerships.
                  </p>
                  <p className="mt-3">
                    Every learner we reach, every partnership we form, and every
                    community we strengthen brings us closer to a future where
                    knowledge, confidence, and opportunity are accessible to
                    all.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    Be Part of Our Impact
                  </h2>
                  <p>
                    Change happens when people come together. We invite schools,
                    employers, funders, and local organisations to collaborate
                    with us in creating opportunities that transform lives and
                    strengthen communities.
                  </p>
                  <p className="mt-3">
                    To learn more about our community projects or explore
                    partnership opportunities, please contact
                    impact@accordiaharmony.org.
                  </p>
                  <p className="mt-3">
                    Together, we can help young people build a future defined by
                    independence, purpose, and possibility.
                  </p>
                </section>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
