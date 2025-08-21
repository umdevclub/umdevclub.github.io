import { useState, useEffect, useRef } from "react";

import { windowsInstructions } from "@/resources/data/githubInstructions";
import "@/styles/DevhacksGithub.scss";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function GithubWindows() {
  const [activeId, setActiveId] = useState("");
  const sectionRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0 }
    );

    const refs = sectionRefs.current;
    refs.forEach((ref) => observer.observe(ref));

    return () => {
      refs.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="github-tab-container">
      <h1>.devHack's Guide to Git and Github</h1>
      <Box display="flex">
        <aside
          className="github-table-of-contents"
          style={{
            borderRight: "1px solid #e0e0e0",
            paddingRight: "1rem",
            marginRight: "1rem",
          }}
        >
          <h2>Table of Contents</h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {windowsInstructions.map((item, idx) => (
              <li key={idx}>
                <p>
                  <a
                    href={`#${item.id}`}
                    style={item.id === activeId ? { fontWeight: "bold" } : {}}
                  >
                    {item.title}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </aside>
        <ol className="github-list">
          {windowsInstructions.map((item, idx) => (
            <li
              id={item.id}
              ref={(el) => {
                if (el) sectionRefs.current[idx] = el;
              }}
              key={idx}
            >
              <h3>{item.title}</h3>
              <ul
                style={{
                  listStyleType: "disc",
                }}
              >
                {item.desc.map((el, index) => {
                  return (
                    <li key={index}>
                      <p>{el.text()}</p>
                      {el.img ? <img src={el.img} alt="" /> : null}
                    </li>
                  );
                })}
                {idx !== windowsInstructions.length - 1 && (
                  <Divider
                    sx={{
                      my: "1rem",
                    }}
                  />
                )}
              </ul>
            </li>
          ))}
        </ol>
      </Box>
    </div>
  );
}

export default GithubWindows;
