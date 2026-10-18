import { Fragment } from "react";

import "@/styles/Hackathon.scss";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HackathonFaq from "@/components/HackathonFaq";
import DevHacksPreRegister from "@/components/DevHacksPreRegister";
import codeOfConduct from "@/resources/data/code-of-conduct";
import rules from "@/resources/data/rules";

import HorizontalScroller from "@/components/HorizontalScroller";
import GalleryScroller from "@/components/GalleryScroller";
import { picturesGeneralImages } from "@/resources/data/devHacksArchive/PicturesGeneral";
import { HackathonArchiveCards } from "@/routes/hackathon/HackathonArchiveCards";

function Hackathon() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hackathon-container" dir="ltr">
      {/* Hero Section */}
      <div className="hackathon-welcome container">
        <h1 className="hackathon-welcome heading">&lt;.devHacks 2027&gt;</h1>
        <h2
          className="hackathon-welcome description"
          style={{ textAlign: "center" }}
        >
          {"Manitoba's largest "}
          <del>24-hour</del>{" "}
          <strong>
            <em>48-hour</em>
          </strong>{" "}
          hackathon.
        </h2>
        <h2 className="hackathon-welcome sub-heading">
          📅 Feb. 19 - 21, 2027
          <br />
          📍 Engineering, Information and Technology Complex, University of
          Manitoba, Winnipeg, MB
        </h2>

        <h3 className="hackathon-welcome intro-text">
          Join 400+ students from across Western Canada for an unforgettable 48
          hours of coding, innovating, learning, and building your dream
          project!
        </h3>

        <div
          className="hackathon-welcome btn-wrapper"
          style={{
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "2rem",
          }}
        >
          <Button
            onClick={() => scrollToSection("pre-register")}
            variant="contained"
            sx={{
              fontSize: "1.1rem",
              fontFamily: "inherit",
              backgroundColor: "#d4af37",
              color: "#1a1a1a",
              fontWeight: 700,
              textTransform: "none",
              padding: "10px 24px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#e5be47",
              },
            }}
          >
            Pre-Register
          </Button>

          <Button
            onClick={() => scrollToSection("sponsors")}
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              fontFamily: "inherit",
              borderColor: "#272729",
              color: "#272729",
              borderWidth: "1.5px",
              fontWeight: 600,
              textTransform: "none",
              padding: "10px 24px",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#272729",
                backgroundColor: "#272729",
                color: "#ffffff",
              },
            }}
          >
            Sponsorship
          </Button>

          <Button
            onClick={() => scrollToSection("about")}
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              fontFamily: "inherit",
              borderColor: "#272729",
              color: "#272729",
              borderWidth: "1.5px",
              fontWeight: 600,
              textTransform: "none",
              padding: "10px 24px",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#272729",
                backgroundColor: "#272729",
                color: "#ffffff",
              },
            }}
          >
            About Us
          </Button>

          <Button
            onClick={() => scrollToSection("archive")}
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              fontFamily: "inherit",
              borderColor: "#272729",
              color: "#272729",
              borderWidth: "1.5px",
              fontWeight: 600,
              textTransform: "none",
              padding: "10px 24px",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#272729",
                backgroundColor: "#272729",
                color: "#ffffff",
              },
            }}
          >
            Past Hackathons
          </Button>

          <Button
            onClick={() => navigate("/github-tutorial")}
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              fontFamily: "inherit",
              borderColor: "#272729",
              color: "#272729",
              borderWidth: "1.5px",
              fontWeight: 600,
              textTransform: "none",
              padding: "10px 24px",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#272729",
                backgroundColor: "#272729",
                color: "#ffffff",
              },
            }}
          >
            GitHub Tutorial
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="hackathon-about container" id="about">
        <h1 className="hackathon-rules heading">About .devHacks</h1>
        <div className="hackathon-about-card">
          <div className="hackathon-about-grid">
            <div className="hackathon-about-item">
              <h3>🚀 The 48-Hour Experience</h3>
              <p>
                .devHacks is our annual flagship hackathon hosted by .devClub at
                the University of Manitoba. For .devHacks 2027, we are elevating
                the event into a full <strong>48-hour hackathon</strong>
                —bringing together 400+ students from across Western Canada. The
                extended timeline gives hackers the space to turn ambitious
                ideas into polished software, dive into cutting-edge APIs,
                collaborate deeply, and learn from industry mentors without
                sacrificing rest.
              </p>
            </div>
            <div className="hackathon-about-item">
              <h3>💡 Who We Are (.devClub)</h3>
              <p>
                Founded in 2014, .devClub is the largest student-run software
                development club in Manitoba. For over 11 years, our mission has
                been bridging classroom theory to high-demand industry skills.
                Alumni who built their very first projects at .devHacks now work
                at top local tech companies like Payworks, Niche Technology, G3
                Canada, and Pollard Banknote, as well as global giants including
                Google, Amazon, and Microsoft.
              </p>
            </div>
            <div className="hackathon-about-item">
              <h3>🌐 Open to All Skill Levels</h3>
              <p>
                Whether you are writing your first line of code or deploying
                distributed systems, .devHacks has a place for you. We provide
                beginner-friendly starter workshops, around-the-clock
                mentorship, free meals, drinks, swag, and hardware/software
                challenges. Best of all, participation is completely{" "}
                <strong>100% free</strong>.
              </p>
            </div>
          </div>

          <div className="hackathon-stats-bar">
            <div className="stat-box">
              <span className="stat-number">48</span>
              <span className="stat-label">Hours of Hacking</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">400+</span>
              <span className="stat-label">Projected Hackers</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">11+</span>
              <span className="stat-label">Years of .devClub</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">$0</span>
              <span className="stat-label">Free Food, Swag & Prizes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-Register Section */}
      <DevHacksPreRegister />

      {/* Sponsors Section */}
      <div className="hackathon-sponsors-section container" id="sponsors">
        <h1 className="hackathon-sponsors heading">Sponsors</h1>
        <div className="sponsors-promo-card">
          <div className="sponsors-status-pill">Coming Soon</div>
          <h2 className="sponsors-promo-title">
            Sponsors for .devHacks 2027 will be announced soon!
          </h2>
          <p className="sponsors-promo-description">
            Interested in sponsoring .devHacks? Partner with Western Canada's
            premier student hackathon and connect directly with 400+ of the
            brightest tech talents in Manitoba prototyping solutions to your
            business challenges.
          </p>

          <div className="sponsors-btn-group">
            <Button
              variant="contained"
              component="a"
              href="/devhacks-2027-sponsorship-package.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "1.05rem",
                fontFamily: '"IBM Plex Mono", monospace',
                textTransform: "none",
                fontWeight: 700,
                backgroundColor: "#d4af37",
                color: "#1a1a1a",
                padding: "12px 28px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#e5be47",
                },
              }}
            >
              📄 View Sponsorship Package (PDF)
            </Button>

            <Button
              variant="outlined"
              component="a"
              href="mailto:umdevclub@gmail.com?subject=Interested%20in%20Sponsoring%20.devHacks%202027"
              sx={{
                fontSize: "1.05rem",
                fontFamily: '"IBM Plex Mono", monospace',
                textTransform: "none",
                fontWeight: 600,
                color: "#ffffff",
                borderColor: "rgba(255, 255, 255, 0.7)",
                padding: "12px 28px",
                borderRadius: "8px",
                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              ✉️ Email umdevclub@gmail.com
            </Button>
          </div>

          <div className="sponsors-quick-tiers">
            <div className="tier-pill bronze">Bronze &bull; $600</div>
            <div className="tier-pill silver">Silver &bull; $1,400</div>
            <div className="tier-pill gold">Gold &bull; $2,200</div>
            <div className="tier-pill platinum">Platinum &bull; Contact Us</div>
          </div>
        </div>
      </div>

      {/* Pictures Gallery */}
      <h1 className="hackathon-sponsors heading">Pictures</h1>
      <GalleryScroller images={picturesGeneralImages} />

      {/* Go Back in Time (Archive) */}
      <div id="archive" style={{ width: "100%" }}>
        <h1 className="hackathon-sponsors heading">Go Back in Time</h1>
        <HorizontalScroller>
          {HackathonArchiveCards.map((archive) => (
            <button
              key={archive.year}
              type="button"
              className="archive-card"
              onClick={() => navigate(archive.route)}
            >
              <div
                className="archive-card-media"
                style={{ backgroundImage: `url(${archive.image})` }}
              />
              <div className="archive-card-overlay" />
              <div className="archive-card-content">
                <h3 className="archive-card-title">{archive.title}</h3>
                <p className="archive-card-sub">{archive.subtitle}</p>
              </div>
            </button>
          ))}
        </HorizontalScroller>
      </div>

      {/* Rules Section */}
      <div className="hackathon-rules container" id="rules">
        <h1 className="hackathon-rules heading">Rules:</h1>
        <div className="hackathon-rules text-container">
          <p>
            All hackathon participants are required to follow the .devHacks
            rules. These rules will be enforced throughout the event. We expect
            cooperation to ensure a fair and fun environment. Any failure to
            follow these rules will be dealt with accordingly and collectively
            by the organizers.
          </p>
          <ol>
            {rules.map((rule, index) => {
              return (
                <Fragment key={index}>
                  <li>{rule.item}</li>
                  {rule.subItem.length > 0 && (
                    <ol className="hackathon-rules alpha-list">
                      {rule.subItem.map((subItem, idx) => (
                        <li key={idx}>{subItem}</li>
                      ))}
                    </ol>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Code of Conduct Section */}
      <div className="hackathon-code-conduct container" id="code-of-conduct">
        <h1 className="hackathon-code-conduct heading">Code Of Conduct:</h1>
        <div className="hackathon-code-conduct text-container">
          <p>
            All attendees including participants, sponsors, partners,
            volunteers, and organizers are required to agree with the following
            code of conduct. The following code will be enforced throughout the
            event. We expect cooperation to ensure a safe and fun environment
            for everyone. Any failure to meet these guidelines will be dealt
            with accordingly and collectively by the organizers.
          </p>
          <ol>
            {codeOfConduct.map((codeConduct, index) => {
              return (
                <Fragment key={index}>
                  <li>{codeConduct.item()}</li>
                  {codeConduct.subItem.length > 0 && (
                    <ol className="hackathon-code-conduct alpha-list">
                      {codeConduct.subItem.map((subItem, idx) => (
                        <li key={idx}>{subItem}</li>
                      ))}
                    </ol>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container" id="faq">
        <HackathonFaq />
      </div>
    </div>
  );
}

export default Hackathon;
