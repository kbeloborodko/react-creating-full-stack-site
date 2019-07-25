import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const relatedArticles = articleContent.filter(article => article.name !== name);

  const [articleInfo, setArticleInfo] = useState({
    name: '',
    content: [],
    comments: [],
    votes: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();

      setArticleInfo(body);
    };

    fetchData();
  }, [name]);

  if (!articleInfo) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{articleInfo.name}</h1>
      <p>This post has been voted {articleInfo.votes} times.</p>
      {articleInfo.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h2 className="h3">Related Articles</h2>
      <ArticlesList articles={relatedArticles} gridView={true} />
    </>
  )
};

export default ArticlePage;