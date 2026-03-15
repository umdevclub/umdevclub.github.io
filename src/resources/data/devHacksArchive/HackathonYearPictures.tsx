import React, { useState } from "react";
import HorizontalScroller from "@/components/HorizontalScroller";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import "@/styles/pictures.scss";

//2026 images
import P2026_1 from "@/resources/images/devhacks/2026/pictures/2026_1.png";
import P2026_2 from "@/resources/images/devhacks/2026/pictures/2026_2.png";
import P2026_3 from "@/resources/images/devhacks/2026/pictures/2026_3.png";
import P2026_4 from "@/resources/images/devhacks/2026/pictures/2026_4.png";
import P2026_5 from "@/resources/images/devhacks/2026/pictures/2026_5.png";
import P2026_6 from "@/resources/images/devhacks/2026/pictures/2026_6.png";
import P2026_8 from "@/resources/images/devhacks/2026/pictures/2026_8.png";
import P2026_9 from "@/resources/images/devhacks/2026/pictures/2026_9.png";
import P2026_10 from "@/resources/images/devhacks/2026/pictures/2026_10.png";
import P2026_11 from "@/resources/images/devhacks/2026/pictures/2026_11.png";
import P2026_12 from "@/resources/images/devhacks/2026/pictures/2026_12.png";
import P2026_13 from "@/resources/images/devhacks/2026/pictures/2026_13.png";
import P2026_14 from "@/resources/images/devhacks/2026/pictures/2026_14.png";
import P2026_15 from "@/resources/images/devhacks/2026/pictures/2026_15.png";
import P2026_16 from "@/resources/images/devhacks/2026/pictures/2026_16.png";
import P2026_17 from "@/resources/images/devhacks/2026/pictures/2026_17.png";
import P2026_18 from "@/resources/images/devhacks/2026/pictures/2026_18.png";
import P2026_19 from "@/resources/images/devhacks/2026/pictures/2026_19.png";
import P2026_20 from "@/resources/images/devhacks/2026/pictures/2026_20.png";

// 2024 images
import P2024_1 from "@/resources/images/devhacks/2024/pictures/2024_1.png";
import P2024_2 from "@/resources/images/devhacks/2024/pictures/2024_2.png";
import P2024_3 from "@/resources/images/devhacks/2024/pictures/2024_3.png";
import P2024_4 from "@/resources/images/devhacks/2024/pictures/2024_4.png";
import P2024_5 from "@/resources/images/devhacks/2024/pictures/2024_5.png";
import P2024_6 from "@/resources/images/devhacks/2024/pictures/2024_6.png";
import P2024_7 from "@/resources/images/devhacks/2024/pictures/2024_7.png";
import P2024_8 from "@/resources/images/devhacks/2024/pictures/2024_8.png";
import P2024_9 from "@/resources/images/devhacks/2024/pictures/2024_9.png";
import P2024_10 from "@/resources/images/devhacks/2024/pictures/2024_10.png";
import P2024_11 from "@/resources/images/devhacks/2024/pictures/2024_11.png";
import P2024_12 from "@/resources/images/devhacks/2024/pictures/2024_12.png";

// 2025 images
import P2025_1 from "@/resources/images/devhacks/2025/pictures/2025_1.png";
import P2025_2 from "@/resources/images/devhacks/2025/pictures/2025_2.png";
import P2025_3 from "@/resources/images/devhacks/2025/pictures/2025_3.png";
import P2025_4 from "@/resources/images/devhacks/2025/pictures/2025_4.png";
import P2025_5 from "@/resources/images/devhacks/2025/pictures/2025_5.png";
import P2025_6 from "@/resources/images/devhacks/2025/pictures/2025_6.png";
import P2025_7 from "@/resources/images/devhacks/2025/pictures/2025_7.png";
import P2025_8 from "@/resources/images/devhacks/2025/pictures/2025_8.png";
import P2025_9 from "@/resources/images/devhacks/2025/pictures/2025_9.png";
import P2025_10 from "@/resources/images/devhacks/2025/pictures/2025_10.png";
import P2025_11 from "@/resources/images/devhacks/2025/pictures/2025_11.png";
import P2025_12 from "@/resources/images/devhacks/2025/pictures/2025_12.png";
import P2025_13 from "@/resources/images/devhacks/2025/pictures/2025_13.png";
import P2025_14 from "@/resources/images/devhacks/2025/pictures/2025_14.png";
import P2025_15 from "@/resources/images/devhacks/2025/pictures/2025_15.png";
import P2025_16 from "@/resources/images/devhacks/2025/pictures/2025_16.png";

//2023 Images
import P2023_1 from "@/resources/images/devhacks/2023/pictures/P2023_1.jpg";
import P2023_2 from "@/resources/images/devhacks/2023/pictures/P2023_2.jpg";
import P2023_3 from "@/resources/images/devhacks/2023/pictures/P2023_3.jpg";
import P2023_4 from "@/resources/images/devhacks/2023/pictures/P2023_4.jpg";
import P2023_5 from "@/resources/images/devhacks/2023/pictures/P2023_5.jpg";
import P2023_6 from "@/resources/images/devhacks/2023/pictures/P2023_6.jpg";
import P2023_7 from "@/resources/images/devhacks/2023/pictures/P2023_7.jpg";
import P2023_8 from "@/resources/images/devhacks/2023/pictures/P_2023_8.jpg";
import P2023_9 from "@/resources/images/devhacks/2023/pictures/P2023_9.jpg";

type HackathonYearPicturesProps = {
  year: string | number;
};

const HackathonYearPictures: React.FC<HackathonYearPicturesProps> = ({
  year,
}) => {
  const pictures: Record<string, { src: string; alt: string }[]> = {
    "2023": [
      { src: P2023_1, alt: "devHacks 2023 photo 1" },
      { src: P2023_2, alt: "devHacks 2023 photo 2" },
      { src: P2023_3, alt: "devHacks 2023 photo 3" },
      { src: P2023_4, alt: "devHacks 2023 photo 4" },
      { src: P2023_5, alt: "devHacks 2023 photo 5" },
      { src: P2023_6, alt: "devHacks 2023 photo 6" },
      { src: P2023_7, alt: "devHacks 2023 photo 7" },
      { src: P2023_8, alt: "devHacks 2023 photo 8" },
      { src: P2023_9, alt: "devHacks 2023 photo 9" },
    ],
    "2024": [
      { src: P2024_1, alt: "devHacks 2024 photo 1" },
      { src: P2024_2, alt: "devHacks 2024 photo 2" },
      { src: P2024_3, alt: "devHacks 2024 photo 3" },
      { src: P2024_4, alt: "devHacks 2024 photo 4" },
      { src: P2024_5, alt: "devHacks 2024 photo 5" },
      { src: P2024_6, alt: "devHacks 2024 photo 6" },
      { src: P2024_7, alt: "devHacks 2024 photo 7" },
      { src: P2024_8, alt: "devHacks 2024 photo 8" },
      { src: P2024_9, alt: "devHacks 2024 photo 9" },
      { src: P2024_10, alt: "devHacks 2024 photo 10" },
      { src: P2024_11, alt: "devHacks 2024 photo 11" },
      { src: P2024_12, alt: "devHacks 2024 photo 12" },
    ],
    "2025": [
      { src: P2025_1, alt: "devHacks 2025 photo 1" },
      { src: P2025_2, alt: "devHacks 2025 photo 2" },
      { src: P2025_3, alt: "devHacks 2025 photo 3" },
      { src: P2025_4, alt: "devHacks 2025 photo 4" },
      { src: P2025_5, alt: "devHacks 2025 photo 5" },
      { src: P2025_6, alt: "devHacks 2025 photo 6" },
      { src: P2025_7, alt: "devHacks 2025 photo 7" },
      { src: P2025_8, alt: "devHacks 2025 photo 8" },
      { src: P2025_9, alt: "devHacks 2025 photo 9" },
      { src: P2025_10, alt: "devHacks 2025 photo 10" },
      { src: P2025_11, alt: "devHacks 2025 photo 11" },
      { src: P2025_12, alt: "devHacks 2025 photo 12" },
      { src: P2025_13, alt: "devHacks 2025 photo 13" },
      { src: P2025_14, alt: "devHacks 2025 photo 14" },
      { src: P2025_15, alt: "devHacks 2025 photo 15" },
      { src: P2025_16, alt: "devHacks 2025 photo 16" },
    ],
    "2026": [
      { src: P2026_1, alt: "devHacks 2026 photo 1" },
      { src: P2026_2, alt: "devHacks 2026 photo 2" },
      { src: P2026_3, alt: "devHacks 2026 photo 3" },
      { src: P2026_5, alt: "devHacks 2026 photo 5" },
      { src: P2026_12, alt: "devHacks 2026 photo 12" },
      { src: P2026_4, alt: "devHacks 2026 photo 4" },
      { src: P2026_6, alt: "devHacks 2026 photo 6" },
      { src: P2026_10, alt: "devHacks 2026 photo 10" },
      { src: P2026_15, alt: "devHacks 2026 photo 15" },
      { src: P2026_9, alt: "devHacks 2026 photo 9" },
      { src: P2026_11, alt: "devHacks 2026 photo 11" },
      { src: P2026_8, alt: "devHacks 2026 photo 8" },
      { src: P2026_13, alt: "devHacks 2026 photo 13" },
      { src: P2026_14, alt: "devHacks 2026 photo 14" },
      { src: P2026_16, alt: "devHacks 2026 photo 16" },
      { src: P2026_17, alt: "devHacks 2026 photo 17" },
      { src: P2026_18, alt: "devHacks 2026 photo 18" },
      { src: P2026_19, alt: "devHacks 2026 photo 19" },
      { src: P2026_20, alt: "devHacks 2026 photo 20" },
    ],
  };

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<typeof pictures["2024"][number] | null>(
    null
  );

  const yearKey = String(year) as keyof typeof pictures;
  const images = pictures[yearKey] || [];

  const handleClose = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <>
      <HorizontalScroller>
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            className="gallery-card"
            onClick={() => {
              setActive(img);
              setOpen(true);
            }}
          >
            <img
              className="gallery-card-media"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          </button>
        ))}
      </HorizontalScroller>

      <ImagePreviewModal open={open} image={active} onClose={handleClose} />
    </>
  );
};

export default HackathonYearPictures;
