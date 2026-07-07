import { notFound } from "next/navigation";
import Link from "next/link";
import BookCover from "../../../components/BookCover";
import BuyButtons from "../../../components/BuyButtons";
import Newsletter from "../../../components/Newsletter";
import StatusStamp from "../../../components/StatusStamp";
import { series, seriesBooks, STATUS } from "../../../data/books";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = series.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.shortTitle, description: s.description };
}

function statusSummary(books) {
  const counts = {};
  for (const b of books) counts[b.status] = (counts[b.status] || 0) + 1;
  return Object.entries(counts)
    .map(([k, n]) => `${n} ${STATUS[k].label.toLowerCase()}`)
    .join(" · ");
}

export default async function SeriesPage({ params }) {
  const { slug } = await params;
  const s = series.find((x) => x.slug === slug);
  if (!s) notFound();

  const books = seriesBooks[slug] || [];
  const otherSeries = series.filter((o) => o.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="pt-14 md:pt-20 pb-10 border-b border-line flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
        <div className="hidden sm:flex gap-1.5 shrink-0">
          {books.slice(0, 7).map((book) => (
            book.image ? (
              <div
                key={book.num}
                className="w-10 h-[150px] rounded-[3px] border border-line/40 overflow-hidden"
                style={{
                  backgroundImage: `url(${book.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                title={book.title}
              />
            ) : (
              <div
                key={book.num}
                className={`cover-${book.cover} w-10 h-[150px] rounded-[3px] flex items-center justify-center border border-line/40`}
                style={{ writingMode: "vertical-rl" }}
              >
                <span
                  className="font-mono text-[9px] tracking-[0.14em] text-brass-bright/80"
                  style={{ transform: "rotate(180deg)" }}
                >
                  BOOK {book.num}
                </span>
              </div>
            )
          ))}
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-3">
            {s.bookCount}-book series · {statusSummary(books)}
          </p>
          <h1 className="font-display text-[36px] md:text-[44px] font-medium text-paper leading-tight mb-3">
            {s.shortTitle}
          </h1>
          <p className="font-display italic text-[17px] text-brass-bright/90 mb-4">{s.tagline}</p>
          <p className="text-[15px] text-paper-dim leading-relaxed max-w-[500px] mb-5">
            {s.description}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim">
            {s.genre} · {s.setting} · {s.note}
          </p>
        </div>
      </div>

      {/* Reading order */}
      <section className="py-10">
        <h2 className="font-display text-[24px] font-medium text-paper mb-6">
          Reading order
        </h2>
        <div className="space-y-4">
          {books.map((book) => (
            <div
              key={book.num}
              className="relative flex flex-col sm:flex-row gap-5 sm:gap-7 p-5 sm:p-6 pb-9 border border-line rounded-md bg-panel lift hover:border-brass/50 items-start"
            >
              <span className="font-display text-[30px] font-medium text-brass/70 w-9 shrink-0 text-center pt-1">
                {book.num}
              </span>
              <BookCover
                coverNum={book.cover}
                image={book.image}
                title={book.title.split(" ").slice(0, 4).join("\n")}
                size="row"
                className="shrink-0"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-display text-[19px] font-medium text-paper">
                    {book.title}
                  </h3>
                  <StatusStamp status={book.status} />
                </div>
                {book.narrator && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim mb-2">
                    Narrator · {book.narrator}
                  </p>
                )}
                <p className="text-sm text-paper-dim leading-relaxed mb-3">{book.desc}</p>
                <BuyButtons
                  book={book}
                  size="sm"
                  fallback={book.status === "launching" || book.status === "available"}
                />
              </div>
              <span className="card-hole" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      {/* Also by */}
      <section className="py-10 border-t border-line">
        <h2 className="font-display text-[24px] font-medium text-paper mb-5">
          Also in the catalogue
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {otherSeries.map((o) => (
            <Link
              key={o.slug}
              href={`/series/${o.slug}`}
              className="p-5 border border-line rounded-md bg-panel no-underline lift hover:border-brass/50 block"
            >
              <p className="font-display text-[16px] font-medium text-paper mb-1">{o.shortTitle}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                {o.bookCount} {o.bookCount === 1 ? "book" : "books"} · {o.genre}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
