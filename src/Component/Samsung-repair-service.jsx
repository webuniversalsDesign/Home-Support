import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import appliances from '../img/repaireServiceimg/homeappliances.jpg';
import ContactForm from "./ContactForm";
function SamsungRepairService () {
return(
<>
<Helmet>
  
  <title>Samsung repair service| customersupports24x7</title>
  <meta name="description" content="Get top-notch Samsung repair service 24/7. Trust us for all your Samsung device repairs"/>
  <meta name="keywords" content=""/>
  <link rel="canonical" href="https://www.customersupports24x7.in/SamsungRepairService" />

</Helmet>

<Header/>
<div className="container inner_padding">

<h1 className="color-blue pt-2">Samsung Repair Service</h1>

<h3 className="color-blue_light pb-5">Product Services -  Customer Support 24X7</h3>

<p className="sub_content pt-1 pb-2">Washing Machine Service Center & Refrigerator, AC Air Conditioner, Dishwasher Dryer, Repair From Our Best Service Center</p>

<p className="sub_content pt-2 pb-2">If you have any Samsung  product and are looking for Samsung  Product
 Service Centre in your city then you have come to the right place.  Customer Support 24X7 provides 
you the best technician for Refrigerator, Washing Machine, Air Conditioner , TV & Dishwasher.</p>

<p className="sub_content">We have technicians with good experience in servicing & repairing your products.
  Customer Support 24X7 provides you efficient and effective services. Our Regesitered Service center provides
  you the best service and warranty for your products.</p>

<div className="row pt-5 mt-5 align-items-center ">

    <div className="col-lg-6 col-md-6 col-sm-12">
<p className="content_head_text margin-0">SAMSUNG WASHING MACHINE & DRYER SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Centre
 for your Washing Machine & Dryer.We provide best repair and service at your doorstep in your city.
  </p>

<p className="content_head_text pt-4 margin-0">SAMSUNG FRIDGE / REFRIGERATOR SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Center for your
 Refrigerator/Fridge.We 
provide best repair and service at your doorstep in your city. </p>


<p className="content_head_text pt-4 margin-0">SAMSUNG AC REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Centre for your 
Air conditioner.
 We provide best repair and service at your doorstep in your city. </p>

<p className="content_head_text pt-4 margin-0">SAMSUNG  DISHWASHER REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Center for your
 Dishwasher. We provide best repair and service at your doorstep in your city.</p>
   
   <p className="content_head_text pt-4 margin-0">SAMSUNG TV REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service
 Centre for your LED/LCD. We provide best repair and service 
at your doorstep in your city. </p>
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
Samsung washing machine service center <span className="tag-black-holder">| </span> 
Samsung Washing machine Repair <span className="tag-black-holder">| </span>
Samsung fridge service center <span className="tag-black-holder">| </span>
Samsung fridge repair <span className="tag-black-holder">| </span>
Samsung Refrigerator service center <span className="tag-black-holder">| </span>
Samsung Refrigerator Repair <span className="tag-black-holder">| </span>
Samsung ac service center <span className="tag-black-holder">| </span>
Samsung ac repair <span className="tag-black-holder">| </span>
Samsung air conditioner service center <span className="tag-black-holder">| </span>
Samsung Dishwasher service center <span className="tag-black-holder">| </span>
Samsung Dryer service center <span className="tag-black-holder">| </span>
Samsung Dryer repair <span className="tag-black-holder">| </span>
Samsung microwave service center <span className="tag-black-holder">| </span>
Samsung microwave service <span className="tag-black-holder">| </span>
Samsung microwave repair <span className="tag-black-holder">| </span>
Samsung oven service center <span className="tag-black-holder">| </span>
Samsung oven service <span className="tag-black-holder">| </span>
Samsung oven repair</p>
</section> */}

</div>

<Footer/>

</>
)
}

export default SamsungRepairService;
