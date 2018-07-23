import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import "./Login.css";


class Login extends Component {

    render() {
      return (
        <div>
        <LoginForm username={this.props.username} handleChange={this.props.handleChange} password={this.props.password}/>
        </div>
      );
    }
  }
  
  export default Login;