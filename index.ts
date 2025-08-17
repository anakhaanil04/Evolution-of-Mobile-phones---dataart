import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";
import { initModal } from "./modal.js";
import { initThemeToggle } from "./theme.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const events = await fetchEvents();
    renderTimeline(events);
    initModal();
    initThemeToggle();
  } catch (error) {
    console.error(error);
  }
});
