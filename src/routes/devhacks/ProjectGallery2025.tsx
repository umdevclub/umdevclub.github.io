import { useEffect } from "react";

export default function DevHacks2025ProjectGallery() {
  useEffect(() => {
    window.location.replace(
      "https://devhacks-2025.devpost.com/project-gallery"
    );
  }, []);

  return null;
}
