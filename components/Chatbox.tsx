"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Chatbox component
  - Click the floating button to open a chat panel
  - Panel includes: message list, input, preanswered quick options
  - All logic is inside this component. This is a local, rule-based "AI".
  - To connect a real AI (ChatGPT), replace the `generateBotReply` implementation
    with an API call and handle streaming/latency appropriately.
*/

type Message = {
  id: string;
  from: "user" | "bot";
  text: string;
  links?: Array<{ label: string; href: string }>;
};

const PRE_ANSWERED = [
  { id: "opt-1", label: "What services do you offer?" },
  { id: "opt-2", label: "How can I partner with Accordia?" },
  { id: "opt-3", label: "Are you hiring?" },
  { id: "opt-4", label: "Privacy & data" },
];

const Chatbox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const initialMessages: Message[] = [
    {
      id: "m-1",
      from: "bot",
      text: "Hi — I'm Accordia Assistant. Ask me about our services, partnerships, careers, or privacy.",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(() => initialMessages);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  function closeChat() {
    setOpen(false);
    // reset messages to initial state
    setMessages(initialMessages);
  }

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    // autoscroll to bottom when messages update
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  function addMessage(from: Message["from"], text: string) {
    setMessages((m) => [
      ...m,
      { id: `${Date.now()}-${Math.random()}`, from, text },
    ]);
  }

  // A small rule-based bot. Replace with a real API call if desired.
  async function generateBotReply(
    userText: string
  ): Promise<{ text: string; links?: Array<{ label: string; href: string }> }> {
    const t = userText.toLowerCase();
    // quick heuristics
    if (t.includes("service")) {
      return {
        text: "We offer therapy, community programmes, and wellbeing partnerships tailored to local organisations.",
        links: [{ label: "View Services", href: "/services" }],
      };
    }
    if (t.includes("partner") || t.includes("partnership")) {
      return {
        text: "To partner with us, please reach out to our partnerships team.",
        links: [{ label: "Partnership Page", href: "/partnership" }],
      };
    }
    if (t.includes("hire") || t.includes("career") || t.includes("job")) {
      return {
        text: "We post vacancies on the Careers page. If you'd like to join the team, check there and reach out with your CV.",
        links: [{ label: "View Careers", href: "/careers" }],
      };
    }
    if (t.includes("privacy") || t.includes("data")) {
      return {
        text: "We take privacy seriously. Here's our Privacy Policy for full details on how we handle data.",
        links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
      };
    }
    if (t.includes("contact") || t.includes("reach")) {
      return {
        text: "You can contact us through our Contact page. We'd love to hear from you!",
        links: [{ label: "Contact Us", href: "/contact" }],
      };
    }
    // fallback: canned helpful answers
    const canned = [
      {
        text: "Could you say a bit more? I can help with services, partnerships, careers, or privacy. Visit our main pages for more info.",
        links: [
          { label: "Services", href: "/services" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        text: "If you need immediate human help, please reach out to us.",
        links: [{ label: "Contact Support", href: "/contact" }],
      },
      {
        text: "You can explore our website pages for detailed info — what would you like to know specifically?",
        links: [
          { label: "Services", href: "/services" },
          { label: "About Us", href: "/about" },
          { label: "Partnerships", href: "/partnership" },
        ],
      },
    ];
    return canned[Math.floor(Math.random() * canned.length)];
  }

  async function handleSend(text?: string) {
    const trimmed = (text ?? input).trim();
    if (!trimmed) return;
    // add user msg
    addMessage("user", trimmed);
    setInput("");

    // show bot "typing" indicator
    addMessage("bot", "...thinking...");

    // compute reply
    const reply = await generateBotReply(trimmed);

    // replace the last bot typing message with actual reply
    setMessages((msgs) => {
      const newMsgs = [...msgs];
      // find last bot typing placeholder
      const idx = newMsgs.map((m) => m.text).lastIndexOf("...thinking...");
      if (idx >= 0) {
        newMsgs[idx] = {
          ...newMsgs[idx],
          text: reply.text,
          links: reply.links,
        };
      } else {
        newMsgs.push({
          id: `${Date.now()}-r`,
          from: "bot",
          text: reply.text,
          links: reply.links,
        });
      }
      return newMsgs;
    });
  }

  function handleOptionClick(optionLabel: string) {
    handleSend(optionLabel);
  }

  return (
    <div>
      {/* Floating button */}
      <button
        ref={buttonRef}
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => {
          if (open) closeChat();
          else setOpen(true);
        }}
        className="fixed z-50 bottom-24 right-5 cursor-pointer md:bottom-32 md:right-8 w-14 h-14 rounded-full shadow-lg bg-[#BA9A32] flex items-center justify-center text-white"
      >
        {!open ? (
          // simple chat icon (kept small and accessible)
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Chat panel (animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-50 bottom-36 right-5 md:bottom-44 md:right-8 w-80 max-h-[70vh] border border-slate-500 bg-[#060610] shadow-2xl rounded-lg flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#FBBF24]"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm font-semibold">
                  Accordia Assistant
                </span>
              </div>
              <button
                onClick={() => closeChat()}
                aria-label="Close chat panel"
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div
              ref={containerRef}
              className="px-3 py-2 overflow-auto flex-1 space-y-3"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[78%] px-3 py-2 rounded-lg text-sm ${
                      m.from === "user"
                        ? "bg-[#FBBF24] text-black"
                        : "bg-slate-700 text-white"
                    }`}
                  >
                    {m.text}
                    {m.links && m.links.length > 0 && (
                      <div className="mt-2 flex flex-col gap-1">
                        {m.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="block px-2 py-1 bg-[#FBBF24] text-black rounded text-xs font-semibold hover:bg-yellow-300 transition"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-3 pb-3 pt-1 border-t border-slate-600">
              <div className="flex gap-2 mb-2 flex-wrap">
                {PRE_ANSWERED.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionClick(opt.label)}
                    className="text-xs px-2 py-1 rounded-full bg-slate-700 text-white hover:bg-slate-500"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-600 text-sm focus:outline-none"
                  aria-label="Message input"
                />
                <button
                  onClick={() => handleSend()}
                  className="px-3 py-2 bg-[#FBBF24] text-black rounded-lg text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* outside click: close and clear chat */}
      {open && (
        <OutsideClickHandler
          panelRef={panelRef}
          buttonRef={buttonRef}
          onClose={closeChat}
        />
      )}
    </div>
  );
};

export default Chatbox;

// small helper to detect clicks outside the chat panel and floating button
function OutsideClickHandler({
  panelRef,
  buttonRef,
  onClose,
}: {
  panelRef: React.RefObject<HTMLDivElement | null>;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const handler = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (panelRef.current && panelRef.current.contains(target)) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      onClose();
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [panelRef, buttonRef, onClose]);
  return null;
}
