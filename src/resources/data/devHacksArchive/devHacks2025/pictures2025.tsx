import "@/styles/pictures.scss";
import P1 from "@/resources/images/devhacks/2025/pictures/2025_1.png";
import P2 from "@/resources/images/devhacks/2025/pictures/2025_2.png";
import P3 from "@/resources/images/devhacks/2025/pictures/2025_3.png";
import P4 from "@/resources/images/devhacks/2025/pictures/2025_4.png";
import P5 from "@/resources/images/devhacks/2025/pictures/2025_5.png";
import P6 from "@/resources/images/devhacks/2025/pictures/2025_6.png";
import P7 from "@/resources/images/devhacks/2025/pictures/2025_7.png";
import P8 from "@/resources/images/devhacks/2025/pictures/2025_8.png";
import P9 from "@/resources/images/devhacks/2025/pictures/2025_9.png";
import P10 from "@/resources/images/devhacks/2025/pictures/2025_10.png";
import P11 from "@/resources/images/devhacks/2025/pictures/2025_11.png";
import P12 from "@/resources/images/devhacks/2025/pictures/2025_12.png";
import P13 from "@/resources/images/devhacks/2025/pictures/2025_13.png";
import P14 from "@/resources/images/devhacks/2025/pictures/2025_14.png";
import P15 from "@/resources/images/devhacks/2025/pictures/2025_15.png";
import P16 from "@/resources/images/devhacks/2025/pictures/2025_16.png";

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
