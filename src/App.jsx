import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Terminal from "./Terminal";
import TerminalCommand from "./TerminalCommand";

const App = ({ history }) => {
  const [terminalHistory, setTerminalHistory] = useState([
    <div>
      Enter <b>help</b> to see all available commands.
    </div>,
  ]);

  const onTerminalEnter = (text) => {
    if (text.toLowerCase() === "clear") {
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

const Fun = () => {
  return <div>Cool stuffs and games (maybe later?)!</div>;
};

export default withRouter(App);
