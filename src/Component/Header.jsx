import React from "react";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from 'react-icons/io';
import nav_logo from '../img/logo/customerSupport.webp';


function Header () {
return(
<>
<nav className="nav-header">
<div  className="nav-logo-header">
  <Link to='/'><img src={nav_logo} alt='logo-not-found'/></Link>  
</div>

<div className="navbar-items">
    <ul className="nav-cover">
        <Link to="/" className="disable-link-decoration"><li className="nav-link-item">Home</li></Link>
        
        <Link className="disable-link-decoration"><li className="nav-link-item drop"><IoIosArrowDown className="drop-icon"/> Services
        <ul className="submenu">
        <Link to="/BoshRepairService" className="disable-link-decoration"><li className="submenu-items">Bosh Repair Service</li></Link>  
        <Link to="/IFBRepairService" className="disable-link-decoration"><li className="submenu-items">IFB Repair Service</li></Link>  
        <Link to="/LGRepairService" className="disable-link-decoration"><li className="submenu-items">LG Repair Service</li></Link>  
        <Link to="/SamsungRepairService" className="disable-link-decoration"><li className="submenu-items">Samsung Repair Service</li></Link>  
        <Link to="/SiemensRepairService" className="disable-link-decoration"><li className="submenu-items">Siemens Repair Service</li></Link>  
        <Link to="/WhirlpoolRepairService" className="disable-link-decoration"><li className="submenu-items">Whirlpool Repair Service</li></Link>  
        </ul>
        </li></Link>

        <Link to="/" className="disable-link-decoration"><li className="nav-link-item">Blogs</li></Link>
        
        <Link to="/" className="disable-link-decoration"><li className="nav-link-item">Contact us</li></Link>
    </ul>
</div>
</nav>

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
