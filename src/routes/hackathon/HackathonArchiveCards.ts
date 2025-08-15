import scheduleBg2024 from "@/resources/images/devhacks/2024/devhacks2024-schedule-bg.jpeg";
import scheduleBg2025 from "@/resources/images/devhacks/2025/devhacks2025-schedule-bg.png";
import scheduleBg2023 from "@/resources/images/devhacks/2023/devhacks2023-schedule-bg.png";

export type HackathonArchiveCard = {
  year: number;
  title: string;
  subtitle: string;
  route: string;
  image: string;
};

export const HackathonArchiveCards: HackathonArchiveCard[] = [
  {
    year: 2023,
    title: ".devHacks 2023",
    subtitle: "The long-awaited return, with 200+ Hackers in one epic sprint!",
    route: "/devhacks/2023",
    image: scheduleBg2023,
  },
  {
    year: 2024,
    title: ".devHacks 2024",
    subtitle: "24 hours. 300+ Hackers. Limitless possibilities.",
    route: "/devhacks/2024",
    image: scheduleBg2024,
  },
  {
    year: 2025,
    title: ".devHacks 2025",
    subtitle:
      "A decade of Hacking, celebrated with 50 incredible projects and 300+ Hackers!",
    route: "/devhacks/2025",
    image: scheduleBg2025,
  },
];
