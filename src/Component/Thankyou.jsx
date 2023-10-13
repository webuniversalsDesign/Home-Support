import React from 'react'
import {TiTickOutline} from 'react-icons/ti';
import { Link } from 'react-router-dom';
const Thankyou = () => {
  return (
    <>
     <div className='tnk-body'>
<div className='d-flex justify-content-center pb-4'>
<TiTickOutline className='tick-icon'/>
</div>

<p style={{textAlign:"center", fontWeight:"500"}}>Thank you so much for taking the time to fill out the form! We truly appreciate your 
interest in our services. Your inquiry is valuable to us,
and our team shall get back to you soon.</p>

<div className='d-flex justify-content-center pt-3'>
  <Link to="/" className='btn btn-danger'>Go Back</Link>
  
</div>
     </div>

    </>
  )
}

export default Thankyou;
