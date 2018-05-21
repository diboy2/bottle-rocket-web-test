import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar has-shadow" role = "navigation" aria-label = "main navigation" >
      <div className="container" >
        <div className="navbar-brand" >

          <a className="navbar-item" href = "https://bulma.io">
            <h1><strong>Lunch Tyme</strong></h1>
          </a>
          <a role = "button" className="navbar-burger" aria-label = "menu" aria-expanded="false">
            <span aria-hidden = "true" > </span>
            <span aria-hidden = "true" > </span>
            <span aria-hidden = "true" > </span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header;
