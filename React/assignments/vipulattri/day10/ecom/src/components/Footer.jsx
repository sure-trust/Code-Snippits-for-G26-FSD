import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <img 
  style={{
    height: '50px', 
    width: '180px', 
    textAlign: 'left', 
    paddingTop: '10px', 
    marginLeft: '35px'
  }} 
  src='https://images.bewakoof.com/web/ic-desktop-bwkf-tribe-trademark-logo.svg' 
  alt='alteration'  
/>
    <h3 style={{color:'#FEBF00',marginLeft:'0',paddingLeft:'0',height:'50px',width:'250px'}}>CUSTOMER SERVICE</h3>
  <p style={{color:'white',marginLeft:'0',paddingLeft:'30px',height:'50px',width:'100px',fontSize:'12px'}}> Contact Us</p>
  <p style={{color:'white',marginLeft:'0',paddingLeft:'30px',height:'50px',width:'100px',fontSize:'12px'}}> Track Order</p>
  <p style={{color:'white',marginLeft:'0',paddingLeft:'30px',height:'50px',width:'100px',fontSize:'12px'}}> Return Order</p>
  <p style={{color:'white',marginLeft:'0',paddingLeft:'30px',height:'50px',width:'100px',fontSize:'12px'}}> Cancel Order</p>

    </div>
  )
}

export default Footer