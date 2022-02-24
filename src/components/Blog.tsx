// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import Card from "./common/Card";
import Background from "./common/Background";

const Blog = () => {
  return (
    <>
      <Link to="/blog/gba-modding">
        <Card
          image={`${process.env.PUBLIC_URL}/img/gba-modding/gba_new_shell.jpeg`}
          circularImage={true}
          title="GBA modding!"
          text="Click here to build the ultimate Gameboy Advance."
          onClick={() => {}}
        />
      </Link>
      <Background
        image={`${process.env.PUBLIC_URL}/img/bg/gba_background.jpeg`}
      />
    </>
  );
};

export default Blog;
