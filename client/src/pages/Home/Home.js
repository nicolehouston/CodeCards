import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import AddButton from "../../components/AddButton";
import InfoCards from "../../components/InfoCards";
import categories from "./categories.json";




class Home extends Component {

  render() {
    return (
      <div>
      <Wrapper>
      <Title>My Categories</Title>
      {this.state.categories.map(categories => (
      <InfoCards 

      />
      ))}
      </Wrapper>
      <AddButton />
      </div>
    );
  }
}
  
export default Home;