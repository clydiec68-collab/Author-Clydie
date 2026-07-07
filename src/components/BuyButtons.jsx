import Link from "next/link";

/**
 * BuyButtons — paperback via IngramSpark distribution.
 *
 * Each book has `retailers: [{ name, url }]` in src/data/books.js.
 * As listings go live after publication, add them, e.g.:
 *   retailers: [
 *     { name: "Amazon", url: "https://amazon.com/dp/..." },
 *     { name: "Takealot", url: "https://takealot.com/..." },
 *     { name: "Exclusive Books", url: "https://exclusivebooks.co.za/..." },
 *   ]
 * ...and flip the book's status to "available".
 *
 * Until then, "launching" books show the free-chapter fallback so
 * the call to action is never a dead end.
 */
export default function BuyButtons({ book, size = "md", fallback = true }) {
  const retailers = book.retailers?.filter((r) => r.url) || [];

  const btn =
    size === "sm"
      ? "text-[11px] px-4 py-1.5 rounded-full font-mono uppercase tracking-wider no-underline transition-colors inline-block"
      : "text-[12px] px-6 py-2.5 rounded-full font-mono uppercase tracking-wider no-underline transition-colors inline-block";

  if (retailers.length === 0) {
    if (!fallback) return null;
    return (
      <Link
        href="/#newsletter"
        className={`${btn} bg-brass text-ink hover:bg-brass-bright font-medium`}
      >
        Read chapter one free
      </Link>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim mb-2">
        Paperback available from
      </p>
      <div className="flex flex-wrap gap-2.5 mb-2">
        {retailers.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} border border-brass text-brass hover:bg-brass hover:text-ink`}
          >
            {r.name}
          </a>
        ))}
      </div>
      <p className="text-[13px] italic text-paper-dim">
        Or ask your local bookshop — they can order it{book.isbn ? ` (ISBN ${book.isbn})` : ""}.
      </p>
    </div>
  );
}
