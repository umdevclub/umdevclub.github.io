import React from "react";

import { windowsInstructions } from "@/resources/data/githubInstructions";

const GithubWindows = () => {
  return (
    <div>
      <h1>Beginner's Guide to Git and Github</h1>
      <ol>
        {windowsInstructions.map((item, idx) => (
          <li key={idx}>
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
                    {el.img ? (
                      <img src={el.img} alt="" style={{ width: "80%" }} />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GithubWindows;
