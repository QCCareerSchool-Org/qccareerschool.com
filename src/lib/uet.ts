declare global {
  interface Window {
    uetq?: unknown[];
  }
}

// log the page view with a specific URL
export const uetPageview = (url: string): void => {
  window.uetq = window.uetq ?? [];
  window.uetq.push('event', 'page_view', { page_path: url }); // eslint-disable-line camelcase
};
