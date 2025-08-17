import { EventItem } from "./interfaces.js";

export async function fetchEvents(): Promise<EventItem[]> {
  const response = await fetch("events.json");
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}
