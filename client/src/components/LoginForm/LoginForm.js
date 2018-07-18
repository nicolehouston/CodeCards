import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";
import "./LoginForm.css";

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
    },
    input: {
      display: 'none',
    }
  });

class TextFields extends React.Component {
  
  state = {
    username: '',
    password: ''
  }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    handleLogin = () => {
      if (this.state.username && this.state.password) {
        API.saveUser({
          username: this.state.username,
          password: this.state.password
        })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off">
        <div><h1>&lt;MyCodeCard/&gt;</h1></div>
        <div className={"logIn"}>
        <h2>Login</h2>
          <div className={"divCenter"}><TextField
          required
            id="username"
            label="username"
            className={classes.textField}
            value={this.state.username}
            onChange={this.handleChange('username')}
            margin="normal"
          /></div>
          <div className={"divCenter2"}><TextField
            required
            id="password-input"
            label="Password"
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChange('password')}
            type="password"
            autoComplete="current-password"
            margin="normal"
          /></div>
          <div className={"btnCenter"}>
          <Button variant="contained" color="secondary" onClick={this.handleLogin} className={classes.button}>
            Login
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
  
  export default withStyles(styles)(TextFields);