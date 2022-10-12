
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {



  const style = {
    color: 'white'
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={style}>News Render</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" style={style} to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" style={style} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={style} to="/entertainment">Entertainment</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" style={style} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={style} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={style} to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={style} to="/technology">Technology</Link>
              </li>




            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}


export default Navbar