import React from "react";
import "@/styles/pictures.scss";
import P1 from "@/resources/images/devhacks/2025/pictures/2025_1.JPG";
import P2 from "@/resources/images/devhacks/2025/pictures/2025_2.JPG";
import P3 from "@/resources/images/devhacks/2025/pictures/2025_3.JPG";
import P4 from "@/resources/images/devhacks/2025/pictures/2025_4.JPG";
import P5 from "@/resources/images/devhacks/2025/pictures/2025_5.JPG";
import P6 from "@/resources/images/devhacks/2025/pictures/2025_6.JPG";
import P7 from "@/resources/images/devhacks/2025/pictures/2025_7.JPG";
import P8 from "@/resources/images/devhacks/2025/pictures/2025_8.JPG";
import P9 from "@/resources/images/devhacks/2025/pictures/2025_9.JPG";
import P10 from "@/resources/images/devhacks/2025/pictures/2025_10.JPG";
import P11 from "@/resources/images/devhacks/2025/pictures/2025_11.JPG";
import P12 from "@/resources/images/devhacks/2025/pictures/2025_12.JPG";
import P13 from "@/resources/images/devhacks/2025/pictures/2025_13.JPG";
import P14 from "@/resources/images/devhacks/2025/pictures/2025_14.JPG";
import P15 from "@/resources/images/devhacks/2025/pictures/2025_15.JPG";
import P16 from "@/resources/images/devhacks/2025/pictures/2025_16.JPG";

const Pictures2025 = () => {
  const imageArray = [
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    P10,
    P11,
    P12,
    P13,
    P14,
    P15,
    P16,
  ];
  return (
    <div className="pictures-container">
      {imageArray.map((image, index) => (
        <div key={index} className="picture">
          <img src={image} alt={`devhacks2025 ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Pictures2025;
