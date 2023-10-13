import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import appliances from '../img/repaireServiceimg/homeappliances.jpg';
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet";

function IFBRepairService () {
return(
<>

<Helmet>
  
  <title>IFB repair service  | customersupports24x7</title>
  <meta name="description" content="Fast and efficient IFB repair service, 24/7 support. Your trusted solution for all IFB -related issues"/>
  <meta name="keywords" content=""/>
  <link rel="canonical" href="https://www.customersupports24x7.in/IFBRepairService" />

</Helmet>

<Header/>
<div className="container inner_padding">

<h1 className="color-blue pt-2">IFB repair service</h1>

<h3 className="color-blue_light pb-5">Product Services -  Customer Support 24X7</h3>

<p className="sub_content  pt-1 pb-2">Washing Machine Service Center & Refrigerator, AC Air Conditioner,
 Dishwasher Dryer, Repair From Our Best Service Center</p>

<p className="sub_content  pt-2 pb-2">If you have any IFB   product and are looking for IFB   Product
 Service Centre in your city then you have come to the right place.  Customer Support 24X7 provides 
you the best technician  for Washing machine, Air Conditioner,Dryer & Dishwasher appliances.</p>

<p className="sub_content ">We have technicians with good experience in servicing & repairing your products.
  Customer Support 24X7 provides you efficient and effective services. Our Regesitered Service center provides
  you the best service and warranty for your products.</p>

<div className="row pt-5 mt-5 align-items-center ">

    <div className="col-lg-6 col-md-6 col-sm-12">
<p className="content_head_text margin-0">IFB WASHING MACHINE REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 care helps you in providing
 Registered Service Center for your Washing Machine & Dryer.We
 provide best repair and service at your doorstep in your city.</p>

<p className="content_head_text pt-4 margin-0">IFB AC REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 care helps you in providing
 Registered Service Center for your Air Conditioner.We provide 
best repair and service at your doorstep in your city.</p>

<p className="content_head_text pt-4 margin-0">IFB DISHWASHER REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Center for your
 Dishwasher. We provide best repair and service at your doorstep in your city.</p>


<p className="content_head_text pt-4 margin-0">IFB DRYER REPAIR & SERVICE</p>
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
IFB washing machine service center <span className="tag-black-holder">| </span> 
IFB Washing machine Repair <span className="tag-black-holder">| </span>
IFB fridge service center <span className="tag-black-holder">| </span>
IFB fridge repair <span className="tag-black-holder">| </span>
IFB Refrigerator service center <span className="tag-black-holder">| </span>
IFB Refrigerator Repair <span className="tag-black-holder">| </span>
IFB ac service center <span className="tag-black-holder">| </span>
IFB ac repair <span className="tag-black-holder">| </span>
IFB air conditioner service center <span className="tag-black-holder">| </span>
IFB Dishwasher service center <span className="tag-black-holder">| </span>
IFB Dryer service center <span className="tag-black-holder">| </span>
IFB Dryer repair <span className="tag-black-holder">| </span>
IFB microwave service center <span className="tag-black-holder">| </span>
IFB microwave service <span className="tag-black-holder">| </span>
IFB microwave repair <span className="tag-black-holder">| </span>
IFB oven service center <span className="tag-black-holder">| </span>
IFB oven service <span className="tag-black-holder">| </span>
IFB oven repair</p>
</section> */}

</div>

<Footer/>

</>
)
}

export default IFBRepairService;
