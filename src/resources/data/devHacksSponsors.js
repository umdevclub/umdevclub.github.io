import "@/styles/devHacksSponsors.scss";
import React from "react";
import Ubisoft from "@/resources/images/devhacks/devHacksSponsors/Ubisoft.jpg";
import Niche from "@/resources/images/devhacks/devHacksSponsors/niche.png";
import Varian from "@/resources/images/devhacks/devHacksSponsors/varian.png";
import GlitchSecure from "@/resources/images/devhacks/devHacksSponsors/GlitchSecure.png";
import Pollard from "@/resources/images/devhacks/devHacksSponsors/pollard.jpg";
import Priceline from "@/resources/images/devhacks/devHacksSponsors/priceline.svg";
import G3 from "@/resources/images/devhacks/devHacksSponsors/G3.jpg";

const Sponsors = () => {
  const sponsorData = {
    gold: { name: "Glitch Secure", logo: GlitchSecure },
    silverPlus: { name: "Ubisoft", logo: Ubisoft },
    silver: [
      { name: "Priceline", logo: Priceline },
      { name: "Pollard", logo: Pollard },
      { name: "Varian", logo: Varian },
      { name: "Niche", logo: Niche },
      { name: "G3", logo: G3 },
    ],
  };

  return (
    <div className="sponsors-container">
      {sponsorData.gold && (
        <div className="gold-sponsor">
          <img src={sponsorData.gold.logo} alt={sponsorData.gold.name} />
        </div>
      )}

      <div className="sponsors-grid">
        {sponsorData.silverPlus && (
          <div className="sponsor sponsor-silver-plus">
            <img
              src={sponsorData.silverPlus.logo}
              alt={sponsorData.silverPlus.name}
            />
          </div>
        )}

        {sponsorData.silver.map((sponsor, index) => (
          <div key={index} className="sponsor sponsor-silver">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
