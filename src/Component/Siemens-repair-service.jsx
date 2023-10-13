import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import appliances from '../img/repaireServiceimg/homeappliances.jpg';
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet";
function SiemensRepairService () {
return(
<>
<Helmet>
  
  <title>Siemens repair service | customersupports24x7</title>
  <meta name="description" content="Reliable Siemens repair service available 24/7. Trust us for expert solutions to your Siemens appliance needs"/>
  <meta name="keywords" content=""/>
  <link rel="canonical" href="https://www.customersupports24x7.in/SiemensRepairService" />
</Helmet>

<Header/>
<div className="container inner_padding">

<h2 className="color-blue pt-2">Siemens Repair Service</h2>

<h3 className="color-blue_light pb-5">Product Services -  Customer Support 24X7</h3>

<p className="sub_content pt-1 pb-2">Washing Machine Service Center & Refrigerator, AC Air Conditioner,
 Dishwasher Dryer, Repair From Our Best Service Center</p>

<p className="sub_content pt-2 pb-2">If you have any SIEMENS   product and are looking for SIEMENS   Product
 Service Centre in your city then you have come to the right place.  Customer Support 24X7 provides 
you the best technician  for Washing Machine, Refrigerator, Dishwasher & Dryer appliances.</p>

<p className="sub_content">We have technicians with good experience in servicing & repairing your products.
  Customer Support 24X7 provides you efficient and effective services. Our Regesitered Service center provides
  you the best service and warranty for your products.</p>

<div className="row pt-5 mt-5 align-items-center ">

    <div className="col-lg-6 col-md-6 col-sm-12">
<p className="content_head_text margin-0">SIEMENS  WASHING MACHINE & DRYER SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Centre
 for your Washing Machine & Dryer.We provide best repair and service at your doorstep in your city.
  </p>

<p className="content_head_text pt-4 margin-0">SIEMENS  FRIDGE / REFRIGERATOR SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Center for your
 Refrigerator/Fridge.We 
provide best repair and service at your doorstep in your city. </p>

<p className="content_head_text pt-4 margin-0">SIEMENS   DISHWASHER REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Center for your
 Dishwasher. We provide best repair and service at your doorstep in your city.</p>


<p className="content_head_text pt-4 margin-0">SIEMENS DRYER REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Center for your Dryer. We
 provide best repair and service at your doorstep in your city.</p>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-12">
<img src={appliances} alt="home" className="content_img"/>
    </div>
</div>

{/* Contact-Form Start*/}

<ContactForm/>

{/* Contact-Form End*/}

{/* <section className="link_section pt-5 pb-5 mt-5">


<p className="text-justify color-blue text-weight-500">
Siemens washing machine service center <span className="tag-black-holder">| </span> 
Siemens Washing machine Repair <span className="tag-black-holder">| </span>
Siemens fridge service center <span className="tag-black-holder">| </span>
Siemens fridge repair <span className="tag-black-holder">| </span>
Siemens Refrigerator service center <span className="tag-black-holder">| </span>
Siemens Refrigerator Repair <span className="tag-black-holder">| </span>
Siemens ac service center <span className="tag-black-holder">| </span>
Siemens ac repair <span className="tag-black-holder">| </span>
Siemens air conditioner service center <span className="tag-black-holder">| </span>
Siemens Dishwasher service center <span className="tag-black-holder">| </span>
Siemens Dryer service center <span className="tag-black-holder">| </span>
Siemens Dryer repair <span className="tag-black-holder">| </span>
Siemens microwave service center <span className="tag-black-holder">| </span>
Siemens microwave service <span className="tag-black-holder">| </span>
Siemens microwave repair <span className="tag-black-holder">| </span>
Siemens oven service center <span className="tag-black-holder">| </span>
Siemens oven service <span className="tag-black-holder">| </span>
Siemens oven repair</p>
</section> */}

</div>

<Footer/>

</>
)
}

export default SiemensRepairService;
