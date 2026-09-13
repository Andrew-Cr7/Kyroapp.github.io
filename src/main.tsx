import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Netlify serves prerendered route files from /route/index.html, which can leave
// the browser on /route/. The SEO conversion enhancer intentionally keys off the
// canonical route without a trailing slash, so normalize the URL before React
// mounts. This keeps the prerendered SEO benefit while ensuring the product
// mockups, contextual signup blocks and refined SEO layout always activate.
if (window.location.pathname.length > 1 && window.location.pathname.endsWith("/")) {
  const canonicalPath = window.location.pathname.replace(/\/+$/, "");
  window.history.replaceState(
    window.history.state,
    "",
    `${canonicalPath}${window.location.search}${window.location.hash}`,
  );
}

// The build ships prerendered HTML for crawlers and fast first paint, but the
// SEO conversion experience adds its product demos and contextual signup blocks
// after the route mounts. Start the interactive app from a clean root so those
// client-side enhancements render exactly as designed instead of being lost to
// hydration reconciliation.
rootElement.replaceChildren();

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
