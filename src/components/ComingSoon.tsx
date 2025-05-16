import logo from "@/resources/images/devclub-logo.png";
import "@/styles/ComingSoon.css";

import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <header className="coming-soon-content">
        <img src={logo} className="devclub-logo" alt="logo" />
        <p>
          Under construction...
          <br />
          But for now, check out <Link to="/devchamps">.DevChamps</Link>!
        </p>
      </header>
    </div>
  );
}

export default ComingSoon;
