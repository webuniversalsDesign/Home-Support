import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import appliances from '../img/repaireServiceimg/homeappliances.webp';
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet";

function WhirlpoolRepairService () {
return(
<>

<Helmet>
  
  <title>Whirlpool repair service | customersupports24x7</title>
  <meta name="description" content="24/7 Whirlpool repair service for all your needs. Dependable solutions with a focus on customer support."/>
  <meta name="keywords" content="Whirlpool repair service"/>
  <link rel="canonical" href="https://www.customersupports24x7.in/WhirlpoolRepairService" />

</Helmet>


<Header/>
<div className="container inner_padding">

<h2 className="color-blue pt-2">Whirlpool repair service</h2>

<h3 className="color-blue_light pb-5">Product Services -  Customer Support 24X7</h3>

<p className="sub_content pt-1 pb-2">Washing Machine Service Center & Refrigerator, AC Air Conditioner,
 Dishwasher Dryer, Repair From Our Best Service Center</p>

<p className="sub_content pt-2 pb-2">If you have any Whirlpool   product and are looking for Whirlpool   Product
 Service Centre in your city then you have come to the right place.  Customer Support 24X7 provides 
you the best technician  for Washing machine, Refrigerator, Air Conditioner & Dishwasher, Water Purifier</p>

<p className="sub_content">We have technicians with good experience in servicing & repairing your products.
  Customer Support 24X7 provides you efficient and effective services. Our Regesitered Service center provides
  you the best service and warranty for your products.</p>

<div className="row pt-5 mt-5 align-items-center ">

    <div className="col-lg-6 col-md-6 col-sm-12">
<p className="content_head_text margin-0">WASHING MACHINE REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 care helps you in providing
 Registered Service Center for your Washing Machine.We
 provide best repair and service at your doorstep in your city.</p>

 <p className="content_head_text margin-0">REFRIGERATOR / FRIDGE REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered
 Service Centre for your Refrigerator/Fridge. We 
provide best repair and service at your doorstep in your city. </p>

<p className="content_head_text pt-4 margin-0">AC REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 care helps you in providing
 Registered Service Center for your Air Conditioner.We provide 
best repair and service at your doorstep in your city.</p>

<p className="content_head_text pt-4 margin-0">DISHWASHER REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing Registered Service Centre for your Dishwasher. We 
provide best repair and service at your doorstep in your city. </p>


<p className="content_head_text pt-4 margin-0">TV REPAIR & SERVICE</p>
<p className="content_text"> Customer Support 24X7 helps you in providing
 Registered Service Centre for your LED/LCD. We provide best repair 
and service at your doorstep in your city. </p>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-12">
<img src={appliances} alt="home" className="content_img"/>
    </div>
</div>

<ContactForm/>

{/* <section className="link_section pt-5 pb-5 mt-5">


<p className="text-justify color-blue text-weight-500">
Whirlpool washing machine service center <span className="tag-black-holder">| </span> 
Whirlpool Washing machine Repair <span className="tag-black-holder">| </span>
Whirlpool fridge service center <span className="tag-black-holder">| </span>
Whirlpool fridge repair <span className="tag-black-holder">| </span>
Whirlpool Refrigerator service center <span className="tag-black-holder">| </span>
Whirlpool Refrigerator Repair <span className="tag-black-holder">| </span>
Whirlpool ac service center <span className="tag-black-holder">| </span>
Whirlpool ac repair <span className="tag-black-holder">| </span>
Whirlpool air conditioner service center <span className="tag-black-holder">| </span>
Whirlpool Dishwasher service center <span className="tag-black-holder">| </span>
Whirlpool Dryer service center <span className="tag-black-holder">| </span>
Whirlpool Dryer repair <span className="tag-black-holder">| </span>
Whirlpool microwave service center <span className="tag-black-holder">| </span>
Whirlpool microwave service <span className="tag-black-holder">| </span>
Whirlpool microwave repair <span className="tag-black-holder">| </span>
Whirlpool oven service center <span className="tag-black-holder">| </span>
Whirlpool oven service <span className="tag-black-holder">| </span>
Whirlpool oven repair</p>
</section> */}

</div>

<Footer/>

</>
)
}

export default WhirlpoolRepairService;
