// eslint-disable-next-line
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import GithubIcon from "./GithubIcon";
import "./styles/Header.scss";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header-bar">
        <Link to="/">
          <div
            className={`header-logo ${
              location.pathname === "/" ? "selected" : ""
            }`}
          >
            sboge.no
          </div>
        </Link>
        <div className="header-menu">
          <Link to="/blog">
            <div
              className={`header-menu-item ${
                location.pathname.startsWith("/blog") ? "selected" : ""
              }`}
            >
              Blog
            </div>
          </Link>
          <Link to="/projects">
            <div
              className={`header-menu-item ${
                location.pathname.startsWith("/projects") ? "selected" : ""
              }`}
            >
              Projects
            </div>
          </Link>
          <a
            href="https://github.com/spoge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
