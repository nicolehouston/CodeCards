import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import "./Login.css";


class Login extends Component {

    render() {
      return (
        <div>
        <LoginForm username={this.props.username} password={this.props.password} handleChange={this.props.handleChange}/>
        </div>
      );
    }
  }
  
  export default Login;