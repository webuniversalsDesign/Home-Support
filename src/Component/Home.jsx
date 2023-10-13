
import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import acImg from './../img/repaireServiceimg/ac.jpg';
import reImg from './../img/repaireServiceimg/refrigerator.jpg';
import dishImg from './../img/repaireServiceimg/dish.jpg';
import tvImg from './../img/repaireServiceimg/tv.jpg';
import micImg from './../img/repaireServiceimg/oven.jpg';
import washImg from './../img/repaireServiceimg/wash.jpg';
import serveImg from './../img/repaireServiceimg/service.jpg';
import repairImg from './../img/repaireServiceimg/repair.jpg';
import homeItImg from './../img/repaireServiceimg/applainces.jpg';
import supportImg from './../img/repaireServiceimg/support.jpg';
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Material Icons
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneIcon from '@mui/icons-material/Phone';



function Home () {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/astro/email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful email sending, e.g., show a success message.
        window.location.href = '/IFBRepairService';
        
      } else {
        // Handle errors, e.g., show an error message.
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="App">
      <Helmet>
  
  <title>home appliances repair services | customersupports24x7</title>
  <meta name="description" content="Get reliable home appliances repair services at.customersupports24x7 | Quick solutions for all your appliance troubles, available 24x7."/>
  <meta name="keywords" content="home appliances repair services, repair services, appliance repair near me, appliance repair"/>
  <link rel="canonical" href="https://www.customersupports24x7.in/" />

</Helmet>

<Header/>
<div className="container">
<div className="banner_2">  </div>


</div>

{/* BOOK SERVICE SECTION START */}
<section className="Book_service">
<div className="forminline">
<p className="remove_margin title_section text-center"> Book Your Service</p>&nbsp; &nbsp;

<form onSubmit={handleSubmit}>
<input type="text" className="oneLineform" placeholder="Name" required name="name" value={formData.name} onChange={handleChange}/> 
<input type="email" className="oneLineform" placeholder="Email" required name="email" value={formData.email} onChange={handleChange}/> 
<input type="number" className="oneLineform" placeholder="Number" required name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange}/> 
<select id="service" name="service"  value={formData.service} onChange={handleChange} className="mod_option-s" required >
    <option value="">Select Your Service</option>
    <option value="REFRIGERATOR">REGRIGERATOR  REPAIR & SERVICE</option>
    <option value="AC">AC REPAIR & SERVICE</option>
    <option value="TV">TV REPAIR & SERVICE</option>
    <option value="DISHWASHER">DISHWASHER REPAIR & SERVICE</option>
    <option value="Dryer">Dryer Service & Repair</option>
    <option value="Washing">Washing Machine Service & Repair</option>
  </select> 
{/* <a href="mailto:info@customersupport24x7.in"> */}
<input type="submit" className="btn-mod" value="Send"/>


</form>

</div>

</section>
{/* BOOK SERVICE SECTION END */}

{/* REPAIRE SERVISES SECTION START */}

<section className="repair_service pt-5">

  <h1 align="center" className="color-blue"> Home Appliances Repair Services</h1>
{/* <h1 align="center" className="color-blue_light pb-1">Repair services</h1> */}
<div className="d-flex justify-content-center pb-5">

<div className="underline"/>

</div>

<div className="container inner_padding">
<div className="row">
<div className="col-lg-4 col-md-6 col-sm-12 pt-2 pb-2">
<div className="service_card">


  <img src={acImg} alt="ac" className="serv_img"/>
  <p className="text_card">AC REPAIRE & SERVICE</p>
</div>

</div>

<div className="col-lg-4 col-md-6 col-sm-12 pt-2 pb-2">
<div className="service_card">


  <img src={reImg} alt="ac" className="serv_img"/>
  <p className="text_card">REGRIGERATOR REPAIRE & SERVICE</p>
</div>

</div>

<div className="col-lg-4 col-md-6 col-sm-12 pt-2 pb-2">
<div className="service_card">


  <img src={dishImg} alt="ac" className="serv_img"/>
  <p className="text_card">DISHWASHER  REPAIRE & SERVICE</p>
</div>

</div>

<div className="col-lg-4 col-md-6 col-sm-12 pt-2 pb-2">
<div className="service_card">


  <img src={tvImg} alt="ac" className="serv_img"/>
  <p className="text_card">TV  REPAIRE & SERVICE</p>
</div>

</div>

<div className="col-lg-4 col-md-6 col-sm-12 pt-2 pb-2">
<div className="service_card">


  <img src={micImg} alt="ac" className="serv_img"/>
  <p className="text_card">MICROWAVE OVEAN  REPAIR & SERVICE</p>
</div>

</div>

<div className="col-lg-4 col-md-6 col-sm-12 pt-2 pb-2">
<div className="service_card">


  <img src={washImg} alt="ac" className="serv_img"/>
  <p className="text_card">WASHING MACHINE REPAIR & SERVICE</p>
</div>

</div>

</div>

</div>
</section>

{/* REPAIRE SERVISES SECTION END */}

{/* REPAIRE SERVISES COMPANY SECTION START */}

<section className="repair_service_company banner-bg-lt-gray pt-5">
<div className="container inner_padding">
<div className="row align-items-center">

<div className="col-lg-6 col-md-6 col-s-12">

<h2 className="color-blue">We are the most popular</h2>
<h2 className="color-blue_light pb-5">Repair Services Company</h2>

<p className="color-theme_yellow"><SettingsSuggestIcon className="theme_default-mod"/> Superfast Reliable Service</p>
<p className="color-theme_yellow"><ConstructionIcon className="theme_default-mod"/> Properly Repair Solution</p>
<p className="color-theme_yellow"><SupportAgentIcon className="theme_default-mod"/> Customer Support</p>
</div>

<div className="col-lg-6 col-md-6 col-s-12 d-flex justify-content-center">
<img src={serveImg} alt="service" className="content_img"/>
</div>
</div>

</div>

</section>

{/* REPAIRE  COMPANY SECTION END */}

{/* BRAND SERVISES SECTION START */}
<section className="brand_service ">

<h3 className="head_text pt-5 pb-5">WE PROVIDE MULTI BRAND SERVICE & REPAIR FOR YOUR HOME APPLIANCES</h3>
  
  <div className="container inner_padding">
<div className="row">

<div className="col-lg-4 col-md-4 col-sm-12 pt-2 pb-2">
<Link to='/BoshRepairService' className="text-decor">
  <div className="card-white-theme">
<img src={homeItImg} alt="ac" className="serv_img2"/>

<p className="content-text_head">BOSCH PRODUCT SERVICE</p>

<ul>
  <li className="list-content-text">BOSCH WASHING MACHINE & DRYER SERVICE</li>
  <li className="list-content-text">BOSCH FRIDGE / REFRIGERATOR SERVICE</li>
  <li className="list-content-text">BOSCH DISHWASHER REPAIR & SERVICE</li>
  <li className="list-content-text">BOSCH DRYER REPAIR & SERVICE</li>
</ul>

</div>
</Link>


</div>

<div className="col-lg-4 col-md-4 col-sm-12 pt-2 pb-2">
<Link to='/SamsungRepairService' className="text-decor">
<div className="card-white-theme">
<img src={homeItImg} alt="ac" className="serv_img2"/>

<p className="content-text_head">SAMSUNG PRODUCT SERVICE</p>

<ul>
  <li className="list-content-text">SAMSUNG WASHING MACHINE & DRYER SERVICE</li>
  <li className="list-content-text">SAMSUNG FRIDGE / REFRIGERATOR SERVICE</li>
  <li className="list-content-text">SAMSUNG AC REPAIR & SERVICE</li>
  <li className="list-content-text">SAMSUNG DISHWASHER REPAIR & SERVICE</li>
  <li className="list-content-text">SAMSUNG TV REPAIR & SERVICE</li>
</ul>

</div>
</Link>

</div>

<div className="col-lg-4 col-md-4 col-sm-12 pt-2 pb-2">
<Link to='/SiemensRepairService' className="text-decor">

<div className="card-white-theme">
<img src={homeItImg} alt="ac" className="serv_img2"/>

<p className="content-text_head">SIEMENS PRODUCT SERVICE</p>

<ul>
  <li className="list-content-text">SIEMENS WASHING MACHINE & DRYER SERVICE</li>
  <li className="list-content-text">SIEMENS FRIDGE / REFRIGERATOR SERVICE</li>
  <li className="list-content-text">SIEMENS DISHWASHER REPAIR & SERVICE</li>
  <li className="list-content-text">SIEMENS DRYER REPAIR & SERVICE</li>

</ul>

</div>
</Link>
</div>

<div className="col-lg-4 col-md-4 col-sm-12 pt-2 pb-2">
<Link to='/IFBRepairService' className="text-decor">
<div className="card-white-theme">
<img src={homeItImg} alt="ac" className="serv_img2"/>

<p className="content-text_head">IFB PRODUCT SERVICE</p>

<ul>

  <li className="list-content-text">IFB WASHING MACHINE REPAIR & SERVICE</li>
  <li className="list-content-text">IFB AC REPAIR & SERVICE</li>
  <li className="list-content-text">IFB DISHWASHER REPAIR & SERVICE</li>
  <li className="list-content-text">IFB DRYER REPAIR & SERVICE</li>

</ul>

</div>
</Link>
</div>

<div className="col-lg-4 col-md-4 col-sm-12 pt-2 pb-2">
<Link to='/LGRepairService' className="text-decor">

<div className="card-white-theme">
<img src={homeItImg} alt="ac" className="serv_img2"/>

<p className="content-text_head">LG PRODUCT SERVICE</p>

<ul>

 
  <li className="list-content-text">LG WASHING MACHINE & DRYER SERVICE</li>
  <li className="list-content-text">LG FRIDGE / REFRIGERATOR SERVICE</li>
  <li className="list-content-text">LG AC REPAIR & SERVICE</li>
  <li className="list-content-text">LG DISHWASHER REPAIR & SERVICE</li>
  <li className="list-content-text">LG TV REPAIR & SERVICE</li>

</ul>

</div>
</Link>

</div>

<div className="col-lg-4 col-md-4 col-sm-12 pt-2 pb-2">
<Link to='/WhirlpoolRepairService' className="text-decor">

<div className="card-white-theme">
<img src={homeItImg} alt="ac" className="serv_img2"/>

<p className="content-text_head">WHIRLPOOL PRODUCT SERVICE</p>

<ul>
  <li className="list-content-text">WASHING MACHINE REPAIR & SERVICE</li>
  <li className="list-content-text">REFRIGERATOR/FRIDGE REPAIR & SERVICE
</li>
  <li className="list-content-text">AC REPAIR & SERVICE</li>
  <li className="list-content-text">DISHWASHER REPAIR & SERVICE</li>
  <li className="list-content-text">WATER PURIFIER REPAIR & SERVICE</li>


</ul>

</div>
</Link>

</div>


</div>

  </div>
</section>

{/* BRAND SERVISES SECTION END */}

{/* COSTOMER HOME SUPPORT SECTION START */}

<section className="costomer_home inner_padding bg-lightgray pt-5">

  <div className="container">
<div className="row align-items-center">

  <div className="col-lg-6 col-md-6 col-sm-12">
<h2 className="color-blue pb-4"><i className="fa-solid fa-user"></i> Blogs Customer Suppport 24x7</h2>

<h2 className="color-blue pb-4">Reliable <span className="color-blue_light">repair & service</span> truly personal</h2>

<p className="color-theme_yellow"><EngineeringIcon className="theme_default-mod"/> Personal Technician</p>
<p className="color-theme_yellow"><BroadcastOnPersonalIcon className="theme_default-mod"/> Smart Technology</p>
<p className="color-theme_yellow"><DoorbellIcon className="theme_default-mod"/> Door Step Service</p>
<p className="color-theme_yellow"><AccountBalanceWalletIcon className="theme_default-mod"/> Affordable Package</p>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center">
  <img src={repairImg} alt="service" className="content_img"/>

  </div>
</div>

  </div>
</section>

{/* COSTOMER HOME SUPPORT SECTION END */}


{/* SOLUTION REPAIR PROBLEM SECTION START */}

<section className="solutaion_section pt-5 pb-5">
<div className="container inner_padding">
<div className="row align-items-center">
<div className="col-lg-6 col-md-6 col-sm-12 justify-content-center">
<img src={supportImg} alt="service" className="content_img"/>

</div>
<div className="col-lg-6 col-md-6 col-sm-12">
  <h2 className="color-blue">Solutions for an every</h2>
<h2 className="color-blue_light pb-5 mb-5">repair problem</h2>

<a href="mailto:info@customersupport24x7.in" className="color-theme_yellow2" style={{fontSize:"18px"}}><AttachEmailIcon className="theme_default-mod"/> Email Us : info@customersupport24x7.in</a><br/>
<a href="tel:18005722686" className="color-theme_yellow2" style={{fontSize:"18px"}}><PhoneIcon className="theme_default-mod"/> Toll Free : 1800 572 2686</a><br/>

</div>


</div>

</div>

</section>

{/* SOLUTION REPAIR PROBLEM SECTION END */}


<Footer/>
 
    </div>
  );
}

export default Home;
