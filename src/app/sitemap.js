import { series, config } from "../data/books";

export default function sitemap() {
  const base = config.siteUrl;
  const routes = ["", "/books", "/about", "/contact"].map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly",
  }));
  const seriesRoutes = series.map((s) => ({
    url: `${base}/series/${s.slug}`,
    changeFrequency: "monthly",
  }));
  return [...routes, ...seriesRoutes];
}
