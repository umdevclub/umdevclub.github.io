import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    window.location.replace(
      "https://devhacks-2026.devpost.com/project-gallery"
    );
  }, []);

  return null;
};

export default Gallery;
