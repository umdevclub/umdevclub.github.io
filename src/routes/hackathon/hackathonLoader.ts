import { Params } from "react-router-dom";
import hackathonConfig from "@/resources/data/hackathonInfoConfig";
import hackathonThemeConfig from "@/resources/data/hackathonThemeConfig";

export function hackathonInfoLoader({ params }: { params: Params }) {
  const data = hackathonConfig[params.year as string];

  if (!data) {
    throw new Response("", { statusText: "Not Found", status: 404 });
  }

  return { year: params.year, data };
}

export function hackathonThemeLoader({ params }: { params: Params }) {
  const data = hackathonThemeConfig[params.year as string];

  if (!data) {
    throw new Response("", { statusText: "Not Found", status: 404 });
  }

  return { year: params.year, data };
}
