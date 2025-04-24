import "@/styles/pictures.scss";
import P1 from "@/resources/images/devhacks/2025/pictures/2025_1.jpg";
import P2 from "@/resources/images/devhacks/2025/pictures/2025_2.jpg";
import P3 from "@/resources/images/devhacks/2025/pictures/2025_3.jpg";
import P4 from "@/resources/images/devhacks/2025/pictures/2025_4.jpg";
import P5 from "@/resources/images/devhacks/2025/pictures/2025_5.jpg";
import P6 from "@/resources/images/devhacks/2025/pictures/2025_6.jpg";
import P7 from "@/resources/images/devhacks/2025/pictures/2025_7.jpg";
import P8 from "@/resources/images/devhacks/2025/pictures/2025_8.jpg";
import P9 from "@/resources/images/devhacks/2025/pictures/2025_9.jpg";
import P10 from "@/resources/images/devhacks/2025/pictures/2025_10.jpg";
import P11 from "@/resources/images/devhacks/2025/pictures/2025_11.jpg";
import P12 from "@/resources/images/devhacks/2025/pictures/2025_12.jpg";
import P13 from "@/resources/images/devhacks/2025/pictures/2025_13.jpg";
import P14 from "@/resources/images/devhacks/2025/pictures/2025_14.jpg";
import P15 from "@/resources/images/devhacks/2025/pictures/2025_15.jpg";
import P16 from "@/resources/images/devhacks/2025/pictures/2025_16.jpg";

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
