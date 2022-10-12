
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const  App = () => {
  // a= 'Welcome'   //to use props and state use with this.a
const apikey = process.env.REACT_APP_API_KEY


const [progress, setprogress] = useState(10)





 
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
          
        color='#f11946'
        progress={progress}
       // onLoaderFinished={() => setProgress(0)}
      />
          <Switch>
            <Route exact path="/">
              <News setprogress =  { setprogress} apikey={apikey} key="general" pageSize={6} category='general' />
            </Route>
            <Route exact path="/business">
              <News setprogress =  { setprogress} apikey={apikey} key="business" pageSize={6} category='business' />
            </Route>
            <Route exact path="/entertainment">
              <News setprogress =  { setprogress} apikey={apikey} key="entertainment" pageSize={6} category='entertainment' />
            </Route>
            
            <Route exact path="/health">
              <News setprogress =  { setprogress} apikey={apikey} key="health" pageSize={6} category='health' />
            </Route>
            <Route exact path="/science">
              <News setprogress =  { setprogress} apikey={apikey} key="science" pageSize={6} category='science' />
            </Route>
            <Route exact path="/sports">
              <News setprogress =  { setprogress} apikey={apikey} key="sports" pageSize={6} category='sports' />
            </Route>
            <Route exact path="/technology">
              <News setprogress =  { setprogress} apikey={apikey} key="technology" pageSize={6} category='technology' />
            </Route>
          </Switch>

        </Router>
      </>)
  }





export default App




//09858a9246a347238627c3c2feeed2fa