import Image from "next/image";

/**
 * BookCover — renders real cover artwork when `image` is set
 * (e.g. "/covers/hl1.jpg"), otherwise a storm-blue placeholder
 * binding with the title in gilt lettering.
 */
const sizeClasses = {
  sm: "w-14 text-[7px] rounded-[4px]",
  md: "w-full text-[13px] rounded-[6px]",
  lg: "w-[300px] text-[18px] rounded-[6px]",
  row: "w-[104px] text-[9px] rounded-[4px]",
};
const sizeWidths = { sm: 112, md: 480, lg: 640, row: 240 };

export default function BookCover({ coverNum = 1, image, title, alt, size = "md", className = "" }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt || `${title} — book cover`}
        width={sizeWidths[size]}
        height={Math.round(sizeWidths[size] * 1.64)}
        className={`cover-photo ${sizeClasses[size].split(" ")[0]} h-auto ${className}`}
      />
    );
  }
  return (
    <div
      className={`cover cover-${coverNum} aspect-[3/5] flex items-center justify-center p-4 ${sizeClasses[size]} ${className}`}
    >
      <span
        className="font-display font-medium text-center leading-snug text-brass-bright uppercase tracking-wider"
        style={{ whiteSpace: "pre-line" }}
      >
        {title}
      </span>
    </div>
  );
}
