
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default class App extends Component {
  // a= 'Welcome'   //to use props and state use with this.a
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={6} category='general' />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={6} category='business' />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={6} category='entertainment' />
            </Route>
            
            <Route exact path="/health">
              <News key="health" pageSize={6} category='health' />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={6} category='science' />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={6} category='sports' />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={6} category='technology' />
            </Route>
          </Switch>

        </Router>
      </>)
  }


}







//09858a9246a347238627c3c2feeed2fa