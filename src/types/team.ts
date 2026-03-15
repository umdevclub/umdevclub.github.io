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

//devchamp winners
export interface IChampion {
  name: string;
  challenge: string;
  image: string;
  bio: string;
}
