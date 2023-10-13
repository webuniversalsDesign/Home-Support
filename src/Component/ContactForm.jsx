import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import coninfo from '../img/repaireServiceimg/contact.jpg';

function ContactForm(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_33d2bgh', 'template_t615vz7', form.current, '0qpfXzVciq8YilctV')
        .then((result) => {
            console.log(result.text);
            console.log("messsage sent successfully :)");
            alert("Thank for taking our service, We will get back to you Soon.")
        }, (error) => {
            console.log(error.text);
            console.log("messsage sent fail :(");

        });
    };

return(

    <>
{/* Contact-Form Start*/}

<div className="row pt-5 mt-5">
<div className="col-lg-6 col-md-12 col-sm-12">
<h2 className="color-blue"> Customer Support 24X7</h2>

<h5 className="">For any Kind of Appliances Repair and Service</h5>
<img src={coninfo} className="content_img3" alt="contact-img-not-found"/>

</div>

<div className="col-lg-6 col-md-12 col-sm-12">

<div className="card-body-mod">

<form ref={form} onSubmit={sendEmail}>

    <input type="text" className="form-control mt-2 mb-4 add-padding" placeholder="Name" name="user_name" autoComplete="name" required/>
    <input type="email" className="form-control mt-2 mb-4 add-padding" placeholder="Email" name="user_email" autoComplete="email" required/>
    <input type="number" className="form-control mt-2 mb-4 add-padding" placeholder="Phone Number" name="user_phoneno" autoComplete="number" required/>

    <select id="service" name="user_service" className="form-control mt-2 mb-4 add-padding" autoComplete="select" required>
    <option value="">Select Your Service</option>
    <option value="REFRIGERATOR">REGRIGERATOR  REPAIR & SERVICE</option>
    <option value="AC">AC REPAIR & SERVICE</option>
    <option value="TV">TV REPAIR & SERVICE</option>
    <option value="DISHWASHER">DISHWASHER REPAIR & SERVICE</option>
    <option value="Dryer">Dryer Service & Repair</option>
    <option value="Washing">Washing Machine Service & Repair</option>
    <option value="Washing">SMART,LED,LCD,TV REPAIR & SERVICE</option>
    <option value="Washing">WATER PURIFIER REPAIR & SERVICE</option>
    <option value="Washing">MICROWAVE OVEAN REPAIR & SERVICE</option>
  </select> 

    <input type="text" className="form-control mt-2 mb-4 add-padding" placeholder="Address" name='user_address' required/>

    <textarea row="30" col="50" placeholder="Message" className="form-control mt-2 mb-4" name='message' required></textarea>

    <div className="d-flex justify-content-center">

        <input type="submit" className="btn btn-primary width-contain" value="Submit"/>
    </div>
</form>

</div>


</div>


</div>
{/* Contact-Form End*/}
    </>
)

}

export default ContactForm;