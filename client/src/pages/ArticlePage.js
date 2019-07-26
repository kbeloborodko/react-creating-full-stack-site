import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

import Loader from '../components/Loader';
import VotesSection from '../components/VotesSection';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import ArticlesList from '../components/ArticlesList';

class ArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleInfo: {
        name: '',
        title: '',
        votes: 0,
        content: [],
        comments: [],
        relatedArticles: [],
      },
      articleNotFound: false,
      loading: false,
    };
  }

  fetchArticles = () => {
    const { name } = this.props.match.params;

    this.setState({ loading: true });

    fetch(`/api/articles/${name}`)
      .then(response => response.json())
      .then(articleInfo => {
        if (!articleInfo) {
          this.setState({
            articleNotFound: true,
          });

          return;
        }

        this.setState({
          articleInfo,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  };

  updateVotes = votes => {
    this.setState({
      articleInfo: {
        ...this.state.articleInfo,
        votes,
      },
    });
  };

  updateCommentsList = comments => {
    this.setState({
      articleInfo: {
        ...this.state.articleInfo,
        comments,
      },
    });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.fetchArticles();
    }
  }

  render() {
    const { articleInfo, articleNotFound, loading } = this.state;

    if (articleNotFound) {
      return <NotFoundPage />;
    }

    if (loading) {
      return <Loader />;
    }

    return (
      <>
        <h1>{articleInfo.title}</h1>
        {articleInfo.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        <VotesSection
          articleName={articleInfo.name}
          votes={articleInfo.votes}
          updateVotes={this.updateVotes}
        />
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm
          articleName={articleInfo.name}
          updateCommentsList={this.updateCommentsList}
        />
        <h2 className="h3">Related Articles</h2>
        {articleInfo.relatedArticles.length ? (
          <ArticlesList
            articles={articleInfo.relatedArticles}
            gridView={true}
          />
        ) : null}
      </>
    );
  }
}

export default withRouter(ArticlePage);
