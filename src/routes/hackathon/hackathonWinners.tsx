import "@/styles/HackathonWinners.scss";
import hackathonThemeConfig from "@/resources/data/hackathonThemeConfig";
import hackathonWinners from "@/resources/data/hackathonWinners";
import HorizontalScroller from "@/components/HorizontalScroller";

type HackathonWinnersProps = {
  year: string;
};

const HackathonWinners = ({ year }: HackathonWinnersProps) => {
  const themes =
    hackathonThemeConfig[year as keyof typeof hackathonThemeConfig] || [];
  const winners = hackathonWinners[year] || [];

  if (!winners.length) return null;

  return (
    <section className="hackathon-winners">
      <HorizontalScroller className="hackathon-winners_scroller">
        {winners.map((winner, index) => {
          const theme = themes[winner.prizeIndex];

          return (
            <article
              key={`${year}-${winner.prizeIndex}-${index}`}
              className="hackathon-winners_card"
            >
              <div className="hackathon-winners_top">
                <span className="hackathon-winners_icon">🏆</span>
                <h3 className="hackathon-winners_title">{theme?.title}</h3>
              </div>

              <div className="hackathon-winners_body">
                {/* Project */}
                <div className="hackathon-winners_block">
                  <p className="hackathon-winners_label">Project</p>

                  {winner.projectUrl ? (
                    <a
                      className="hackathon-winners_project-link"
                      href={winner.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{winner.projectName}</span>

                      <svg
                        className="hackathon-winners_link-icon"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path
                          fill="currentColor"
                          d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                        />
                        <path
                          fill="currentColor"
                          d="M5 5h6V3H3v8h2V5zm0 14h14V9h2v12H3V13h2v6z"
                        />
                      </svg>
                    </a>
                  ) : (
                    <p className="hackathon-winners_project">
                      {winner.projectName}
                    </p>
                  )}
                </div>

                {/* Team */}
                <div className="hackathon-winners_block">
                  <p className="hackathon-winners_label">Team</p>

                  <div className="hackathon-winners_team">
                    {winner.teamMembers.map((member) => (
                      <div key={member} className="hackathon-winners_member">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </HorizontalScroller>
    </section>
  );
};

export default HackathonWinners;
