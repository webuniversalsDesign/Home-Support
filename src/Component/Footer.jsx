import React from "react";
import { Link } from "react-router-dom";


function Footer () {
    return(
<>
    
{/* DISCLAIMER SECTION START */}
<section className="bg-gray ">

<div className="container inner_padding add-padding">
<h3 className="color-blue text-center">DISCLAIMER</h3>

<p className="text-center margin-0">WE ARE AN INDEPENDENT SERVICE PROVIDER AND WE HAVE NO AUTHORIZATION FROM ANY COMPANY : AS “ANY HOME APPLIANCES AUTHORIZED CUSTOMER CARE”. WE DEAL WITH ALL APPLIANCES PRODUCTS ONLY AFTER THE STANDARD ONE YEAR WARRANTY,
</p>

</div>
</section>


{/* DISCLAIMER SECTION END */}

{/* FOOTER START */}

<h5 className="text-center margin-0 footer-bg">Copyright © 2023 Customer Supports 24 X 7 | <Link to="/Home/PrivacyPolicy" className="text-dec-none">Privacy Policy</Link></h5>
{/* FOOTER END */}
</>

    )
}

export default Footer;
