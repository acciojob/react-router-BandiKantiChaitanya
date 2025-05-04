
import React from "react";
import './../styles/App.css';
import { Switch,Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home} >
          </Route>
          <Route path='/about' component={About} />
        </Switch>
    </div>
  )
}

export default App
