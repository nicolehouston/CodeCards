import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      username: '',
      password: ''
    };
  }

  changeUser(user) {
    this.setState({
      username: user.username,
      password: user.password
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar username={this.state.username}/>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
