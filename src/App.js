
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  // a= 'Welcome'   //to use props and state use with this.a
apikey = process.env.REACT_APP_API_KEY
state = {
  progress: 10
}

setprogress =(progress) => {
this.setState({progress: progress})
}

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
          
        color='#f11946'
        progress={this.state.progress}
       // onLoaderFinished={() => setProgress(0)}
      />
          <Switch>
            <Route exact path="/">
              <News setprogress =  {this.setprogress} apikey={this.apikey} key="general" pageSize={6} category='general' />
            </Route>
            <Route exact path="/business">
              <News setprogress =  {this.setprogress} apikey={this.apikey} key="business" pageSize={6} category='business' />
            </Route>
            <Route exact path="/entertainment">
              <News setprogress =  {this.setprogress} apikey={this.apikey} key="entertainment" pageSize={6} category='entertainment' />
            </Route>
            
            <Route exact path="/health">
              <News setprogress =  {this.setprogress} apikey={this.apikey} key="health" pageSize={6} category='health' />
            </Route>
            <Route exact path="/science">
              <News setprogress =  {this.setprogress} apikey={this.apikey} key="science" pageSize={6} category='science' />
            </Route>
            <Route exact path="/sports">
              <News setprogress =  {this.setprogress} apikey={this.apikey} key="sports" pageSize={6} category='sports' />
            </Route>
            <Route exact path="/technology">
              <News setprogress =  {this.setprogress} apikey={this.apikey} key="technology" pageSize={6} category='technology' />
            </Route>
          </Switch>

        </Router>
      </>)
  }


}







//09858a9246a347238627c3c2feeed2fa