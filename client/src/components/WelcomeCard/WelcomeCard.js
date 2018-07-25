import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./WelcomeCard.css";

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div className={"buffer"}>
      <div className={"typewriter"}><h1>&lt;MyCodeCard/&gt;</h1></div>
      <div className={"intro"} variant="headline">Organized learning for a not so organized world.</div>
              <div className={"introBtn"}>
                <Button href="/login" variant="outlined" color="primary">Get Started
                </Button>
              </div>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);