import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            label="email"
            name="email"
            handleChange={this.handleChange}
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="password"
            name="password"
            handleChange={this.handleChange}
            type="password"
            value={this.state.password}
            required
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignIn
