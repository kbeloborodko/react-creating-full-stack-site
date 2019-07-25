import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
  const [articlesListInfo, setArticlesListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/articles');
      const body = await result.json();

      setArticlesListData(body);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="mb-3">Articles List</h1>
      <ArticlesList articles={articlesListInfo} />
    </>
  )
};

export default ArticlesListPage;