import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./InfoCards.css";


const styles = {
  card: {
    width: 300,
    marginBottom: 15,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    display: 'inline-block',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
    border: 'solid 1px black',
    paddingTop: 10,
    paddingBottom: 10
  },
  pos: {
    marginBottom: 12,
  },
  notes: {
    margin: '5px 5px'
  },
  h3: {
    textDecoration: 'underline'
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="headline" color="textSecondary" component="h1">
          {props.title}
          </Typography>
          <h3 className={classes.h3}>Notes</h3>
          <div className={classes.notes}>
          {props.notes}
          </div>
          <div>
          <b>Link:</b> <a href={props.link}>{props.link}</a>
          </div>
        </CardContent >
        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);