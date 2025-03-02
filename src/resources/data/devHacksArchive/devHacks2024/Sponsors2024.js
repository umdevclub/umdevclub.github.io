import "@/styles/devHacksSponsors.scss";
import React from "react";

import Niche from "@/resources/images/devhacks/2025/devHacksSponsors/niche.png";
import Pollard from "@/resources/images/devhacks/2024/devHacksSponsors/pollard.jpg";
import Priceline from "@/resources/images/devhacks/2024/devHacksSponsors/priceline.svg";
import G3 from "@/resources/images/devhacks/2024/devHacksSponsors/G3.png";
import Johnston from "@/resources/images/devhacks/2024/devHacksSponsors/johnston.jpg";
import KarveIT from "@/resources/images/devhacks/2024/devHacksSponsors/karve.png";
import Lotlinx from "@/resources/images/devhacks/2024/devHacksSponsors/lotlinx.png";

const Sponsors2024 = () => {
  const sponsorData = {
    gold: { name: "Priceline", logo: Priceline },
    silver: [
      { name: "Niche", logo: Niche },
      { name: "G3", logo: G3 },
      { name: "Pollard", logo: Pollard },
      { name: "Johnston", logo: Johnston },
      { name: "Lotlinx", logo: Lotlinx },
      { name: "KarveIT", logo: KarveIT },
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

export default Sponsors2024;
