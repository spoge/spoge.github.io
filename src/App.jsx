import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Terminal from "./components/Terminal";
import TerminalCommand from "./components/TerminalCommand";

const validPaths = ["fun", "/"];
const validPathsAlias = [{ home: "/" }];

const App = ({ history }) => {
  const [terminalHistory, setTerminalHistory] = useState([
    <div>
      Enter <b>help</b> to see all available commands.
    </div>,
  ]);

  const onTerminalEnter = (text) => {
    /**
     * Handling terminal input:
     * 1. Redirect with exact match? (i.e. "/fun" => "/fun")
     * 2. Redirect with alias? (i.e. "/home" => "/")
     * 3. Clear terminal?
     * 4. Cool commands in terminal!
     */
    if (validPaths.includes(text)) {
      history.push(text);
    } else if (
      validPathsAlias.flatMap((entry) => Object.keys(entry)).includes(text)
    ) {
      history.push(validPathsAlias.find((entry) => entry[text])[text]);
    } else if (text === "clear") {
      setTerminalHistory([]);
    } else {
      setTerminalHistory([
        ...terminalHistory,
        <TerminalCommand history={history} text={text} />,
      ]);
    }
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/fun">
          <Fun />
        </Route>
        <Route path="/">
          <Terminal
            terminalHistory={terminalHistory}
            onEnterPress={onTerminalEnter}
          />
        </Route>
      </Switch>
    </div>
  );
};

// Placeholder
const Fun = () => {
  return <div>Cool stuffs and games (maybe later?)!</div>;
};

export default withRouter(App);
