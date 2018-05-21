import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>blah blah blah blah blah blah blah blah blah blah blah</p>\
        <Link to="detail" className="btn btn-primary btn-lg"> Learn more </Link>
      </div>
    );
  }
};


