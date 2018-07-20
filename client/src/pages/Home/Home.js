import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import AddButton from "../../components/AddButton";
import API from "../../utils/API";
import CategoryCard from "../../components/CategoryCard";
import keyIndex from 'react-key-index';

class Home extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    if(this.props.username.length !== 0) {
      API.getUserbyName(this.props.username)
      .then(res => {
        this.setState({ categories: res.data[0].categories});
      }
    );
    }
  }

  addCategory = (item) => {
    console.log(item);
    const newCategories = [...this.state.categories, item];
    this.setState({
      categories: newCategories})
  }

  render() {
    let arr = this.state.categories;
    arr = keyIndex(arr, 1);
    const list = arr.map((category) =>(
      <CategoryCard 
        key = {category.id}
        category = {category.value}
      />
    ))
    return (
      <div>
      <Title />
      <Wrapper />
      <div className={"cards"}>
      {list}
      </div>
      <AddButton username={this.props.username} addCategory={this.addCategory}/>
      </div>
    );
  }
}
  
export default Home;