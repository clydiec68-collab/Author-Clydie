import Link from "next/link";
import BookCover from "../components/BookCover";
import BuyButtons from "../components/BuyButtons";
import Newsletter from "../components/Newsletter";
import StatusStamp from "../components/StatusStamp";
import { series, seriesBooks, featured } from "../data/books";

export default function Home() {
  const flagshipSeries = series.find((s) => s.slug === featured.seriesSlug);
  const flagshipBooks = seriesBooks[featured.seriesSlug];
  const book1 = flagshipBooks.find((b) => b.num === featured.bookNum);

  return (
    <>
      {/* ---- Hero: the book is the thesis ---- */}
      <section className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-6 items-center pt-14 md:pt-20 pb-14">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-5">
            The Hollow Library · Book one of seven
          </p>
          <h1 className="font-display text-[34px] md:text-[46px] font-normal leading-[1.16] text-paper mb-6 uppercase">
            The library remembers{" "}
            <span className="text-brass">everyone.</span>
          </h1>
          <p className="text-[16px] text-paper-dim leading-relaxed max-w-[440px] mb-8">
            Maren Cole arrives at Ashford Academy and finds a library that holds
            more than books — it holds the memory of every person who has ever
            walked its halls. And it has been waiting for someone like her.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <BuyButtons book={book1} />
            <Link
              href="/books"
              className="text-sm text-paper-dim no-underline hover:text-brass transition-colors"
            >
              Browse the catalogue →
            </Link>
          </div>
          <div className="mt-6">
            <StatusStamp status={book1.status} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="p-10 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(194,155,74,0.14), transparent 70%)",
            }}
          >
            <BookCover image={book1.image} title={book1.title} size="lg" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim mt-2">
            CC–001 · YA supernatural mystery
          </p>
        </div>
      </section>

      {/* ---- Inside book one ---- */}
      <section className="border-t border-line py-12 grid md:grid-cols-[1.2fr_0.8fr] gap-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-4">
            Inside book one
          </p>
          <h2 className="font-display text-[26px] font-medium text-paper mb-4 leading-snug">
            A boarding school where the building itself is alive and listening
          </h2>
          <div className="text-[15px] text-paper-dim leading-[1.8] space-y-4 max-w-[540px]">
            <p>
              Ashford Academy keeps its secrets the way all old schools do — in
              records, in portraits, in rooms nobody opens. But Ashford keeps
              them somewhere else too: in the library, which does not merely
              store what happened here. It remembers it.
            </p>
            <p>
              Maren Cole is the first student in a generation the library has
              chosen to notice. What it shows her will unravel what she thought
              she knew about the school, the students who came before her, and
              why she was really invited.
            </p>
          </div>
        </div>

        <div className="relative border border-line rounded-md bg-panel p-6 pb-9 self-start">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim mb-4">
            Series record · CC–001—007
          </p>
          <ul className="space-y-3 text-[14px] text-paper-dim">
            <li className="flex justify-between gap-4 border-b border-line/60 pb-2.5">
              <span>Books planned</span>
              <span className="text-paper font-medium">Seven</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-line/60 pb-2.5">
              <span>Narrators</span>
              <span className="text-paper font-medium">Seven — one per book</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-line/60 pb-2.5">
              <span>Setting</span>
              <span className="text-paper font-medium">{flagshipSeries.setting}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Genre</span>
              <span className="text-paper font-medium">{flagshipSeries.genre}</span>
            </li>
          </ul>
          <span className="card-hole" aria-hidden="true" />
        </div>
      </section>

      {/* ---- The series, honestly ---- */}
      <section className="border-t border-line py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-3">
              The series, honestly
            </p>
            <h2 className="font-display text-[26px] font-medium text-paper leading-snug">
              Book one launches first. Six more are in final edits.
            </h2>
          </div>
          <Link
            href={`/series/${flagshipSeries.slug}`}
            className="text-sm text-paper-dim no-underline hover:text-brass transition-colors whitespace-nowrap"
          >
            Full reading order →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {flagshipBooks.map((b) => (
            <div key={b.num} className="flex flex-col items-center text-center gap-2">
              <BookCover coverNum={b.cover} image={b.image} title={b.title.split(" ").slice(0, 3).join("\n")} size="sm" />
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-paper-dim">
                Book {b.num}
              </p>
              <StatusStamp status={b.status} className="!text-[8px] !px-1.5" />
            </div>
          ))}
        </div>
      </section>

      {/* ---- Beyond the flagship ---- */}
      <section className="border-t border-line py-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-3">
          Also in the catalogue
        </p>
        <p className="text-[15px] text-paper-dim leading-relaxed max-w-[540px] mb-7">
          Thirty manuscripts across six series and five standalones — thrillers,
          sci-fi, philosophy, South African historical fiction. Each one is
          catalogued with its honest status, from final edits to first draft.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {series.filter((s) => s.slug !== featured.seriesSlug).slice(0, 3).map((s) => (
            <Link
              key={s.slug}
              href={`/series/${s.slug}`}
              className="p-5 border border-line rounded-md no-underline lift hover:border-brass/50 bg-panel block"
            >
              <p className="font-display text-[16px] font-medium text-paper mb-1">{s.shortTitle}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                {s.bookCount} {s.bookCount === 1 ? "book" : "books"} · {s.genre}
              </p>
            </Link>
          ))}
        </div>
        <Link href="/books" className="inline-block mt-5 text-sm text-brass no-underline hover:text-brass-bright transition-colors">
          Open the full catalogue →
        </Link>
      </section>

      {/* ---- Author strip ---- */}
      <section className="border-t border-line py-12">
        <blockquote className="font-display italic text-[19px] md:text-[22px] text-paper leading-relaxed max-w-[640px]">
          &ldquo;He does not sit still between books. His garden is a living canvas
          of bonsai — each tree a years-long conversation between patience and
          intention.&rdquo;
        </blockquote>
        <Link href="/about" className="inline-block mt-4 text-sm text-paper-dim no-underline hover:text-brass transition-colors">
          About Clydie Cronjé →
        </Link>
      </section>

      <Newsletter />
    </>
  );
}
