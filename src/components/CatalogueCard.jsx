import BookCover from "./BookCover";
import BuyButtons from "./BuyButtons";
import StatusStamp from "./StatusStamp";

/**
 * CatalogueCard — a library catalogue card for one book.
 * Typewritten metadata, the manuscript's honest status stamped
 * in the corner, and a rod-hole at the foot of the card.
 */
export default function CatalogueCard({ book, refCode, showCover = true }) {
  return (
    <div className="relative border border-line rounded-md bg-panel p-5 pb-8 lift hover:border-brass/50 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim">
          {refCode}
          {book.narrator ? <><br />{book.narrator}</> : null}
        </p>
        <StatusStamp status={book.status} />
      </div>

      {(showCover || book.image) && (
        <BookCover
          coverNum={book.cover}
          image={book.image}
          title={book.coverText || book.title.split(" ").slice(0, 4).join("\n")}
          size="row"
          className="mb-3"
        />
      )}

      <h3 className="font-display text-[17px] font-medium text-paper leading-snug mb-1.5">
        {book.title}
      </h3>
      {book.subtitle && (
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim mb-1.5">{book.subtitle}</p>
      )}
      <p className="text-[13.5px] text-paper-dim leading-relaxed mb-3 flex-1">{book.desc}</p>

      <div className="mt-auto">
        <BuyButtons book={book} size="sm" fallback={book.status === "launching" || book.status === "available"} />
      </div>

      <span className="card-hole" aria-hidden="true" />
    </div>
  );
}
