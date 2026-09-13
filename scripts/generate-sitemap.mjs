import fs from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://kyroapp.co";
const lastmod = new Date().toISOString().slice(0, 10);

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/london-gym-day-passes", priority: "0.9", changefreq: "weekly" },
  { path: "/gym-day-passes-uk", priority: "0.9", changefreq: "weekly" },
  { path: "/how-to-find-a-gym-while-travelling", priority: "0.9", changefreq: "weekly" },
  { path: "/can-tourists-use-gyms-in-london", priority: "0.9", changefreq: "weekly" },
  { path: "/fitness-while-travelling-guide", priority: "0.9", changefreq: "weekly" },
  { path: "/gym-access-for-digital-nomads", priority: "0.9", changefreq: "weekly" },
  { path: "/business-travel-gym-access", priority: "0.9", changefreq: "weekly" },
  { path: "/visitor-gym-access", priority: "0.9", changefreq: "weekly" },
  { path: "/airport-layover-gym-access", priority: "0.9", changefreq: "weekly" },
  { path: "/can-you-use-a-gym-without-a-membership", priority: "0.9", changefreq: "weekly" },
  { path: "/gym-day-passes-explained", priority: "0.9", changefreq: "weekly" },
  { path: "/how-to-find-gyms-with-day-passes", priority: "0.9", changefreq: "weekly" },
  { path: "/flexible-gym-passes-for-travellers", priority: "0.9", changefreq: "weekly" },
  { path: "/finding-a-gym-in-a-new-city", priority: "0.9", changefreq: "weekly" },
  { path: "/short-term-gym-membership-alternatives", priority: "0.9", changefreq: "weekly" },
  { path: "/tourist-gym-pass", priority: "0.9", changefreq: "weekly" },
  { path: "/how-to-stay-fit-while-travelling", priority: "0.9", changefreq: "weekly" },
  { path: "/for-gyms", priority: "0.9", changefreq: "weekly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
];

const urlEntries = routes
  .map(
    (route) => `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`,
  )
  .join("\n\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
await fs.writeFile(sitemapPath, xml, "utf8");
console.log(`Generated sitemap for ${routes.length} routes with lastmod ${lastmod}.`);
