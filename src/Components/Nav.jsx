import logo from "../assets/2.svg";
import "./Nav.css";
import Compass from "./Compass";



function Nav() {
  return (
    <nav>
      <div className="nav__logo">
        <img src={logo} alt="Logo" />
      </div>

      <span className="nav__mark"><Compass /></span>

      <ul className="nav__links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
    <a
  href="/Sarah_Rivera_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;