import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import articleContent from './article-content';
import ArticlesList from "../components/ArticlesList";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);
  const relatedArticles = articleContent.filter(article => article.name !== name);

  const [articleInfo, setArticleInfo] = useState({ votes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };

    fetchData();
  }, [name]);

  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <p>This post has been voted {articleInfo.votes} times.</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h2 className="h3">Related Articles</h2>
      <ArticlesList articles={relatedArticles} gridView={true} />
    </>
  )
};

export default ArticlePage;