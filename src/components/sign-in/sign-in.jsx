import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButon from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButon type="submit">Sign in</CustomButon>
            <CustomButon onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButon>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
