import React from "react";
import './Service.css';
import ser from '../src/images/ser.jpg';
import s1 from "../src/images/s1.jpg";
import s2 from "../src/images/s2.jpg";
import s3 from "../src/images/s3.jpg";

const Service =()=>{
    return(
        <>
<div class="hello">
        <div className="container-fluid">
        <img src={ser} 
        style={ {
        width:'100%',
        backgroundSize:'cover',
        }}
        />

<div className="my-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4">

                        <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={s1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">
Web based Software service</h5>
    <p class="card-text">We have received significant attention recently as it is based on a simple yet powerful Service-Oriented Architecture (SOA) that supports easy software interoperability via standard Web service protocols. Many production and research projects have been initiated and carried out, aiming at finding a new way of developing and using software, by major computer and software corporations.</p>
    <p class="card-text">Custom Development ||	Integration || Software Support ||	Staffing</p>
    <a href="#" class="btn btn-outline-primary">&#62;</a>
  </div>
</div>
</div>
<div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={s2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">
Database services</h5>
    <p class="card-text">Database as a services we a focused to realm within the greater field known as SaaS — it’s the delivery of database software and related physical database storage as a service. For something to be categorized as “Database as a Service,”</p>
    <p class="card-text">Custom Development (CR)	|| Functional and Technical Support ||	Business Process Consolidation (BPC) || 
Database Support ( BASIS) ||	Business Intelligence (BI)	Staffing</p>
    <a href="#" class="btn btn-outline-primary">&#62;</a>
  </div>
</div>
</div>                        <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={s3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">IT Infrastructure Management</h5>
    <p class="card-text">Files Operating As demands on the IT infrastructure is rapidly increasing, several companies are looking for a reliable and cost effective means for maintaining their IT applications and systems and optimizing their internal infrastructure management processes.</p>
    <p class="card-text">Hosting of Customer application || Hardware supply</p>
    <a href="#" class="btn btn-outline-primary">&#62;</a>
  </div>
</div>
</div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>

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

</div>
        </>
        );
};

export default Service;