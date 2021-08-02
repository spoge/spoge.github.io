import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Background from "./components/common/Background";
import Blog from "./components/blog/Blog";
import Card from "./components/card/Card";
import Projects from "./components/projects/Projects";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Route exact path="/">
            <Link to="/blog">
              <Card
                image={`${process.env.PUBLIC_URL}/img/icons/blog_icon.png`}
                title="Blog"
                text="This is my personal tech blog. Contains a guide to create an ultimate modded GBA."
              />
            </Link>
            <Link to="/projects">
              <Card
                title="Projects"
                text="Some personal projects and games. Including a terminal, Game of Life and Pokémon."
                image={`${process.env.PUBLIC_URL}/img/icons/projects_icon.png`}
                circularImage={false}
              />
            </Link>
            <Background
              image={`${process.env.PUBLIC_URL}/img/bg/gba_background.jpeg`}
            />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/projects">
            <Projects />
            <Background
              image={`${process.env.PUBLIC_URL}/img/bg/gba_background.jpeg`}
            />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
