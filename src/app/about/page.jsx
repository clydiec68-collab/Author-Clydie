import Newsletter from "../../components/Newsletter";
import { themes } from "../../data/books";

export const metadata = {
  title: "About",
  description:
    "Clydie Cronjé — South African author of thirty manuscripts, ex SAPS Police Officer, 35 year career in IT, weekend and holiday writer.",
};

const lifeNotes = [
  { label: "Grandfather, Father and Husband" ,text: "True family man loves his kids, wife and grandchildren very much." },
  { label: "IT career", text: "From programmer to IT Executive — all levels of technology across a decades-long career." },
  { label: "30 years of writing", text: "From MS Notebook to OneNote to Google Keep to Word — assembled into thirty complete manuscripts." },
  { label: "Daily meditation", text: "Christian foundation, spiritual practice — every morning begins with stillness alongside Debbie-Ann." },
  { label: "Painter & builder", text: "Painting, electronics, building and repairing — the workbench holds whatever he's taking apart this week." },
  { label: "Married since 1988", text: "Debbie-Ann — his Engeltjie — known since they were five years old. She appears in every dedication." },
];

export default function AboutPage() {
  return (
    <>
      {/* Split hero */}
      <div className="pt-14 md:pt-20 pb-10 border-b border-line grid md:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
        <div className="flex flex-col items-center">
          <div className="relative p-2 border border-brass/40 rounded-md">
            <div className="w-[200px] h-[250px] rounded-[4px] bg-panel-2 border border-line flex items-center justify-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim text-center leading-loose">
                Author photo<br />goes here
              </span>
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-dim mt-3">
            Clydie Cronjé · South Africa
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-4">
            About the author
          </p>
          <h1 className="font-display text-[36px] md:text-[44px] font-medium text-paper leading-tight mb-4">
            Clydie Cronjé
          </h1>
          <div className="text-[15px] text-paper-dim leading-[1.8] space-y-4 max-w-[500px]">
            <p>
              <span className="text-paper font-medium">South African author</span>{" "}
              whose writing moves between worlds — from fog-wrapped boarding
              schools and AI-rendered futures to ancient Taoism and the
              gold-dust history of the West Rand.
            </p>
            <p>
              He writes in the early hours, before the garden wakes, in a home
              where bonsai grow in every corner and the workbench holds whatever
              he is currently building, painting, or taking apart.
            </p>
          </div>
        </div>
      </div>

      {/* Long bio */}
      <section className="py-10 border-b border-line">
        <h2 className="font-display text-[24px] font-medium text-paper mb-5">The full story</h2>
        <div className="text-[15px] text-paper-dim leading-[1.85] max-w-[680px] space-y-4">
          <p>
            Clydie Cronjé has spent his late fifties doing something quietly
            remarkable: finalising thirty books written across most of his life, across genres that most authors
            would never dare share a shelf. He writes literary fiction rooted in
            the red dust and mine-whistle rhythms of South Africa&apos;s West Rand.
            He writes YA supernatural mysteries set in boarding schools where the
            buildings themselves are alive and listening. He writes about
            artificial intelligence and what it might mean to engineer love. He
            writes about the Tao Te Ching as if Lao Tzu were a management
            consultant with something urgent to say to 2026.
          </p>
          <p>
            He does not sit still between books. He is an IT Executive 
            that has been working in IT since the early 90's
            and is well versed in IT mamangement, Software Development 
            intention. He paints. He builds and repairs electronics with the same
            cand Project Management. He loves technology not as
            a tool but as a language, one he has been fluent in for decades and
            still finds surprising.
          </p>
          <p>
            Every morning, before the day begins its noise, he and Debbie-Ann
            meditate — a practice that has shaped not just how he lives but how
            he writes, with an unhurried stillness at the centre of even his
            most restless stories.
          </p>
          <p>
            He married Debbie-Ann in 1988. She is his Engeltjie — his little
            angel — and thirty-seven years later they are still, by his own
            account, very happy. She appears in the dedication of every book he
            has written.
          </p>
          <p>
            He lives in South Africa with Debbie-Ann, surrounded by grandchildren,
            painting, circuitry, and stories. She has always been the best reason
            to come home.
          </p>
        </div>
      </section>

      {/* Life notes */}
      <section className="py-10 border-b border-line">
        <h2 className="font-display text-[24px] font-medium text-paper mb-6">A life in the margins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[820px]">
          {lifeNotes.map((n) => (
            <div key={n.label} className="border-l border-brass/40 pl-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass mb-1.5">
                {n.label}
              </p>
              <p className="text-[14px] text-paper-dim leading-relaxed">{n.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Themes */}
      <section className="py-10 border-b border-line">
        <h2 className="font-display text-[24px] font-medium text-paper mb-6">
          Themes across the work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[820px]">
          {themes.map((t) => (
            <p key={t.name} className="text-sm leading-relaxed">
              <span className="text-paper font-medium">{t.name}</span>{" "}
              <span className="text-paper-dim">— {t.desc}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Gallery placeholders */}
      <section className="py-10">
        <h2 className="font-display text-[24px] font-medium text-paper mb-6">
          The world behind the words
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Bonsai garden", "Writing workspace", "The workbench"].map((label) => (
            <div
              key={label}
              className="aspect-[4/3] bg-panel border border-line rounded-md flex items-center justify-center"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim text-center leading-loose">
                Photo:<br />{label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
