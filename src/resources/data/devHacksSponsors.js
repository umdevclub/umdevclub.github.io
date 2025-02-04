import "@/styles/devHacksSponsors.scss";
import React from "react";
import Ubisoft from "@/resources/images/devhacks/devHacksSponsors/Ubisoft.jpg";
import Niche from "@/resources/images/devhacks/devHacksSponsors/niche.png";
import Varian from "@/resources/images/devhacks/devHacksSponsors/varian.png";
import GlitchSecure from "@/resources/images/devhacks/devHacksSponsors/GlitchSecure.png";
import Pollard from "@/resources/images/devhacks/devHacksSponsors/pollard.jpg";
import Priceline from "@/resources/images/devhacks/devHacksSponsors/priceline.svg";
import G3 from "@/resources/images/devhacks/devHacksSponsors/G3.png";
import UMSU from "@/resources/images/devhacks/devHacksSponsors/UMSU.png";
import FOS from "@/resources/images/devhacks/devHacksSponsors/FacultyOfScience.png";

const Sponsors = () => {
  const sponsorData = {
    center: { name: "Glitch Secure", logo: GlitchSecure },
    surrounding: [
      { name: "Niche", logo: Niche },
      { name: "Ubisoft", logo: Ubisoft },
      { name: "Priceline", logo: Priceline },
      { name: "Varian", logo: Varian },
      { name: "G3", logo: G3 },
      { name: "Pollard", logo: Pollard },
      { name: "UMSU", logo: UMSU },
      { name: "FOS", logo: FOS },
    ],
  };

  return (
    <div className="sponsors-container">
      <div className="center-sponsor">
        <img src={sponsorData.center.logo} alt={sponsorData.center.name} />
      </div>

      <div className="sponsors-row">
        {sponsorData.surrounding.slice(0, 3).map((sponsor, index) => (
          <div key={index} className="sponsor">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>

      <div className="sponsors-row">
        {sponsorData.surrounding.slice(3, 6).map((sponsor, index) => (
          <div key={index} className="sponsor">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>

      <div className="sponsors-row">
        {sponsorData.surrounding.slice(6, 8).map((sponsor, index) => (
          <div key={index} className="sponsor">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
