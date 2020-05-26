import React, { useEffect, useRef, useState } from "react";
import "./Terminal.css";
import TerminalInput from "./TerminalInput";

const Terminal = ({ displayHistory, inputHistory, onEnterPress }) => {
  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [haveRecentlyTyped, setHaveRecentlyTyped] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputHistoryIndex, setInputHistoryIndex] = useState(
    inputHistory.length
  );
  const [caretPosition, setCaretPosition] = useState(0);

  const terminalInput = useRef(null);

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

  const clamp = (value, floor, ceil) => {
    return value < floor ? floor : value > ceil ? ceil : value;
  };

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
        e.preventDefault();
        let newArrowUpIndex = inputHistoryIndex - 1;
        if (inputHistory.length === 0) {
          break;
        } else if (newArrowUpIndex < 0) {
          let newInputText = inputHistory[0];
          setInputText(newInputText);
          setInputHistoryIndex(0);
          terminalInput.current.value = newInputText;
          setCaretPosition(newInputText.length);
        } else {
          let newInputText = inputHistory[newArrowUpIndex];
          setInputText(newInputText);
          setInputHistoryIndex(newArrowUpIndex);
          terminalInput.current.value = newInputText;
          setCaretPosition(newInputText.length);
        }
        break;
      // go forward through input history
      case "ArrowDown":
        e.preventDefault();
        let newArrowDownIndex = inputHistoryIndex + 1;
        if (newArrowDownIndex > inputHistory.length - 1) {
          setInputText("");
          setInputHistoryIndex(inputHistory.length);
          terminalInput.current.value = "";
          setCaretPosition(0);
        } else {
          let newInputText = inputHistory[newArrowDownIndex];
          setInputText(newInputText);
          setInputHistoryIndex(newArrowDownIndex);
          terminalInput.current.value = newInputText;
          setCaretPosition(newInputText.length);
        }
        break;

      case "ArrowLeft":
        e.preventDefault();
        let alc = clamp(
          terminalInput.current.selectionStart - 1,
          0,
          inputText.length
        );
        setCaretPosition(alc);
        terminalInput.current.selectionStart = alc;
        terminalInput.current.selectionEnd = alc;
        break;
      case "ArrowRight":
        e.preventDefault();
        let arc = clamp(
          terminalInput.current.selectionStart + 1,
          0,
          inputText.length
        );
        setCaretPosition(arc);
        terminalInput.current.selectionStart = arc;
        terminalInput.current.selectionEnd = arc;
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
          <TerminalInput
            text={inputText}
            paddingBottom={false}
            isCaretEnabled={isFlashing}
            caretPosition={caretPosition}
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
              setCaretPosition(
                clamp(caretPosition + 1, 0, e.target.value.length)
              );
              setIsFlashing(true);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
              setHaveRecentlyTyped(true);
              setIsFlashing(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
