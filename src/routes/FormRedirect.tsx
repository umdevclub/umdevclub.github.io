import { redirect } from "react-router-dom";
import { forms } from "@/resources/data/forms";

const formsNormalized: Record<string, string> = Object.fromEntries(
  Object.entries(forms).map(([k, v]) => [k.toLowerCase(), v])
);

export function formRedirectLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const slug = url.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  const target = formsNormalized[slug];
  if (target) return redirect(target);
  return null;
}
