import "@/styles/devHacksSponsors.scss";
import React from "react";

//2026 logos
import Qdoc from "@/resources/images/devhacks/2026/QDocLogo.png";
import Taiv from "@/resources/images/devhacks/2026/Taiv.png";
import Payworks from "@/resources/images/devhacks/2026/Payworks.png";
import G3_2026 from "@/resources/images/devhacks/2026/G3.png";

import Ubisoft2026 from "@/resources/images/devhacks/2026/Ubisoft2026.png";
import Niche2026 from "@/resources/images/devhacks/2026/Niche2026.png";
import Pollard2026 from "@/resources/images/devhacks/2026/Pollard.svg";
import Priceline2026 from "@/resources/images/devhacks/2026/priceline.jpg";
import IG from "@/resources/images/devhacks/2026/IG.png";
import CompSciDept from "@/resources/images/devhacks/2026/CompSciDept.jpeg";
import CanadaLife from "@/resources/images/devhacks/2026/CanadaLife.png";

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
import Niche2024 from "@/resources/images/devhacks/2024/devHacksSponsors/niche.png";
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

type HackathonYearSponsorsProps = { year: string | number };

type Tier = "platinum" | "gold" | "silver" | "bronze" | "inkind";
type Sponsor = { name: string; logo: string };
type YearSponsors = Partial<Record<Tier, Sponsor[]>>;

const TIER_LABEL: Record<Tier, string> = {
  platinum: "Platinum",
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
  inkind: "In-Kind",
};

const TIER_ORDER: Tier[] = ["platinum", "gold", "silver", "bronze", "inkind"];

const HackathonYearSponsors: React.FC<HackathonYearSponsorsProps> = ({
  year,
}) => {
  const sponsorsByYear: Record<string, YearSponsors> = {
    "2026": {
      platinum: [{ name: "QDoc Virtual", logo: Qdoc }],

      gold: [
        { name: "Payworks", logo: Payworks },
        { name: "G3", logo: G3_2026 },
        { name: "Taiv", logo: Taiv },
      ],
      silver: [
        { name: "IG Wealth Management", logo: IG },
        { name: "Ubisoft", logo: Ubisoft2026 },
        { name: "Niche", logo: Niche2026 },
        { name: "Pollard", logo: Pollard2026 },
        { name: "Computer Science Department", logo: CompSciDept },
        { name: "Priceline", logo: Priceline2026 },
      ],
      bronze: [{ name: "Canada Life", logo: CanadaLife }],
    },

    "2025": {
      gold: [{ name: "Glitch Secure", logo: GlitchSecure }],
      silver: [
        { name: "Varian", logo: Varian },
        { name: "Ubisoft", logo: Ubisoft },
        { name: "Niche", logo: Niche2025 },
        { name: "Priceline", logo: Priceline2025 },
        { name: "G3", logo: G3_2025 },
        { name: "Pollard", logo: Pollard2025 },
      ],
      inkind: [
        { name: "SSA", logo: SSA },
        { name: "umsuCares", logo: umsuCares },
        { name: "FOS", logo: FOS },
      ],
    },

    "2024": {
      gold: [{ name: "Priceline", logo: Priceline2024 }],
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
      gold: [{ name: "Neo", logo: Neo }],
      silver: [
        { name: "Payworks", logo: PayWorks },
        { name: "Ubisoft", logo: Ubisoft2023 },
        { name: "Green Umbrella Consulting", logo: GreenUmbrella },
      ],
    },
  };

  const data = sponsorsByYear[String(year)];
  if (!data) return null;

  return (
    <div className="sponsors-container">
      {TIER_ORDER.map((tier) => {
        const list = data[tier];
        if (!list || list.length === 0) return null;

        return (
          <div className={`tier tier--${tier}`} key={tier}>
            <h2 className="tier-title">
              {TIER_LABEL[tier] ?? tier[0].toUpperCase() + tier.slice(1)}
            </h2>
            <div className="tier-logos">
              {list.map((s, i) => (
                <div key={i} className="sponsor">
                  <img src={s.logo} alt={s.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HackathonYearSponsors;
