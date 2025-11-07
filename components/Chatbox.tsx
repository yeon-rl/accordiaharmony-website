"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your chat submission logic here
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 pointer-events-none">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-600 hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110 pointer-events-auto"
          aria-label="Open chat"
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col pointer-events-auto">
          {/* Header */}
          <div className="p-4 bg-primary text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-75"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Add your chat messages here */}
            <p className="text-gray-500 text-center">
              How can we help you today?
            </p>
          </div>

          {/* Message Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
