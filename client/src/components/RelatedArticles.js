import React from 'react';
import ArticlesList from './ArticlesList';

const RelatedArticles = ({ articles }) => (
  <>
    <h2>Related Articles</h2>
    <ArticlesList articles={articles} gridView={true} />
  </>
);

export default RelatedArticles;