import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import AddButton from "./components/AddButton";
//import Drawer from "./components/Drawer";


class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Title>My Card Collections</Title>
      <Wrapper />
      <AddButton />
      </div>
    );
  }
}

export default App;
