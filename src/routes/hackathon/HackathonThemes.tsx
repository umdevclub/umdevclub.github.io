import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";

import "@/styles/PrizeCategories.scss";
import { HackathonTheme } from "@/resources/data/types";
import { memo, useMemo } from "react";

const ThemeDetails = memo(function ThemeDetails({
  details,
}: {
  details: { header: string; content: string[] }[];
}) {
  return (
    <>
      {details.map((detail, idx) => (
        <div className="prize-categories" key={detail.header + idx}>
          <h3>{detail.header}</h3>
          <ul style={{ listStyleType: "disc" }}>
            {detail.content.map((item, idx) => (
              <li key={idx}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
});

function HackathonThemes() {
  const { data } = useLoaderData() as HackathonTheme;

  const themeList = useMemo(
    () =>
      data.map((theme, index) => {
        return (
          <li key={theme.title + index}>
            <h2>{theme.title}</h2>
            {typeof theme.description === "string" ? (
              <p>{theme.description}</p>
            ) : (
              theme.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            )}
            {theme.details && <ThemeDetails details={theme.details} />}
          </li>
        );
      }),
    [data]
  );

  return (
    <div className="prize-categories-container">
      <Box width="85%">
        <h1 className="prize-categories-heading">Prize Categories</h1>
        <Box>
          <ol>{themeList}</ol>
        </Box>
      </Box>
    </div>
  );
}

export default HackathonThemes;
