import React, { Component } from 'react'
import axios from 'axios'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: {}
    }
  }

  componentDidMount() {
    axios
      .post('http://localhost:5000/api/register')
      .then(response => response.data)
      .then(data => {
        this.setState({ auth: data })
        console.log(this.state.auth)
      })
      .catch(error => console.log('Post Error: ', error))
  }
  render() {
    return <div>Hi There!</div>
  }
}

export default Login
