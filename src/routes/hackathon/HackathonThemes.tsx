import { useLoaderData } from "react-router-dom";

import PrizeCategories2024 from "@/resources/data/devHacksArchive/devHacks2024/PrizeCategories2024";
import PrizeCategories from "@/resources/data/devHacksArchive/devHacks2025/PrizeCategories2025";
import { HackathonConfig } from "@/resources/data/types";

function HackathonThemes() {
  const { data } = useLoaderData() as HackathonConfig;

  return data.year === "2024" ? <PrizeCategories2024 /> : <PrizeCategories />;
}

export default HackathonThemes;
