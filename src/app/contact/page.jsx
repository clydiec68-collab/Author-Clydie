"use client";
import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import { config } from "../../data/books";

const socialInfo = [
  { key: "goodreads", name: "Goodreads", desc: "Author profile — reviews & reading lists" },
  { key: "instagram", name: "Instagram", desc: "Bonsai, books & the writing life" },
  { key: "facebook", name: "Facebook", desc: "Author page — SA audience & community" },
  { key: "tiktok", name: "TikTok / BookTok", desc: "YA series content & behind the scenes" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const liveSocials = socialInfo.filter((s) => config.social[s.key]);

  // TODO: POST to /api/contact (or a Formspree endpoint) once connected.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const field =
    "w-full px-4 py-3 rounded-md border border-line text-sm text-paper placeholder:text-paper-dim/50";
  const label = "block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim mb-2";

  return (
    <>
      <div className="pt-14 md:pt-20 pb-10 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-4">
            Correspondence
          </p>
          <h1 className="font-display text-[36px] md:text-[44px] font-medium text-paper leading-tight mb-3">
            Get in touch
          </h1>
          <p className="text-[15px] text-paper-dim mb-8 leading-relaxed">
            Have a question about the books, interested in a collaboration, or
            just want to say hello? I&apos;d love to hear from you.
          </p>

          {submitted ? (
            <div className="p-5 border border-brass/40 bg-panel rounded-md" role="status">
              <p className="text-paper font-medium text-[15px] mb-1">Message sent</p>
              <p className="text-[13px] text-paper-dim">
                Thank you for reaching out. I&apos;ll get back to you as soon as I can.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className={label}>First name</label>
                  <input id="first-name" name="firstName" type="text" required placeholder="Your first name" className={field} />
                </div>
                <div>
                  <label htmlFor="last-name" className={label}>Last name</label>
                  <input id="last-name" name="lastName" type="text" placeholder="Your last name" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={label}>Email address</label>
                <input id="email" name="email" type="email" required placeholder="your@email.com" className={field} />
              </div>
              <div>
                <label htmlFor="subject" className={label}>Subject</label>
                <select id="subject" name="subject" className={`${field} cursor-pointer`}>
                  <option value="">Select a topic…</option>
                  <option>General enquiry</option>
                  <option>Question about the books</option>
                  <option>Rights &amp; media enquiry</option>
                  <option>Speaking / events</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className={label}>Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="What would you like to say?" className={`${field} resize-y`} />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-brass text-ink text-sm font-medium hover:bg-brass-bright transition-colors cursor-pointer"
              >
                Send message
              </button>
            </form>
          )}
        </div>

        {/* Connect */}
        <div className="md:pt-24">
          <div className="relative border border-line rounded-md bg-panel p-6 pb-9 mb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass mb-2">
              Rights &amp; media enquiries
            </p>
            <p className="text-[13px] text-paper-dim leading-relaxed">
              For translation rights, film/TV options, press features, or
              interview requests, use the form and select
              &ldquo;Rights &amp; media enquiry.&rdquo; I aim to respond within
              48 hours.
            </p>
            <span className="card-hole" aria-hidden="true" />
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim mb-4">
            Find me online
          </p>
          {liveSocials.length > 0 ? (
            <div className="space-y-2.5">
              {liveSocials.map((s) => (
                <a
                  key={s.key}
                  href={config.social[s.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-line rounded-md bg-panel no-underline lift hover:border-brass/50"
                >
                  <p className="font-medium text-sm text-paper mb-0.5">{s.name}</p>
                  <p className="text-xs text-paper-dim">{s.desc}</p>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-[13px] text-paper-dim leading-relaxed">
              Social profiles are being set up — for now, the form is the best
              way to reach me, and the newsletter below is the best way to
              follow the books.
            </p>
          )}
        </div>
      </div>

      <Newsletter />
    </>
  );
}
