import React, { useEffect, useRef, useState } from "react";
import "./Terminal.css";

const Terminal = () => {
  const terminalInput = useRef(null);
  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const [isBlink, setIsBlink] = useState(false);
  const [haveRecentlyTyped, setHaveRecentlyTyped] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    terminalInput.current.focus();
    return () => {};
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTerminalFocused && !haveRecentlyTyped) {
        setIsBlink(!isBlink);
      } else {
        setIsBlink(true);
      }
      if (haveRecentlyTyped) {
        setHaveRecentlyTyped(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [haveRecentlyTyped, isBlink, isTerminalFocused]);

  return (
    <div
      className="terminal"
      onClick={() => {
        terminalInput.current.focus();
      }}
    >
      <div className="terminal-arrow">></div>
      <input
        ref={terminalInput}
        className="terminal-window"
        type="text"
        maxLength="25"
        autoFocus={true}
        onFocus={() => {
          setIsTerminalFocused(true);
          setIsBlink(false);
        }}
        onBlur={() => setIsTerminalFocused(false)}
        onChange={(e) => {
          setInputText(e.target.value);
          setHaveRecentlyTyped(true);
          setIsBlink(true);
        }}
      />
      <div className="terminal-text">{inputText}</div>
      <div className={`cursor ${!isBlink ? "hide" : ""}`}></div>
    </div>
  );
};

export default Terminal;
