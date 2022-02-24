import { useState } from "react";
import "./styles/GithubIcon.scss";

const GithubIcon = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="github-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        alt="github-icon"
        className={`github-img${isHovering ? "-hover" : ""} gelatine`}
        src={`${process.env.PUBLIC_URL}/img/icons/GitHub-Mark-Light-64px.png`}
      />
      <div className={`github-label${isHovering ? "-hover" : ""}`}>Github</div>
    </div>
  );
};

export default GithubIcon;
