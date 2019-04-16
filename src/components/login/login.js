import React, { Component } from "react";
import { login } from "./../../store/actions/userActions";
import { connect } from "react-redux";
import "./regiser.css";

class LoginForm extends Component {
  loginHandler = async e => {
    e.preventDefault();
    const {
      username: { value: username },
      password: { value: password }
    } = e.target.elements;
    await this.props.login({username,password})
    this.props.history.push('/')
    
  };

  render() {
    return (
      <div>
        <form className="register-form" onSubmit={this.loginHandler}>
          <label className="label">UserName</label>
          <input className="inputRF" type="text" required="true" name="username" />

          <label className="label">Password</label>
          <input className="inputRF" type="password" required="true" name="password" />

          <button className="btn--primary" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: credentials => dispatch(login(credentials))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
