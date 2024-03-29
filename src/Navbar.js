import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =() =>{
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className=" mx-auto">

        <nav className="navbar navbar-expand-lg navbar-light "
       style={ {
           backgroundColor: '#ffffff',
       }}
        >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" activwClassName="nav_active" 
    style={ {
            fontWeight: 'bold',
            color: '#565387',
            borderBottom: '1px solid #565387',
        }}
    >INFOSERVE TECHNOLOGIES PVT.LTD.</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/"
              style={{
              color: '#565387',
              fontFamily:'monospace',
              }}
          >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About"
              style={{
              color: '#565387',
              fontFamily:'monospace',
              }}
          >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>

        </>
    )
}

export default Navbar;