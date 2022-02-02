import "@/styles/header.css"
import devclub from '@/resources/images/devClub_Logo.svg';

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
                <div className="head-item active"> ABOUT </div>
                <div className="head-item"> EVENTS </div>
                <div className="head-item"> DEVCHAMPS </div>
                <div className="head-item"> CONTACT </div>
            </div>
            <div className="badge" onClick={toggleNav}>
                <img src={devclub} alt=".devClub logo" />
            </div>
        </div>
    );
}

export default Header;