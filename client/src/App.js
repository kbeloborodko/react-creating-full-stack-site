import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="wrapper">
      <header className="jumbotron text-center mb-0">
        <h1>My Blog</h1>
      </header>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article-page/:name" component={ArticlePage} />
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
