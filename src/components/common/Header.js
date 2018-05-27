import React, {PropTypes} from 'react';

const Header = () => {
  return (
    <nav className="navbar has-shadow is-black columns is-centered" role = "navigation" aria-label= "main navigation" >
      <div className="navbar-item">
          <h1 className="title has-text-white has-text-weight-bold">Lunch Tyme</h1>
      </div>
    </nav>
  )
}

export default Header;
