import React, { Component } from 'react'
import Layout from './Layout'
import Animals from './Animals'

class App extends Component {
  render() {
    return (
      <Layout>
        <Animals />
      </Layout>
    )
  }
}

export default App
