import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./NavBar.css";
import Drawer from "../Drawer";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    fontFamily: 'Quicksand',
    textAlign: 'left',
  },
  login: {
    fontFamily: 'Quicksand',
  }
};

function ButtonAppBar(props) {
  const { classes } = props;

  let button;

  if(localStorage.getItem("isLoggedin") === "true") {
    button = <Button color="inherit" href="/login" >Logout</Button>
  }
  else {
    button = <Button color="inherit" href="/login">Login</Button>
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={"navy"}>
        <Drawer className={"menu"}/>
          <Typography variant="title" color="inherit" className={classes.flex}>
          &lt;MyCodeCard/&gt;
          </Typography>
          {button}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

