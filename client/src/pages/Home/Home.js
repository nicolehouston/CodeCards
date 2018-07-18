import React, { Component } from "react";
import AddButton from "../../components/AddButton";
import API from "../../utils/API";

class Home extends Component {
  state = {
    categories: [],
    name: '',
    date: ''
  }

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    API.getCategories()
      .then(res =>
        this.setState({ categories: res.data, name: "", date: ""})
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <AddButton />
      </div>
    );
  }
}
  
export default Home;