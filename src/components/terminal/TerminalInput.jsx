import React from "react";
import "./TerminalInput.css";

const TerminalInput = ({
  text,
  paddingBottom = true,
  isCaretEnabled = false,
  caretPosition,
}) => {
  return (
    <div
      className={`terminal-input ${paddingBottom ? "padding-bottom-1-2" : ""}`}
    >
      <div className="terminal-input-arrow">></div>
      <div className="terminal-input-text">
        {text
          ? [...text].map((char, index) => (
              <span
                className={`terminal-char ${
                  isCaretEnabled && index === caretPosition
                    ? "show-caret-on-char"
                    : ""
                }`}
                key={index}
              >
                {char}
              </span>
            ))
          : ""}
        <span
          className={`terminal-char ${
            isCaretEnabled && caretPosition === text.length
              ? "show-caret-on-char"
              : ""
          }`}
        >
          {" "}
        </span>
      </div>
    </div>
  );
};

export default TerminalInput;
