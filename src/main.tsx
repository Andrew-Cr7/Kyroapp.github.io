import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

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
