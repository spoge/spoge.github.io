import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import TerminalWindow from "./components/TerminalWindow";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/life">
          <Life />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        {/* <Route path="/terminal">
          <TerminalWindow />
        </Route> */}
        <Route path="/">
          <TerminalWindow />
        </Route>
      </Switch>
    </div>
  );
};

const Life = () => {
  window.location.assign(window.location.origin + "/game-of-life");
  return <div></div>;
};

const Pokemon = () => {
  window.location.assign(window.location.origin + "/pokebox-viewer");
  return <div></div>;
};

export default withRouter(App);
