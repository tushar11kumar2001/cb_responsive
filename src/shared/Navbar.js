import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="w-screen bg-black text-white navBar">
        <div className="navbar_outer">
          <div className="navbar_left">
            <Link to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{cursor: "pointer"}}><img className="imgLogo" src={Logo} alt="logo..."></img></Link>
          </div>
          <div className="navbar_right font view_mobile">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer text-xl">Home</div>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer">About</div>
            </Link>
            <Link
              to="events"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer">Events</div>
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer">Team</div>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer">
                Contact Us
              </div>
            </Link>
          </div>
          <div className="view">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>

              <ul className="menu__box">
                <li>
                  <Link
                    className="menu__item"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu__item"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu__item"
                    to="events"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu__item"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu__item"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
