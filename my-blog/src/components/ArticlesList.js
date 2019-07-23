import React from 'react';
import Article from './Article';
import articleContent from '../pages/article-content';

const articlesList = () => (
  <>
    {articleContent.map((article, key) => (
      <Article key={key} article={article} />
    ))}
  </>
);

export default articlesList;