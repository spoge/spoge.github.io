import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./TerminalWindow.css";
import Terminal from "./Terminal";
import TerminalCommand from "./TerminalCommand";

const validPaths = ["blog", "life", "pokemon", "/"];
const validPathsAlias = [
  { home: "/", blog: "blog", conway: "life", pokebox: "pokemon" },
];

const TerminalWindow = ({ history }) => {
  const [inputHistory, setInputHistory] = useState([]);
  const [displayHistory, setDisplayHistory] = useState([
    <div>
      Enter <b>help</b> to see all available commands.
    </div>,
  ]);

  const [brainfuckMode, setBrainfuckMode] = useState(false);

  const onTerminalEnter = (text, ignoreCommand = false) => {
    /**
     * Handling terminal input:
     * 1. Ignore this command?
     * 2. Redirect with exact match? (i.e. "/fun" => "/fun")
     * 3. Redirect with alias? (i.e. "/home" => "/")
     * 4. Clear terminal?
     * 5. Brainfuck interpreter?
     * 6. Cool commands in terminal!
     */
    setInputHistory([...inputHistory, text]);
    if (ignoreCommand) {
      setDisplayHistory([
        ...displayHistory,
        <TerminalCommand
          history={history}
          text={text}
          brainfuckMode={brainfuckMode}
          ignoreCommand={ignoreCommand}
        />,
      ]);
    } else if (validPaths.includes(text)) {
      history.push(text);
    } else if (
      validPathsAlias.flatMap((entry) => Object.keys(entry)).includes(text)
    ) {
      history.push(validPathsAlias.find((entry) => entry[text])[text]);
    } else if (text === "clear") {
      setDisplayHistory([]);
    } else if (text === "brainfuck") {
      setDisplayHistory([
        ...displayHistory,
        <TerminalCommand
          history={history}
          text={text}
          brainfuckMode={!brainfuckMode}
        />,
      ]);
      setBrainfuckMode(!brainfuckMode);
    } else {
      setDisplayHistory([
        ...displayHistory,
        <TerminalCommand
          history={history}
          text={text}
          brainfuckMode={brainfuckMode}
        />,
      ]);
    }
  };

  return (
    <div className="terminal-window">
      <Terminal
        displayHistory={displayHistory}
        inputHistory={inputHistory}
        onEnterPress={onTerminalEnter}
      />
    </div>
  );
};

export default withRouter(TerminalWindow);
