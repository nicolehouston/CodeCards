import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";
import "./LoginForm.css";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing.unit,
      color: '#0067B2',
      fontFamily: 'Quicksand',
    },
    input: {
      display: 'none',
    }
  });

class TextFields extends React.Component {

    handleRegister = () => {
      const newUser = {
        username: this.props.username,
        password: this.props.password
      }
      API.getUserbyName(newUser.username).then(res => {
        if(res.data.length !== 0) {
          alert("Sorry, this username is already taken");
        }
        else if(this.props.username.length < 4) {
          alert("Username must contain at least 4 characters.");
        }
        else if(this.props.password.length < 8) {
          alert("Password must contain at least 8 characters.")
        }
        else {
         API.saveUser(newUser)
        .then(res => {
          localStorage.setItem("username", newUser.username);
          localStorage.setItem("isLoggedin", "true");
          this.props.history.push("/")
          }
        )
        .catch(err => console.log(err));
        }
      })
    };


    handleLogin = () => {
      const passwordToCheck = this.props.password;
      const username = this.props.username;
      API.getUserbyName(this.props.username).then(res => {
        if(res.data.length === 0) {
          alert("This user does not exist.");
        }
        else if(passwordToCheck !== res.data[0].password) {
          alert("Inocorrect Password");
        }
        else if(username === res.data[0].username && passwordToCheck === res.data[0].password){
          localStorage.setItem("username", username);
          localStorage.setItem("isLoggedin", "true");
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err)); 
    
    }


    render() {
      const { classes } = this.props;
  
      return (

        <form className={classes.container} noValidate autoComplete="off">
        <div className={"typewriter"}><h1>&lt;MyCodeCard/&gt;</h1></div>
        <div className={"logIn"}>
        <h2>Login</h2>
          <div className={"divCenter"}><TextField
          required
            id="username"
            label="username"
            className={classes.textField}
            value={this.props.username}
            onChange={this.props.handleChange('username')}
            margin="normal"
          /></div>
          <div className={"divCenter2"}><TextField
            required
            id="password-input"
            label="Password"
            className={classes.textField}
            value={this.props.password}
            onChange={this.props.handleChange('password')}
            type="password"
            autoComplete="current-password"
            margin="normal"
          /></div>
          <div className={"btnCenter"}>
          <Button variant="contained" color="" onClick={this.handleLogin} className={classes.button}>
            Login
          </Button>
          <Button variant="contained" color="" onClick={this.handleRegister} className={classes.button}>
            Register
          </Button>
          </div>
          </div>
        </form>
      );
    }
  }
  
  TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(withStyles(styles)(TextFields));