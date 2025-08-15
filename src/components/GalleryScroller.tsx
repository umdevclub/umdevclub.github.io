import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import HorizontalScroller from "@/components/HorizontalScroller";

export type GalleryImage = { src: string; alt?: string };

type Props = {
  images: GalleryImage[];
  className?: string;
};

const GalleryScroller: React.FC<Props> = ({ images, className }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryImage | null>(null);

  const openModal = (img: GalleryImage) => {
    setActive(img);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <>
      <HorizontalScroller className={className}>
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            className="gallery-card"
            onClick={() => openModal(img)}
            aria-label={img.alt ?? `Open image ${i + 1}`}
          >
            <img
              className="gallery-card-media"
              src={img.src}
              alt={img.alt ?? `Event photo ${i + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </HorizontalScroller>

      <Modal open={open} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            outline: "none",
            maxWidth: "min(95vw, 1200px)",
            maxHeight: "90vh",
          }}
        >
          {active && (
            <img
              src={active.src}
              alt={active.alt ?? "Event photo"}
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

export default GalleryScroller;
