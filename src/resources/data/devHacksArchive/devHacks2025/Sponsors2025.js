import "@/styles/devHacksSponsors.scss";
import React from "react";
import Ubisoft from "@/resources/images/devhacks/2025/devHacksSponsors/Ubisoft.jpg";
import Niche from "@/resources/images/devhacks/2025/devHacksSponsors/niche.png";
import Varian from "@/resources/images/devhacks/2025/devHacksSponsors/varian.png";
import GlitchSecure from "@/resources/images/devhacks/2025/devHacksSponsors/GlitchSecure.png";
import Pollard from "@/resources/images/devhacks/2025/devHacksSponsors/pollard.jpg";
import Priceline from "@/resources/images/devhacks/2025/devHacksSponsors/priceline.svg";
import G3 from "@/resources/images/devhacks/2025/devHacksSponsors/G3.png";

const Sponsors2025 = () => {
  const sponsorData = {
    gold: { name: "Glitch Secure", logo: GlitchSecure },
    silver: [
      { name: "Varian", logo: Varian },
      { name: "Ubisoft", logo: Ubisoft },
      { name: "Niche", logo: Niche },
      { name: "Priceline", logo: Priceline },
      { name: "G3", logo: G3 },
      { name: "Pollard", logo: Pollard },
    ],
  };

  return (
    <div className="sponsors-container">
      <div className="gold-sponsor">
        <img src={sponsorData.gold.logo} alt={sponsorData.gold.name} />
      </div>
      <div className="sponsors-row">
        {sponsorData.silver.slice(0, 3).map((sponsor, index) => (
          <div key={index} className="sponsor">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>

      <div className="sponsors-row">
        {sponsorData.silver.slice(3, 6).map((sponsor, index) => (
          <div key={index} className="sponsor">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>

      <div className="sponsors-row">
        {sponsorData.silver.slice(6, 9).map((sponsor, index) => (
          <div key={index} className="sponsor">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors2025;
