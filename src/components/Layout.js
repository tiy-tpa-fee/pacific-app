import React from 'react'
import { NavLink } from 'react-router-dom'

const Layout = ({ children }) =>
  <main>
    <header>
      <h1>The Pacific Ocean</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/animals">Animals</NavLink>
      </nav>
    </header>
    {children}
    <footer>
      <p>&copy; 2017 The Ocho. All Rights Reserved.</p>
    </footer>
  </main>

export default Layout
