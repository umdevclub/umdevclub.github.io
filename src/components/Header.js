import "@/styles/header.css";
import devclub from "@/resources/images/devClub_Logo.svg";

import classNames from "classnames";
import { NavLink } from "react-router-dom";
import useToggle from "@/hooks/useToggle";

function Header() {
  let [toggled, toggleNav] = useToggle(false);
  return (
    <div
      className={classNames({
        header: true,
        toggled: toggled,
      })}
    >
      <div className="strip">
        <NavLink to="/about" activeClassName="active">
          <div className="head-item"> ABOUT </div>
        </NavLink>

        <NavLink to="/events" activeClassName="active">
          <div className="head-item"> EVENTS </div>
        </NavLink>

        <NavLink to="/devchamps" activeClassName="active">
          <div className="head-item"> DEVCHAMPS </div>
        </NavLink>

        <NavLink to="/contact" activeClassName="active">
          <div className="head-item"> CONTACT </div>
        </NavLink>
      </div>
      <div
        className="badge"
        onClick={() => window.screen.availWidth < 600 && toggleNav()}
      >
        <img src={devclub} alt=".devClub logo" />
      </div>
    </div>
  );
}

export default Header;
