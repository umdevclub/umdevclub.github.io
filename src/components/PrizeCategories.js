import React from "react";
import Box from "@mui/material/Box";

import "@/styles/PrizeCategories.scss";

const PrizeCategories = () => {
  const prizeData = [
    {
      title: "Best Societal Impact Hack",
      description:
        "This Societal Impact challenge invites you to develop a hack that provides an innovative and practical solution that benefits society and/or promotes sustainable development. This can range from environmental to cultural.",
    },
    {
      title: "Best First-Time Hack",
      description:
        "This best first time hacker challenge is made to welcome new hackers (and those who work with beginners)! You are eligible for this category if at least half of your team is made of 1st/2nd year hackers.",
    },
    {
      title: "Best Design Hack",
      description:
        "This design challenge invites you to develop a hack with innovative and visually appealing user interfaces (UI) and user experiences (UX).",
    },
    {
      title: "Fan’s Choice Award Hack",
      description:
        "This fan’s choice award hack puts the power into the hands of your fellow hackers, mentors, audience, volunteers and organisers. Whether your project is a technological breakthrough, a stunning design or a simple solution, if it wins the hearts of the ‘fanss’, you take home the prize.",
    },
    {
      title: "Open Innovation Challenge Hack",
      description:
        "This open innovation challenge invites you for creativity and innovation. There are no boundaries to what you can create, as long as it’s tech-based.",
    },
  ];

  const goldChallengeData = [
    {
      title: "",
      description: "Security scanners which identify system vulnerabilities.",
    },
    {
      title: "",
      description: "Browser extensions which enhance user privacy.",
    },
    {
      title: "",
      description:
        "Security management software for devices such as computer systems or CCTV cameras.",
    },
    {
      title: "",
      description: "Cyber security training/awareness software.",
    },
  ];

  // const silverPlusChallengeData =[

  // ];

  return (
    <div className="prize-categories-container">
      <Box width="85%">
        <h1 className="prize-categories-heading">Prize Categories</h1>
        <Box>
          <h2>The awards this year are as follows:</h2>
          <ol>
            {prizeData.map((prize, index) => (
              <li key={index}>
                <h3>{prize.title}</h3>
                <p>{prize.description}</p>
              </li>
            ))}
            <li>
              <h3>Glitch Secure Hack Challenge:</h3>
              <div>
                <p>
                  {/* <span className="bold">Challenge Description: </span> */}
                  Create a security-focused project or tool that aids in digital
                  security, computer system integrity or user privacy.
                </p>
                <div className="prize-categories gold-challenge">
                  <h4>Examples Include:</h4>
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    {goldChallengeData.map((challenge, index) => (
                      <li key={index}>
                        <h5>{challenge.title}</h5>
                        <p>{challenge.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <h3>Ubisoft Hack Challenge:</h3>
              <div>
                <p>
                  {/* <span className="bold">Challenge Description: </span> */}
                  TBD
                </p>
                <div className="prize-categories goldSponsor-challenge">
                  {/* <h4>Examples Include:</h4> */}
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    {/* {goldSponsorChallengeData.map((challenge, index) => (
                      <li key={index}>
                        <h5>{challenge.title}</h5>
                        <p>{challenge.description}</p>
                      </li>
                    ))} */}
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </Box>
      </Box>
    </div>
  );
};

export default PrizeCategories;
