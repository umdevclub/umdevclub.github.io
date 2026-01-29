import { useLoaderData } from "react-router-dom";

import Devhacks2024Schedule from "@/resources/data/devHacksArchive/devHacks2024/Schedule2024";
import Devhacks2025Schedule from "@/resources/data/devHacksArchive/devHacks2025/Schedule2025";
import Devhacks2026Schedule from "@/resources/data/devHacksArchive/devHacks2026/schedule2026";

import { HackathonConfig } from "@/resources/data/types";

const scheduleMap: Record<string, JSX.Element> = {
  "2024": <Devhacks2024Schedule />,
  "2025": <Devhacks2025Schedule />,
  "2026": <Devhacks2026Schedule />,
};

function HackathonSchedule() {
  const { data } = useLoaderData() as HackathonConfig;

  return (
    scheduleMap[data.year] ?? (
      <p style={{ textAlign: "center" }}>
        Schedule not available for {data.year}
      </p>
    )
  );
}

export default HackathonSchedule;
