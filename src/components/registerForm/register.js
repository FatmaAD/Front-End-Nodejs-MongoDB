import React, { Component } from "react";
import { register } from "./../../store/actions/userActions";
import { connect } from "react-redux";

import "./regiser.css";

class RegisterForm extends Component {
  registerHandler = async e => {
    e.preventDefault();
    const {
      username: { value: username },
      email: { value: email },
      password: { value: password }
    } = e.target.elements;
    await this.props.newRegiser({ username, password, email })
    this.props.history.push('/login')
  };

  render() {
    return (
      <div>
        <form className="register-form" onSubmit={this.registerHandler}>
          <label className="label">UserName</label>
          <input className="inputRF" type="text" required="true" name="username" />

          <label className="label">Email</label>
          <input className="inputRF" type="email" required="true" name="email" />

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
    newRegiser: user => dispatch(register(user))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(RegisterForm);
