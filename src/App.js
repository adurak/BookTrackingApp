import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => ()} />
        <Route path="/search" render={() => ()} />
      </div>
    );
  }
}

export default BooksApp;
