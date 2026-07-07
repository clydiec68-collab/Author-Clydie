"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // TODO: POST to /api/subscribe once a newsletter provider is connected.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="border border-brass/40 rounded-lg bg-panel p-7 md:p-10 my-14 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-[440px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-3">
            First chapter, free
          </p>
          <h2 className="font-display text-2xl md:text-[28px] font-medium text-paper mb-2 leading-snug">
            Step into the library early
          </h2>
          <p className="text-[15px] text-paper-dim leading-relaxed">
            Read chapter one of <em>The Hollow Library</em> before launch, and be first
            to hear when each book leaves the catalogue and reaches the shelf.
          </p>
        </div>

        {submitted ? (
          <p className="font-mono text-[13px] text-brass" role="status">
            Thank you — check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="px-5 py-3 rounded-full border border-line text-sm text-paper placeholder:text-paper-dim/60 flex-1 sm:w-64"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-brass text-ink text-sm font-medium hover:bg-brass-bright transition-colors cursor-pointer whitespace-nowrap"
            >
              Send me chapter one
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
