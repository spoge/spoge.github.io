import React from "react";
import "./TerminalArrow.css";
import TerminalCaret from "./TerminalCaret";

const TerminalArrow = ({
  text,
  paddingBottom = true,
  isCaretEnabled = false,
}) => {
  return (
    <div
      className={`terminal-arrow ${paddingBottom ? "padding-bottom-1-2" : ""}`}
    >
      <div className="terminal-arrow-char">></div>
      <div className="terminal-input-text">
        {text
          ? [...text].map((char, index) => <span key={index}>{char}</span>)
          : ""}
        <TerminalCaret enabled={isCaretEnabled} />
      </div>
    </div>
  );
};

export default TerminalArrow;
