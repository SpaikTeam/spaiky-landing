"use client";

import { useState } from "react";

type EmailSignupProps = {
  size?: "large" | "small";
  className?: string;
};

export default function EmailSignup({
  size = "large",
  className = "",
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isLarge = size === "large";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your API / mailing list provider
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`flex items-center gap-2 rounded-xl border border-green/30 bg-green/10 px-5 py-3 text-green-light ${isLarge ? "text-base" : "text-sm"} ${className}`}>
        <span>🎉</span>
        <span className="font-semibold">You&apos;re on the list! We&apos;ll be in touch soon.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-md flex-col gap-2.5 sm:flex-row ${className}`}
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
        className={`shrink-0 rounded-xl bg-purple font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(124,58,237,0.4)] active:scale-[0.98] ${isLarge ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm"}`}
      >
        Join the Waitlist
      </button>
    </form>
  );
}
