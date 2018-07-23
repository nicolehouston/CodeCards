import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import AddButton from "../../components/AddButton";
import API from "../../utils/API";
import CategoryCard from "../../components/CategoryCard";
import keyIndex from 'react-key-index';
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    categories: [],
  }

  removeCategories = id => {
    const categories = this.state.categories.filter(categories => categories.id !== id);
    this.setState({ categories });
  };

  componentDidMount() {
    if(localStorage.getItem("isLoggedin") === "true") {
      API.getUserbyName(localStorage.getItem("username")) 
        .then(res => {
            this.setState({ categories: res.data[0].categories});
        })
    }
  }

  addCategory = (item) => {
    const newCategories = [...this.state.categories, item];
    this.setState({
      categories: newCategories})
  }

  render() {
    let arr = this.state.categories;
    arr = keyIndex(arr, 1);
    const list = arr.map((category) =>(
      <Link to={"/" + category.value} key={category.id}><CategoryCard 
        className={"categoryCard"}
        key = {category.id}
        category = {category.value}
        removeCategories={this.removeCategories}
      /></Link>
    ))
    return (
      <div>
      <Title />
      <div className={"cards"}>
      <Wrapper>
      {list}
      </Wrapper>
      </div>
      <AddButton username={this.props.username} addCategory={this.addCategory}/>
      </div>
    );
  }
}
  
export default Home;