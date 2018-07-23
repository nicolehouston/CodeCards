import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./CategoryCard.css";
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = {
    card: {
      minWidth: 250,
      marginBottom: 15,
      marginLeft: 15,
      marginTop: 15,
      marginRight: 15,
      fontFamily: 'Quicksand',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      color: 'black',
    },
    pos: {
      marginBottom: 12,
    },
  };

function SimpleCard(props) {
    const { classes } = props;
  
    return (
      <div className={"cardInfo"}>
        <ButtonBase>
        <Card className={classes.card}>

          <CardContent>
            <Typography color="textSecondary">
                {props.category}
            </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={() => props.removeCategories(props.id)} className="remove" color="secondary">
          Delete
          </Button>
          </CardActions>
        </Card>
        </ButtonBase>
      </div>
    );
  }
  
  SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleCard);