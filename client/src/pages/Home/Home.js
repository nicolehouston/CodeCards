import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import AddButton from "../../components/AddButton";
import API from "../../utils/API";
import CategoryCard from "../../components/CategoryCard";
import keyIndex from 'react-key-index';
import "./Home.css";

class Home extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    if(localStorage.getItem("isLoggedin") === "true") {
      API.getUserbyName(localStorage.getItem("username")) 
        .then(res => {
            this.setState({ categories: res.data[0].categories});
        })
    }

  }

  removeCategory = (categoryName) => {
    const req = {
      username: localStorage.getItem("username"),
      category: categoryName
    }
    API.deleteCategory(req)
      .then(res => console.log(res));
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
      <CategoryCard 
        className={"categoryCard"}
        key = {category.id}
        category = {category.value}
      />
    ))
    return (
      <div>
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