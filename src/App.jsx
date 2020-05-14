import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Terminal from "./components/Terminal";
import TerminalCommand from "./components/TerminalCommand";

const validPaths = ["fun"];

const App = ({ history }) => {
  const [terminalHistory, setTerminalHistory] = useState([
    <div>
      Enter <b>help</b> to see all available commands.
    </div>,
  ]);

  const onTerminalEnter = (text) => {
    /**
     * Handling terminal input:
     * 1. Redirect?
     * 2. Clear terminal?
     * 3. Cool commands in terminal!
     */
    if (validPaths.includes(text)) {
      history.push(text);
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
        <Route>
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
