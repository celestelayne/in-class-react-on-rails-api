import React from 'react'

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
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Create Movie
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
