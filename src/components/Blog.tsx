import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Background from "./common/Background";
import Card from "./common/Card";
import GbaModdingArticle from "./blog/GbaModdingArticle";

const Blog = () => {
  return (
    <div>
      <Route exact path="/blog">
        <Link to="/blog/gba-modding">
          <Card
            image={`${process.env.PUBLIC_URL}/img/gba-modding/gba_new_shell.jpeg`}
            circularImage={true}
            title="GBA modding!"
            text="Click here to build the ultimate Gameboy Advance."
            onClick={() => {}}
          />
          <Background
            image={`${process.env.PUBLIC_URL}/img/bg/gba_background.jpeg`}
          />
        </Link>
      </Route>
      <Route path="/blog/gba-modding">
        <GbaModdingArticle />
        <Background
          image={`${process.env.PUBLIC_URL}/img/bg/gba_wire_blur.jpeg`}
        />
      </Route>
    </div>
  );
};

export default Blog;
