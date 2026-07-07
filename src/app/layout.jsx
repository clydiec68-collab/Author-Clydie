import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://clydiecronje.com"),
  title: {
    default: "Clydie Cronjé — Author of The Hollow Library",
    template: "%s — Clydie Cronjé",
  },
  description:
    "The Hollow Library, book one of seven: a YA supernatural mystery set in a boarding school whose library remembers everyone. By South African author Clydie Cronjé.",
  openGraph: {
    title: "Clydie Cronjé — Author of The Hollow Library",
    description:
      "A boarding school library that holds more than books. Book one of seven, launching soon.",
    type: "website",
    images: ["/covers/hl1.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-[1060px] mx-auto px-4 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
