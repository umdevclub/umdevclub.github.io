import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import HorizontalScroller from "@/components/HorizontalScroller";
import "@/styles/pictures.scss";

import P1 from "@/resources/images/devhacks/general/2024_1.png";
import P2 from "@/resources/images/devhacks/general/2025_1.png";
import P3 from "@/resources/images/devhacks/general/2024_2.png";
import P4 from "@/resources/images/devhacks/general/2025_2.png";
import P5 from "@/resources/images/devhacks/general/2025_4.png";
import P6 from "@/resources/images/devhacks/general/2025_6.png";
import P7 from "@/resources/images/devhacks/general/2024_8.png";
import P8 from "@/resources/images/devhacks/general/2025_8.png";
import P9 from "@/resources/images/devhacks/general/2024_9.png";
import P10 from "@/resources/images/devhacks/general/2024_11.png";
import P11 from "@/resources/images/devhacks/general/2024_12.png";
import P12 from "@/resources/images/devhacks/general/2025_3.png";

export const picturesGeneralImages = [
  { src: P1, alt: "devHacks photo 1" },
  { src: P2, alt: "devHacks photo 2" },
  { src: P3, alt: "devHacks photo 3" },
  { src: P4, alt: "devHacks photo 4" },
  { src: P5, alt: "devHacks photo 5" },
  { src: P6, alt: "devHacks photo 6" },
  { src: P7, alt: "devHacks photo 7" },
  { src: P8, alt: "devHacks photo 8" },
  { src: P9, alt: "devHacks photo 9" },
  { src: P10, alt: "devHacks photo 10" },
  { src: P11, alt: "devHacks photo 11" },
  { src: P12, alt: "devHacks photo 12" },
];

const PicturesGeneral: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<
    typeof picturesGeneralImages[number] | null
  >(null);

  return (
    <>
      <HorizontalScroller>
        {picturesGeneralImages.map((img, i) => (
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

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            maxWidth: "min(95vw, 1200px)",
            maxHeight: "90vh",
            boxShadow: 24,
            outline: "none",
          }}
        >
          {active && (
            <img
              src={active.src}
              alt={active.alt}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                background: "#000",
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default PicturesGeneral;
