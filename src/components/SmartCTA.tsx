"use client";

import { useState } from "react";

const GOOGLE_PLAY_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.414l2.473 1.432a1 1 0 0 1 0 1.55l-2.473 1.432L14.88 12l2.818-2.707zM5.864 2.658L16.8 9.29l-2.302 2.302-8.634-8.934z" />
  </svg>
);

type SmartCTAProps = {
  size?: "large" | "small";
  className?: string;
};

export default function SmartCTA({ size = "large", className = "" }: SmartCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isLarge = size === "large";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwfQOXs-uUCHTsOQvZNrpIphpr2qfuQ6yGhTHQyuPjueptPr7jcvUjpLPoXyIBo0OdYaQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Android: Google Play */}
      <div>
        <p className={`mb-2 font-semibold text-white ${isLarge ? "text-sm" : "text-xs"}`}>
          🤖 Android
        </p>
        <a
          href="#"
          className={`inline-flex items-center gap-3 rounded-xl bg-black border border-white/15 transition-all duration-200 hover:border-purple hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(124,58,237,0.3)] ${isLarge ? "px-6 py-3.5" : "px-4 py-2.5"}`}
          aria-label="Get it on Google Play"
        >
          {GOOGLE_PLAY_ICON}
          <span className="flex flex-col leading-tight">
            <span className={`text-text-muted ${isLarge ? "text-[11px]" : "text-[10px]"}`}>
              Get it on
            </span>
            <span className={`font-semibold text-white ${isLarge ? "text-base" : "text-sm"}`}>
              Google Play
            </span>
          </span>
        </a>
      </div>

      {/* iPhone: email waitlist */}
      <div>
        <p className={`mb-2 font-semibold text-white ${isLarge ? "text-sm" : "text-xs"}`}>
          🍎 iPhone <span className="font-normal text-text-muted">coming soon</span>
        </p>
        {submitted ? (
          <div className={`flex items-center gap-2 rounded-xl border border-green/30 bg-green/10 px-5 py-3 text-green-light ${isLarge ? "text-base" : "text-sm"}`}>
            <span>🎉</span>
            <span className="font-semibold">You&apos;re on the list! We&apos;ll let you know.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`flex-1 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-text-muted outline-none transition-colors focus:border-purple ${isLarge ? "px-5 py-3.5 text-base" : "px-4 py-2.5 text-sm"}`}
            />
            <button
              type="submit"
              disabled={loading}
              className={`shrink-0 rounded-xl bg-purple font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(124,58,237,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${isLarge ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm"}`}
            >
              {loading ? "Sending..." : "Notify Me"}
            </button>
          </form>
        )}
        {error && (
          <p className="mt-2 text-sm text-pink">{error}</p>
        )}
      </div>
    </div>
  );
}
