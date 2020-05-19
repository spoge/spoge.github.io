import React, { useEffect, useRef, useState } from "react";
import "./Terminal.css";
import TerminalArrow from "./TerminalArrow";

const Terminal = ({ displayHistory, inputHistory, onEnterPress }) => {
  const terminalInput = useRef(null);

  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [haveRecentlyTyped, setHaveRecentlyTyped] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputHistoryIndex, setInputHistoryIndex] = useState(
    inputHistory.length
  );

  // Automatically focus on terminal input
  useEffect(() => {
    terminalInput.current.focus();
    return () => {};
  }, []);

  // Scroll to bottom when displayHistory is updated
  useEffect(() => {
    terminalInput.current.scrollIntoView();
  }, [displayHistory]);

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

  // When any key is pressed
  const handleKeyDown = (e) => {
    switch (e.key) {
      // commit inputted command
      case "Enter":
        onEnterPress(inputText.toLowerCase());
        setInputText("");
        setInputHistoryIndex(inputHistory.length + 1);
        terminalInput.current.value = "";
        break;
      // go back through input history
      case "ArrowUp":
        let newArrowUpIndex = inputHistoryIndex - 1;
        if (inputHistory.length === 0) {
          break;
        } else if (newArrowUpIndex < 0) {
          setInputText(inputHistory[0]);
          setInputHistoryIndex(0);
          terminalInput.current.value = inputHistory[0];
        } else {
          setInputText(inputHistory[newArrowUpIndex]);
          setInputHistoryIndex(newArrowUpIndex);
          terminalInput.current.value = inputHistory[newArrowUpIndex];
        }
        break;
      // go forward through input history
      case "ArrowDown":
        let newArrowDownIndex = inputHistoryIndex + 1;
        if (newArrowDownIndex > inputHistory.length - 1) {
          setInputText("");
          setInputHistoryIndex(inputHistory.length);
          terminalInput.current.value = "";
        } else {
          setInputText(inputHistory[newArrowDownIndex]);
          setInputHistoryIndex(newArrowDownIndex);
          terminalInput.current.value = inputHistory[newArrowDownIndex];
        }
        break;

      case "ArrowLeft":
      case "ArrowRight":
        // TODO: Update caret position
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="terminal-wrapper"
      onClick={() => {
        terminalInput.current.focus();
      }}
    >
      <div className="crt-lines"></div>
      <div className="radial-background"></div>
      <div className="terminal">
        <div className="terminal-content">
          {displayHistory.map((entry, index) => (
            <div key={index} className="terminal-entry">
              {entry}
            </div>
          ))}
        </div>
        <div className="terminal-input">
          <TerminalArrow
            text={inputText}
            paddingBottom={false}
            isCaretEnabled={isFlashing}
          />
          <input
            ref={terminalInput}
            className="terminal-input-window"
            type="text"
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
        </div>
      </div>
    </div>
  );
};

export default Terminal;
