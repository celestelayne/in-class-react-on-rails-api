import React from 'react'

const Navbar = () => {
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src="https://image.flaticon.com/icons/png/512/83/83519.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
