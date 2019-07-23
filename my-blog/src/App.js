import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';

function App() {
  return (
    <div className="wrapper">
      <header className="jumbotron text-center mb-0">
        <h1>My Blog</h1>
      </header>
      <Router>
        <NavBar />
        <div className="container">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article-page" component={ArticlePage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
