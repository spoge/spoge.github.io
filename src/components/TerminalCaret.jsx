import React from "react";
import "./TerminalCaret.css";

const TerminalCaret = ({ enabled }) => {
  return (
    <div className={`terminal-input-cursor ${!enabled ? "hide" : ""}`}></div>
  );
};

export default TerminalCaret;
