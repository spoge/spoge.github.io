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
  const [caretPositionState, setCaretPositionState] = useState(0);

  const terminalInput = useRef(null);

  // Automatically focus on terminal input
  useEffect(() => {
    terminalInput.current.focus();
    return () => {};
  }, []);

  // Scroll to bottom when displayHistory is updated
  useEffect(() => {
    terminalInput.current.scrollIntoView();
  }, [displayHistory, inputText]);

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

  const setInputValue = (text) => {
    setInputText(text);
    terminalInput.current.value = text;
  };

  const setInputValueToHistoryAt = (index) => {
    if (inputHistory.length > 0 && index < inputHistory.length) {
      let historyText = inputHistory[index];
      setInputHistoryIndex(index);
      setInputValue(historyText);
      setCaretPosition(historyText.length);
    } else {
      setInputHistoryIndex(inputHistory.length);
      setInputValue("");
      setCaretPosition(0);
    }
  };

  const setCaretPosition = (newCaretPosition) => {
    setCaretPositionState(newCaretPosition);
    terminalInput.current.selectionStart = newCaretPosition;
    terminalInput.current.selectionEnd = newCaretPosition;
  };

  // When any key is pressed
  const handleKeyDown = (e) => {
    switch (e.key) {
      // commit inputted command
      case "Enter":
        const cmdInput = inputText.toLocaleLowerCase();
        setInputValue("");
        onEnterPress(cmdInput);
        setInputHistoryIndex(inputHistory.length + 1);
        setCaretPosition(0);
        break;
      case "c":
        if (e.ctrlKey) {
          onEnterPress(inputText.toLowerCase(), true);
          setInputHistoryIndex(inputHistory.length + 1);
          setInputValue("");
          setCaretPosition(0);
        }
        break;
      case "Delete":
        e.preventDefault();
        if (caretPositionState >= 0 && caretPositionState < inputText.length) {
          setInputValue(
            inputText.slice(0, caretPositionState) +
              inputText.slice(caretPositionState + 1)
          );
          setCaretPosition(caretPositionState);
        }
        break;
      case "Backspace":
        e.preventDefault();
        if (caretPositionState > 0 && caretPositionState <= inputText.length) {
          setInputValue(
            inputText.slice(0, caretPositionState - 1) +
              inputText.slice(caretPositionState)
          );
          setCaretPosition(caretPositionState - 1);
        }
        break;
      case "Home":
        e.preventDefault();
        setCaretPosition(0);
        break;
      case "End":
        e.preventDefault();
        setCaretPosition(inputText.length);
        break;

      // go back through input history
      case "PageUp":
        e.preventDefault();
        setInputValueToHistoryAt(0);
        break;

      case "PageDown":
        e.preventDefault();
        setInputValueToHistoryAt(inputHistory.length - 1);
        break;

      case "ArrowUp":
        e.preventDefault();
        let newArrowUpIndex = inputHistoryIndex - 1;
        if (inputHistory.length === 0) {
          break;
        } else if (newArrowUpIndex < 0) {
          setInputValueToHistoryAt(0);
        } else {
          setInputValueToHistoryAt(newArrowUpIndex);
        }
        break;
      // go forward through input history
      case "ArrowDown":
        e.preventDefault();
        setInputValueToHistoryAt(inputHistoryIndex + 1);
        break;

      case "ArrowLeft":
        e.preventDefault();
        let alc = clamp(
          terminalInput.current.selectionStart - 1,
          0,
          inputText.length
        );
        setCaretPosition(alc);
        break;
      case "ArrowRight":
        e.preventDefault();
        let arc = clamp(
          terminalInput.current.selectionStart + 1,
          0,
          inputText.length
        );
        setCaretPosition(arc);
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
      <div className="scanline"></div>
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
            caretPosition={caretPositionState}
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
                clamp(caretPositionState + 1, 0, e.target.value.length)
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
