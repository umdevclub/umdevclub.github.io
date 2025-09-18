export type HackathonTheme = {
  [key: string]: {
    title: string;
    description: string | string[];
    details?: {
      header: string;
      content: string[];
    }[];
  }[];
};

export type HackathonInfo = {
  [key: string]: {
    year: string;
    title: string;
    subtitle: string;
    location: string;
    date: string;
    description: string;
    links: {
      text: string;
      path: string;
    }[];
  };
};

export interface ITeamMember {
  firstName: string;
  middleName?: string;
  lastName: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  website?: string;
  instagram?: string;
  discord?: string;
}

export interface ITeam {
  [year: string]: ITeamMember[];
}

export interface IChampion {
  name: string;
  challenge: string;
  image: string;
  bio: string;
}
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
