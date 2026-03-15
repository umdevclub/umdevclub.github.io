import { HackathonWinner } from "@/types/hackathon/winner";

//prize index is the prize category index from its respective year

const hackathonWinners: Record<string, HackathonWinner[]> = {
  "2026": [
    {
      prizeIndex: 5,
      projectName: "VaccineWatch",
      teamMembers: [
        "Logan Furedi",
        "Peter Vu",
        "Juan Rempel",
        "Jagrit Sharma",
        "Duy Kha Tran",
      ],
      projectUrl: "https://devpost.com/software/vaccinewatch",
    },
    {
      prizeIndex: 0,
      projectName: "Lychee",
      teamMembers: ["Jack Heppner", "Tiffany Iao"],
      projectUrl: "https://devpost.com/software/lychee-nacvme",
    },
    {
      prizeIndex: 1,
      projectName: "Lychee",
      teamMembers: ["Jack Heppner", "Tiffany Iao"],
      projectUrl: "https://devpost.com/software/lychee-nacvme",
    },
    {
      prizeIndex: 2,
      projectName: "StudyNav",
      teamMembers: [
        "Logan Decock",
        "Connor Langan",
        "Garrett Malenko",
        "Ben Purvis",
      ],
      projectUrl: "https://devpost.com/software/libby-g1ckli",
    },
    {
      prizeIndex: 3,
      projectName: "Lobster Boxing",
      teamMembers: ["Fraser Newbury", "Grayson Andrews"],
      projectUrl: "https://devpost.com/software/lobster-boxing",
    },
    {
      prizeIndex: 4,
      projectName: "Finders Keepers",
      teamMembers: [
        "Ekamjot Singh",
        "Shay Sapozhnikov",
        "Benjamin Judson",
        "Jaskarandeep Singh Jashan",
      ],
      projectUrl: "https://devpost.com/software/finders-keeperss",
    },
  ],

  "2025": [
    {
      prizeIndex: 6,
      projectName: "GTFO",
      teamMembers: [
        "Peter Vu",
        "James Park",
        "Luke Wiebe",
        "Paul Xiang",
        "James Ha",
      ],
      projectUrl: "https://devpost.com/software/gtfo-2s50hi",
    },
    {
      prizeIndex: 7,
      projectName: "Escape Protocol: Rogue AI",
      teamMembers: [
        "Matthew Indico",
        "Shana Iqbal",
        "Luisa Velandia",
        "Lisa Zhu",
        "Juanito Catalon",
      ],
      projectUrl: "https://devpost.com/software/escape-protocol-rogue-ai",
    },
    {
      prizeIndex: 0,
      projectName: "StockTrack",
      teamMembers: [
        "Oleksandr Bratasyuk",
        "Oleksandr Dimbrovskyi",
        "Nick Chudak",
        "Yaroslav Dimbrovskyi",
        "Toni Odujinrin",
      ],
      projectUrl: "https://devpost.com/software/stocktrack",
    },
    {
      prizeIndex: 1,
      projectName: "Talkable",
      teamMembers: ["Hadia Inam", "Maria Inam"],
      projectUrl: "https://devpost.com/software/talkable",
    },
    {
      prizeIndex: 2,
      projectName: "StockTrack",
      teamMembers: [
        "Oleksandr Bratasyuk",
        "Oleksandr Dimbrovskyi",
        "Nick Chudak",
        "Yaroslav Dimbrovskyi",
        "Toni Odujinrin",
      ],
      projectUrl: "https://devpost.com/software/stocktrack",
    },
    {
      prizeIndex: 3,
      projectName: "CommitCV",
      teamMembers: ["Travis Friesen", "Connor Langan"],
      projectUrl: "https://devpost.com/software/commitcv",
    },

    {
      prizeIndex: 4,
      projectName: "GrassTouchers",
      teamMembers: [
        "Keira Pasveer",
        "Atishaya Maharjan",
        "Aidan McLeod",
        "Juan Rempel",
        "Timmy Wang",
      ],
      projectUrl: "https://devpost.com/software/grasstouchers",
    },
  ],
  "2024": [
    {
      prizeIndex: 5,
      projectName: "Halal Guys",
      teamMembers: ["Ali Nawaz", "Hassan Nauman", "Rayan Imran"],
    },
    {
      prizeIndex: 0,
      projectName: "Agile Ace",
      teamMembers: [
        "Kameron Ronald",
        "Jashanjot Gill",
        "Luxiang Lin",
        "Nhat Nam Tran",
        "Xiang Shi",
      ],
    },
    {
      prizeIndex: 1,
      projectName: "The not-so-friendly pumpkin",
      teamMembers: ["Brennan Fehr", "Quinn Gibbons", "Josh Chen", "Jayla Chen"],
    },
    {
      prizeIndex: 2,
      projectName: "Lost and Found",
      teamMembers: [
        "Hamed Marwan",
        "Phan Ly Nhan Nguyen",
        "Mohamed Youssef",
        "Omar Taha",
        "Yirong Wang",
      ],
    },
    {
      prizeIndex: 3,
      projectName: "F1 Tracker",
      teamMembers: [
        "Jan Tan",
        "OWen Zonneveld",
        "Nikolaas Christie",
        "Henry Wong",
        "Aden Knelsen-Dobson",
      ],
    },
    {
      prizeIndex: 4,
      projectName: "Starfish Cake",
      teamMembers: [
        "Hannara Chang",
        "Jasmine Shapan",
        "Halah Mhanni",
        "Dalia Bashaev",
        "Gwyneth Ho",
      ],
    },
  ],
};

export default hackathonWinners;
