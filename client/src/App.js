import React, { Component } from 'react'
import axios from 'axios'
import Login from './components/Login'

class App extends Component {
  constructor() {
    super()
    this.state = {
      restricted: {}
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/restricted/data')
      .then(response => response.data)
      .then(data => {
        this.setState({ restricted: data })
        console.log(this.state.restricted)
      })
      .catch(error => console.log('GET Error: ', error))
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default App
