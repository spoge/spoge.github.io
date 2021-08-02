// eslint-disable-next-line
import react from "react";
import Image from "../components/article/Image";
import "../components/article/Article.css";

const Outro = () => (
  <div>
    <h3>The Ultimate GBA</h3>
    <p>
      It's alive!
    </p>
    <Image
      path="images/gba_done.jpeg"
      alt="the ultimate gba"
    />
    <p>Though not the easiest job, it was certainly worth it. With a magnificent shell, a beautiful screen, and excellent audio, I think I will take a nostalgia trip down memory lane now.</p>
  </div>
);

export default Outro;