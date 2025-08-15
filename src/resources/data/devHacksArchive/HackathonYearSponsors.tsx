import "@/styles/devHacksSponsors.scss";
import React from "react";

// 2025 logos
import Ubisoft from "@/resources/images/devhacks/2025/devHacksSponsors/Ubisoft.jpg";
import Niche2025 from "@/resources/images/devhacks/2025/devHacksSponsors/niche.png";
import Varian from "@/resources/images/devhacks/2025/devHacksSponsors/varian.png";
import GlitchSecure from "@/resources/images/devhacks/2025/devHacksSponsors/GlitchSecure.png";
import Pollard2025 from "@/resources/images/devhacks/2025/devHacksSponsors/pollard.jpg";
import Priceline2025 from "@/resources/images/devhacks/2025/devHacksSponsors/priceline.svg";
import G3_2025 from "@/resources/images/devhacks/2025/devHacksSponsors/G3.png";
import FOS from "@/resources/images/devhacks/2025/devHacksSponsors/FacultyOfScience.png";
import SSA from "@/resources/images/devhacks/2025/devHacksSponsors/ssa.jpg";
import umsuCares from "@/resources/images/devhacks/2025/devHacksSponsors/umsuCares.png";

// 2024 logos
import Niche2024 from "@/resources/images/devhacks/2025/devHacksSponsors/niche.png";
import Pollard2024 from "@/resources/images/devhacks/2024/devHacksSponsors/pollard.jpg";
import Priceline2024 from "@/resources/images/devhacks/2024/devHacksSponsors/priceline.svg";
import G3_2024 from "@/resources/images/devhacks/2024/devHacksSponsors/G3.png";
import Johnston from "@/resources/images/devhacks/2024/devHacksSponsors/johnston.jpg";
import KarveIT from "@/resources/images/devhacks/2024/devHacksSponsors/karve.png";
import Lotlinx from "@/resources/images/devhacks/2024/devHacksSponsors/lotlinx.png";

//2023 logos
import Neo from "@/resources/images/devhacks/2023/devHacksSponsors/neo.png";
import Ubisoft2023 from "@/resources/images/devhacks/2023/devHacksSponsors/Ubisoft.jpg";
import GreenUmbrella from "@/resources/images/devhacks/2023/devHacksSponsors/greenUmbrella.webp";
import PayWorks from "@/resources/images/devhacks/2023/devHacksSponsors/payWorks.jpg";

type HackathonYearSponsorsProps = {
  year: string | number;
};

const HackathonYearSponsors: React.FC<HackathonYearSponsorsProps> = ({
  year,
}) => {
  const sponsors: Record<
    string,
    {
      gold: { name: string; logo: string };
      silver: { name: string; logo: string }[];
    }
  > = {
    "2025": {
      gold: { name: "Glitch Secure", logo: GlitchSecure },
      silver: [
        { name: "Varian", logo: Varian },
        { name: "Ubisoft", logo: Ubisoft },
        { name: "Niche", logo: Niche2025 },
        { name: "Priceline", logo: Priceline2025 },
        { name: "G3", logo: G3_2025 },
        { name: "Pollard", logo: Pollard2025 },
        { name: "SSA", logo: SSA },
        { name: "umsuCares", logo: umsuCares },
        { name: "FOS", logo: FOS },
      ],
    },
    "2024": {
      gold: { name: "Priceline", logo: Priceline2024 },
      silver: [
        { name: "Niche", logo: Niche2024 },
        { name: "G3", logo: G3_2024 },
        { name: "Pollard", logo: Pollard2024 },
        { name: "Johnston", logo: Johnston },
        { name: "Lotlinx", logo: Lotlinx },
        { name: "KarveIT", logo: KarveIT },
      ],
    },
    "2023": {
      gold: { name: "Neo", logo: Neo },
      silver: [
        { name: "Payworks", logo: PayWorks },
        { name: "Ubisoft", logo: Ubisoft2023 },
        { name: "Green Umbrella Consulting", logo: GreenUmbrella },
      ],
    },
  };

  const sponsorData = sponsors[String(year)];
  if (!sponsorData) return null;

  return (
    <div className="sponsors-container">
      {/* Gold sponsor */}
      <div className="gold-sponsor">
        <img src={sponsorData.gold.logo} alt={sponsorData.gold.name} />
      </div>

      {/* Silver sponsors in rows of 3 */}
      {Array.from({ length: Math.ceil(sponsorData.silver.length / 3) }).map(
        (_, rowIndex) => (
          <div key={rowIndex} className="sponsors-row">
            {sponsorData.silver
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((sponsor, index) => (
                <div key={index} className="sponsor">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
          </div>
        )
      )}
    </div>
  );
};

export default HackathonYearSponsors;
