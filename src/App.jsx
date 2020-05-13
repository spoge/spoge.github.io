import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import "./App.css";
import Terminal from "./Terminal";

const validPaths = ["/", "home", "about", "fun"];

const App = ({ history }) => {
  const onTerminalEnter = (text) => {
    if (validPaths.includes(text)) {
      history.push(text);
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-nav-bar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/fun">Fun</Link>
        </div>
        <div className="app-content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/fun">
              <Fun />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
      <Terminal onEnterPress={onTerminalEnter} />
    </div>
  );
};

const Home = () => {
  return <div>This is App. App is cool. Be like App.</div>;
};

const About = () => {
  return <div>I am a programmer. I do computer stuff. I am not robot.</div>;
};

const Fun = () => {
  return <div>Cool stuff!</div>;
};

export default withRouter(App);
