import { useLoaderData } from "react-router-dom";

import Devhacks2024Schedule from "@/resources/data/devHacksArchive/devHacks2024/Schedule2024";
import Devhacks2025Schedule from "@/resources/data/devHacksArchive/devHacks2025/Schedule2025";
import Devhacks2026Schedule from "@/resources/data/devHacksArchive/devHacks2026/Schedule2026";

import { HackathonInfo } from "@/types/hackathon/hackathon";

const scheduleMap = {
  "2024": Devhacks2024Schedule,
  "2025": Devhacks2025Schedule,
  "2026": Devhacks2026Schedule,
} as const;

type YearKey = keyof typeof scheduleMap;

function HackathonSchedule() {
  const { data } = useLoaderData() as HackathonInfo;

  const ScheduleComponent = scheduleMap[data.year as YearKey];

  if (!ScheduleComponent) {
    return (
      <p style={{ textAlign: "center" }}>
        Schedule not available for {data.year}
      </p>
    );
  }

  return <ScheduleComponent />;
}

export default HackathonSchedule;
