import React, { useContext } from "react";

import { ArticleContext } from "../context/aricleContext";
import Article from "../Article/Article";

const Articles = () => {
  const { articles } = useContext(ArticleContext);
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;