import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Animals from './Animals'
import Home from './Home'
import Layout from './Layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/animals" component={Animals} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
