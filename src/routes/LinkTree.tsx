import "@/styles/LinkTree.scss";
import devclubLogo from "@/resources/images/devclub-logo.svg";
import cssaLogo from "@/resources/images/clubs/logo-cssa.svg";
import wicsLogo from "@/resources/images/clubs/logo-wics.svg";
import cusecLogo from "@/resources/images/clubs/logo-cusec.svg";

function LinkTree() {
  const clubsData = [
    {
      name: ".devClub",
      logo: devclubLogo,
      link: "https://linktr.ee/umdev",
      desc: "An academic and networking club for computer science students at the University of Manitoba.",
      className: "dev-club",
    },
    {
      name: "CSSA",
      logo: cssaLogo,
      link: "https://linktr.ee/umcssa",
      desc: "Representing the CS community at the University of Manitoba!",
      className: "cssa",
    },
    {
      name: "WICS",
      logo: wicsLogo,
      link: "https://linktr.ee/umwics",
      desc: "UMWICS supports gender minority CS students & promotes equity, diversity, & inclusion in computer science.",
      className: "wics",
    },
    {
      name: "CUSEC",
      logo: cusecLogo,
      link: "https://www.instagram.com/cusecofficial/",
      desc: "Canadian University Software Engineering Conference",
      className: "cusec",
    },
  ];

  return (
    <div className="linktree container">
      <h2 className="linktree heading">
        Link Trees for all the major CS clubs
      </h2>
      <div className="linktree club-container">
        {clubsData.map((club, index) => (
          <a
            href={club.link}
            target="blank"
            rel="noreferrer"
            className="section"
            key={index}
          >
            <h3 className="heading">{club.name}</h3>
            <figure>
              <img
                src={club.logo}
                alt={`Logo of ${club.name}.`}
                className={club.className}
              />
            </figure>
            <div>
              <p>{club.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default LinkTree;
