import "@/styles/header.css"
import devclub from '@/resources/images/devClub_Logo.svg';
import { NavLink } from "react-router-dom";

function Header() {
    let toggled = false;
    const things = ["badge", "strip", "header"]; 
    const toggleNav = () => {
        if(window.screen.availWidth < 600){
            if(!toggled){
                for(let thing of things)
                    document.getElementsByClassName(thing)[0].classList.add("toggled" + thing)
                
                document.getElementsByClassName("strip")[0].style.visibility = "visible";
                toggled = true;
            } else {
                for(let thing of things)
                document.getElementsByClassName(thing)[0].classList.remove("toggled" + thing)
                document.getElementsByClassName("strip")[0].style.visibility = "hidden";
                toggled = false;
            }
        }
    }

    return (
        <div className="header">
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
            <div className="badge" onClick={toggleNav}>
                <img src={devclub} alt=".devClub logo" />
            </div>
        </div>
    );
}

export default Header;