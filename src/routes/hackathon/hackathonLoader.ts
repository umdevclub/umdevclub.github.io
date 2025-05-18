import { Params } from "react-router-dom";
import hackathonConfig from "@/resources/data/hackathon-config";

export function loader({ params }: { params: Params }) {
  const data = hackathonConfig[params.year as string];

  if (!data) {
    throw new Response("", { statusText: "Not Found", status: 404 });
  }

  return { year: params.year, data };
}
