import React, { useEffect, useRef, useState } from "react";
import "./Terminal.css";

const Terminal = ({ terminalHistory, onEnterPress }) => {
  const terminalInput = useRef(null);

  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [haveRecentlyTyped, setHaveRecentlyTyped] = useState(false);
  const [inputText, setInputText] = useState("");

  // Automatically focus on terminal input
  useEffect(() => {
    terminalInput.current.focus();
    return () => {};
  }, []);

  // Scroll to bottom when terminalHistory is updated
  useEffect(() => {
    terminalInput.current.scrollIntoView();
  }, [terminalHistory]);

  // Flash caret every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTerminalFocused && !haveRecentlyTyped) {
        setIsFlashing(!isFlashing);
      } else {
        setIsFlashing(true);
      }
      if (haveRecentlyTyped) {
        setHaveRecentlyTyped(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [haveRecentlyTyped, isFlashing, isTerminalFocused]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnterPress(inputText.toLowerCase());
      setInputText("");
      terminalInput.current.value = "";
    }
  };

  return (
    <div
      className="terminal"
      onClick={() => {
        terminalInput.current.focus();
      }}
    >
      <div className="terminal-content">
        {terminalHistory.map((entry, index) => (
          <div key={index} className="terminal-entry">
            {entry}
          </div>
        ))}
      </div>
      <div className="terminal-input">
        <div className="terminal-input-arrow">></div>
        <input
          ref={terminalInput}
          className="terminal-input-window"
          type="text"
          maxLength="25"
          autoFocus={true}
          onFocus={() => {
            setIsTerminalFocused(true);
            setIsFlashing(false);
          }}
          onBlur={() => {
            setIsTerminalFocused(false);
            setIsFlashing(true);
          }}
          onChange={(e) => {
            setInputText(e.target.value);
            setHaveRecentlyTyped(true);
            setIsFlashing(true);
          }}
          onKeyDown={handleKeyDown}
        />
        <div className="terminal-input-text">{inputText}</div>
        <div
          className={`terminal-input-cursor ${!isFlashing ? "hide" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default Terminal;
