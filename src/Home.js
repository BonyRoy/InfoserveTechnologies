import React from "react";
import './Home.css';
import dance from '../src/images/dance.jpg';
import { NavLink } from "react-bootstrap";


const Home =()=>{
    return(
        <>
        <section id='header'className="d-flex align-item-centre">
        <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
        <br></br><br></br><br></br>
        <h1>Grow your business with </h1>
        <h1
        style={ {
        color: '#1b3bc9',
        }}
        >NP INFOSERVE TECHNOLOGIES PVT. LTD.</h1>
        <h6 className="my-3"
        style={ {
        fontFamily:'cursive',
        }}
        >
        NP Infoserve Technologies Pvt. Ltd. (hereafter reffered as NPISTPL) a Professional IT 
        Software development company providing web enabled and software services across different 
        industry verticals.
        </h6>
        <h6
        style={ {
          color: '#022e05',
          }}
        >Our applications are <strong>user friendly</strong >,We <strong>innovate</strong> out of the box, We provide <strong>effective</strong> output, We are into <strong>excellent</strong> services</h6>
        <div className="mt-3">
        <NavLink className="nav-link" to="/Service" className="btn-get-started">Get Started</NavLink>
        </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
        <br></br><br></br><br></br>
          <img src={dance} className="img-fluid animated" alt="home img"/>
        </div>
        </div>
        
        </div>
        </div>
        </div>
        </section>

<br></br><br></br>
<div className="container-fluid"
style={ {
backgroundColor: '#a7bfe0',
}}
>
<br></br>
<p>Email:- <a href='info@npinfoserve.com'>info@npinfoserve.com</a></p>
<p>Contact Number:-<a href="">+ 91 77188 25757</a></p>
<br></br>
</div>
        </>
        );
};

export default Home;