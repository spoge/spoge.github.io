import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import GithubIcon from "./GithubIcon";
import "./styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-bar">
        <Link to="/">
          <div className="header-logo">sboge.no</div>
        </Link>
        <div className="header-menu">
          <Link to="/blog">
            <div className="header-menu-item">Blog</div>
          </Link>
          <Link to="/projects">
            <div className="header-menu-item">Projects</div>
          </Link>
          <Link to={{ pathname: "https://github.com/spoge" }} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
