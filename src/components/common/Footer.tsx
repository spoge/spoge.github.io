import React from "react";
import "./Footer.css";

const Footer = () => {
  const getThisYear = () => new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-text">© 2018-{getThisYear()} sboge.no</div>
      </div>
    </div>
  );
};

export default Footer;
