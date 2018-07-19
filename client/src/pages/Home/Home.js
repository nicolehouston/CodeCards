import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import AddButton from "../../components/AddButton";
import API from "../../utils/API";
import CategoryCard from "../../components/CategoryCard";

class Home extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    API.getUserbyName(this.props.username)
      .then(res => {
        this.setState({ categories: res.data[0].categories})
      }
      );
  }

  render() {
    return (
      <div>
      <Title />
      <Wrapper />
      <div className={"cards"}>
      {this.state.categories.map(category => (
      <CategoryCard 
        category = {category}
      />
      ))}
      </div>
      <AddButton username={this.props.username}/>
      </div>
    );
  }
}
  
export default Home;