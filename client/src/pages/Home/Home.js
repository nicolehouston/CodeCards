import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import AddButton from "../../components/AddButton";


class Home extends Component {

  render() {
    return (
      <div>
      <Title>My Card Collections</Title>
      <Wrapper />
      <AddButton />
      </div>
    );
  }
}
  
export default Home;