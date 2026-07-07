import { STATUS } from "../data/books";

const toneClass = {
  brass: "text-brass",
  stamp: "text-stamp",
  dim: "text-paper-dim",
};

export default function StatusStamp({ status, className = "" }) {
  const s = STATUS[status];
  if (!s) return null;
  return (
    <span className={`stamp ${toneClass[s.tone]} ${className}`} aria-label={`Status: ${s.label}`}>
      {s.label}
    </span>
  );
}
