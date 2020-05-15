import React from "react";
import "./TerminalArrow.css";

const TerminalArrow = ({ text, paddingBottom = true }) => {
  return (
    <div
      className={`terminal-arrow ${paddingBottom ? "padding-bottom-1-2" : ""}`}
    >
      <div className="terminal-arrow-char">></div>
      <div className="terminal-input-text">{text}</div>
    </div>
  );
};

export default TerminalArrow;
