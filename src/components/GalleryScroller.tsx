import React, { useState } from "react";
import HorizontalScroller from "@/components/HorizontalScroller";
import ImagePreviewModal from "@/components/ImagePreviewModal";

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

      <ImagePreviewModal
        open={open}
        image={
          active
            ? {
                src: active.src,
                alt: active.alt ?? "Event photo",
              }
            : null
        }
        onClose={closeModal}
      />
    </>
  );
};

export default GalleryScroller;
