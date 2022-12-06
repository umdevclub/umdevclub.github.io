import "@/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-text">
        Copyright © {new Date().getFullYear()} University of Manitoba's .devClub
      </h2>
    </footer>
  );
}

export default Footer;
