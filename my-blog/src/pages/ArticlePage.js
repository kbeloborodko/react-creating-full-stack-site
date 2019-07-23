import React from 'react';
import RelatedArticles from '../components/RelatedArticles';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);
  const relatedArticles = articleContent.filter(article => article.name !== name);

  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <RelatedArticles articles={relatedArticles} />
    </>
  )
};

export default ArticlePage;