import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
