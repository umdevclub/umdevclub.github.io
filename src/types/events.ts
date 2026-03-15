export type Term = "Summer" | "Fall" | "Winter";

export interface EventData {
  id: string;
  title: string;
  term?: Term[];
  description: string;
  image: string;
  path?: string;
  recurring?: boolean;
  //use this for upcoming events in Events.ts, can be array or just string to setup multiple events of the same thing
  upcomingTitle?: string | string[];
  upcomingDescription?: string | string[];
  upcomingImage?: string | string[];
  date?: string | string[];
  location?: string | string[];
  rsvp?: string | string[];
}
export const TERMS_ORDER: Term[] = ["Summer", "Fall", "Winter"];
