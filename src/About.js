import React from "react";
import './About.css';
import c1 from "../src/images/c1.jpg";
import c2 from "../src/images/c2.jpg";
import c3 from "../src/images/c3.jpg";
import c4 from "../src/images/c4.jpg";

const Services =()=>{
    return(
        <>
        <div className="container-fluid"
        style={ {
        backgroundColor: '#fff',
        }}
        >
<div class="hola">
<h2
                  style={{
                    color: '#c79903',
                    fontFamily:'monospace',
                    }}
            >all About</h2>
            <br></br>
            <h6
                  style={{
                    color: '#2b1785',
                    fontFamily:'monospace',
                    }}
            >➡️NP Infoserve Technologies Pvt. Ltd. (hereafter reffered as NPISTPL) a Professional IT Software development company providing web enabled and software services across different industry verticals. We provide complete Web Development, Software development, IT solutions. Our unique software model are designed, developed and implemented by highly qualified professionals making our clients' businesses more marketable. This Software Development Company with its Head Office in Thane, Mumbai have a team of professionals having in-depth expertise in latest technologies and provides expert software solutions for business of all sizes.</h6>
            <br></br>
            <h6
                  style={{
                    color: '#2b1785',
                    fontFamily:'monospace',
                    }}
            >➡️NPISTPL has consistently worked towards developing IT Business by providing solutions that span across diverse technologies in the areas of Commercial Application development, IT Outsourcing. NPISTPL assures Quality product and services to their customers through the processes compliant for development of commercial Application Software and IT Consultancy Services. Within two years of its operations, NPISTPL has engraved a place for itself in the IT industry and has increased its business by acquiring some major projects in software development & Services. No doubt the company has been able to make a name for itself in a relatively short span of time only because of its capability and commitments to guarantee customer satisfaction by rewarding quality work on time and in a right manner.</h6>
            <br></br>
            <br></br>
            <h2
                  style={{
                    color: '#c79903',
                    fontFamily:'monospace',
                    }}
            >Benefits</h2>
            <br></br>
           <h6
                  style={{
                    color: '#2b1785',
                    fontFamily:'monospace',
                    }}
            >➡️Innovation:- Innovation here in NP Infoserve refers to A change in a product offering, service, business model,Software and web Development, ERP , HRMS and CRM applications or operations which meaningfully improves the experience of a large number of clients.We refer innovation as a changes in accordance to IT Solutions.</h6>
            <br></br>
            <h6
                  style={{
                    color: '#2b1785',
                    fontFamily:'monospace',
                    }}
            >➡️Commitment:- commitment as an important component of successful market relationships, it gives rise to co-operative behaviours & industry standards. With us relationship is characterised by co-operation between two parties is more likely to be long-term, participative and focused on achieving qualitative software services .</h6>
            <br></br>
            <h6
                  style={{
                    color: '#2b1785',
                    fontFamily:'monospace',
                    }}
            >➡️Excellence:- We say that - "Excellence is not achieved by studying and avoiding failure""Conventional wisdom asserts that good is the opposite of bad, that if you want to understand excellence, you should investigate failure and then invert it."This are the Rules we follow in our IT Solutions Business for full-proff delivery of softwares</h6>
            <br></br>
            <h6
                  style={{
                    color: '#2b1785',
                    fontFamily:'monospace',
                    }}
            >➡️Mission:- To provide technology services to Small, Medium and Enterprise customers Provides end-to-end IT solutions, support, development,implementation,staffing and deployment services</h6>
<br></br>
<a class="btn btn-primary">Contact Us</a>
<br></br>
<br></br>
</div>
        </div>
        <div className="my-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4">


<div className="container-fluid">

<h2 className="justify-content-centre"
style={{
color: '#0a2852',
fontFamily:'cursive',
}}
>Our Clints:-</h2>
<div className="row gy-4">

<div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c1} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
</div>
</div>
<div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c2} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
</div>
</div>
<div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c3} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
</div>
</div><div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c4} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
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

        </>
        );
};

export default Services;