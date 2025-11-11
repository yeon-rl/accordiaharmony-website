"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  product?: string;
};

export default function RegisterDialog({ open, onClose, product }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const firstInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      // focus the first input when opened
      setTimeout(() => firstInput.current?.focus(), 0);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // simple validation
    if (!fullName.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert("Please provide a valid full name and email.");
      return;
    }

    setSubmitting(true);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
      if (!endpoint) {
        // fallback to console but inform developer
        console.warn(
          "FORMSPREE endpoint not set. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to your Formspree endpoint."
        );
        console.log("Register submit", { fullName, email, product });
        setSuccess(true);
        setTimeout(() => {
          setSubmitting(false);
          setSuccess(false);
          setFullName("");
          setEmail("");
          onClose();
        }, 900);
        return;
      }

      const body = {
        name: fullName,
        email,
        _subject: `${product ?? "General"} interest`,
        _replyto: email,
      } as Record<string, string>;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Formspree error: ${res.status} ${text}`);
      }

      setSuccess(true);
      // close after a short delay to show success
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(false);
        setFullName("");
        setEmail("");
        onClose();
      }, 900);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
      setSubmitting(false);
    }
  };

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/60" onClick={() => onClose()} />

      <div className="relative z-10 w-[90%] max-w-lg rounded-lg bg-[#060610] p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Register your interest</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Enter your full name and email and we will be in touch.
        </p>

        <form onSubmit={submit} className="flex flex-col gap-3">
          <label className="flex flex-col text-sm">
            <span className="mb-1">Full name</span>
            <input
              ref={firstInput}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="rounded-md border px-3 py-2 text-sm border-slate-600 focus:outline-none"
              placeholder="Jane Doe"
              required
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="mb-1">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="rounded-md border px-3 py-2 text-sm border-slate-600 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </label>

          <div className="flex items-center justify-between mt-3 gap-5">
            <button
              type="button"
              onClick={() => onClose()}
              className="px-4 py-2 rounded-md border bg-transparent text-sm w-full"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 rounded-md bg-[#4285F4] text-white text-sm w-full"
            >
              {submitting ? "Submitting..." : success ? "Done" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
