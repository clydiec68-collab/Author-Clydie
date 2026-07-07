import { config } from "../data/books";

const socialLabels = {
  goodreads: "Goodreads",
  instagram: "Instagram",
  facebook: "Facebook",
  tiktok: "TikTok",
};

export default function Footer() {
  const socials = Object.entries(config.social).filter(([, url]) => url);

  return (
    <footer className="border-t border-line mt-16">
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim">
            © 2026 Clydie Cronjé
          </p>
          <p className="font-body italic text-[13px] text-paper-dim/70 mt-1">
            Ashford Academy is fictional. The library, however, remembers.
          </p>
        </div>
        {socials.length > 0 && (
          <div className="flex gap-6">
            {socials.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim no-underline hover:text-brass transition-colors"
              >
                {socialLabels[key]}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
