import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Background from "./components/common/Background";
import Card from "./components/card/Card";
import GbaArticle from "./components/article/GbaArticle";
import "./App.css";

const Blog = () => {
  return (
    <div className="content">
      <Route exact path="/blog">
        <Link to="/blog/gba-modding">
          {/* <ArticleCard */}
          <Card
            image={`${process.env.PUBLIC_URL}/images/gba_new_shell.jpeg`}
            circularImage={true}
            title="GBA modding!"
            text="Click here to build the ultimate Gameboy Advance."
            onClick={() => {}}
          />
          <Background
            image={`${process.env.PUBLIC_URL}/images/gba_background.jpeg`}
          />
        </Link>
      </Route>
      <Route path="/blog/gba-modding">
        <GbaArticle />
        <Background
          image={`${process.env.PUBLIC_URL}/images/bg_gba_single_wire_blur.jpeg`}
        />
      </Route>
    </div>
  );
};

export default Blog;
