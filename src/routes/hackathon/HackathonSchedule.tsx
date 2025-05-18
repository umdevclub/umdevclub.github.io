import { useLoaderData } from "react-router-dom";

import Devhacks2024Schedule from "@/resources/data/devHacksArchive/devHacks2024/Schedule2024";
import Devhacks2025Schedule from "@/resources/data/devHacksArchive/devHacks2025/Schedule2025";
import { HackathonConfig } from "@/resources/data/types";

function HackathonSchedule() {
  const { data } = useLoaderData() as HackathonConfig;

  return data.year === "2024" ? (
    <Devhacks2024Schedule />
  ) : (
    <Devhacks2025Schedule />
  );
}

export default HackathonSchedule;
