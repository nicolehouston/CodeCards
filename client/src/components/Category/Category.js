import React, { Component } from "react";
import InfoCards from "../../components/InfoCards";
import API from "../../utils/API";
import AddCard from "../../components/AddCard";
import keyIndex from 'react-key-index';
import CardForm from "../../components/CardForm";
import Wrapper from "../../components/Wrapper";

class Category extends Component {
    
    state={
        category: this.props.match.params.category,
        username: '',
        cards: [],
        createMode: false
    }

    componentDidMount() {
        if(localStorage.getItem("username")) {
            this.setState({
                username: localStorage.getItem("username")
            })
            this.renderCards();
        }
        
    }

    renderCards = () => {
        API.getUserbyName(localStorage.getItem("username"))
            .then(res => {
                if(res.data[0].levelOne.length !== 0) {
                    let newArr = [];
                    for(let i = 0; i < res.data[0].levelOne.length; i++) {
                        if(res.data[0].levelOne[i].category === this.state.category) {
                                newArr.push(res.data[0].levelOne[i]);
                        }
                    }
                    this.setState({
                        cards: newArr
                })
            }
        })
    }

    changeMode = (boolean) => {
        if(boolean) {
            this.setState({
                createMode: false
            })
        }
        else if(!boolean) {
            this.setState({
                createMode: true
            })
        }
    }

    render() {
        let arr = this.state.cards;
            arr = keyIndex(arr, 1);
            const list = arr.map((card) =>(
                <InfoCards
                    title={card.card.title}
                    notes={card.card.notes}
                    link={card.card.link}
                    className={"card"}
                    key = {card.id}
                />
        ))

        let cardDiv;
        if(this.state.createMode) {
            cardDiv = <CardForm renderCards={this.renderCards} category={this.state.category} changeMode={this.changeMode} createMode={this.state.createMode}/>
        }
        else {
            cardDiv = list
        }

        return(
            <div>
            <Wrapper>
            {cardDiv}
            </Wrapper>
            <AddCard changeMode={this.changeMode} createMode={this.state.createMode}/>
            </div>
        )
    }
}

export default Category;