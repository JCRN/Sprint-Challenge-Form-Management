import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

import Display from './Display'

const Registration = ({ errors, touched, isSubmitting, status }) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    if (status) {
      setRecipes([status])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <div className="registration-form">
      <h1>register</h1>
      <Form>
        <Field type="text" name="username" placeholder="Name" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          Submit!
        </button>
      </Form>
      {recipes.map(recipe => (
        <Display key={recipe.name} recipe={recipe} />
      ))}
    </div>
  )
}

const FormikRegistration = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '' //
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(5, 'Password must be 5 characters or longer')
      .required('Password is required')
  }),

  handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
    axios
      .post('http://localhost:5000/api/register', values)
      .then(results => {
        console.log('POST results: ', results.data)
        setStatus(results.data)
        resetForm()
        setSubmitting(false)
      })
      .catch(error => console.log('POST Error: ', error.response))
  }
})(Registration)

export default FormikRegistration
