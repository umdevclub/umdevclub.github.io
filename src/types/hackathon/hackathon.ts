export type HackathonTheme = {
  [key: string]: {
    title: string;
    description: string | string[];
    details?: {
      header?: string;
      content?: string[];
    }[];
    body?: string;
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

export type HackathonArchiveCard = {
  year: number;
  title: string;
  subtitle: string;
  route: string;
  image: string;
};
