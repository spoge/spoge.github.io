import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Dnd from "./components/Dnd";
import GbaModdingArticle from "./components/blog/GbaModdingArticle";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/gba-modding" element={<GbaModdingArticle />} />
            <Route path="projects" element={<Projects />} />
            <Route path="dnd" element={<Dnd />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
