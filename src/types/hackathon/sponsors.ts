export type Tier =
  | "platinum"
  | "gold"
  | "silver"
  | "bronze"
  | "inkind"
  | "schoolSponsor";

export type Sponsor = {
  name: string;
  logo: string;
};

export type YearSponsors = Partial<Record<Tier, Sponsor[]>>;

export type HackathonYearSponsorsProps = {
  year: string | number;
};
