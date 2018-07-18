import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import AddButton from "./components/AddButton";
import L1NewCard from "./components/L1NewCard";
import L2NewCard from "./components/L2NewCard";
// import TabCard from "./components/TabCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import friends2 from "./friends2.json";
import Title from "./components/Title";

class App extends Component {
  state = {friends};
  render() {
    return (
      <div>
      <div>
        <Navbar />
        <AddButton/>
        {/* <TabCard/> */}
      </div>
      <Wrapper>
    <Title>My Technologies</Title>
    {this.state.friends.map(friend => (
    <L1NewCard
      name={friend.name}
      image={friend.image}
      occupation={friend.occupation}
      location={friend.location}
      subcard={friend.subCard}
    />))}
    {/* <L1NewCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].occupation}
      location={friends[1].location}
      subcard={friends[1].subCard}
    /> */}
    {/* <L1NewCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].occupation}
      location={friends[2].location}
      subcard={friends[2].subCard}
    />
    <L1NewCard
      name={friends[3].name}
      image={friends[3].image}
      occupation={friends[3].occupation}
      location={friends[3].location}
      subcard={friends[3].subCard}
    />
    <L1NewCard
      name={friends[4].name}
      image={friends[4].image}
      occupation={friends[4].occupation}
      location={friends[4].location}
      subcard={friends[4].subCard}
      
    />
    <L2NewCard
      name={friends2[0].name}
      image={friends2[0].image}
      occupation={friends2[0].occupation}
      location={friends2[0].location}
    />
    <L2NewCard
      name={friends2[1].name}
      image={friends2[1].image}
      occupation={friends2[1].occupation}
      location={friends2[1].location} */}
    {/* /> */}
    {/* <TabCard
      name={friends2[1].name}
      image={friends2[1].image}
      occupation={friends2[1].occupation}
      location={friends2[1].location} */}
    />
  </Wrapper>
      </div>
    );
  }
}

export default App;
