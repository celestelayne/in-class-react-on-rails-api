import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src="https://image.flaticon.com/icons/png/512/83/83519.png" alt="" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link
            class="navbar-item"
            to={'/'}>Home</Link>

          <Link
            class="navbar-item"
            to={'/create-movie'}>Create Movie</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
