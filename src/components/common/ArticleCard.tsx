import React from "react";
import "./styles/ArticleCard.scss";

interface Props {
  children: React.ReactNode;
  size?: string;
}

const ArticleCard = ({ children, size = "normal" }: Props) => {
  return <div className={`article-card ${size}`}>{children}</div>;
};

export default ArticleCard;
