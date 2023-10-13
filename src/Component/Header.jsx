import React from "react";
// import nav_img from './../img/header.jpg';
import { Link } from "react-router-dom";

import { IoCall } from 'react-icons/io5';
import { MdOutlineAttachEmail } from 'react-icons/md';
// import { FaMapLocationDot } from 'react-icons/fa6';
import nav_logo from '../img/logo/customerSupport.png';


function Header () {
return(
<>
<header className="bg-banner_1">
<div className="container pad-l-f">

<div className="d-flex justify-content-between align-items-center">

<div>
<Link to="/" className="header-font">
<div className="nav_line_logo">
<img src={nav_logo} className="nav_logo" alt="not-found" />
</div></Link>
</div>
<div className="col2">
<a href="tel:18005722686" className=" header-font_section2"><IoCall className="nav_icon"/>TOLL FREE : 1800 572 2686</a><br/>
<a href="mailto:info@customersupport24x7.in" className=" header-font_section2"><MdOutlineAttachEmail className="nav_icon"/>EMAIL US : info@customersupport24x7.in</a><br/>
</div>

</div>


</div>

</header>

<div className="mobile-header d-flex justify-content-start">
<Link to="/"><img src={nav_logo} className="nav_img" alt="navbar_image"/></Link>

</div>

<div className="contact_stk">
<p className="con_box margin-0 font-weight-500"><a href="tel:18005722686" className="text-dec-none">Call Now : 1800 572 2686 </a> </p>
</div>

</>

)

}

export default Header;
