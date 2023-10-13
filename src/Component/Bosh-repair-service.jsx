import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import appliances from '../img/repaireServiceimg/homeappliances.jpg';
import ContactForm from "./ContactForm";

function BoshRepairService () {
return(
<>
<Helmet>
  
  <title>Bosh repair service | customersupports24x7</title>
  <meta name="description" content="Reliable Bosh repair service at your fingertips. Get 24/7 customer support for all your appliance needs."/>
  <meta name="keywords" content=""/>
  <link rel="canonical" href="https://www.customersupports24x7.in/BoshRepairService" />


</Helmet>

<Header/>
<div className="container inner_padding">

<h1 className="color-blue pt-2">Bosh Repair Service </h1>

<h3 className="color-blue_light pb-5">Product Services -  Customer Support 24 X 7</h3>

<p className="sub_content pt-1 pb-2">Washing Machine Service Center & Refrigerator, AC Air Conditioner, Dishwasher Dryer, Repair From Our Best Service Center</p>

<p className="sub_content pt-2 pb-2">If you have any BOSCH product and are looking for BOSCH Product Service Centre in your city then you have come to the right place.  Customer Support 24 X 7 provides you the best technician for Refrigerator, Washing Machine, Dishwasher & Dryer appliances.</p>

<p className="sub_content">We have technicians with good experience in servicing & repairing your products.  Customer Support 24 X 7 provides you efficient and effective services.Our Regesitered Service center provides you the best service and warranty for your products.</p>

<div className="row pt-5 mt-5 align-item-center">

    <div className="col-lg-6 col-md-6 col-sm-12">
<p className="content_head_text margin-0">BOSCH WASHING MACHINE & DRYER SERVICE</p>
<p className="content_text"> Customer Support 24 X 7 helps you in providing Registered Service Centre
 for your Washing Machine & Dryer.We provide best repair and service at your doorstep in your city.
  </p>

<p className="content_head_text pt-4 margin-0">BOSCH FRIDGE / REFRIGERATOR SERVICE</p>
<p className="content_text"> Customer Support 24 X 7 helps you in providing Registered Service Center for your Refrigerator/Fridge.We 
provide best repair and service at your doorstep in your city. </p>

<p className="content_head_text pt-4 margin-0">BOSCH DISHWASHER REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24 X 7 helps you in providing Registered Service Center for your
 Dishwasher. We provide best repair and service at your doorstep in your city.</p>
   
   <p className="content_head_text pt-4 margin-0">BOSCH DRYER REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24 X 7 helps you in providing Registered Service Center for your Dryer. We
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
Bosch washing machine service center <span className="tag-black-holder">| </span> 
Bosch Washing machine Repair <span className="tag-black-holder">| </span>
Bosch fridge service center <span className="tag-black-holder">| </span>
Bosch fridge repair <span className="tag-black-holder">| </span>
Bosch Refrigerator service center <span className="tag-black-holder">| </span>
Bosch Refrigerator Repair <span className="tag-black-holder">| </span>
Bosch ac service center <span className="tag-black-holder">| </span>
Bosch ac repair <span className="tag-black-holder">| </span>
Bosch air conditioner service center <span className="tag-black-holder">| </span>
Bosch Dishwasher service center <span className="tag-black-holder">| </span>
Bosch Dryer service center <span className="tag-black-holder">| </span>
Bosch Dryer repair <span className="tag-black-holder">| </span>
Bosch microwave service center <span className="tag-black-holder">| </span>
Bosch microwave service <span className="tag-black-holder">| </span>
Bosch microwave repair <span className="tag-black-holder">| </span>
Bosch oven service center <span className="tag-black-holder">| </span>
Bosch oven service <span className="tag-black-holder">| </span>
Bosch oven repair</p>
</section> */}

</div>

<Footer/>

</>
)
}

export default BoshRepairService;
