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
}

export interface IChampion {
  name: string;
  challenge: string;
  image: string;
  bio: string;
}
