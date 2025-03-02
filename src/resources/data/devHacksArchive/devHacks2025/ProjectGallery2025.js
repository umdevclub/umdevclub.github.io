import { useEffect } from "react";

const DevHacks2025ProjectGallery = () => {
  useEffect(() => {
    window.location.replace(
      "https://devhacks-2025.devpost.com/project-gallery"
    );
  }, []);

  return null;
};

export default DevHacks2025ProjectGallery;
