import React from "react";
import { Modal, Box } from "@mui/material";

type ImagePreviewModalProps = {
  open: boolean;
  image: {
    src: string;
    alt: string;
  } | null;
  onClose: () => void;
};

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  open,
  image,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90vw",
          maxHeight: "90dvh",
          width: "auto",
          height: "auto",
          p: 1,
          boxShadow: 24,
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            style={{
              display: "block",
              maxWidth: "90vw",
              maxHeight: "90dvh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              background: "#000",
            }}
          />
        )}
      </Box>
    </Modal>
  );
};

export default ImagePreviewModal;
