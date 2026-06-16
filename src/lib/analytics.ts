declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams: Record<string, unknown> = {},
) => {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...eventParams,
  });

  window.clarity?.("event", eventName);
};
