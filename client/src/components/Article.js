import React from 'react';
import { Link } from 'react-router-dom';

const renderArticleContent = (article, gridView) => {
  if (gridView) {
    return <p>{article.excerpt ? article.excerpt : null}</p>;
  } else {
    return <p>{article.content.length ? article.content[0] : null}</p>;
  }
};

const Article = ({ article, gridView }) => (
  <div className="media mb-4">
    <div className="media-body">
      {gridView ? (
        <h3 className="h4">{article.title}</h3>
      ) : (
        <h2>{article.title}</h2>
      )}
      {renderArticleContent(article, gridView)}
      <Link className="btn btn-info" to={`/article-page/${article.name}`}>
        Read More...
      </Link>
    </div>
  </div>
);

export default Article;
