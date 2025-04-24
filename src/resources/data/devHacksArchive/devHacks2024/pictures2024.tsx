import "@/styles/pictures.scss";
import P1 from "@/resources/images/devhacks/2024/pictures/2024_1.png";
import P2 from "@/resources/images/devhacks/2024/pictures/2024_2.png";
import P3 from "@/resources/images/devhacks/2024/pictures/2024_3.png";
import P4 from "@/resources/images/devhacks/2024/pictures/2024_4.png";
import P5 from "@/resources/images/devhacks/2024/pictures/2024_5.png";
import P6 from "@/resources/images/devhacks/2024/pictures/2024_6.png";
import P7 from "@/resources/images/devhacks/2024/pictures/2024_7.png";
import P8 from "@/resources/images/devhacks/2024/pictures/2024_8.png";
import P9 from "@/resources/images/devhacks/2024/pictures/2024_9.png";
import P10 from "@/resources/images/devhacks/2024/pictures/2024_10.png";
import P11 from "@/resources/images/devhacks/2024/pictures/2024_11.png";
import P12 from "@/resources/images/devhacks/2024/pictures/2024_12.png";

const Pictures2024 = () => {
  const imageArray = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12];
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

export default Pictures2024;
