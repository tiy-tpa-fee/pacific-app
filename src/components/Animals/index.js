import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Animal from './Animal'
import Details from './Details'

class Animals extends Component {
  state = {
    animals: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animals: [
          { id: 1, name: 'Whales', image: 'http://www.whales.org.au/news/images/humpback-s.jpg' },
          {
            id: 2,
            name: 'Great White Sharks',
            image: 'https://sharkopedia.discovery.com/wp-content/uploads/2015/06/shark-intelligence-2a-550x350.jpg'
          },
          { id: 3, name: 'Porpoise', image: 'http://elelur.com/data_images/mammals/porpoise/porpoise-02.jpg' }
        ]
      })
    }, 500)
  }

  animals() {
    if (this.state.animals.length === 0) {
      return <h2>No Animals Found. Sad.</h2>
    } else {
      // An alternative to:
      //   return animals.map(animal => <li>...</li>) is to extract to it's own component.
      return this.state.animals.map(animal => <Animal {...animal} key={animal.id} />)
    }
  }

  render() {
    return (
      <section>
        <p>Theres are some of the amazing animals in the Pacific Ocean:</p>

        <ul style={{ backgroundColor: 'rgba(1,1,1,0.5)', padding: '1em' }}>
          {this.animals()}
        </ul>

        <Route path="/animals/:slug" component={Details} />
      </section>
    )
  }
}

export default Animals
