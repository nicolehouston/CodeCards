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
      marginBottom: 10,
      marginLeft: 10,
      marginTop: 10,
      marginRight: 10,
      fontFamily: 'Quicksand',
      textAlign: 'center',
      fontSize: 25
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
    remove: {
      textDecoration: 'none'
    }
  };



function SimpleCard(props) {
    const { classes } = props;
    document.title = "My Categories"

  
    return (
      <div className={"cardInfo"}>
        <ButtonBase href={"/" + props.category}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.card} color="textSecondary">
                {props.category}
            </Typography>
          </CardContent>
          <CardActions>
        </CardActions>
        </Card>
        </ButtonBase>
        <Button onClick={() => props.removeCategory(props.category)} className={classes.remove} color="secondary">
          Delete
          </Button>
      </div>
    );
  }
  
  SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleCard);