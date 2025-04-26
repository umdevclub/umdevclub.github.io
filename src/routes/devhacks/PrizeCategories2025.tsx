import Box from "@mui/material/Box";

import "@/styles/PrizeCategories.scss";

export default function PrizeCategories() {
  const prizeData = [
    {
      title: "Legend of the Hacks",
      description: "Score the highest points and claim Victory Royale!",
    },
    {
      title: "Best Accessibility Hack",
      description:
        "This hack recognizes projects that enhance digital inclusion, making tech easier to use for people with disabilities through innovative, thoughtful, and user-friendly solutions.",
    },
    {
      title: "Best Impact Hack",
      description:
        "This challenge invites you to develop a hack that provides a solution that benefits society or promotes sustainable development. From diversity to accessibility to industry, there are no limits to the problems you can address and the impacts you can make.",
    },
    {
      title: "Best First-Time Hack",
      description:
        "This best first time hacker challenge is made to welcome new hackers (and those who work with beginners)! You are eligible for this category if at least half of your team is made of first-time hackers.",
    },
    {
      title: "Best Chaotic Evil Hack",
      description:
        "This hack is the villain of all hacks—unpredictable and maybe helpful? It could either set the world on fire or secretly save it, but either way, make your project do something we didn't know we needed!",
    },
    {
      title: "Best AI Hack",
      description:
        "Who needs robots taking over the world? Make AI do something actually useful (or ridiculously cool). Automate, innovate, or break expectations with cutting-edge technology!",
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

  return (
    <div className="prize-categories-container">
      <Box width="85%">
        <h1 className="prize-categories-heading">Prize Categories</h1>
        <Box>
          <h2>The awards for .devHacks 2025 were as follows:</h2>
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
                  Hackers are invited to incorporate{" "}
                  <strong>race against the clock</strong> as an element in your
                  game. It can be in a small way or a big way, but make it make
                  sense in the context of your game. Use any engine, framework,
                  or library to bring your vision to life.
                  <br /> Our Ubisoft Ambassadors will be judging entries based
                  on creativity, gameplay, and adherence to the theme.
                  <br />
                  Compete for a chance to win some cool prizes, including
                  exclusive Ubisoft swag and PC game codes. <br />
                  Unleash your creativity and show us what you can build!
                </p>
                <div className="prize-categories goldSponsor-challenge">
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                  ></ul>
                </div>
              </div>
            </li>
          </ol>
        </Box>
      </Box>
    </div>
  );
}
