import CatalogueCard from "../../components/CatalogueCard";
import Newsletter from "../../components/Newsletter";
import StatusStamp from "../../components/StatusStamp";
import Link from "next/link";
import { series, seriesBooks, standalones } from "../../data/books";

export const metadata = {
  title: "The Catalogue",
  description:
    "Every manuscript by Clydie Cronjé, catalogued with its honest status — from launching soon to first draft.",
};

const seriesCode = {
  "the-hollow-library": "CC",
  "the-overlap-saga": "OV",
  "midnight-society": "MS",
  "the-attuned": "AT",
  "the-sterling-ledger": "SL",
  "the-love-trilogy": "LV",
};

export default function BooksPage() {
  return (
    <>
      {/* Header + legend */}
      <div className="pt-14 md:pt-20 pb-10 border-b border-line">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-4">
          Thirty manuscripts, catalogued
        </p>
        <h1 className="font-display text-[36px] md:text-[44px] font-medium text-paper leading-tight mb-4">
          The catalogue
        </h1>
        <p className="text-[15px] text-paper-dim leading-relaxed max-w-[560px] mb-7">
          One book is ready for your shelf. The rest are on their way — and this
          page is the honest state of each. Every card carries the manuscript&apos;s
          current stamp, updated as the work moves forward.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
          {["launching", "final", "revision", "drafting"].map((s) => (
            <StatusStamp key={s} status={s} />
          ))}
        </div>
      </div>

      {/* Series blocks */}
      {series.map((s) => {
        const books = seriesBooks[s.slug] || [];
        return (
          <section key={s.slug} className="py-10 border-b border-line">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6">
              <div>
                <h2 className="font-display text-[24px] font-medium text-paper mb-1">
                  {s.title}
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim">
                  {s.bookCount} {s.bookCount === 1 ? "book" : "books"} · {s.genre} · {s.note}
                </p>
              </div>
              <Link
                href={`/series/${s.slug}`}
                className="text-sm text-brass no-underline hover:text-brass-bright transition-colors whitespace-nowrap"
              >
                Series page →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {books.map((book) => (
                <CatalogueCard
                  key={book.num}
                  book={book}
                  refCode={`No. ${seriesCode[s.slug]}–${String(book.num).padStart(3, "0")}`}
                  showCover={false}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Standalones */}
      <section className="py-10">
        <h2 className="font-display text-[24px] font-medium text-paper mb-1">
          Standalone books
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim mb-6">
          Five titles · philosophy, sci-fi, neuroscience, historical fiction, professional
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {standalones.map((book, i) => (
            <CatalogueCard
              key={book.title}
              book={book}
              refCode={`No. ST–${String(i + 1).padStart(3, "0")}`}
              showCover={false}
            />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
