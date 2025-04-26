import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/App.tsx", [
    index("routes/Home.tsx"),
    route("devchamps", "routes/DevChamps.tsx"),
    route("contact", "routes/Contact.tsx"),
    route("devhacks", "routes/Hackathon.tsx"),
    route("github-tutorial", "routes/DevhacksGithub.tsx"),
    route("link-tree", "routes/LinkTree.tsx"),
    route("schedule-2025", "routes/devhacks/Schedule2025.tsx"),
    route("schedule-2024", "routes/devhacks/Schedule2024.tsx"),
    route("devhacks2025", "routes/devhacks/devHacks2025.tsx"),
    route("devhacks2024", "routes/devhacks/devHacks2024.tsx"),
    route("prize-categories-2025", "routes/devhacks/PrizeCategories2025.tsx"),
    route("prize-categories-2024", "routes/devhacks/PrizeCategories2024.tsx"),
    route("project-gallery-2025", "routes/devhacks/ProjectGallery2025.tsx"),
    route("*?", "routes/PageNotFound.tsx"),
  ]),
] satisfies RouteConfig;
