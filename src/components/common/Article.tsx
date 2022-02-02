import React from "react";
import "./styles/Article.scss";

interface Props {
  children: React.ReactNode;
  size?: string;
}

const Article = ({ children, size = "normal" }: Props) => {
  return <div className={`article ${size}`}>{children}</div>;
};

export default Article;
