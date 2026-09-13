import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const routes = [
  "/",
  "/london-gym-day-passes",
  "/gym-day-passes-uk",
  "/how-to-find-a-gym-while-travelling",
  "/can-tourists-use-gyms-in-london",
  "/fitness-while-travelling-guide",
  "/gym-access-for-digital-nomads",
  "/business-travel-gym-access",
  "/visitor-gym-access",
  "/airport-layover-gym-access",
  "/can-you-use-a-gym-without-a-membership",
  "/gym-day-passes-explained",
  "/how-to-find-gyms-with-day-passes",
  "/flexible-gym-passes-for-travellers",
  "/finding-a-gym-in-a-new-city",
  "/short-term-gym-membership-alternatives",
  "/tourist-gym-pass",
  "/how-to-stay-fit-while-travelling",
  "/for-gyms",
  "/privacy-policy",
];

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const serverEntry = path.join(rootDir, "dist-ssr", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

const START = "<!-- KYRO_PRERENDER_HEAD_START -->";
const END = "<!-- KYRO_PRERENDER_HEAD_END -->";

const serverModule = await import(pathToFileURL(serverEntry).href);
const { render } = serverModule;
const template = await fs.readFile(templatePath, "utf8");

if (!template.includes(START) || !template.includes(END)) {
  throw new Error("Prerender head markers are missing from dist/index.html");
}

const replaceHead = (html, head) => {
  const startIndex = html.indexOf(START);
  const endIndex = html.indexOf(END);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error("Could not locate prerender head markers");
  }

  const before = html.slice(0, startIndex + START.length);
  const after = html.slice(endIndex);
  return `${before}\n${head}\n${after}`;
};

for (const route of routes) {
  const { html: appHtml, head } = render(route);
  let page = replaceHead(template, head);

  page = page.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  if (route === "/") {
    await fs.writeFile(templatePath, page, "utf8");
    continue;
  }

  const outputDir = path.join(distDir, route.replace(/^\/+/, ""));
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), page, "utf8");
}

console.log(`Prerendered ${routes.length} Kyro routes.`);
