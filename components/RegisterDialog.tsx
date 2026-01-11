"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  product?: string;
};

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

// Skill options
const SKILLS = [
  "Barbering and grooming",
  "Fashion design and tailoring",
  "Professional cooking and catering",
  "Plumbing and basic maintenance",
  "Baking and food preparation",
  "Makeup artistry and beauty skills",
  "Hair styling and personal care",
  "Photography and creative skills",
  "Additional practical trades and craft",
];

export default function RegisterDialog({ open, onClose, product }: Props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+44",
    attendanceType: "In person",
    dateOfBirth: "",
    skillsToLearn: [] as string[],
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const firstInput = useRef<HTMLInputElement | null>(null);

  const selectedCountry = COUNTRIES.find((c) => c.dial === formData.countryCode);
  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.dial.includes(countrySearch) ||
      country.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
      }
    };
    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCountryDropdownOpen]);

  // No longer checking for registration cookie

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      setSuccess(false);
      setErrors({});
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstInput.current?.focus(), 100);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s()+-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }
    if (formData.skillsToLearn.length < 2) {
      newErrors.skillsToLearn = "Please select at least 2 skills";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xqagrvdq";
      
      const payload = {
        ...formData,
        phone: `${formData.countryCode} ${formData.phone}`,
        skillsToLearn: formData.skillsToLearn.join(", "),
        _subject: "Skill Forge Registration",
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setSuccess(true);

      // Keep success message visible for a bit longer
      setTimeout(() => {
        setSubmitting(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          countryCode: "+44",
          attendanceType: "In person",
          dateOfBirth: "",
          skillsToLearn: [],
        });
        // We don't automatically close so they can see the success message
      }, 500);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-[#E8EEF1] dark:bg-[#060610] p-8 shadow-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-6 py-8 text-foreground"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Awesome!</h3>
                    <p className="text-muted-foreground text-lg">
                      Your registration was successful.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full bg-[#4285F4] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98] mt-4"
                  >
                    Close
                  </button>
                </motion.div>
              ) : product === "Playtogether" ? (
                <motion.div 
                  key="coming-soon"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-6 py-8 text-foreground"
                >
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Coming Soon!</h3>
                    <p className="text-muted-foreground text-lg">
                      {product} is currently under development. Stay tuned for updates!
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full bg-[#4285F4] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98] mt-4"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit} 
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-muted-foreground ml-1">First name</label>
                      <input
                        ref={firstInput}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={`w-full rounded-xl bg-white/50 dark:bg-white/5 px-4 py-3 placeholder:text-muted-foreground/30 focus:ring-2 focus:ring-[#4285F4] transition-all outline-none border ${errors.firstName ? "border-red-500" : "border-transparent"}`}
                        placeholder="Ex. Jane"
                      />
                      {errors.firstName && <span className="text-[10px] text-red-500 ml-1">{errors.firstName}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-muted-foreground ml-1">Last name</label>
                      <input
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={`w-full rounded-xl bg-white/50 dark:bg-white/5 px-4 py-3 placeholder:text-muted-foreground/30 focus:ring-2 focus:ring-[#4285F4] transition-all outline-none border ${errors.lastName ? "border-red-500" : "border-transparent"}`}
                        placeholder="Ex. Alex"
                      />
                      {errors.lastName && <span className="text-[10px] text-red-500 ml-1">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Email address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full rounded-xl bg-white/50 dark:bg-white/5 px-4 py-3 placeholder:text-muted-foreground/30 focus:ring-2 focus:ring-[#4285F4] transition-all outline-none border ${errors.email ? "border-red-500" : "border-transparent"}`}
                      placeholder="Ex. jane@example.com"
                    />
                    {errors.email && <span className="text-[10px] text-red-500 ml-1">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Phone number</label>
                    <div className="flex gap-3">
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="h-[48px] w-24 flex items-center justify-center gap-2 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all outline-none"
                        >
                          <span className="text-lg">{selectedCountry?.flag || "🌍"}</span>
                          <span className="text-xs font-medium">{formData.countryCode}</span>
                        </button>

                        {isCountryDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-hidden bg-background border border-border rounded-xl shadow-xl z-50 flex flex-col">
                            <div className="p-2 border-b border-border bg-muted/50">
                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                placeholder="Search country..."
                                className="w-full px-3 py-1.5 text-xs bg-background rounded-lg border border-border focus:ring-1 focus:ring-primary outline-none"
                              />
                            </div>
                            <div className="overflow-y-auto">
                              {filteredCountries.map((c) => (
                                <button
                                  key={c.code}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, countryCode: c.dial });
                                    setIsCountryDropdownOpen(false);
                                    setCountrySearch("");
                                  }}
                                  className={`w-full px-4 py-2.5 text-left text-xs hover:bg-accent flex items-center gap-3 transition-colors ${formData.countryCode === c.dial ? "bg-accent" : ""}`}
                                >
                                  <span className="text-base">{c.flag}</span>
                                  <span className="flex-1 truncate">{c.name}</span>
                                  <span className="text-muted-foreground">{c.dial}</span>
                                </button>
                              ))}
                              {filteredCountries.length === 0 && (
                                <div className="px-4 py-4 text-center text-xs text-muted-foreground">No countries found</div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full rounded-xl bg-white/50 dark:bg-white/5 px-4 py-3 placeholder:text-muted-foreground/30 focus:ring-2 focus:ring-[#4285F4] transition-all outline-none border ${errors.phone ? "border-red-500" : "border-transparent"}`}
                          placeholder="Ex. 8023453721"
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 ml-1">{errors.phone}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      onClick={(e) => (e.target as any).showPicker?.()}
                      className={`w-full rounded-xl bg-white/50 dark:bg-white/5 px-4 py-3 focus:ring-2 focus:ring-[#4285F4] transition-all outline-none border ${errors.dateOfBirth ? "border-red-500" : "border-transparent"}`}
                    />
                    {errors.dateOfBirth && <span className="text-[10px] text-red-500 ml-1">{errors.dateOfBirth}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Attendance type</label>
                    <select 
                      value={formData.attendanceType}
                      onChange={(e) => setFormData({ ...formData, attendanceType: e.target.value })}
                      className="w-full h-[48px] rounded-xl bg-white/50 dark:bg-white/5 px-4 py-2 focus:ring-2 focus:ring-[#4285F4] transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="In person">In person</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Skills to learn (Select at least 2)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-2 rounded-xl bg-white/50 dark:bg-white/5 border border-transparent">
                      {SKILLS.map((skill) => (
                        <label key={skill} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={formData.skillsToLearn.includes(skill)}
                            onChange={(e) => {
                              const newSkills = e.target.checked
                                ? [...formData.skillsToLearn, skill]
                                : formData.skillsToLearn.filter((s) => s !== skill);
                              setFormData({ ...formData, skillsToLearn: newSkills });
                            }}
                            className="w-4 h-4 rounded border-gray-300 text-[#4285F4] focus:ring-[#4285F4]"
                          />
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                            {skill}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.skillsToLearn && <span className="text-[10px] text-red-500 ml-1">{errors.skillsToLearn}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#4285F4] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98] disabled:opacity-70 mt-2 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

