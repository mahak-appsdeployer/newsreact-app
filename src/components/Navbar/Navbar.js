
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {


  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color:'black'}}>News Render</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page"style={{color:'black'}} to="/">Home</Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" style={{color:'black'}}to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'black'}}to="/entertainment">Entertainment</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" style={{color:'black'}}to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'black'}}to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'black'}}to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'black'}}to="/technology">Technology</Link>
              </li>
             
              
                
           
            </ul>
         
          </div>
        </div>
      </nav>
      </>
    )
  }
}

export default Navbar