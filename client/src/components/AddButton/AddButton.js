import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./AddButton.css";
import TextField from '@material-ui/core/TextField';
import API from "../../utils/API";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    color: '#0067B2',
    fontFamily: 'Quicksand',
  },
});



class SimpleModal extends React.Component {
  state = {
    category: '',
    open: false,
    onChange: '',
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false});
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const req = {
      username: localStorage.getItem("username"),
      category: this.state.category.trim()
    }
    API.getUserbyName(req.username)
      .then(res => {
        if(res.data[0].categories.indexOf(req.category) === -1) {
          API.saveCategory(req)
            .then(() => {
              this.props.addCategory(req.category)})
            .catch(err => console.log(err));
              this.setState({ open: false });
        }
        else {
          alert("This category already exists!")
        }
      })
  }

  render() {
    const { classes } = this.props;

  
    return (
      <div>
        <div className={"myButton"}>
        <Button onClick={this.handleOpen} aria-label="Add" variant="fab" color="warning" className={classes.button}><AddIcon /></Button></div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="title" id="modal-title">
              Create a Card Category:
            </Typography>
            <TextField
          value={this.state.category.trim()}
          id="uncontrolled"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange('category')}
        />
        <Button onClick ={this.handleSubmit} variant="contained" size="small" color="" className={classes.button}>
          Submit
        </Button>
        </form>
          </div>
        </Modal>
        </div>    
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
