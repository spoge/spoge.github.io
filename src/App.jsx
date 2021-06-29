import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import TerminalWindow from "./components/terminal/TerminalWindow";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
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

const Blog = () => {
  window.location.assign(window.location.origin + "/blog");
  return <div></div>;
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
