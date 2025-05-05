import React from 'react'
import { CiMobile1 } from "react-icons/ci";
import './Head.css'
const Head = () => {
  return (
    <div className='small'>
        <div className='sep'>
    <h5>Offers</h5>
    <h5>Fanbook</h5>
    <h5><CiMobile1/> Download</h5>
    <h5>Find a store near me</h5>
    </div>
     <div className='sep2'>
     <h5>contact us</h5>
     <h5>Track Order</h5>
     </div>
    </div>
  )
}

export default Head