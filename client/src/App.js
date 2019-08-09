import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'

import FormikLogin from './components/Registration'
import Display from './components/Display'

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/restricted/data')
      .then(response => response.data)
      .then(data => {
        this.setState({ recipes: data })
        console.log(this.state.recipes)
      })
      .catch(error => console.log('GET Error: ', error))
  }

  render() {
    return (
      <div className="App">
        <FormikLogin />
        <Card.Group className="recipe-cards" itemsPerRow={3}>
          {Object.keys(this.state.recipes).map((recipe, index) => (
            <Display key={index} recipe={this.state.recipes[recipe]} />
          ))}
        </Card.Group>
      </div>
    )
  }
}

export default App
