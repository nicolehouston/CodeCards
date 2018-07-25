import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";
import "./CardForm.css";

const styles = theme => ({
    container: {
        display: 'block',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: theme.spacing.unit,
        fontFamily: 'Quicksand',
    },
      input: {
        display: 'none',
    }
  });

class CardForm extends React.Component {

    state = {
        title: '',
        notes: '',
        link: ''
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    submitCard = () => {
        const data= {
            username: localStorage.getItem("username"),
            infoCard: {
                category: this.props.category,
                card: {
                  title: this.state.title,
                  notes: this.state.notes,
                  link: this.state.link
                }
            }
        }
        API.addInfoCard(data)
        .then(res => {
            this.props.renderCards();
            this.props.changeMode(this.props.createMode);
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={"grow"}>
            <Card className={classes.card}>
            <form className={classes.container} noValidate autoComplete="off" target="_blank">
            <div>
                <div className={"cardForm"}>
                <TextField
                id="title"
                label="Name"
                className={classes.textField}
                value={this.state.topic}
                onChange={this.handleChange('title')}
                margin="normal"
                />
                </div>
                <div className={"cardForm"}>
                <TextField 
                id="notes"
                label="Notes"
                multiline
                rowsMax="6"
                value={this.state.multiline}
                onChange={this.handleChange('notes')}
                className={classes.textField}
                margin="normal"
                />
                </div>
                <div className={"cardForm"}>
                <TextField
                id="link"
                label="Link"
                multiline   
                className={classes.textField}
                value={this.state.topic}
                onChange={this.handleChange('link')}
                margin="normal"
                target="_blank"
                />
                </div>
                <div className={"btnForm"}>
                <Button variant="outlined" color="primary" onClick={this.submitCard} className={classes.button}>
                    Submit
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => this.props.changeMode(this.props.createMode)} className={classes.button}>
                    Cancel
                </Button>
                </div>
                </div>
            </form>
            </Card>
            </div>
        )
    }
}

export default withStyles(styles)(CardForm);