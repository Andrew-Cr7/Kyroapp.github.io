import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const launchCopyFiles = [
  "LondonGymDayPasses.tsx",
  "SeoContentPages.tsx",
  "SeoBatchPages.tsx",
  "SeoEvergreenPages.tsx",
  "SeoNextPages.tsx",
];

const launchCopyReplacements: Array<[RegExp, string]> = [
  [/Launching in London first/g, "London gym access guide"],
  [/preparing to launch in London first/gi, "preparing for a multi-country launch"],
  [/preparing to open in London first/gi, "preparing for a multi-country launch"],
  [/preparing flexible gym access from London first/gi, "preparing flexible gym access across multiple launch markets"],
  [/with London as the first launch market/gi, "with multiple launch markets planned"],
  [/London is Kyro(?:'s|’s) first launch market/gi, "Kyro is planning a multi-country launch"],
  [/London is the first launch market, not the whole vision/gi, "Kyro is launching across multiple markets from the start"],
  [/London is the first launch market/gi, "Kyro is planning a multi-country launch"],
  [/launching in London first/gi, "launching across multiple countries"],
  [/from London first/gi, "across multiple launch markets"],
  [/starting with London/gi, "across multiple launch markets"],
  [/London is the first market/gi, "Kyro is launching across multiple markets"],
  [/Join the London waitlist/gi, "Join the Kyro waitlist"],
  [/London waitlist/gi, "Kyro waitlist"],
  [/when London launches/gi, "when Kyro launches"],
];

const launchCopyPlugin = (): Plugin => ({
  name: "kyro-launch-copy-normalizer",
  enforce: "pre",
  transform(code, id) {
    if (!launchCopyFiles.some((file) => id.endsWith(file))) return null;

    let next = code;
    for (const [pattern, replacement] of launchCopyReplacements) {
      next = next.replace(pattern, replacement);
    }

    if (next === code) return null;
    return { code: next, map: null };
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    launchCopyPlugin(),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
