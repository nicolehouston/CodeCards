import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./AddCard.css";

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 30,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
      fontFamily: 'Quicksand',
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing.unit,
      color: '#0067B2',
      fontFamily: 'Quicksand',
    }
  });

  class AddCard extends React.Component {
  
    render() {
      const { classes } = this.props;
  
    
      return (
        <div className={"myButton"}>
          <Button aria-label="Add" variant="fab" color="" onClick={() => this.props.changeMode(this.props.createMode)} className={classes.button}><AddIcon /></Button></div>
          
      );
    }
  }
  
  export default withStyles(styles)(AddCard);