"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import jsPDF from "jspdf";
import Image from "next/image";
import Text from "@/components/Text";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

// Country data: name, dial code, flag emoji
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

interface FormInputs {
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: string;
  email: string;
  message: string;
}

export default function PartnershipsPage() {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormInputs>({ defaultValues: { countryCode: "+44" } });

  const countryCode = watch("countryCode");
  const selectedCountry = COUNTRIES.find((c) => c.dial === countryCode);

  // Filter countries based on search
  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.dial.includes(countrySearch) ||
      country.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Close dropdown and clear search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  const onSubmit = async (data: FormInputs) => {
    try {
      // Combine country code and phone: clean phone number
      const raw = (data.phone || "").replace(/\D/g, "");
      const withoutLeadingZeros = raw.replace(/^0+/, "");
      const fullPhone = `${data.countryCode}${withoutLeadingZeros}`;

      const response = await fetch("https://formspree.io/f/xqagrvdq", {
        method: "POST",
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: fullPhone,
          email: data.email,
          message: data.message,
          _subject: "New Partnership Request from Website",
          type: "Partnership Form",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Partnership request submitted successfully!");
        reset(); // Reset form after successful submission
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit request. Please try again.");
    }
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const content =
      document.querySelector(".partnerships-content")?.textContent || "";

    pdf.setFontSize(16);
    pdf.text("Partnerships & Collaborations", 20, 20);

    pdf.setFontSize(12);
    const textLines = pdf.splitTextToSize(content, 170);
    pdf.text(textLines, 20, 30);

    pdf.save("partnerships-and-collaborations.pdf");
  };
  return (
    <div className="text-white!">
      <div className="w-[90%] max-w-360 mx-auto pt-8 md:pt-10">
        <Navbar />
      </div>

      <div className="w-[90%] max-w-360 mx-auto ">
        <div className="min-h-screen w-full  text-white py-10 md:py-20 flex justify-center">
          <div className="w-full">
            <Card className="bg-[#FFFFFF0D] border-none shadow-xl rounded-2xl p-3 py-5 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start ">
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
                    Partnerships & Collaborations
                  </h1>
                  <p className="text-sm text-white/70">
                    Last Updated: November 2025
                  </p>
                </div>
                <Button
                  onClick={downloadPDF}
                  className="rounded-full mt-5 md:mt-0 bg-white text-black px-6 py-2 shadow-md cursor-pointer hover:bg-white"
                >
                  Download PDF
                </Button>
              </div>
              <hr className="w-full border-b border-b-slate-200/5 mb-5" />

              <CardContent className="space-y-10 partnerships-content px-4! md:px-6!">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Together, We Create Impact
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    At Accordia Harmony C.I.C., we believe that lasting change
                    happens through collaboration. Partnerships are at the heart
                    of everything we do because they allow us to reach more
                    young people, strengthen communities, and deliver meaningful
                    learning experiences that transform lives.
                  </p>
                  <p className="text-white/90 leading-relaxed mt-4">
                    We welcome partnerships with schools, youth organisations,
                    employers, charities, and investors who share our vision of
                    preparing young people aged 17 to 21 for confident and
                    independent living.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Why Partner with Us
                  </h2>
                  <h3 className="text-xl font-medium mt-6 text-white">
                    Shared Purpose
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Join a mission-driven organisation dedicated to equipping
                    young people with the skills, confidence, and mindset needed
                    to thrive in life and work.
                  </p>
                  <h3 className="text-xl font-medium mt-6 text-white">
                    Measurable Social Impact
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    As a registered Community Interest Company, we reinvest our
                    profits into youth development programmes. Every partnership
                    directly contributes to tangible outcomes that improve
                    lives.
                  </p>{" "}
                  <h3 className="text-xl font-medium mt-6 text-white">
                    Access to Innovation
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Collaborate with a creative team developing digital learning
                    platforms such as LifeSkills Connect, Skill Forge, and
                    Playground. Each platform combines education, technology,
                    and community engagement to create meaningful results.
                  </p>
                  <h3 className="text-xl font-medium mt-6 text-white">
                    Brand Alignment and Visibility
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Partnerships are recognised across our digital platforms,
                    communications, and events. Your organisation’s involvement
                    demonstrates a genuine commitment to youth empowerment and
                    social progress.
                  </p>
                  <h3 className="text-xl font-medium mt-6">
                    Flexible Collaboration Models
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We understand that every partner is unique. Whether you
                    represent a school, business, or charity, we create
                    collaboration frameworks that reflect your goals and
                    community values.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Partnership Opportunities
                  </h2>

                  <h3 className="text-xl font-medium mt-6 text-white">
                    Educational Institutions
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Partner with us to integrate our learning modules into
                    enrichment or transition programmes. We provide schools and
                    colleges with resources that complement classroom learning
                    and prepare students for life beyond school.
                  </p>

                  <h3 className="text-xl font-medium mt-6 text-white">
                    Employers and Industry Partners
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Work with us to bridge the skills gap by creating workshops,
                    mentorship opportunities, and career pathways that help
                    young people connect to real-world employment.
                  </p>

                  <h3 className="text-xl font-medium mt-6 text-white">
                    Community and Youth Organisations
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Collaborate with us on outreach initiatives, local projects,
                    and community events that promote wellbeing, digital
                    literacy, and independence.
                  </p>

                  <h3 className="text-xl font-medium mt-6 text-white">
                    Funders and Investors
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Support sustainable impact by funding modules, research, or
                    digital expansion. Your contribution helps us reach more
                    young people and deliver long-term community benefit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Our Partnership Approach
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Every collaboration begins with a shared vision and mutual
                    respect. We build partnerships on transparency, trust, and
                    measurable outcomes. From our first conversation to the
                    delivery of joint projects, we align our efforts with your
                    goals to ensure meaningful social impact.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Our Mission */}
        <div className="mb-18">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-[30%]">
              <Text type="subheading" className="text-[28px]! font-bold! mt-1">
                Get Involved
              </Text>
            </div>
            <div className="md:w-[70%]">
              <Text className="my-3 text-base! md:text-xl!">
                We are open to new collaborations that empower young people and
                strengthen communities. <br /> To discuss partnership
                opportunities, please contact our team: <br /> Email:{" "}
                <Link href="mailto:partnerships@accordiaharmony.org">
                  partnerships@accordiaharmony.org
                </Link>{" "}
                <br /> Office: London, United Kingdom <br />
                You can also complete our Collaboration Form below, and a member
                of our Partnerships Team will reach out within five working
                days.
              </Text>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-5 my-10 mb-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#FFFFFF0D] rounded-xl p-8 shadow-lg xl:col-span-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm mb-2">First name</label>
                <input
                  type="text"
                  placeholder="Ex. John"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                    errors.firstName ? "border-red-500 border" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm mb-2">Last name</label>
                <input
                  type="text"
                  placeholder="Ex. Alex"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                    errors.lastName ? "border-red-500 border" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm mb-2">Phone number</label>
              <div className="flex gap-2 items-start">
                {/* Country Dropdown */}
                <div className="relative min-w-fit" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() =>
                      setIsCountryDropdownOpen(!isCountryDropdownOpen)
                    }
                    className="bg-[#F4F4F41A] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/20 border border-transparent hover:border-white/10 transition flex items-center gap-2 min-w-[120px]"
                  >
                    <span className="text-lg">
                      {selectedCountry?.flag || "🌍"}
                    </span>
                    <span className="text-xs truncate">
                      {selectedCountry?.dial || "+44"}
                    </span>
                  </button>

                  {isCountryDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-lg z-50 max-h-64 overflow-hidden w-56 flex flex-col">
                      {/* Search Input */}
                      <div className="sticky top-0 p-2 bg-[#1a1a1a] border-b border-white/10">
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="w-full bg-[#F4F4F41A] rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/20 border border-transparent hover:border-white/10 transition"
                        />
                      </div>

                      {/* Country List */}
                      <div className="overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setValue("countryCode", country.dial);
                                setIsCountryDropdownOpen(false);
                                setCountrySearch("");
                              }}
                              className={`w-full px-3 py-2 text-left text-sm hover:bg-white/5 transition ${
                                countryCode === country.dial
                                  ? "bg-white/10 border-l-2 border-white"
                                  : ""
                              }`}
                            >
                              <span className="mr-2">{country.flag}</span>
                              <span className="inline-block w-1/3">
                                {country.name}
                              </span>
                              <span className="text-xs text-white/60">
                                {country.dial}
                              </span>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-4 text-sm text-white/50 text-center">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <input
                  type="tel"
                  placeholder="Ex. 7123 456789"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\d\s()+-]+$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  className={`flex-1 bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 border transition ${
                    errors.phone
                      ? "border-red-500"
                      : "border-transparent hover:border-white/10"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label className="block text-sm mb-2">Email address</label>
              <input
                type="email"
                placeholder="Ex. john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                  errors.email ? "border-red-500 border" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label className="block text-sm mb-2">Leave us a message</label>
              <textarea
                placeholder="Write Your Message here..."
                rows={4}
                {...register("message", { required: "Message is required" })}
                className={`w-full bg-[#F4F4F41A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 ${
                  errors.message ? "border-red-500 border" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-white text-black cursor-pointer font-medium py-3 rounded-lg transition hover:bg-gray-100"
            >
              Submit
            </button>
          </form>
          <div className="xl:col-span-3">
            <Image
              src="/images/contactImage.png"
              alt="Contact Illustration"
              width={1000}
              height={1000}
              className="w-full h-auto "
            />
          </div>
        </div>

        {/* <div className="flex items-center justify-center ">
          <div className="flex items-center space-x-3">
            <p className="text-sm mt-2">Partners</p>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/3.png"
                alt="Partners"
                width={1000}
                height={1000}
                className="w-[62px] h-auto"
              />
              <Image
                src="/images/1.png"
                alt="Partners"
                width={1000}
                height={1000}
                className="w-[188px] h-auto"
              />
              <Image
                src="/images/2.png"
                alt="Partners"
                width={1000}
                height={1000}
                className="w-[136px] h-auto"
              />
            </div>
          </div>
        </div> */}
        <div className="max-w-3xl mx-auto mb-20">
          <Text className="text-center">
            If your organisation would like to partner with us or be featured
            here, please get in touch with our team to explore opportunities for
            collaboration.
          </Text>
        </div>
      </div>

      <Footer />
    </div>
  );
}
