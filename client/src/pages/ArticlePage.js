import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import Loader from '../components/Loader';
import CommentsList from '../components/CommentsList';
import ArticlesList from '../components/ArticlesList';

class ArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleInfo: {
        title: '',
        content: [],
        comments: [],
        relatedArticles: []
      },
      articleNotFound: false,
      loading: false,
      relatedArticles: []
    }
  }

  componentDidMount() {
    const { name } = this.props.match.params;

    this.setState({ loading: true });

    fetch(`/api/articles`)
      .then(response => response.json())
      .then(data => {
        const articleInfo = data.filter(article => article.name === name);

        if (!articleInfo.length) {
          this.setState({
            articleNotFound: true
          });

          return;
        }

        const relatedArticles = data.filter(article => article.name !== name);

        this.setState({
          articleInfo: articleInfo[0],
          loading: false,
          relatedArticles,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { articleInfo, articleNotFound, loading, relatedArticles } = this.state;

    if (articleNotFound) {
      return <NotFoundPage />;
    }

    if (loading) {
      return <Loader />;
    }

    return (
      <>
        <h1>{articleInfo.title}</h1>
        <p>This post has been voted {articleInfo.votes} times.</p>
        {articleInfo.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments} />
        <h2 className="h3">Related Articles</h2>
        <ArticlesList articles={relatedArticles} gridView={true} />
      </>
    );
  }
}

export default withRouter(ArticlePage);