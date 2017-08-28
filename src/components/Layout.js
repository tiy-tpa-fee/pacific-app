import React from 'react'

const Layout = ({ children }) =>
  <main>
    <header>
      <h1>The Pacific Ocean</h1>
    </header>
    {children}
    <footer>
      <p>&copy; 2017 The Ocho. All Rights Reserved.</p>
    </footer>
  </main>

export default Layout
