import "./Footer.css";
import Compass from "./Compass";

function Footer() {
  return (
    <footer className="footer">
  <div className="section__divider">
    <span></span>
    <span className="section__divider-mark"><Compass /></span>
    <span></span>
  </div>

  <div className="footer__inner">
    <p className="footer__brand">SRB © 2026</p>

        <div className="footer__links">
          <a href="/Sarah-Rivera-Balcazar-Resume.pdf" target="_blank">
            Résumé
          </a>

          <a href="https://github.com/YOURUSERNAME" target="_blank">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/YOURPROFILE" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;